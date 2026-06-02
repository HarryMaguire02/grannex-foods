import { Metadata } from "next";
import { notFound } from "next/navigation";
import productsData from "@/app/data/products.json";
import ProductHeroSection from "@/app/components/products/detail/ProductHeroSection";
import ProductVariantsSection from "@/app/components/products/detail/ProductVariantsSection";
import ProductFeaturesSection from "@/app/components/products/detail/ProductFeaturesSection";
import ProductApplicationsSection from "@/app/components/products/detail/ProductApplicationsSection";
import ProductNutritionSection from "@/app/components/products/detail/ProductNutritionSection";
import ProductPackagingSection from "@/app/components/products/detail/ProductPackagingSection";
import ProductCertificationsSection from "@/app/components/products/detail/ProductCertificationsSection";
import ProductOrderSection from "@/app/components/products/detail/ProductOrderSection";
import RelatedProductsSection from "@/app/components/products/detail/RelatedProductsSection";
import SectionDivider from "@/app/components/SectionDivider";

type Product = (typeof productsData)[number];

export function generateStaticParams() {
  return productsData.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug) as
    | Product
    | undefined;
  if (!product) return {};

  return {
    title: `${product.name} | GrannexFoods`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug) as
    | Product
    | undefined;

  if (!product) notFound();

  const hasVariants =
    "variants" in product &&
    Array.isArray(product.variants) &&
    product.variants.length > 0;
  const hasFeatures =
    "features" in product &&
    Array.isArray(product.features) &&
    product.features.length > 0;
  const hasApplications =
    "applications" in product &&
    Array.isArray(product.applications) &&
    product.applications.length > 0;
  const hasNutrition =
    "nutrition" in product &&
    Array.isArray(product.nutrition) &&
    product.nutrition.length > 0;
  const hasSpecifications =
    "specifications" in product &&
    Array.isArray(product.specifications) &&
    product.specifications.length > 0;
  const hasPackaging =
    "packaging" in product &&
    Array.isArray(product.packaging) &&
    product.packaging.length > 0;

  return (
    <>
      <ProductHeroSection product={product} />

      {hasVariants && (
        <ProductVariantsSection
          variants={
            (
              product as {
                variants: {
                  name: string;
                  image?: string;
                  badge?: string;
                  description: string;
                  oleic?: string;
                  linoleic?: string;
                  bestFor?: string;
                  smokePoint?: string;
                  shelfLife?: string;
                }[];
              }
            ).variants
          }
          productName={product.name}
        />
      )}

      {hasFeatures && (
        <ProductFeaturesSection
          features={
            (product as { features: { title: string; description: string }[] })
              .features
          }
        />
      )}

      {hasApplications && (
        <ProductApplicationsSection
          applications={
            (
              product as {
                applications: { title: string; description: string; image?: string }[];
              }
            ).applications
          }
        />
      )}

      {(hasNutrition || hasSpecifications) && (
        <ProductNutritionSection
          nutrition={
            hasNutrition
              ? (
                  product as {
                    nutrition: { nutrient: string; per100g: string }[];
                  }
                ).nutrition
              : []
          }
          specifications={
            hasSpecifications
              ? (
                  product as {
                    specifications: { label: string; value: string }[];
                  }
                ).specifications
              : []
          }
        />
      )}

      {hasPackaging && (
        <ProductPackagingSection
          packaging={
            (
              product as {
                packaging: {
                  format: string;
                  image?: string;
                  variants: {
                    size: string;
                    netWeight: string;
                    unitsPerCarton: string;
                    bestFor: string;
                    image?: string;
                  }[];
                }[];
              }
            ).packaging
          }
          shelfLife={"shelfLife" in product ? (product as { shelfLife: string }).shelfLife : undefined}
        />
      )}

      <ProductCertificationsSection />

      <SectionDivider />

      <ProductOrderSection productName={product.name} />

      <RelatedProductsSection
        currentSlug={product.slug}
        relatedSlugs={
          "relatedSlugs" in product
            ? (product as { relatedSlugs: string[] }).relatedSlugs
            : undefined
        }
        category={product.category}
      />
    </>
  );
}
