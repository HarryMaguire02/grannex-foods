import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  slug: string;
  name: string;
  image: string;
  description: string;
}

export default function ProductCard({ slug, name, image, description }: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group cursor-pointer max-w-60 md:max-w-72 mx-auto w-full overflow-hidden rounded-2xl flex flex-col bg-secondary h-80 md:h-96 shadow-sm"
    >
      {/* Image — shrinks relatively on hover */}
      <div className="relative w-full flex-1 transition-all duration-500 ease-in-out group-hover:flex-3">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Info panel — expands on hover */}
      <div className="p-3 flex flex-col flex-none transition-all duration-500 ease-in-out group-hover:flex-1">
        <h3 className="text-primary font-semibold text-sm leading-tight text-center group-hover:text-left transition-all duration-300">
          {name}
        </h3>

        {/* Description — visible only on hover */}
        <div className="overflow-hidden opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out">
          <p className="text-primary font-normal text-sm leading-4 line-clamp-3 mt-2">
            {description}
          </p>
          <span className="text-green-medium font-medium text-sm mt-1 inline-block">Read more</span>
        </div>
      </div>
    </Link>
  );
}
