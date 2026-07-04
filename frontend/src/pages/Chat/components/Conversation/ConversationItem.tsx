import type { Conversation } from '../../../../types/chatting'
import type { UserData } from '../../../../types/user'
import { formatDatetoTextFromNow } from '../../../../utils/date'

type ConversationItemProps = {
  conversation: Conversation,
  handleSelectConversation: (conversation:Conversation) => void,
  activeConversation: Conversation,
  userData:UserData
}

const ConversationItem = (props: ConversationItemProps) => {
  const { conversation, handleSelectConversation, activeConversation, userData } = props;
  
  //Get user other
  const infoUserOther = conversation.participants.filter(item=> item._id!=userData.userId)[0];
  
  return (
    <div
      key={conversation._id}
      onClick={()=>handleSelectConversation(conversation)}
      className={`p-4 flex gap-3 cursor-pointer hover:bg-slate-50 transition-colors border-l-4 ${conversation._id===activeConversation._id
        ? "border-blue-600 bg-blue-600/5"
        : "border-transparent"
        }`}
    >
      
      <div className="relative shrink-0">
        <img
          src="https://jbagy.me/wp-content/uploads/2025/03/Hinh-anh-avatar-dragon-ball-super-cool-ngau-5.jpg"
          className="w-12 h-12 rounded-full object-cover"
        />
        {infoUserOther.status === "active" && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <span className="font-bold text-sm text-slate-900 truncate">
            {infoUserOther && infoUserOther.fullname}
          </span>
          <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
            {formatDatetoTextFromNow(conversation.lastMessage.createdAt)}
          </span>
        </div>
        <p
          className={`text-xs truncate ${conversation.lastMessage.isRead
            ? "text-blue-600 font-semibold"
            : "text-slate-500"
            }`}
        >
          {conversation.lastMessage.content}
        </p>
      </div>
    </div>
  )
}

export default ConversationItem;