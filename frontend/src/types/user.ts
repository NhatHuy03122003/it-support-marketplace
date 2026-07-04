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

//get info user from token
export interface UserData{
    userId:string;
    fullname:string;
    role: "customer" | "expert" | "admin";
    status: "active" | "pending" | "banned";
}