"use server"

import { createSession } from "@/app/lib/session"
import { redirect } from "next/navigation"

export async function login(prevState: any, formData: FormData) {
  await new Promise(r => setTimeout(r, 1000))

  const data = {
    email: formData.get("email"),
    senha: formData.get("senha"),
  }

  if (data.email === "carrefour@gmail.com" && data.senha === "carrefour123") {
    redirect("/homelogado")
  }

  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // }

  // const resp = await fetch(`${process.env.API_BASE_URL}/empresa/login`, options)

  // if (resp.ok) {
  //   const responseData = await resp.json()
  //   const userId = responseData.id

  //   await createSession(userId)
  //   redirect("/")
  // } else if (resp.status === 400) {
  //   return {
  //     message: "Invalid email or password"
  //   }
  // } else {
  //   return {
  //     message: "Login failed, please try again"
  //   }
  // }
}
