import { ExpertCard } from "../ExpertCard/ExpertCard";

export function ExpertsSection() {
  const experts = [
    {
      name: "Trần Văn A",
      specialty: "Chuyên gia Phần cứng",
      rating: "4.9",
      completedCases: "1,200+ ca hoàn thành",
      responseTime: "Phản hồi < 5 phút",
      avatarColor: "3b82f6",
      badgeIcon: "ti-circle-check-filled"
    },
    {
      name: "Nguyễn Thị B",
      specialty: "Chuyên Mạng & Bảo mật",
      rating: "5.0",
      completedCases: "850+ ca hoàn thành",
      responseTime: "Phản hồi < 2 phút",
      avatarColor: "8b5cf6",
      badgeIcon: "ti-shield-check-filled"
    },
    {
      name: "Lê Hoàng C",
      specialty: "Chuyên gia Phục hồi Dữ liệu",
      rating: "4.8",
      completedCases: "2,100+ ca hoàn thành",
      responseTime: "Phản hồi < 15 phút",
      avatarColor: "ec4899",
      badgeIcon: "ti-circle-check-filled"
    },
    {
      name: "Phạm Văn D",
      specialty: "Kỹ thuật viên Đa năng",
      rating: "4.9",
      completedCases: "950+ ca hoàn thành",
      responseTime: "Phản hồi < 5 phút",
      avatarColor: "f59e0b",
      badgeIcon: "ti-award-filled"
    }
  ];

  return (
    <section>
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Chuyên gia tiêu biểu
        </h2>
        <p className="text-sm text-gray-500">
          Đội ngũ kỹ thuật viên được xác thực, giàu kinh nghiệm, sẵn sàng
          hỗ trợ bạn ngay lập tức.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {experts.map((expert, index) => (
          <ExpertCard
            key={index}
            name={expert.name}
            specialty={expert.specialty}
            rating={expert.rating}
            completedCases={expert.completedCases}
            responseTime={expert.responseTime}
            avatarColor={expert.avatarColor}
            badgeIcon={expert.badgeIcon}
          />
        ))}
      </div>
    </section>
  );
}
