
export interface Conversation {
    _id: string;
    participants: UserSumary[];
    lastMessage: Message;
    updatedAt: string;
}


export interface Message {
    _id: string;
    conversationId: string;
    sender: UserSumary;
    recipient: UserSumary;
    isRead:boolean;
    content: string;
    createdAt: string;
}

export interface UserSumary {
    _id:string;
    fullname:string;
    email:string;
    role: "customer" | "expert" | "admin";
    status: "active" | "pending" | "banned";
}
