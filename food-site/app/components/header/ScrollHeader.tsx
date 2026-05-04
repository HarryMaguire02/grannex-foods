'use client';

import { useEffect, useState } from 'react';
import Header from './Header';

export default function ScrollHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      <Header />
    </div>
  );
}
