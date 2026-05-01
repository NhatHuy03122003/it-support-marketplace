// src/components/Layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div id="layout-root" className="h-screen flex flex-col overflow-hidden bg-[#F8FAFC]">
      <header id="app-header" className="flex-none z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div id="header-container" className="flex justify-between items-center px-6 h-16 max-w-7xl mx-auto">
          <div id="logo" className="text-xl font-extrabold tracking-tight text-[#0050cb]">
            Bác sĩ Công nghệ
          </div>
          <nav id="header-nav" className="hidden md:flex gap-6 items-center">
            <a id="nav-register" href="/login" className="text-slate-600 hover:text-[#0050cb] transition-color">
              Đăng nhập
            </a>
            <p>|</p>
            <a id="nav-register" href="/register" className="text-slate-600 hover:text-[#0050cb] transition-color">
              Đăng ký
            </a>
            <a id="nav-help" href="#" className="text-slate-600 hover:text-[#0050cb] transition-colors">
              Help
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content" className="flex-grow flex items-center justify-center p-4 overflow-hidden">
        {children}
      </main>

      <footer id="app-footer" className="flex-none py-4 border-t border-slate-200 bg-slate-50">
        <div id="footer-container" className="flex flex-col md:flex-row justify-between items-center px-6 gap-4 max-w-7xl mx-auto text-xs text-slate-500">
          <div id="copyright">
            © 2024 Bác sĩ Công nghệ. Clinic of Trust.
          </div>
          <div id="footer-links" className="flex gap-6">
            <a id="link-privacy" href="#" className="hover:text-[#0050cb] transition-colors">Privacy Policy</a>
            <a id="link-terms" href="#" className="hover:text-[#0050cb] transition-colors">Terms of Service</a>
            <a id="link-support" href="#" className="hover:text-[#0050cb] transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}