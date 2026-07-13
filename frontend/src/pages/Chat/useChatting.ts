import { useCallback, useEffect, useRef, useState } from "react";
import type {UserData } from "./model";
import { useChattingStore } from "../../stores/useChattingStore";
import { jwtDecode } from "jwt-decode";
import type { Conversation } from "../../types/chatting";

const useChatting = () => {
  const [activeConv, setActiveConv] = useState<Conversation>();
  const [inputValue, setInputValue] = useState("");
  const inputValueRef = useRef<HTMLInputElement>(null);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  // Lấy dữ liệu từ Zustand store
  const {
    conversations,
    messages,
    getConversations,
    getMessages,
    sendMessage,
  } = useChattingStore();

  // Tìm conversation hiện tại một cách an toàn
  const activeConversation =
    conversations.find((c) => c._id === activeConv?._id) || null;
  // Lấy UserData từ token
  const token = localStorage.getItem("token");
  const userData: UserData | null = token
    ? (jwtDecode(token) as UserData)
    : null;

  const getConversationsData = useCallback(async () => {
    const convs = await getConversations();
    if (convs.length === 0) return;
    setActiveConv(convs[0]);
  }, []);
  const getMessagesData = useCallback(async (convId: string) => {
  
    await getMessages(convId);
  }, []);
  // 2. useEffect chính điều khiển luồng khởi tạo dữ liệu
  useEffect(() => {
    getConversationsData();
  }, [conversations.length]);
  useEffect(()=>{
    if(activeConv){
      getMessagesData(activeConv._id);
    }
  },[activeConv,messages.length])
  const focusChatInput = () => {
    if (inputValueRef.current) {
      inputValueRef.current.focus();
    }
  };
  const handleSendMessage = async (repcidentId:string) => {
    if (!inputValue.trim() || !userData) return;
    await sendMessage(userData.userId, repcidentId, inputValue);
    setInputValue("");
  };

  const handleSelectConversation = (conv:Conversation) => {
    setActiveConv(conv);
    setShowMobileSidebar(false);
  };

  return {
    messages,
    userData,
    activeConversation, // Lúc này có thể là object hoặc null
    activeConv,
    inputValue,
    setInputValue,
    showMobileSidebar,
    setShowMobileSidebar,
    setActiveConv,
    conversations,
    handleSendMessage,
    handleSelectConversation,
    inputValueRef,
    focusChatInput,
  };
};

export default useChatting;
