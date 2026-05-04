import NavLink from './NavLink';

interface NavLink {
  href: string;
  label: string;
  isContactButton?: boolean;
}

interface NavigationProps {
  navLinks: NavLink[];
  onContactClick: () => void;
}

export default function Navigation({ navLinks, onContactClick }: NavigationProps) {
  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          isContactButton={link.isContactButton}
          onContactClick={onContactClick}
        />
      ))}
    </nav>
  );
}
