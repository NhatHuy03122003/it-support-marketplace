import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        hashedPassword: {
            type: String,
            required: true,
        },
        displayName: {
            type: String,
            required: true,
            trim: true,
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

    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;