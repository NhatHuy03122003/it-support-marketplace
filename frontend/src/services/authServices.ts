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
}