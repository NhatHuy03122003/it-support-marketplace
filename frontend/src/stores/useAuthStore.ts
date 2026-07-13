import { create } from "zustand";
import { toast } from "sonner";
import { authServices } from "../services/authServices";
import type { AuthState } from "../types/store";
import { create } from "zustand";
import { toast } from "sonner";
import { authServices } from "../services/authServices";
import type { AuthState } from "../types/store";
import axios from "axios";

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  user: null,
  loading: false,
import { jwtDecode } from "jwt-decode";
import type { User, UserData } from "../types/user";
import { persist } from "zustand/middleware";
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      user: null,
      loading: false,

  clearState: () => {
    set({ accessToken: null, user: null, loading: false });
    localStorage.removeItem("token");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("googleUser");
    localStorage.removeItem("firebaseUser");
    localStorage.removeItem("verifyEmail");
    localStorage.removeItem("resetEmail");
  },
      clearState: () => {
        set({ accessToken: null, user: null, loading: false });
        localStorage.removeItem("token");
      },

  signUp: async (fullname, password, email, phone, role) => {
    try {
      await authServices.signUp(fullname, password, email, phone, role);
      set({ loading: true });
      toast.success(
        "Đăng ký thành công!Bạn sẽ được chuyển sang trang đăng nhập.",
      );
    } catch (error) {
      console.error("Registration error:", error);
      signUp: async (fullname, password, email, phone, role) => {
        try {
          await authServices.signUp(fullname, password, email, phone, role);
          set({ loading: true });
          toast.success(
            "Đăng ký thành công!Bạn sẽ được chuyển sang trang đăng nhập.",
          );
        } catch (error) {
          console.error("Registration error:", error);

      let errorMessage = "Đăng ký thất bại. Vui lòng thử lại.";
          let errorMessage = "Đăng ký thất bại. Vui lòng thử lại.";

      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          const message = error.response.data?.message;
          if (axios.isAxiosError(error)) {
            if (error.response?.status === 409) {
              const message = error.response.data?.message;

          if (message?.includes("Email already exists")) {
            errorMessage = "Email này đã được đăng ký.";
          } else if (message?.includes("Phone already exists")) {
            errorMessage = "SĐT đã được đăng ký.";
          }
        }
      }
      toast.error(errorMessage);
      throw error; // Re-throw the error so the form knows it failed
    } finally {
      set({ loading: false });
    }
  },
              if (message?.includes("Email already exists")) {
                errorMessage = "Email này đã được đăng ký.";
              } else if (message?.includes("Phone already exists")) {
                errorMessage = "SĐT đã được đăng ký.";
              }
            }
          }
          toast.error(errorMessage);
          throw error; // Re-throw the error so the form knows it failed
        } finally {
          set({ loading: false });
        }
      },

  signIn: async (email, password, rememberMe) => {
    try {
      set({ loading: true });
      signIn: async (email, password, rememberMe) => {
        try {
          set({ loading: true });

      const { accessToken } = await authServices.signIn(
        email,
        password,
        rememberMe,
      );
      set({ accessToken });
      if (rememberMe) {
        localStorage.setItem("token", accessToken);
      }
      toast.success("Đăng nhập thành công!");
    } catch (error) {
      console.log(error);
      toast.error(
        "Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.",
      );
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  logOut: async () => {
    try {
      get().clearState();
      await authServices.signOut();
      toast.success("Đăng xuất thành công!");
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Đăng xuất thất bại. Vui lòng thử lại.");
      throw error;
    }
  },

  sendOtp: async (email: string) => {
    try {
      set({ loading: true });

      await authServices.sendOtp(email);
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  verifyOtp: async (email: string, otp: string) => {
    try {
      set({ loading: true });

      await authServices.verifyOtp(email, otp);

      toast.success("Xác thực OTP thành công!");

      return true;
    } catch (error) {
      console.log(error);
      toast.error("OTP không hợp lệ hoặc đã hết hạn");
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  resetPassword: async (email, otp, newPassword) => {
    try {
      set({ loading: true });

      await authServices.resetPassword(email, otp, newPassword);

      toast.success("Đổi mật khẩu thành công!");
      return true;
    } catch (error) {
      toast.error("Đổi mật khẩu thất bại");
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));

          const { accessToken } = await authServices.signIn(
            email,
            password,
            rememberMe,
          );
          set({ accessToken });
          set({ user: jwtDecode(accessToken) as UserData });

          if (rememberMe) {
            localStorage.setItem("token", accessToken);
          }
          toast.success("Đăng nhập thành công!");
        } catch (error) {
          console.log(error);
          toast.error(
            "Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.",
          );
          throw error;
        } finally {
          set({ loading: false });
        }
      },
      signOut: async () => {
        try {
          get().clearState();
          await authServices.signOut();
          toast.success("Đăng xuất thành công!");
        } catch (error) {
          console.error("Sign out error:", error);
          toast.error("Đăng xuất thất bại. Vui lòng thử lại.");
          throw error;
        }
      },
    }),
    {
      name: "auth-storage", // key trong localStorage
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user,
      }),
    },
  ),
);
