import { Bell, MessageSquare, Menu, BriefcaseMedical } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <BriefcaseMedical size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-700">Bác sĩ Công nghệ</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Trang chủ</a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Marketplace</a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Chuyên gia</a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Hỗ trợ AI</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="/login" className="text-slate-600 hover:text-blue-600 transition-colors">Đăng nhập</a>
          <p>|</p>
          <a href="/register" className="text-slate-600 hover:text-blue-600 transition-colors">Đăng ký</a>
          {/* Có sao khi login thành công*/}
          {/* <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full relative">
            <MessageSquare size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full border border-white"></span>
          </button>
          
          <div className="w-8 h-8 rounded-full border border-slate-200 overflow-hidden cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div> */}
          <button className="md:hidden p-2 text-slate-600">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
