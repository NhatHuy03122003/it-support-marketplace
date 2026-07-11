import api from "../lib/axios";

export const authServices = {
    signUp: async (
        fullname: string,
        password: string,
        email: string,
        phone: string,
        role: string
    ) => {
        const response = await api.post(
            "/auth/signup",
            { fullname, password, email, phone, role },
            { withCredentials: true }
        );
        return response.data;
    },

    signIn: async (email: string, password: string, rememberMe: boolean) => {
        const response = await api.post(
            "/auth/signin",
            { email, password, rememberMe },
            { withCredentials: true }
        );
        return response.data;
    },

    signOut: async () => {
        await api.post("/auth/signout", {}, { withCredentials: true });
    },

    SignInWithGoogle: async (token: string) => {
        const response = await api.post(
            "/auth/google",
            null,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            }
        );
        return response.data;
    },

    sendOtp: async (email: string) => {
        const response = await api.post(
            "/auth/send-otp",
            { email },
            { withCredentials: true }
        );

        return response.data;
    },

    verifyOtp: async (email: string, otp: string) => {
        const response = await api.post(
            "/auth/verify-otp",
            { email, otp },
            { withCredentials: true }
        );

        return response.data;
    },

    resetPassword: async (
        email: string,
        otp: string,
        newPassword: string
    ) => {
        const response = await api.post(
            "/auth/reset-password",
            {
                email,
                otp,
                password: newPassword,
            },
            { withCredentials: true }
        );

        return response.data;
    },


}