import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-white flex items-center justify-center py-6">
      <div className="max-w-md mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-primary/80 mb-8">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-green-medium transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="inline-block bg-secondary text-primary px-8 py-3 rounded-lg font-medium hover:bg-beige-light transition-colors"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
