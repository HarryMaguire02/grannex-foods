'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  label: string;
  isContactButton?: boolean;
  onContactClick?: () => void;
}

export default function NavLink({ href, label, isContactButton, onContactClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (isContactButton && onContactClick) {
    return (
      <button
        onClick={onContactClick}
        className="font-bold text-sm leading-4 text-primary transition-colors hover:text-green-medium"
      >
        {label}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={`font-bold text-sm leading-4 text-primary transition-colors ${
        isActive
          ? 'border-b-2 border-primary pb-1'
          : 'hover:text-green-medium'
      }`}
    >
      {label}
    </Link>
  );
}
