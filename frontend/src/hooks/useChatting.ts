import { useCallback, useEffect, useRef, useState } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { useChattingStore } from "../stores/useChattingStore";
import type { Conversation } from "../types/chatting";


const useChatting = () => {
  const [inputValue, setInputValue] = useState("");
  const inputValueRef = useRef<HTMLInputElement>(null);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const { user } = useAuthStore();
  // Lấy dữ liệu từ Zustand store
  const {
    conversations,
    messages,
    getConversations,
    getMessages,
    sendMessage,
    currentConversation,
    joinConversation
  } = useChattingStore();

  const infoUserOther = currentConversation?.participants.filter(
    (item) => item._id != user?.userId,
  )[0];
  const getConversationsData = useCallback(async () => {
    if (user) await getConversations(user?.userId);
  }, []);
  const getMessagesData = useCallback(async (convId: string) => {
    await getMessages(convId);
  }, []);
  // 2. useEffect chính điều khiển luồng khởi tạo dữ liệu
  useEffect(() => {
    if (!currentConversation) getConversationsData();
    else {
      getMessagesData(currentConversation._id);
    }
  }, [conversations.length, currentConversation, messages.length]);
 
  useEffect(() => {
  if (currentConversation) {
    joinConversation(currentConversation._id);
  }
}, [currentConversation?._id]);

  const focusChatInput = () => {
    if (inputValueRef.current) {
      inputValueRef.current.focus();
    }
  };
  const handleSendMessage = async (repcidentId: string) => {
    if (!inputValue.trim() || !user) return;
    await sendMessage(user.userId, repcidentId, inputValue);
    setInputValue("");
  };

  const handleSelectConversation = (conv: Conversation) => {
    joinConversation(conv._id);
    setShowMobileSidebar(false);
  };

  return {
    messages,
    user,
    currentConversation, // Lúc này có thể là object hoặc null
    inputValue,
    setInputValue,
    showMobileSidebar,
    setShowMobileSidebar,
    conversations,
    handleSendMessage,
    handleSelectConversation,
    inputValueRef,
    focusChatInput,
    infoUserOther,
  };
};

export default useChatting;
