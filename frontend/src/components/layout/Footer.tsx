export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-lg font-bold text-slate-900 mb-2">Bác sĩ Công nghệ</div>
          <p className="text-xs text-slate-400">© 2024 Bác sĩ Công nghệ. Clinic of Trust. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-xs font-semibold text-slate-500">
          <a href="#" className="hover:text-blue-600 transition-colors">Điều khoản</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Bảo mật</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Liên hệ</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Câu hỏi thường gặp</a>
        </div>
      </div>
    </footer>
  );
}
