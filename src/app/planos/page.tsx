"use server"

import Footer from "@/components/Footer";
import { BorderedButton } from "@/components/buttons/BorderedButton";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { getSession } from "../lib/session";

export default async function Planos() {

    const user = await getSession()

    const planos = [
        {
            titulo: "Plano Básico",
            preco: "199.00",
            frequencia: "Mensal",
            quantidadeSite: "Apenas 1"
        },
        {
            titulo: "Plano Comum",
            preco: "399.00",
            frequencia: "Semanal",
            quantidadeSite: "Até 3"
        },
        {
            titulo: "Plano Premium",
            preco: "799.00",
            frequencia: "Diária",
            quantidadeSite: "Ilimitado"
        }
    ]
    return (
        <>
            <main className="h-full" style={{
                background: 'var(--Sun-700, #BB5B02)',
                boxShadow: '0px 300px 250px 0px rgba(246, 141, 43, 0.50) inset'
            }}>
                <div className="py-[3.06rem] px-[2.88rem] flex justify-between">
                    <Link href='/'>
                        <Image
                            src="/logo-small.png"
                            alt="logo"
                            height={46}
                            width={197}
                        />
                    </Link>
                    <Link href="/">
                        <BorderedButton text="Voltar" />
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <div className="px-[11.44rem] mt-[5rem] ">
                        <div className="text-sun-50 font-bold text-[2.91894rem] font-outfit">
                            <h1>Confira nossos planos</h1>
                        </div>
                        <div className="flex justify-between gap-[2.48rem] mt-[4rem] mb-[4rem]">
                            {planos.map(plano => (
                                <div className="bg-sun-500 max-h-[25.135rem] w-[20.39325rem] rounded-[1.83225rem]" style={{
                                    boxShadow: '0px 0px 24.774px 0px rgba(0, 0, 0, 0.25)'
                                }}>
                                    <div className="flex flex-col justify-around h-full text-center font-outfit text-sun-50 p-[2.3rem]">

                                        <div>
                                            <h1 className="text-center text-[1.96656rem] font-bold">{plano.titulo}</h1>
                                        </div>
                                        <div>
                                            <p className="font-extrabold">
                                                <span className="text-[1.315rem]">
                                                    R$
                                                </span>
                                                <span className="text-[2.86488rem]">
                                                    {plano.preco}
                                                </span>
                                            </p>
                                            <p className="text-[1.43244rem] font-semibold">mensalmente</p>
                                        </div>
                                        <div>
                                            <p className="text-[1.02513rem] font-semibold">Frequência de Análise</p>
                                            <p className="text-[1.31219rem] font-extrabold">{plano.frequencia}</p>
                                        </div>
                                        <div>
                                            <p className="text-[1.02513rem] font-semibold">Quantidade de Sites</p>
                                            <p className="text-[1.31219rem] font-extrabold">{plano.quantidadeSite}</p>
                                        </div>

                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}