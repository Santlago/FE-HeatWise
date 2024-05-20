"use client";

import { Button, Image, Input } from "@nextui-org/react";
import Link from "next/link";
import { login } from "../actions/empresa/login";
import { useFormState } from "react-dom";
import { LoginButton } from "@/components/buttons/LoginButton";

const initialState = {
    message: '',
}

export default function Login() {
    
    const [state, formAction] = useFormState(login, initialState);

    return (
        <main className="flex text-sun-50 font-outfit font-medium ">
            <section className="h-screen w-2/5 bg-[url('/login-bg.png')] bg-cover bg-no-repeat">
                <h1 className="mt-[3.94rem] mr-[2.29rem] ml-[4rem] text-[3.75294rem]">
                    Faça Login e inicie as suas análises com <span className="text-sun-500">HeatWise</span>
                </h1>
            </section>
            <section className="h-screen w-3/5 flex flex-col justify-center items-center" style={{
                background: 'var(--Sun-500, #FFAC00)',
                boxShadow: '0px 300px 190px 0px #F68D2B inset'
            }}>
                <h2 className="text-[1.251rem] mb-[1.63rem]">Seja bem-vindo de volta ao</h2>
                <Link href="/">
                    <Image src="/logo.png" className="h-[5.3125rem] mb-[3.56rem]" />
                </Link>
                <div className="flex flex-col gap-[0.87rem]">
                    <form action={formAction}>
                        <Input 
                            type="email" 
                            label="Email" 
                            name="email" 
                            className="h-[3.9375rem] w-[24.1875rem]" 
                            isInvalid={state?.message !== ''}
                            errorMessage={state?.message}
                        />
                        <Input 
                            type="password" 
                            label="Senha" 
                            name="senha" 
                            className="h-[3.9375rem] w-[24.1875rem]" 
                            isInvalid={state?.message !== ''}
                            errorMessage={state?.message}
                        />
                        <LoginButton />
                    </form>
                    <div className="flex justify-around items-center my-[2rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="118" height="2" viewBox="0 0 118 2" fill="none">
                            <path d="M0 1H118" stroke="white" stroke-width="2" />
                        </svg>
                        <span className="text-center text-[1rem] font-normal font-abeezee">ou</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="118" height="2" viewBox="0 0 118 2" fill="none">
                            <path d="M0 1H118" stroke="white" stroke-width="2" />
                        </svg>
                    </div>
                    <Link href="/cadastro">
                        <Button className="h-[3.9375rem] w-[24.1875rem] bg-sun-50">
                            <span className="font-outfit text-sun-500" style={{
                                fontSize: '1.26281rem',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}>
                                Cadastre-se
                            </span>
                        </Button>
                    </Link>
                    <Link href="/" className="text-center hover:text-sun-200">
                        retornar ao menu principal
                    </Link>
                </div>
            </section>
        </main>
    );
}
