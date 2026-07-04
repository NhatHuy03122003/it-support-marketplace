import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/Login/Login";
import RegistrationPage from "./pages/auth/Register/Register";
import Layout from "./components/layout/AuthLayout";
import HomePage from "./pages/home/Home";
import { Toaster } from "sonner";
import Chat from "./pages/Chat";

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
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </>
  );
}

export default App;
