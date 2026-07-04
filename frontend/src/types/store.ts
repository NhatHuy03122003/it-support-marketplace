import type { Message } from "../pages/Chat/model";
import type { ChatMessage, Conversation } from "./chatting";
import type { User } from "./user";

export interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface LoginFormErrors {
    email?: string;
    password?: string;
}

export interface AuthContextType {
    isLoading: boolean;
    error: string | null;
    login: (credentials: LoginFormData) => Promise<void>;
}

export interface AuthState {
    accessToken: string | null;
    user: User | null;
    loading: boolean;

    clearState: () => void;

    signUp: (
        fullname: string,
        password: string,
        email: string,
        phone: string,
        role: "customer" | "expert"
    ) => Promise<void>;

    signIn: (email: string, password: string, rememberMe: boolean) => Promise<void>;
    signOut: () => Promise<void>;
}

export interface ChatState {
    conversations: Conversation[];
    currentConversation: Conversation | null;
    messages: ChatMessage[];
    loadingConversations: boolean;
    loadingMessages: boolean;
    error: string | null;

    getConversations: () => Promise<Conversation[]>;
    getMessages: (conversationId: string) => Promise<ChatMessage[]>;
    sendMessage: (senderId:string,recipientId:string, content: string) => Promise<void>;
}

