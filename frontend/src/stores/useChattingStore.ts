import { create } from "zustand";
import type { ChatState } from "../types/store";
import { toast } from "sonner";
import chattingServices from "../services/chattingServices";

export const useChattingStore = create<ChatState>((set, get) => ({
  conversations: [],
  currentConversation: null,
  messages: [],
  loadingConversations: false,
  loadingMessages: false,
  error: null,
  getConversations: async () => {
    try {
      set({ loadingConversations: true });
      const conversations = await chattingServices.getConversations();
      set({ conversations });
      return conversations;
    } catch (error) {
      console.error("Error fetching conversations:", error);
      toast.error("Không thể tải danh sách cuộc trò chuyện.");
      set({ error: "Failed to load conversations." });
    } finally {
      set({ loadingConversations: false });
    }
  },
  getMessages: async (conversationId) => {
    try {
      set({ loadingMessages: true });
      const messages = await chattingServices.getMessages(conversationId);
      set({
        messages,
        currentConversation:
          get().conversations.find((c) => c._id === conversationId) || null,
      });
      return messages;
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Không thể tải lịch sử trò chuyện.");
      set({ error: "Failed to load messages." });
    } finally {
      set({ loadingMessages: false });
    }
  },
  sendMessage: async (senderId, recipientId, content) => {
    try {
      const newMessage = await chattingServices.sendMessage(
        senderId,
        recipientId,
        content,
      );
      set((state) => ({ messages: [...state.messages, newMessage] }));
      set({currentConversation:{...newMessage}})
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Không thể gửi tin nhắn.");
      set({ error: "Failed to send message." });
    }
  },
}));
