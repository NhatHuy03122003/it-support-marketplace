
export interface Expert {
  id: string;
  name: string;
  role: string;
  specialty: string;
  avatar: string;
  status: 'online' | 'offline';
  rating: number;
  resolved: string;
  expertiseLevel: number; // 0 to 100
  specialties: string[];
  nextAvailable: string;
}

export interface Message {
  id: string;
  senderId: string;
  text?: string;
  timestamp: string;
  type: 'text' | 'code' | 'image' | 'ai-insight';
  content?: any;
  isMe: boolean;
}

export interface Conversation {
  id: string;
  expert: Expert;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
}

export interface UserData {
  userId:string;
  fullname:string;
  role:string;
  status:string;
}