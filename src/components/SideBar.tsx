'use client'

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

export default function SideBar() {
  const {data: session} = useSession();

  return (
    <div className="p-2 flex flex-col h-screen bg-gray-900 overflow-y-scroll
    max-w-xs md:min-w-[20rem]">
        <div className="flex-1">
            {/*  NewChat */}
            <NewChat />

            {/* Model selection */}

            {/* Chat Lists */}
        </div>

        {/* SideBar FOOTER */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          onClick={() => signOut()}
          src={session?.user?.image!}
          alt="Profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hove:opacity-50"/>
    </div>
  )
}
