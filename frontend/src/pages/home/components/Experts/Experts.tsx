import { motion } from "motion/react";
import { Star, CheckCircle, Clock } from "lucide-react";

const experts = [
  {
    name: "Trần Văn A",
    specialty: "Chuyên gia Phần cứng",
    rating: "4.9",
    completions: "1,200+",
    responseTime: "< 5 phút",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop",
    verified: true
  },
  {
    name: "Nguyễn Thị B",
    specialty: "Kỹ sư Mạng & Bảo mật",
    rating: "5.0",
    completions: "850+",
    responseTime: "< 2 phút",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    verified: true
  },
  {
    name: "Lê Hoàng C",
    specialty: "Chuyên gia Phục hồi Dữ liệu",
    rating: "4.8",
    completions: "2,100+",
    responseTime: "< 15 phút",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    verified: true,
    offline: true
  },
  {
    name: "Phạm Văn D",
    specialty: "Kỹ thuật viên Đa năng",
    rating: "4.9",
    completions: "950+",
    responseTime: "< 5 phút",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    verified: true
  }
];

export function Experts() {
  return (
    <section className="py-20 px-4 bg-white/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Chuyên gia tiêu biểu</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Đội ngũ kỹ thuật viên được xác thực, giàu kinh nghiệm, sẵn sàng hỗ trợ bạn ngay lập tức.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all text-left group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="relative">
                  <img 
                    src={expert.avatar} 
                    alt={expert.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md grayscale-[0.2] group-hover:grayscale-0 transition-all"
                  />
                  <div className={`absolute bottom-0 right-0 w-4 h-4 border-2 border-white rounded-full ${expert.offline ? 'bg-slate-300' : 'bg-green-500'}`} />
                </div>
                <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded text-xs font-bold text-slate-700">
                  <Star size={12} className="text-amber-500 fill-amber-500" />
                  {expert.rating}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-1 mb-1">
                  <h4 className="font-bold text-slate-900">{expert.name}</h4>
                  {expert.verified && <CheckCircle size={14} className="text-blue-500 fill-blue-500/10" />}
                </div>
                <p className="text-xs text-slate-400 font-medium">{expert.specialty}</p>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-[13px] text-slate-500">
                  <CheckCircle size={14} className="text-slate-300" />
                  <span>{expert.completions} ca hoàn thành</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-slate-500">
                  <Clock size={14} className="text-slate-300" />
                  <span>Phản hồi {expert.responseTime}</span>
                </div>
              </div>

              <button className="w-full py-2.5 rounded-xl border border-blue-600 text-blue-600 font-bold text-xs hover:bg-blue-600 hover:text-white transition-all active:scale-[0.98]">
                Đặt lịch ngay
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
