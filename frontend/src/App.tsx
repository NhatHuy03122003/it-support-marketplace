import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/Login/Login";
import RegistrationPage from "./pages/auth/Register/Register";
import CheckEmailPage from "./pages/auth/CheckEmail/CheckEmail";
import Layout from "./components/layout/AuthLayout";
import HomePage from "./pages/home/Home";
import { Toaster } from "sonner";
import ForgotPassword from "./pages/auth/ForgotPassword/ForgotPassword";
import ResetPasswordPage from "./pages/auth/ResetPassword/ResetPassword";

function App() {
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
      </Routes>
    </>
  );
}

export default App;
