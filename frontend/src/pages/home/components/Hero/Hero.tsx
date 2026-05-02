import { motion } from "motion/react";
import { Search, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-4 overflow-hidden flex flex-col items-center text-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-blue-100/30 blur-[100px] -z-10 rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-white shadow-sm mb-8"
      >
        <Sparkles size={14} className="text-blue-600 fill-blue-600" />
        <span className="text-xs font-semibold text-slate-600">Hệ thống chuẩn đoán AI đã sẵn sàng</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-slate-900 max-w-4xl tracking-tight mb-8 leading-tight"
      >
        Khám bệnh máy tính ngay với <span className="text-gradient">Trợ lý AI</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-slate-500 max-w-2xl mb-12"
      >
        Nhanh chóng, chính xác và bảo mật. Nhập triệu chứng thiết bị của bạn để AI phân tích và kết nối với chuyên gia phù hợp nhất trong mạng lưới.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-3xl relative mb-20"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative bg-white rounded-full shadow-xl border border-slate-200 p-2 flex items-center">
          <Search className="ml-4 text-slate-400" size={20} />
          <input 
            type="text" 
            className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 py-3 px-2 outline-none text-sm md:text-base"
            placeholder="Ví dụ: Máy tính bật không lên màn hình, kêu tít tít..."
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 font-semibold text-sm transition-all shadow-md active:scale-95 whitespace-nowrap">
            Chuẩn đoán ngay
          </button>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-24">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-600">10k+</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Lỗi đã xử lý</span>
        </div>
        <div className="hidden md:block w-px h-12 bg-slate-200" />
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-600">500+</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Chuyên gia Online</span>
        </div>
        <div className="hidden md:block w-px h-12 bg-slate-200" />
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-600">4.9/5</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Đánh giá</span>
        </div>
      </div>
    </section>
  );
}
