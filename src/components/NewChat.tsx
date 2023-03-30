import { PlusIcon } from "@heroicons/react/24/outline";

// a method to fetch all the chats from the database

   


export default function NewChat() {
  return (
    <div className="chatRow">
        <PlusIcon className="h-8 w-8 text-white"/>
        <p>New Chat</p>
    </div>
  )
}
