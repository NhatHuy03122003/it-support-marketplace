import { AnimatePresence, motion } from "motion/react";
import type { ChatMessage, Conversation } from "../../../types/chatting";
import type { UserData } from "../model";
import moment from "moment";
import { CheckCircle2, ImageIcon, PlusCircle, Send } from "lucide-react";
import InputEmoji from "react-input-emoji";

interface ChatAreaProps {
  messages: ChatMessage[];
  inputValue: string;
  setInputValue: (v: string) => void;
  handleSendMessage: () => void;
  inputValueRef: React.RefObject<any>;
  focusChatInput: () => void;
  activeConv: Conversation;
  userData: UserData | null;
}

const ChatArea = ({
  messages,
  inputValue,
  setInputValue,
  handleSendMessage,
  inputValueRef,
  focusChatInput,
  activeConv,
  userData,
}: ChatAreaProps) => {
  const isMe = (senderId: string) => senderId === userData?.userId;

  return (
    <section className="flex-1 flex flex-col bg-white min-w-0">
      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6 bg-slate-50/50">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeConv._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {messages.map((msg: ChatMessage) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex items-end gap-3 max-w-[90%] lg:max-w-[80%] ${
                  isMe(msg.sender._id) ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`space-y-1 ${
                    isMe(msg.sender._id) ? "text-right" : ""
                  }`}
                >
                  <div
                    className={`p-4 text-sm leading-relaxed shadow-sm ${
                      isMe(msg.sender._id)
                        ? "bg-blue-600 text-white rounded-2xl rounded-br-none"
                        : "bg-white text-slate-800 rounded-2xl rounded-bl-none border border-slate-100"
                    }`}
                  >
                    {msg.content}
                  </div>
                  <div
                    className={`flex items-center gap-1 mt-1 ${
                      isMe(msg.sender._id) ? "justify-end" : ""
                    }`}
                  >
                    <span className="text-[10px] text-slate-400 font-medium">
                      {moment(msg.createdAt).calendar()}
                    </span>
                    {isMe(msg.sender._id) && (
                      <CheckCircle2 className="w-3 h-3 text-blue-600 fill-blue-600" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100 shrink-0">
        <div className="flex flex-wrap gap-2 mb-3">
          {["Gửi ảnh log", "Đặt lịch hẹn", "Cảm ơn bác sĩ"].map((btn) => (
            <button
              key={btn}
              className="px-3 py-1 bg-slate-100 hover:bg-blue-600/5 hover:text-blue-600 hover:border-blue-600/30 transition-all text-slate-500 text-[10px] font-bold rounded-full border border-slate-200"
            >
              "{btn}"
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 lg:gap-3">
          <button className="p-2 text-slate-400 hover:text-blue-600 transition-all active:scale-90">
            <PlusCircle className="w-6 h-6" />
          </button>
          <button className="p-2 text-slate-400 hover:text-blue-600 transition-all active:scale-90">
            <ImageIcon className="w-6 h-6" />
          </button>
          <div className="flex-1 relative">
            <InputEmoji
              value={inputValue}
              ref={inputValueRef}
              onChange={setInputValue}
              onEnter={handleSendMessage}
              placeholder="Type your message here..."
              shouldReturn
              cleanOnEnter
              onFocus={focusChatInput}
              shouldConvertEmojiToImage={false}
            />
          </div>
          <button
            onClick={handleSendMessage}
            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center active:scale-90 transition-all shadow-lg shadow-blue-600/20"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatArea;
