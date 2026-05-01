import React, { useState } from "react";
import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { FormField } from "./components/FormField";
import { UserTypeSelector } from "./components/UserTypeSelector";
import useRegister from "../../../hooks/useRegister";

interface RegistrationPageProps { }

const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  const { agreedToTerms, setAgreedToTerms } = useRegister();
  const SocialLoginButtons = () => (
    <>
      <div className="flex gap-4 items-center mb-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400 uppercase">Or login with</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <div className="flex gap-4 mb-6 max-sm:flex-col">
        <button className="flex flex-1 gap-2 justify-center items-center py-3 rounded-lg border border-gray-300 transition-all ease-in-out cursor-pointer duration">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg class="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>',
            }}
          />
          <span className="text-sm font-medium text-gray-900">Google</span>
        </button>
      </div>
    </>
  );
  const RegistrationForm = () => (
    <main className="flex justify-center items-start px-5 py-16 max-sm:py-10">
      <div className="p-12 w-full bg-white rounded-xl shadow max-w-[735px] max-sm:p-6">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 max-sm:text-2xl">
            Create Account
          </h1>
          <p className="text-sm text-gray-500">
            Join the high-precision IT marketplace.
          </p>
        </header>

        <UserTypeSelector />

        <form>
          <FormField
            label="Full Name"
            type="text"
            placeholder="John Doe"
            icon="id"
          />

          <FormField
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            icon="mail"
          />

          <FormField
            label="Password"
            type="password"
            placeholder="••••••••"
            icon="lock"
          />

          <FormField
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            icon="shield-lock"
          />

          <div className="flex gap-2 items-center mb-6">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="w-4 h-4 rounded border border-gray-300 cursor-pointer accent-[[#0066FF]]"
            />
            <p className="text-sm text-gray-500">
              I agree to the{" "}
              <a href="#" className="text-blue-600 cursor-pointer">
                Terms of Service
              </a>
            </p>
          </div>

          <button
            type="submit"
            className="py-3 mb-6 w-full text-sm font-semibold text-center text-white bg-blue-600 rounded-lg transition-all ease-in-out cursor-pointer duration"
          >
            Create Account
          </button>
        </form>

        <SocialLoginButtons />

        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="#" className="font-medium text-blue-600 cursor-pointer">
            Login
          </a>
        </p>
      </div>
    </main>
  );
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <div className="bg-slate-50 min-h-[screen]">
        <Header />
        <RegistrationForm />
        <Footer />
      </div>
    </>
  );
};

export default RegistrationPage;
