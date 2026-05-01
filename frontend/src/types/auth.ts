/**
 * Authentication-related types and interfaces
 */

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
