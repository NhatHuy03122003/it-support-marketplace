
export function StatsSection() {
  return (
    <section className="flex gap-12 justify-center items-center mb-16 max-sm:flex-col max-sm:gap-6">
      <div className="text-center">
        <div className="mb-1 text-3xl font-bold text-blue-600">10k+</div>
        <div className="text-xs font-medium tracking-wide text-gray-500 uppercase">
          LỜI ĐÃ XỬ LÝ
        </div>
      </div>
      <div className="w-px h-12 bg-gray-200 max-sm:hidden" />
      <div className="text-center">
        <div className="mb-1 text-3xl font-bold text-blue-600">500+</div>
        <div className="text-xs font-medium tracking-wide text-gray-500 uppercase">
          CHUYÊN GIA ONLINE
        </div>
      </div>
      <div className="w-px h-12 bg-gray-200 max-sm:hidden" />
      <div className="text-center">
        <div className="mb-1 text-3xl font-bold text-blue-600">4.9/5</div>
        <div className="text-xs font-medium tracking-wide text-gray-500 uppercase">
          ĐÁNH GIÁ
        </div>
      </div>
    </section>
  );
}
