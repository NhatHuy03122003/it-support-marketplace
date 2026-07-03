import { ChevronLeft } from "lucide-react";
import type { Conversation } from "../../../../types/chatting";
import ConversationItem from "./ConversationItem";
import type { UserData } from "../../../../types/user";

interface ConversationListProps {
  conversations: Conversation[];
  activeConv: Conversation;
  handleSelectConversation: ()=>void;
  showMobileSidebar: boolean;
  setShowMobileSidebar: (v: boolean) => void;
  userData:UserData
}

const ConversationList = (props: ConversationListProps) => {
  const { conversations,
    activeConv,
    handleSelectConversation,
    showMobileSidebar,
    setShowMobileSidebar,
    userData
  } = props;

  return (
    <aside
      className={`
      fixed inset-0 z-20 bg-white transform transition-transform duration-300
      md:relative md:translate-x-0 md:z-auto
      w-full md:w-80 lg:w-96 border-r border-slate-200 flex flex-col
      ${showMobileSidebar ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <div className="p-4 border-b border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
          <button
            className="md:hidden"
            onClick={() => setShowMobileSidebar(false)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="flex gap-2 pb-2 overflow-x-auto hide-scrollbar">
          {["Tất cả", "Chưa đọc"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${tab === "All"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.length != 0 ?
          conversations.map((conv) => (
            <ConversationItem
              key={conv._id}
              conversation={conv}
              handleSelectConversation={handleSelectConversation}
              activeConversation={activeConv}
              userData={userData}
            />
          )) : <div className="flex-1 flex flex-col items-center justify-content-center gap-4">
            <span className="text-sm text-slate-400">
              Không có cuộc hội thoại nào
            </span>
          </div>}
      </div>
    </aside>
  );
}
  ;

export default ConversationList;
