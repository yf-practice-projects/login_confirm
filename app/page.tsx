'use client'

import { User } from "@/types/definitions"
import { UserSchema } from "@/types/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"

export default function Home() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<User>({mode: "onChange", resolver: zodResolver(UserSchema)})
  const onSubmit = async(data:User) => {
    await signIn("test",{username: data.name, password: data.password, callbackUrl:"/test"})
    
  }

  return (
    <div className="max-w-[280px] mx-auto">
      <div className="flex flex-col items-center mt-[10vh]">
        <h1 className="mb-5 text-gray-900 font-mono font-bold text-xl">Login</h1>
        <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="名前"
            {...register("name")}
          />
          <p>{ errors.name?.message }</p>
          <input type="email"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Email"
            {...register("email")}
          />
          <p>{ errors.email?.message }</p>
          <input type="password"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="パスワード"
            {...register("password")}
          />
          <p>{ errors.password?.message }</p>
          <button type="submit"
            className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}