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