
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price: string;
  isPopular?: boolean;
}

export function ServiceCard({ icon, title, description, price, isPopular = false }: ServiceCardProps) {
  return (
    <article className="relative p-6 bg-white rounded-xl border border-solid transition-all ease-in-out cursor-pointer duration-200 hover:shadow-lg">
      {isPopular && (
        <div className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white uppercase bg-blue-600 rounded">
          Phổ biến
        </div>
      )}
      <div className="flex justify-center items-center mb-4 w-12 h-12 bg-blue-50 rounded-lg">
        <i className={`ti ${icon} text-2xl text-blue-600`} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-5 text-gray-500">
        {description}
      </p>
      <div className="mb-2 text-sm font-medium text-blue-600">
        {price}
      </div>
      <i className="ti ti-arrow-right text-xl text-gray-400" />
    </article>
  );
}
