import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/Login/Login";
import RegistrationPage from "./pages/auth/Register/Register";
import CheckEmailPage from "./pages/auth/CheckEmail/CheckEmail";
import Layout from "./components/layout/AuthLayout";
import HomePage from "./pages/home/Home";
import { Toaster } from "sonner";
import ForgotPassword from "./pages/auth/ForgotPassword/ForgotPassword";
import ResetPasswordPage from "./pages/auth/ResetPassword/ResetPassword";
import Chat from "./pages/Chat";
import { useChattingStore } from "./stores/useChattingStore";
import { useAuthStore } from "./stores/useAuthStore";
import { useCallback, useEffect } from "react";

function App() {
  const {connectSocket,disconnectSocket,getConversations} = useChattingStore();
  const {user} = useAuthStore(); 
  //Check user online
  const getConversationsData = useCallback(async () => {
      if (user) await getConversations(user?.userId);
    }, []);
  useEffect(() => {
  if (user) {
    connectSocket(user.userId);
    getConversationsData();
  }
  return () => {
    disconnectSocket();
  };
}, [user?.userId]);
  return (
    <>
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Layout children={<LoginPage />} />} />
        <Route
          path="/register"
          element={<Layout children={<RegistrationPage />} />}
        />
        <Route
          path="/check-email"
          element={<Layout children={<CheckEmailPage />} />}
        />

        <Route
          path="/forgot-password"
          element={<Layout children={<ForgotPassword />} />}
        />

        <Route
          path="/reset-password"
          element={<Layout children={<ResetPasswordPage />} />}
        />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </>
  );
}

export default App;
