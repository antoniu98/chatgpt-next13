import NewChat from "./NewChat";

export default function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen bg-gray-900 overflow-y-scroll
    max-w-xs md:min-w-[20rem]">
        <div className="flex-1">
            {/*  NewChat */}
            <NewChat />

            {/* Model selection */}

            {/* Chat Lists */}
        </div>
    </div>
  )
}
