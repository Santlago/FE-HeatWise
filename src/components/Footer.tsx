import { Image } from "@nextui-org/react";
import Link from "next/link";

export default function Footer() {


    return (
        <footer className=" flex w-full h-[27.625rem] bg-sun-500 font-abeezee text-sun-50 font-semibold text-[1.35188rem] overflow-hidden items-center">
            <div className="flex w-1/2 flex-col justify-around items-center gap-14">
                <div className="">
                    Projeto sugerido e apoiado por:
                </div>
                <div>
                    <Link href="https://plusoft.com/" target="blank">
                        <Image
                            src="/plusoft-logo.png"
                            alt="plusoftlogo"
                            height={103}
                            width={408.185}
                        />
                    </Link>
                </div>
                <div>
                    <Link href="https://www.fiap.com.br/" target="blank">
                        <Image
                            src="/fiap-logo-white.png"
                            alt="fiaplogo"
                            height={69}
                            width={255}
                            className="rounded-none"
                        />
                    </Link>
                </div>
            </div>
            <div className="h-[20rem] border-r-[0.1875rem]"></div>
            <div className="flex w-1/2 flex-col justify-around gap-10 my-[4.38rem] ml-[3.19rem]">
                <div className="">
                    <h2>INTEGRANTES DO GRUPO</h2>
                </div>
                <div>
                    <p>
                        Breno Lemes Santiago - RM: 552270 <br />
                        Felipe Guedes Gonçalves - RM: 550906 <br />
                        Luiz Fellipe Soares de Sousa Lucena - RM: 551365 <br />
                        Nina Rebello Francisco - RM: 99509 <br />
                        Vitória Maria de Camargo - RM: 552344
                    </p>
                </div>
                <div>
                    <p>
                        © 2024 HeatWise. Todos os direitos reservados. A melhor plataforma de análise de acesso em websites, promovendo o avanço e estudo de dados através da tecnologia de Heat Mapping.
                    </p>
                </div>

            </div>
        </footer>
    )
}