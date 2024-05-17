"use server"

export async function getById(id: number){

    const resp = await fetch(`${process.env.API_BASE_URL}/empresa/${id}`, {next: {revalidate: 0}})

    if (!resp.ok){
        return null
    }

    return await resp.json()

}