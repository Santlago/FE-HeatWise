import { BorderedButton } from "@/components/buttons/BorderedButton";
import { Button, Image, Input, ScrollShadow } from "@nextui-org/react";
import Link from "next/link";
import { deleteSession, getSession } from "../lib/session";
// import { WhiteButton } from "@/components/buttons/WhiteButton";
// import { LogoutButton } from "@/components/buttons/LogoutButton";
import { StdSmallButton } from "@/components/buttons/StdSmallButton";
import { WhiteButton } from "@/components/buttons/WhiteButton";
import { Mail, Phone } from "lucide-react";
import { PlusButton } from "@/components/buttons/PlusButton";
import { LogoutButton } from "@/components/buttons/LogoutButton";
import { logout } from "../actions/auth";
import { cookies } from "next/headers";

export default async function Perfil() {
    const user = await getSession();

    const sites = [
        {
            id: 1,
            nome: "Folha de Pagamento",
            url: "http://folhadepagamento.com.br"
        },
        {
            id: 2,
            nome: "Banco de horas",
            url: "http://bancodehoras.com.br"
        }
    ]

    return (
        <main className="min-h-screen flex flex-col" style={{
            background: 'var(--Sun-500, #FFAC00)',
            boxShadow: '0px 300px 190px 0px #F68D2B inset'
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
                {/* <LogoutButton text="Logout"/> */}
                <Link href='/'>
                    <BorderedButton text="Voltar" />
                </Link>
            </div>
            <h1 className="text-center text-[2.9rem] font-outfit text-sun-50 font-bold">Perfil da Empresa</h1>
            <div id="forms" className="flex-grow flex justify-center items-center gap-[2.59rem]">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <Image src="https://i.pravatar.cc/300" className="w-[11.25rem] h-[11.25rem]" />
                        <div className="flex flex-col justify-around w-[11.25rem] h-[11.25rem]">
                            <WhiteButton text="Editar Perfil" />
                            <WhiteButton text="Excluir Perfil" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-white w-[27.9375rem] max-h-full text-[#D67300] p-[1.41rem] rounded-[1rem] text-[0.65938rem] mb-[1.51rem] overflow-auto">
                        <div className="">
                            <h2 className="text-[0.942rem] font-bold">Meus sites</h2>
                            <p>Acesse as análises do seus sites</p>
                            <ScrollShadow className="max-h-[14rem] overflow-auto">
                                {sites.map(site => (
                                    <div key={site.id}>
                                        <Input isReadOnly type="text" label="Nome do site" name="nome" variant="underlined" defaultValue={site.nome} />
                                        <Input isReadOnly type="text" label="Endereço do site" name="url-site" variant="underlined" defaultValue={site.url} />
                                        <div className="py-4">
                                            <StdSmallButton text="Acessar análise" />
                                        </div>
                                    </div>
                                ))}
                            </ScrollShadow>
                            <div className="flex justify-center pt-4">
                                <PlusButton />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col justify-between bg-white w-[27.9375rem] max-h-full text-[#D67300] p-[1.41rem] rounded-[1rem] text-[0.65938rem] mb-[1.51rem] overflow-auto">
                    <div className="">
                        <h2 className="text-[0.942rem] font-bold">Dados da empresa</h2>
                        <p>Preencha com base nos dados da empresa</p>
                        <Input isReadOnly type="text" label="Nome da empresa" name="nome" variant="underlined" defaultValue={user.nome} />
                        <Input isReadOnly type="text" label="CNPJ" name="cnpj" variant="underlined" defaultValue={user.cnpj} />
                    </div>
                    <div>
                        <h2 className="text-[0.942rem] font-bold">Contatos</h2>
                        <p>Enviaremos boletos, informações úteis e códigos nestes contatos</p>
                        <Input isReadOnly type="email" label="Email" name="email" variant="underlined" defaultValue={user.email} startContent={<Mail />} />
                        <Input isReadOnly type="text" label="Telefone" name="telefone" variant="underlined" defaultValue={user.telefone} startContent={<Phone />} />
                    </div>
                    <div>
                        <h2 className="text-[0.942rem] font-bold">Escolha do Plano</h2>
                        <Input isReadOnly type="text" label="Plano" name="idPlano" variant="underlined" defaultValue={
                            user.idPlano === 1
                                ? "Basico"
                                : user.idPlano === 2
                                    ? "Comum"
                                    : user.idPlano === 3
                                        ? "Premium"
                                        : undefined
                        } />
                    </div>
                </div>

            </div>
            {/* <LogoutButton text="Deslogar"/> */}
        </main>
    );
}
