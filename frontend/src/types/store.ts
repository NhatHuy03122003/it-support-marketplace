
import type { Conversation, Message } from "./chatting";
import type { UserData } from "./user";

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
    user: UserData | null;
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
    logOut: () => Promise<void>;

    sendOtp: (email: string) => Promise<boolean>;

    verifyOtp: (
        email: string,
        otp: string
    ) => Promise<boolean>;

    resetPassword: (
        email: string,
        otp: string,
        newPassword: string
    ) => Promise<boolean>;


}

export interface ChatState {
    conversations: Conversation[];
    currentConversation: Conversation | null;
    messages: Message[];
    loadingConversations: boolean;
    loadingMessages: boolean;
    error: string | null;
    getConversations: (userId:string) => Promise<Conversation[]>;
    getMessages: (conversationId: string) => Promise<Message[]>;
    sendMessage: (senderId:string,recipientId:string, content: string) => Promise<void>;
    connectSocket: (userId:string)=>void;
    disconnectSocket: ()=>void;
    joinConversation: (convId:string)=>void;
    addMessage: (msg: Message) => void;
}