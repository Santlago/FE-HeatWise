"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData) {
  await new Promise(r => setTimeout(r, 1000))

  const data = {
    nome: formData.get("nome"),
    cnpj: formData.get("cnpj"),
    idPlano: parseInt(formData.get("plano")?.toString() || "1", 10),
    telefone: formData.get("telefone"),
    email: formData.get("email"),
    senha: formData.get("senha"),
  }

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const resp = await fetch(`${process.env.API_BASE_URL}/empresa`, options)

  if (resp.ok) {
    // const responseData = await resp.json()
    // const userId = responseData.id

    // await createSession(userId)
    redirect("/homelogado")
  }

  if (resp.status == 400) {
    return {
      messageNome: "Validação falhou"
    }
  }

}
