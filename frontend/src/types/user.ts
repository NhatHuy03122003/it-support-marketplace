export interface User {
    id: string;
    username: string;
    displayName: string;

    email: string;
    phone?: string;

    avatarUrl?: string;
    bio?: string;

    role: "customer" | "expert" | "admin";
    status: "active" | "pending" | "banned";

    createdAt?: string;
    updatedAt?: string;
}