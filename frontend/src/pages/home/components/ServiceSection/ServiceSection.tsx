import { ServiceCard } from "../ServiceCard/ServiceCard";

export function ServicesSection() {
  const services = [
    {
      icon: "ti-tool",
      title: "Sửa phần cứng",
      description: "Khắc phục các lỗi linh kiện, nâng cấp RAM, ổ cứng, thay màn hình, pin cho...",
      price: "Từ 150.000đ"
    },
    {
      icon: "ti-devices",
      title: "Mạng & Máy văn phòng",
      description: "Thiết lập mạng LAN/Wifi, sửa máy in, máy fax, cấu hình server văn phòng.",
      price: "Từ 200.000đ",
      isPopular: true
    },
    {
      icon: "ti-database",
      title: "Phần mềm & Dữ liệu",
      description: "Cài đặt hệ điều hành, phần mềm đồ họa, khôi phục dữ liệu bị mất, diệt virus...",
      price: "Từ 100.000đ"
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Dịch vụ nổi bật
          </h2>
          <p className="text-sm text-gray-500">
            Giải pháp toàn diện cho mọi vấn đề kỹ thuật của bạn.
          </p>
        </div>
        <a href="#" className="flex gap-1 items-center text-sm font-medium text-blue-600 cursor-pointer">
          Xem tất cả
          <i className="ti ti-arrow-right text-base" />
        </a>
      </div>
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            price={service.price}
            isPopular={service.isPopular}
          />
        ))}
      </div>
    </section>
  );
}
