import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/Login/Login";
import RegistrationPage from "./pages/auth/Register/Register";
import Layout from "./components/layout/AuthLayout";
import HomePage from "./pages/home/Home";
import { Toaster } from "sonner";

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
      </Routes>
    </>
  );
}

export default App;
