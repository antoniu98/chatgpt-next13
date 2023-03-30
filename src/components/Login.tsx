'use client'
import {signIn} from "next-auth/react"

export default function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
        <button 
          onClick={() => signIn("google")}
          className="text-white font-bold text-3xl animate-pulse">
            Login
        </button>
    </div>
  )
}
