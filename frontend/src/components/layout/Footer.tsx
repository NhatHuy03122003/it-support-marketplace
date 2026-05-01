import React from 'react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex justify-between items-center px-10 py-8 text-xs text-gray-400 max-sm:flex-col max-sm:gap-4 max-sm:px-5">
      <p>© 2024 TECHSUPPORT MARKETPLACE. SECURE INFRASTRUCTURE.</p>
      <nav className="flex gap-6 items-center max-sm:flex-wrap max-sm:justify-center">
        <a href="#" className="cursor-pointer">TERMS</a>
        <a href="#" className="cursor-pointer">PRIVACY</a>
        <a href="#" className="cursor-pointer">STATUS</a>
        <a href="#" className="cursor-pointer">SUPPORT</a>
      </nav>
    </footer>
  );
};
