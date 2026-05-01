
export function Footer() {
  return (
    <footer className="mt-16 bg-gray-900">
      <div className="px-6 py-8 mx-auto max-w-[1200px]">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:items-start">
          <div>
            <h2 className="mb-1 text-base font-semibold text-white">
              TechSupport
            </h2>
            <p className="text-xs text-gray-400">
              © 2024 TechSupport. Clinic of Trust.
            </p>
          </div>
          <nav className="flex gap-6 items-center max-sm:flex-wrap">
            <a href="#" className="text-sm text-gray-400 cursor-pointer hover:text-white">
              Điều khoản
            </a>
            <a href="#" className="text-sm text-gray-400 cursor-pointer hover:text-white">
              Bảo mật
            </a>
            <a href="#" className="text-sm text-gray-400 cursor-pointer hover:text-white">
              Liên hệ
            </a>
            <a href="#" className="text-sm text-gray-400 cursor-pointer hover:text-white">
              Câu hỏi thường gặp
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
