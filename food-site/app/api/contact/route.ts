import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';

const MAX_REQUESTS = 3;
const TIME_WINDOW = 60 * 60;

async function checkRateLimit(ip: string): Promise<boolean> {
  const redis = Redis.fromEnv();
  const key = `rate-limit:${ip}`;
  try {
    const requests = await redis.incr(key);
    if (requests === 1) {
      await redis.expire(key, TIME_WINDOW);
    }
    return requests <= MAX_REQUESTS;
  } catch (error) {
    console.error('Rate limit check failed:', error);
    return true;
  }
}

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { companyName, contactName, email, phone, product, quantity, deliveryDate, deliveryAddress, notes } = body;

    if (!companyName || !contactName || !email || !phone) {
      return NextResponse.json(
        { error: 'Company name, contact name, email, and phone are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (phone.length < 8 || phone.length > 20) {
      return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 });
    }

    if (notes && notes.length > 1000) {
      return NextResponse.json({ error: 'Notes must be less than 1000 characters.' }, { status: 400 });
    }

    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const rateLimitOk = await checkRateLimit(ip);
    if (!rateLimitOk) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in an hour.' },
        { status: 429 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grannexfoods.com';

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@grannexfoods.com',
      to: process.env.CONTACT_EMAIL || 'info@grannexfoods.com',
      subject: `New Order Request from ${companyName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Order Request</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">

                  <!-- Logo Header -->
                  <tr>
                    <td style="background-color: #ffffff; padding: 30px 40px; text-align: center; border-bottom: 3px solid #315748;">
                      <img src="${siteUrl}/grannexFoodsLogo.svg" alt="GrannexFoods" style="max-width: 200px; height: auto;" />
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px;">

                      <h2 style="color: #315748; margin: 0 0 30px 0; font-size: 24px; font-weight: bold;">
                        New Order Request
                      </h2>

                      <!-- Contact Details -->
                      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 0 0 20px 0; border-left: 4px solid #315748;">
                        <h3 style="color: #315748; margin: 0 0 15px 0; font-size: 18px;">Contact Details</h3>
                        <p style="margin: 8px 0; color: #333; line-height: 1.6;"><strong style="color: #315748;">Company:</strong> ${companyName}</p>
                        <p style="margin: 8px 0; color: #333; line-height: 1.6;"><strong style="color: #315748;">Contact:</strong> ${contactName}</p>
                        <p style="margin: 8px 0; color: #333; line-height: 1.6;"><strong style="color: #315748;">Email:</strong> <a href="mailto:${email}" style="color: #315748;">${email}</a></p>
                        <p style="margin: 8px 0; color: #333; line-height: 1.6;"><strong style="color: #315748;">Phone:</strong> ${phone}</p>
                      </div>

                      <!-- Order Details -->
                      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 0 0 20px 0; border-left: 4px solid #315748;">
                        <h3 style="color: #315748; margin: 0 0 15px 0; font-size: 18px;">Order Details</h3>
                        ${product ? `<p style="margin: 8px 0; color: #333; line-height: 1.6;"><strong style="color: #315748;">Product:</strong> ${product}</p>` : '<p style="margin: 8px 0; color: #999; font-style: italic;">No product specified.</p>'}
                        ${quantity ? `<p style="margin: 8px 0; color: #333; line-height: 1.6;"><strong style="color: #315748;">Quantity:</strong> ${quantity}</p>` : ''}
                        ${deliveryDate ? `<p style="margin: 8px 0; color: #333; line-height: 1.6;"><strong style="color: #315748;">Preferred Delivery Date:</strong> ${deliveryDate}</p>` : ''}
                        ${deliveryAddress ? `<p style="margin: 8px 0; color: #333; line-height: 1.6;"><strong style="color: #315748;">Delivery Address:</strong> ${deliveryAddress}</p>` : ''}
                      </div>

                      ${notes ? `
                        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 0 0 20px 0; border-left: 4px solid #315748;">
                          <h3 style="color: #315748; margin: 0 0 15px 0; font-size: 18px;">Additional Notes</h3>
                          <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${notes}</p>
                        </div>
                      ` : ''}

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9f9f9; padding: 20px 40px; text-align: center; border-top: 1px solid #e0e0e0;">
                      <p style="margin: 0; color: #666; font-size: 12px;">This email was sent from the GrannexFoods order form.</p>
                      <p style="margin: 10px 0 0 0; color: #999; font-size: 11px;">© ${new Date().getFullYear()} GrannexFoods. All rights reserved.</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Order request sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again later.' }, { status: 500 });
  }
}
