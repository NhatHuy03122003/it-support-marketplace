import GOOGLE from "../../../assets/google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import { toast } from "sonner";
import { authServices } from "../../../services/authServices";
import { useNavigate } from "react-router-dom";

export const SignInWithGoogle = () => {
    const navigate = useNavigate();
    const googleLogin = async () => {
        try {
        const provider = new GoogleAuthProvider();

        // 🔥 login Firebase
        const result = await signInWithPopup(auth, provider);

        // 🔥 get tokens
        const token = await result.user.getIdToken();

        // 🔥 call backend
        const data = await authServices.SignInWithGoogle(token);

        console.log("Backend:", data);

        // 🔥 Save
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));

        toast.success("Đăng nhập google  thành công!", {
            position: "top-right",
        });

        navigate("/");

    } catch (error) {
        console.error(error);
        toast.error("Đăng nhập thất bại");
    }
    };
    return (
        <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors active:scale-95 duration-200 group" onClick={googleLogin}>
                <img
                    src={GOOGLE}
                    alt="Google"
                    className="w-5 h-5 object-contain"
                    referrerPolicy="no-referrer"
                />
                <span className="text-[13px] font-bold text-black group-hover:text-primary transition-colors">
                    Google
                </span>
            </button>
        </div>
    )
};