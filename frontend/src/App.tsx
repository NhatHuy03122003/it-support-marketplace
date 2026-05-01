import { LoginForm } from "./pages/auth/Login/LoginForm"
import RegistrationPage from "./pages/auth/Register/Register"
import Layout from "./pages/auth/Register/components/Layout/Layout";
import HomePage from "./pages/home/Home";

function App() {
  return (
    <>
      <Layout>
      <RegistrationPage />
    </Layout>
      <LoginForm />
    </>
  )
    
  );
}

export default App;
