export interface User {
    _id: string;

    fullname: string;

    email: string;

    phone?: string;

    avatarUrl?: string;
    avatarId?: string;

    bio?: string;

    role: "customer" | "expert" | "admin";

    status: "active" | "pending" | "banned";

    isVerified: boolean;

    otp?: string;
    otpExpires?: string;

    createdAt?: string;
    updatedAt?: string;
}