import moment from "moment";
import { CONVERSATIONS } from "../constants";
import { ChevronLeft } from "lucide-react";
import type { Conversation } from "../../../types/chatting";

interface ConversationListProps {
  conversations: Conversation[];
  activeConv?: Conversation;
  handleSelectConversation: () => void;
  showMobileSidebar: boolean;
  setShowMobileSidebar: (v: boolean) => void;
}

const ConversationList = ({
  conversations,
  activeConv,
  handleSelectConversation,
  showMobileSidebar,
  setShowMobileSidebar,
}: ConversationListProps) => (
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
        {["All", "Unread"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              tab === "All"
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
      {conversations.map((conv) => (
        <div
          key={conv._id}
          onClick={handleSelectConversation}
          className={`p-4 flex gap-3 cursor-pointer hover:bg-slate-50 transition-colors border-l-4 ${
            activeConv!._id === conv._id
              ? "border-blue-600 bg-blue-600/5"
              : "border-transparent"
          }`}
        >
          <div className="relative shrink-0">
            <img
              src={CONVERSATIONS[0].expert.avatar}
              className="w-12 h-12 rounded-full object-cover"
            />
            {conv.participants[1]._id === "online" && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-sm text-slate-900 truncate">
                {conv.participants[1]?.fullname}
              </span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                {moment(conv.lastMessage.createdAt).fromNow()}
              </span>
            </div>
            <p
              className={`text-xs truncate ${
                CONVERSATIONS[0].unread
                  ? "text-blue-600 font-semibold"
                  : "text-slate-500"
              }`}
            >
              {conv.lastMessage.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  </aside>
);

export default ConversationList;
