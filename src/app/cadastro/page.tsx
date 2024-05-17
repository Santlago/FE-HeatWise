'use client'

import { SubmitButton } from "@/components/buttons/SubmitButton";
import { WhiteButton } from "@/components/buttons/WhiteButton";
import { Button, Image, Input, Select, SelectItem } from "@nextui-org/react";
import { create } from "@/app/actions/empresa/create";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { CancelButton } from "@/components/buttons/CancelButton";

const initialState = {
    messageNome: '',
}

export default async function Cadastro() {
    const [state, formAction] = useFormState(create, initialState)

    return (
        <main className="flex h-screen" style={{
            background: 'var(--Sun-500, #FFAC00)',
            boxShadow: '0px 300px 190px 0px #F68D2B inset'
        }}>
            <section className="h-full w-1/2 flex flex-col justify-between">
                <Link href="/">
                    <Image src="/logo-small.png" className="h-[2.875rem] mt-[2.44rem] ml-[2.63rem] mb-[3.19rem]" />
                </Link>
                <div className="text-sun-50 font-outfit font-semibold text-[2.69138rem] ml-[4.81rem] max-2-[31.375rem]">
                    <p>
                        Preencha os campos com os dados de sua empresa e deixe o resto com a gente :)
                    </p>
                </div>
                <div className="flex justify-center truncate">
                    <Image src="/cadastro.png" className="w-[24rem]" />

                </div>
            </section>
            <section className="h-screen w-1/2 flex flex-col justify-center items-center">
                <div>
                    <form action={formAction}>
                        <div className="flex flex-col justify-between bg-white w-[27.9375rem] max-h-[40.5625rem] text-[#D67300] p-[1.41rem] rounded-[1rem] text-[0.65938rem] mb-[1.51rem]">
                            <div className="">
                                <h2 className="text-[0.942rem] font-bold">Dados da empresa</h2>
                                <p>Preencha com base nos dados da empresa</p>
                                <Input type="text" label="Nome da empresa" name="nome" variant="underlined" isInvalid={state?.messageNome != ''} errorMessage={state?.messageNome} />
                                <Input type="text" label="CNPJ" name="cnpj" variant="underlined" />
                            </div>
                            <div>
                                <h2 className="text-[0.942rem] font-bold">Contatos</h2>
                                <p>Enviaremos boletos, informações úteis e códigos nestes contatos</p>
                                <Input type="email" label="Email" name="email" variant="underlined" startContent={<Mail />} />
                                <Input type="text" label="Telefone" name="telefone" variant="underlined" startContent={<Phone />} />
                            </div>
                            <div>
                                <h2 className="text-[0.942rem] font-bold">Escolha do Plano</h2>
                                <p>Escolha o plano e forma de pagamento</p>
                                <Select
                                    label="Escolha um plano"
                                    variant="underlined"
                                >
                                    <SelectItem key="1" value="1">
                                        Básico
                                    </SelectItem>
                                    <SelectItem key="2" value="2">
                                        Comum
                                    </SelectItem>
                                    <SelectItem key="3" value="3">
                                        Premium
                                    </SelectItem>
                                </Select>
                                <Input type="text" label="Forma de pagamento" name="pagamento" variant="underlined" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <SubmitButton text="Finalizar cadastro" />
                            <Link href="/login">
                                <CancelButton text="Voltar" />
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}