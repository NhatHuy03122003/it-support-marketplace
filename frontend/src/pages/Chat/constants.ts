import { type Expert, type Conversation, type Message } from './model';

export const MOCK_EXPERT: Expert = {
  id: 'dr_minh',
  name: 'Dr. Minh Nguyễn',
  role: 'Senior Cloud Architect',
  specialty: 'Cloud Infrastructure Specialist',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop',
  status: 'online',
  rating: 4.9,
  resolved: '1.2k+',
  expertiseLevel: 95,
  specialties: ['Cloud Ops', 'Data Security', 'Linux Kernel'],
  nextAvailable: 'Today, 2:00 PM',
};

export const CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    expert: MOCK_EXPERT,
    lastMessage: "I've analyzed your system logs...",
    timestamp: 'Just now',
    unread: true,
  },
  {
    id: '2',
    expert: {
      ...MOCK_EXPERT,
      id: 'thao',
      name: 'Phan Thu Thảo',
      role: 'Hardware Specialist',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    },
    lastMessage: 'Your hardware replacement ticket is being processed.',
    timestamp: '2h ago',
  },
];

export const MOCK_MESSAGES_DR_MINH: Message[] = [
  {
    id: 'm1',
    senderId: 'dr_minh',
    text: 'Chào bạn! Tôi đã xem qua báo cáo lỗi mà bạn gửi. Có vẻ như vấn đề nằm ở cấu hình kernel của hệ thống. Bạn có thể gửi cho tôi ảnh chụp màn hình terminal khi chạy lệnh này không?',
    timestamp: '10:45 AM',
    type: 'text',
    isMe: false,
  },
  {
    id: 'm2',
    senderId: 'dr_minh',
    text: 'sudo dmesg | grep -i error',
    timestamp: '10:45 AM',
    type: 'code',
    isMe: false,
  },
  {
    id: 'm3',
    senderId: 'user',
    text: 'Chào Dr. Minh, vâng đây là ảnh chụp màn hình và log tôi vừa copy được.',
    timestamp: '10:48 AM',
    type: 'text',
    isMe: true,
  },
  {
    id: 'm4',
    senderId: 'user',
    content: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop',
    timestamp: '10:48 AM',
    type: 'image',
    isMe: true,
  },
  {
    id: 'm5',
    senderId: 'ai',
    text: 'Detecting hardware-level memory corruption. Suggested fix: Check RAM seating or BIOS update.',
    timestamp: '10:49 AM',
    type: 'ai-insight',
    isMe: false,
  },
];

export const MOCK_MESSAGES_THAO: Message[] = [
  {
    id: 't1',
    senderId: 'thao',
    text: 'Chào bạn, tôi là Thảo từ bộ phận phần cứng. Tôi đã nhận được yêu cầu thay thế linh kiện của bạn.',
    timestamp: '09:00 AM',
    type: 'text',
    isMe: false,
  },
  {
    id: 't2',
    senderId: 'user',
    text: 'Vâng, khi nào thì linh kiện về ạ?',
    timestamp: '09:05 AM',
    type: 'text',
    isMe: true,
  },
  {
    id: 't3',
    senderId: 'thao',
    text: 'Dự kiến là chiều nay sẽ có nhân viên kỹ thuật qua lắp đặt cho bạn nhé.',
    timestamp: '09:10 AM',
    type: 'text',
    isMe: false,
  },
];

export const MESSAGES_MAP: Record<string, Message[]> = {
  '1': MOCK_MESSAGES_DR_MINH,
  '2': MOCK_MESSAGES_THAO,
};
