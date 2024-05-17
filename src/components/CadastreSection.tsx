import { Image } from "@nextui-org/react"
import Link from "next/link"

interface CadastreSectionProps {
    user: string
}

export function CadastreSection({ user } : CadastreSectionProps) {
  if (user) {
    return null
  }

  return (
    <section className="w-full bg-sun-950 text-sun-50">
      <div className="flex items-center justify-around">
        <div className="">
          <Image src="/funciona4.png" alt="Heatmapping Solution" className="w-[27.3125rem] h-auto" />
        </div>
        <div id="texto" className="text-center">
          <div className="text-[2.91063rem] mb-[5.19rem]">
            <h1>Ta esperando o que?</h1>
          </div>
          <div className="text-[2.34031rem] max-w-[35rem]">
            <p>
              <Link href="/cadastro"><span className="text-sun-500">Cadastre-se</span></Link> e adquira já a mais nova solução de heatmapping no mercado!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}