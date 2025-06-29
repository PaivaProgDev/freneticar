import { CarIcon, CreditCardIcon, PaletteIcon, WrenchIcon } from "lucide-react"
import Card from "../components/Cards"
import Button from "../components/Button"

const Services = () => {
    return (
        <div className='px-6 pt-6 overflow-hidden text-center pb-12 bg-[var(--color-bg)]'>
            <h1 className="font-black text-[var(--color-4)] text-5xl mb-6">Nossos Serviços</h1>
            <p className='text-[var(--color-4)] text-lg'>Oferecemos uma gama completa de serviços premium para atender todas as necessidades dos entusiastas de veículos esportivos.</p>
            <div className="flex flex-col flex-wrap gap-10 mt-20">
                <Card className={'border-zinc-300 hover:bg-white p-8 flex-col shadow-xl group:'}>
                    <div className="flex flex-col gap-6">
                        <div className="p-5 rounded-xl duration-200 bg-[var(--color-4)] md:bg-zinc-200 md:group-hover:bg-[var(--color-4)] h-fit w-fit">
                            <CarIcon className="size-8 text-white md:group-hover:text-white" />
                        </div>
                        <div className="text-start">
                            <h3 className="text-2xl font-extrabold w-50 sm:w-full mb-1 text-[var(--color-4)]">Test Drive Exclusivo</h3>
                            <span className="font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Gratuito</span>
                        </div>
                    </div>
                    <p className="text-start text-zinc-600">Experimente o veículo dos seus sonhos em um test drive personalizado com acompanhamento especializado.</p>
                    <ul className="text-start list-disc ml-3.5 font-medium">
                        <li>Agendamento flexível</li>
                        <li>Acompanhamento técnico</li>
                        <li>Experiência premium</li>
                        <li>Sem compromisso</li>
                    </ul>
                    <Button className={'mt-4'}>Soliciar Orçamento</Button>
                </Card>

                <Card className={'border-zinc-300 hover:bg-white p-10 w-full flex-col shadow-xl group:'}>
                    <div className="flex flex-wrap gap-6">
                        <div className="p-5 rounded-xl duration-200 bg-[var(--color-4)] md:bg-zinc-200 md:group-hover:bg-[var(--color-4)] h-fit w-fit">
                            <WrenchIcon className="size-8 text-white md:group-hover:text-white" />
                        </div>
                        <div className="text-start">
                            <h3 className="text-2xl font-extrabold w-50 sm:w-full mb-1 text-[var(--color-4)]">Manutenção Especializada</h3>
                            <span className="font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Sob consulta</span>
                        </div>
                    </div>
                    <p className="text-start text-zinc-600">Serviços de manutenção e reparo com técnicos certificados pelas principais montadoras.</p>
                    <ul className="text-start text-[var(--color-4)] list-disc ml-3.5 font-medium">
                        <li>Técnicos certificados</li>
                        <li>Peças originais</li>
                        <li>Garantia estendida</li>
                        <li>Atendimento domiciliar</li>
                    </ul>
                    <Button className={'mt-4'}>Soliciar Orçamento</Button>
                </Card>

                <Card className={'border-zinc-300 hover:bg-white  p-10 w-full flex-col shadow-xl group:'}>
                    <div className="flex flex-wrap gap-6">
                        <div className="p-5 rounded-xl duration-200 bg-[var(--color-4)] md:bg-zinc-200 md:group-hover:bg-[var(--color-4)] h-fit w-fit">
                            <CreditCardIcon className="size-8 text-white md:group-hover:text-white" />
                        </div>
                        <div className="text-start">
                            <h3 className="text-2xl font-extrabold w-50 sm:w-full mb-1 text-[var(--color-4)]">Financiamento Premium</h3>
                            <span className="font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">A partir de 0,99% a.m.</span>
                        </div>
                    </div>
                    <p className="text-start text-zinc-600">Soluções de financiamento personalizadas com as melhores taxas do mercado para supercarros.</p>
                    <ul className="text-start text-[var(--color-4)] list-disc ml-3.5 font-medium">
                        <li>Taxas competitivas</li>
                        <li>Análise rápida</li>
                        <li>Documentação simplificada</li>
                        <li>Aprovação em 24h</li>
                    </ul>
                    <Button className={'mt-4'}>Soliciar Orçamento</Button>
                </Card>

                <Card className={'border-zinc-300 hover:bg-white  p-10 w-full flex-col shadow-xl group:'}>
                    <div className="flex flex-wrap gap-6">
                        <div className="p-5 rounded-xl duration-200 bg-[var(--color-4)] md:bg-zinc-200 md:group-hover:bg-[var(--color-4)] h-fit w-fit">
                            <PaletteIcon className="size-8 text-white md:group-hover:text-white" />
                        </div>
                        <div className="text-start">
                            <h3 className="text-2xl font-extrabold w-50 sm:w-full mb-1 text-[var(--color-4)]">Personalização Total</h3>
                            <span className="font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">A partir de R$ 50.000</span>
                        </div>
                    </div>
                    <p className="text-start text-zinc-600">Customize seu veículo com acessórios premium e modificações que respeitam a originalidade.</p>
                    <ul className="text-start text-[var(--color-4)] list-disc ml-3.5 font-medium">
                        <li>Design exclusivo</li>
                        <li>Materiais premium</li>
                        <li>Instalação profissional</li>
                        <li>Projeto 3D</li>
                    </ul>
                    <Button className={'mt-4'}>Soliciar Orçamento</Button>
                </Card>
            </div>
        </div>
    )
}

export default Services
