import type { $ZodString } from "zod/v4/core";

export interface Conversation {
    _id: string;
    participants: UserSummary[];
    lastMessage: MessageSummary;
    updatedAt: string;
}

export interface UserSummary {
    _id: string;
    fullname: string;
    avatarUrl?: string;
}

export interface MessageSummary {
    id: string;
    senderId: string;
    content: string;
    createdAt: string;
}

export interface ChatMessage {
    id: string;
    conversationId: string;
    sender: UserSummary;
    recipient: UserSummary;
    content: string;
    createdAt: string;
}