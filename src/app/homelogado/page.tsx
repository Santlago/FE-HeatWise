import { CadastreSection } from "@/components/CadastreSection";
import Footer from "@/components/Footer";
import { BorderedButton } from "@/components/buttons/BorderedButton";
import { ProfileButton } from "@/components/buttons/ProfileButton";
import { StdButton } from "@/components/buttons/StdButton";
import { Image } from "@nextui-org/react";
import { Dot } from "lucide-react";
import Link from "next/link";
import { user } from "../lib/empresas";

export default async function HomeLogado() {

  // const user = await getSession()

  return (
    <main className="text-sun-900 font-outfit bg-sun-950 bg-contain bg-no-repeat bg-[url('/landingpage-bg.png')]" style={{
      color: 'var(--Sun-50, #FFFDEA)',
      fontSize: '1.26281rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal'
    }}>
      <section className=" w-full h-[51.0625rem]">
        <div className="py-[3.06rem] px-[2.88rem] flex justify-between">
          <Link href="/">
            <Image
              src="/logo-small.png"
              alt="logo"
              height={46}
              width={197}
            />
          </Link>
          {user ? (
            <Link href="/perfil">
              <ProfileButton text={user.nome} />
            </Link>
          ) : (
            <Link href="/login">
              <BorderedButton text="Login" />
            </Link>
          )}

        </div>
        <div className="px-[4.38rem]">
          <p className="pb-[3.25rem] text-[2.06494rem] font-bold text-sun-50 max-w-[41.37581rem]">
            Potencialize a Experiência de seus funcionários. Transformando <span className="text-sun-500">Dados</span> em <span className="text-sun-500">Insights</span> e melhorando sua Plataforma Digital!
          </p>
          <Link href="/planos">
            <StdButton text="Veja nossos planos" />
          </Link>
        </div>
      </section>
      <section className="w-full bg-sun-500">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-center font-bold text-sun-50 font-outfit text-[2.54788rem]">Sobre Nós</h1>
            <p className="max-w-[38.9375rem] pt-[4.5rem] mr-[1.87rem] text-[1.57919rem] font-outfit text-sun-50 font-semibold">
              Transformamos dados em insights valiosos para melhorar a experiência em suas plataformas digitais. Com nossa tecnologia avançada de análise de dados e feedback funcional, capacitamos as empresas a entender e otimizar a jornada dos funcionários, impulsionando a eficiência e a produtividade
            </p>

          </div>
          <Image src="/sobrenos.png" className="w-[27.3125rem] h-auto pt-14" />
        </div>
      </section>
      <section className="flex flex-col justify-around w-full bg-sun-950 min-h-96">
        <h1 className="py-[3.19rem] px-[3.63rem] font-bold text-sun-50 font-outfit text-[2.54788rem] pt-[2.56rem]">Benefícios Principais</h1>
        <div className="flex flex-col gap-10 justify-around px-[6.25rem] pb-[6.61rem]">
          <div className="flex"><Dot />Melhoria da Experiência do Funcionário - Identifique áreas de oportunidade para aprimorar a usabilidade e eficiência da plataforma.</div>
          <div className="flex"><Dot />Otimização de Processos Internos - Personalize estratégias de desenvolvimento com base no comportamento e necessidades reais dos funcionários.</div>
          <div className="flex"><Dot />Tomada de Decisão Baseada em Dados - Transforme dados em insights acionáveis para impulsionar o desempenho e o sucesso da equipe.</div>
        </div>
      </section>
      <section className="w-full bg-sun-500">
        <h1 className="text-center font-bold text-sun-50 font-outfit text-[2.54788rem] pt-[2.56rem]">Mas como funciona?</h1>
        <div className="flex justify-around py-24 items-center">
          <div className="text-[1.57919rem] font-outfit text-sun-50 font-semibold ">
            <p className="align-middle">
              Nossa plataforma irá gerar mapas de calor com base em seu site
            </p>
          </div>
          <div>
            <Image src="/funciona1.png" className="w-[27.3125rem] h-auto " />
          </div>
        </div>
      </section>
      <section className="w-full bg-sun-600 flex justify-around items-center">
        <div className="py-[8rem]">
          <Image src="/funciona2.png" className="w-[27.3125rem] h-auto " />
        </div>
        <div className="w-[34rem] py-[10rem] text-[2.06494rem] font-bold text-sun-50">
          <p>Então, nossa ia generativa irá confeccionar um relatório apontando insights valiosos e um feedback de sua plataforma   </p>
        </div>
      </section>
      <section className="w-full bg-sun-700 flex justify-around">
        <div className="w-[34rem] py-[10rem] text-[2.06494rem] font-bold text-sun-50">
          <p>Por fim, você poderá ver este relatório de forma mais precisa através de nosso dashboard   </p>
        </div>
        <div className="py-[8rem]">
          <Image src="/funciona3.png" className="w-[27.3125rem] h-auto " />
        </div>
      </section>
      <Footer />
    </main >
  );
}
