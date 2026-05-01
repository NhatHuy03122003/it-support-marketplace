"use client";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { StatsSection } from "./components/StatsSection/StatsSection";
import { ServicesSection } from "./components/ServiceSection/ServiceSection";
import { ExpertsSection } from "./components/ExpertsSection/ExpertsSection";
import { Footer } from "./components/Footer/Footer";

function HomePage() {
  return (
    <body className="bg-background-neutral font-body-md text-on-surface min-h-screen flex flex-col antialiased">
<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
<div className="flex justify-between items-center px-6 h-16 max-w-7xl mx-auto">
<div className="text-xl font-bold tracking-tight text-blue-600">Bác sĩ Công nghệ</div>
<div className="hidden md:flex gap-6 items-center">
<a className="text-blue-600 font-semibold" href="#">Đăng ký</a>
<a className="text-slate-600 hover:text-blue-500 transition-colors" href="#">Help</a>
</div>
</div>
</header>
<main className="flex-grow flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
<div className="w-full max-w-4xl grid md:grid-cols-2 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
<div className="relative hidden md:block">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A professional healthcare environment with a focus on modern technology. A sleek, white medical workspace features a high-definition tablet displaying a blue medical interface with data visualizations. The lighting is soft and clinical, using a palette of sterile whites and calming tech-blues. The atmosphere is professional, reliable, and intelligently designed to evoke a clinic of trust for the digital age." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMrk-TNTSolIQLfMJsRmjQeN41zfLvcoqelHrZFAbac8PNJVakevavPNtoSkged7o8ZnEWetVzvdHAwX7crfZstdU9Mi9h6koQybUu7CMACuT5xyqWxzEO7C_6LyxoMYnr4XStIc-NVjOmEJijpQKeQ6lvGM5GkcIDozWRmdfn8dqvdeDo2Uy69tuUp_nl-QFJGVuJzmNMz9y5bGqKA1M_p97K29YAr_urlwd2WOILsRvA2GcYV2iqHdxV39VE_OyQwzpYYTug8P4"/>
<div className="absolute inset-0 bg-primary/20 backdrop-brightness-75 flex flex-col justify-end p-12 text-white">
<h2 className="font-h1 text-h1 mb-4">Chào mừng bạn đến với Clinic of Trust</h2>
<p className="font-body-lg text-body-lg opacity-90">Nền tảng kết nối chuyên gia công nghệ và khách hàng thông minh.</p>
</div>
</div>
<div className="p-8 md:p-12">
<div className="mb-8 text-center md:text-left">
<h1 className="font-h1 text-h1 text-primary mb-2">Tạo tài khoản</h1>
<p className="font-body-md text-on-surface-variant">Bắt đầu hành trình của bạn ngay hôm nay</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer">
<input checked className="peer hidden" name="role" type="radio" value="client"/>
<div className="flex flex-col items-center p-4 border-2 rounded-xl border-outline-variant peer-checked:border-primary peer-checked:bg-primary-fixed/30 hover:bg-slate-50 transition-all">
<span className="material-symbols-outlined text-3xl mb-2 text-on-surface-variant peer-checked:text-primary" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Khách hàng</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="role" type="radio" value="expert"/>
<div className="flex flex-col items-center p-4 border-2 rounded-xl border-outline-variant peer-checked:border-primary peer-checked:bg-primary-fixed/30 hover:bg-slate-50 transition-all">
<span className="material-symbols-outlined text-3xl mb-2 text-on-surface-variant peer-checked:text-primary" data-icon="medical_services">medical_services</span>
<span className="font-label-sm text-label-sm">Chuyên gia</span>
</div>
</label>
</div>
<div className="space-y-4">
<div>
<label className="block font-label-sm text-label-sm mb-2 text-on-surface-variant">Họ và tên</label>
<input className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-surface-bright" placeholder="Nguyễn Văn A" type="text"/>
</div>
<div>
<label className="block font-label-sm text-label-sm mb-2 text-on-surface-variant">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-surface-bright" placeholder="example@clinic.com" type="email"/>
</div>
<div>
<label className="block font-label-sm text-label-sm mb-2 text-on-surface-variant">Số điện thoại</label>
<input className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-surface-bright" placeholder="090 123 4567" type="tel"/>
</div>
<div>
<label className="block font-label-sm text-label-sm mb-2 text-on-surface-variant">Mật khẩu</label>
<div className="relative">
<input className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-surface-bright" placeholder="••••••••" type="password"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" type="button">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</div>
</div>
</div>
<div className="flex items-start gap-3">
<input className="mt-1 w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" id="terms" type="checkbox"/>
<label className="font-body-md text-sm text-on-surface-variant" form="terms">
                            Tôi đồng ý với <a className="text-primary hover:underline" href="#">Điều khoản và Điều kiện</a> sử dụng dịch vụ.
                        </label>
</div>
<button className="w-full py-4 bg-primary text-white font-bold rounded-full hover:shadow-lg active:scale-95 transition-all duration-200 uppercase tracking-wide" type="submit">
                        Đăng ký
                    </button>
<p className="text-center font-body-md text-slate-500">
                        Đã có tài khoản? <a className="text-primary font-semibold hover:underline" href="#">Đăng nhập</a>
</p>
</form>
</div>
</div>
</main>
<footer className="w-full py-8 mt-auto border-t border-slate-200 bg-slate-50">
<div className="flex flex-col md:flex-row justify-between items-center px-6 gap-4 max-w-7xl mx-auto font-inter text-sm text-slate-500">
<div>© 2024 Bác sĩ Công nghệ. Clinic of Trust.</div>
<div className="flex gap-6">
<a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-blue-600 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-blue-600 transition-colors" href="#">Contact Support</a>
</div>
</div>
</footer>
</body>
  );
}

export default HomePage;
