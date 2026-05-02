import { motion } from "motion/react";
import { ArrowRight, Cpu, Network, Database } from "lucide-react";

const services = [
  {
    title: "Sửa phần cứng",
    description:
      "Khắc phục các lỗi linh kiện, nâng cấp RAM, ổ cứng, thay màn hình, pin cho Laptop và PC.",
    price: "Từ 150.000đ",
    icon: Cpu,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Mạng & Máy văn phòng",
    description:
      "Thiết lập mạng LAN/Wifi, sửa máy in, máy fax, cấu hình server văn phòng.",
    price: "Từ 200.000đ",
    icon: Network,
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
    badge: "Phổ biến",
  },
  {
    title: "Phần mềm & Dữ liệu",
    description:
      "Cài đặt hệ điều hành, phần mềm đồ họa, khôi phục dữ liệu bị mất, diệt virus chuyên sâu.",
    price: "Từ 100.000đ",
    icon: Database,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export function Services() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Dịch vụ nổi bật
          </h2>
          <p className="text-slate-500">
            Giải pháp toàn diện cho mọi vấn đề kỹ thuật của bạn.
          </p>
        </div>
        <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition-colors text-sm">
          Xem tất cả <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 transition-all cursor-pointer"
          >
            {service.badge && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                {service.badge}
              </div>
            )}
            <div
              className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              <service.icon className={service.iconColor} size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {service.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
              {service.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                {service.price}
              </span>
              <ArrowRight
                className="text-slate-200 group-hover:text-blue-600 transition-all translate-x-0 group-hover:translate-x-1"
                size={20}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
