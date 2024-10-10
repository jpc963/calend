"use server"

import { User } from "@/types/types"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function createSession(data: User) {
  const { grantId, email } = data
  const expireDate = Date.now() + 1000 * 60 * 60 * 24 * 7

  cookies().set({
    name: "grantId",
    value: grantId!,
    httpOnly: true,
    path: "/",
    expires: expireDate,
  })

  cookies().set({
    name: "email",
    value: email!,
    httpOnly: true,
    path: "/",
    expires: expireDate,
  })

  cookies().set({
    name: "calend_session",
    value: process.env.SECRET!,
    httpOnly: true,
    path: "/",
    expires: expireDate,
  })

  redirect("/")
}
