import useChatting from "./useChatting";
import { Header } from "../../components/layout/Header";
import ConversationList from "./components/ConversationList";
import ChatArea from "./components/ChatArea";

export default function Chat() {
  const {
    userData,
    handleSendMessage,
    activeConv,
    inputValue,
    setInputValue,
    showMobileSidebar,
    setShowMobileSidebar,
    conversations,
    handleSelectConversation,
    messages,
    inputValueRef,
    focusChatInput,
  } = useChatting();

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 pt-16">
      <Header onOpenChat={() => setShowMobileSidebar(true)} />

      <main className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar */}
        <ConversationList
          conversations={conversations}
          activeConv={activeConv}
          showMobileSidebar={showMobileSidebar}
          handleSelectConversation={() => handleSelectConversation(activeConv!)}
          setShowMobileSidebar={setShowMobileSidebar}
        />

        {/* Chat Area */}
        {activeConv ? (
          <ChatArea
            messages={messages}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSendMessage={() =>
              handleSendMessage(activeConv.participants[1]._id)
            }
            inputValueRef={inputValueRef}
            focusChatInput={focusChatInput}
            activeConv={activeConv}
            userData={userData}
          />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <span className="text-sm text-slate-400">
              Select a conversation to start chatting
            </span>
          </div>
        )}
      </main>
    </div>
  );
}
