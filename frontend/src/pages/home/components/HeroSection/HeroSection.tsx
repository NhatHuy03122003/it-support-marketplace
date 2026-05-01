"use client";

export function HeroSection() {
  return (
    <section className="px-6 py-12 mx-auto max-w-[1200px]">
      <div className="flex gap-2 justify-center items-center mb-6">
        <i className="ti ti-sparkles text-base text-gray-500" />
        <p className="text-sm text-gray-500">
          Hệ thống chuẩn đoán AI đã sẵn sàng
        </p>
      </div>
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 max-sm:text-3xl">
          Khám bệnh máy tính ngay với
          <span className="text-blue-600 block">Trợ lý AI</span>
        </h2>
        <p className="mx-auto text-base leading-6 text-gray-500 max-w-[600px]">
          Nhanh chóng, chính xác và bảo mật. Nhập triệu chứng thiết bị của
          bạn để AI phân tích và kết nối với chuyên gia phù hợp nhất trong
          mạng lưới.
        </p>
      </div>
      <div className="mx-auto mb-12 max-w-[700px]">
        <div className="flex relative gap-3 items-center p-2 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <i className="ti ti-search ml-3 text-xl text-gray-400" />
          <input
            type="text"
            placeholder="Ví dụ: Máy tính bật không lên màn hình, kêu tít tít..."
            className="flex-1 text-sm text-gray-900 bg-transparent border-none outline-none"
          />
          <button className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg cursor-pointer border-none">
            Chuẩn đoán ngay
          </button>
        </div>
      </div>
    </section>
  );
}
