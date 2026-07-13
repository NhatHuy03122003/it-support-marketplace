
import { Header } from "../../components/layout/Header";
import ConversationList from "./components/Conversation/ConversationList";
import ChatArea from "./components/ChatArea/ChatArea";
import useChatting from "../../hooks/useChatting";

export default function Chat() {
  const {
    user,
    handleSendMessage,
    currentConversation,
    inputValue,
    setInputValue,
    showMobileSidebar,
    setShowMobileSidebar,
    conversations,
    handleSelectConversation,
    messages,
    inputValueRef,
    focusChatInput,
    infoUserOther
  } = useChatting();

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 pt-16">
      <Header onOpenChat={() => setShowMobileSidebar(true)} />

      <main className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar */}
        <ConversationList
          conversations={conversations}
          activeConv={currentConversation!}
          userData={user!}
          showMobileSidebar={showMobileSidebar}
          handleSelectConversation={()=>{handleSelectConversation}}
          setShowMobileSidebar={setShowMobileSidebar}
        />

        {/* Chat Area */}
        {currentConversation ? (
          <ChatArea
            messages={messages}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSendMessage={() =>
              handleSendMessage(infoUserOther!._id)
            }
            inputValueRef={inputValueRef}
            focusChatInput={focusChatInput}
            activeConv={currentConversation}
            userData={user}
          />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <span className="text-sm text-slate-400">
              Hãy tạo một cuộc hội thoại để bắt đầu trao đổi
            </span>
          </div>
        )}
      </main>
    </div>
  );
}
