
interface ExpertCardProps {
  name: string;
  specialty: string;
  rating: string;
  completedCases: string;
  responseTime: string;
  avatarColor: string;
  badgeIcon: string;
}

export function ExpertCard({
  name,
  specialty,
  rating,
  completedCases,
  responseTime,
  avatarColor,
  badgeIcon
}: ExpertCardProps) {
  return (
    <article className="p-6 bg-white rounded-xl border border-solid">
      <div className="flex gap-3 items-start mb-4">
        <div className="relative">
          <img
            src={`https://placehold.co/56x56/${avatarColor}/${avatarColor}`}
            alt={`${name} profile`}
            className="w-[56px] h-[56px] rounded-full"
          />
          <div className="absolute right-0 bottom-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
        </div>
        <div className="flex-1">
          <div className="flex gap-1 items-center mb-1">
            <h3 className="text-base font-semibold text-gray-900">
              {name}
            </h3>
            <i className={`ti ${badgeIcon} text-base text-blue-600`} />
          </div>
          <p className="mb-1 text-xs text-gray-500">
            {specialty}
          </p>
          <div className="flex gap-1 items-center">
            <i className="ti ti-star-filled text-sm text-amber-400" />
            <span className="text-sm font-semibold text-gray-900">
              {rating}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-1 items-center mb-2 text-xs text-gray-500">
        <i className="ti ti-circle-check text-sm" />
        {completedCases}
      </div>
      <div className="flex gap-1 items-center mb-4 text-xs text-gray-500">
        <i className="ti ti-clock text-sm" />
        {responseTime}
      </div>
      <button className="px-4 py-2.5 w-full text-sm font-medium text-blue-600 bg-white rounded-lg border border-blue-600 border-solid transition-all ease-in-out cursor-pointer duration-200 hover:bg-blue-50">
        Đặt lịch ngay
      </button>
    </article>
  );
}
