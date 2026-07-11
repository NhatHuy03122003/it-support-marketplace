import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
        },
        hashedPassword: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        role: {
            type: String,
            enum: ["customer", "expert", "admin"],
            default: "customer",
            required: true
        },

        status: {
            type: String,
            enum: ["active", "pending", "banned"],
            default: "active"
        },
        avatarUrl: {
            type: String, // Link CND to display the image
        },
        avatarId: {
            type: String, // Cloudinary public_id to manage the image
        },
        bio: {
            type: String,
            maxlength: 500,
        },
        phone: {
            type: String,
            sparse: true
        },
        otp: {
            type: String,
            default: null
        },
        otpExpires: {
            type: Date,
            default: null
        },
        isVerified: {
            type: Boolean,
            default: false,
        }

    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;