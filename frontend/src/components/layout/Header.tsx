import { Menu, BriefcaseMedical } from "lucide-react";
import {
  Bell,
  MessageSquare,
  Menu,
  BriefcaseMedical,
  ArrowRight,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/useAuthStore";
import { toast } from "sonner";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

export function Header() {
  const { logOut } = useAuthStore();
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useChattingStore } from "../../stores/useChattingStore";
import type { Conversation } from "../../types/chatting";

const ComponentRightBeforeLogin = () => (
  <>
    <a
      href="/login"
      className="text-slate-600 hover:text-blue-600 transition-colors"
    >
      Đăng nhập
    </a>
    <p>|</p>
    <a
      href="/register"
      className="text-slate-600 hover:text-blue-600 transition-colors"
    >
      Đăng ký
    </a>
  </>
);

export function Header({ onOpenChat }: { onOpenChat: () => void }) {
  const { signOut } = useAuthStore();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { conversations, joinConversation } = useChattingStore();
  const { user } = useAuthStore();
  const infoUserOther = (conversation: Conversation) => (conversation.participants.filter(item => item._id != user?.userId)[0]);
  const onClickSeeAllChats = () => {
    setIsChatOpen(false);
    navigate("/chat");
    onOpenChat();
  };
  const handleLogout = async () => {
    try {
      await logOut();
      await signOut(auth)
      navigate("/login");
      toast.success("Đăng xuất thành công!");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const onClickConversation = (conversation:Conversation)=>{
    joinConversation(conversation._id);
    navigate('/chat');
  }
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <BriefcaseMedical size={24} fill="currentColor" />
          </div>
          <span onClick={() => navigate("/")} className="text-xl font-bold tracking-tight text-blue-700 cursor-pointer">
            Bác sĩ Công nghệ
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
          >
            Trang chủ
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Chuyên gia
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Hỗ trợ AI
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {!token ? (
            <ComponentRightBeforeLogin />
          ) : (
            //Có sao khi login thành công
            <div className="flex items-center space-x-5 relative">
              <button className="text-slate-600 hover:text-blue-600 transition-colors">
                <Bell size={20} />
              </button>

              <div className="relative group">
                <button
                  onClick={() => setIsChatOpen(!isChatOpen)}
                  className={`relative p-1 rounded-md transition-colors ${isChatOpen ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-600"}`}
                >
                  <MessageSquare
                    size={20}
                    fill={isChatOpen ? "currentColor" : "none"}
                  />
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
                </button>

                <AnimatePresence>
                  {isChatOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-12 w-80 md:w-96 bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden"
                    >
                      <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
                        <h3 className="font-semibold text-slate-800">
                          Hội thoại gần đây
                        </h3>
                        <Settings
                          size={18}
                          className="text-slate-400 cursor-pointer"
                        />
                      </div>

                      <div className="max-h-[420px] overflow-y-auto bg-white/50">
                        {conversations ? conversations.map((conv) => (
                          <div
                            key={conv._id}
                            onClick={()=>onClickConversation(conv)}
                            className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors cursor-pointer group"
                          >
                            <div className="relative flex-shrink-0">
                              <img
                                src="https://jbagy.me/wp-content/uploads/2025/03/Hinh-anh-avatar-dragon-ball-super-cool-ngau-5.jpg"
                                alt={infoUserOther(conv).fullname}
                                className="w-12 h-12 rounded-full object-cover border border-slate-100"
                              />
                              <div
                                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${infoUserOther(conv).status === "active" ? "bg-green-500" : "bg-slate-300"}`}
                              ></div>
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                              <div className="flex justify-between items-baseline">
                                <h4 className="font-semibold text-sm text-slate-800 truncate">
                                  {infoUserOther(conv).fullname}
                                </h4>
                                <span className="text-[10px] text-slate-400 font-medium">
                                  {conv.updatedAt}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 truncate mt-0.5">
                                {conv.lastMessage.content}
                              </p>
                            </div>
                          </div>
                        )) : <span className="text-sm text-slate-400">
                          Không có cuộc hội thoại nào gần đây
                        </span>}
                      </div>

                      <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-center">
                        <button
                          onClick={onClickSeeAllChats}
                          className="text-blue-600 font-semibold text-xs hover:text-blue-700 transition-colors inline-flex items-center gap-2"
                        >
                          Xem tất cả hội thoại
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a
                id="nav-register"
                href="/login"
                className="text-slate-600 hover:text-[#0050cb] transition-color"
                onClick={handleLogout}
              >
                Đăng xuất
              </a>
              {/* <div className="w-8 h-8 rounded-full border border-slate-200 overflow-hidden cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div> */}
              <button className="md:hidden p-2 text-slate-600">
                <Menu size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
