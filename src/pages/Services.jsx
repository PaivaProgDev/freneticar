import { CarIcon, CreditCardIcon, Medal, PaletteIcon, Shield, Timer, Users, WrenchIcon } from "lucide-react"
import CardServices from "../components/cards/CardServices"
import Button from "../components/Button"

const Services = () => {
    const attributes = [
        {
            id: 1,
            icon: <Timer className="size-8" />,
            title: "Atendimento 24/7",
            info: "Suporte completo sempre que precisar"
        },
        {
            id: 2,
            icon: <Shield className="size-8" />,
            title: "Garantia Estendida",
            info: "Proteção total para seu investimento"
        },
        {
            id: 3,
            icon: <Users className="size-8" />,
            title: "Consultoria Especializada",
            info: "Equipe técnica altamente qualificada"
        },
        {
            id: 4,
            icon: <Medal className="size-8" />,
            title: "Qualidade Certificada",
            info: "Serviços com certificação internacional"
        },

    ]

    return (
        <div className='px-6 pt-6 overflow-hidden max-w-6xl m-auto text-center pb-12 '>
            <h1 className="font-black text-[var(--color-4)] text-5xl mb-6">Nossos Serviços</h1>
            <p className='text-[var(--color-4)] text-lg'>Oferecemos uma gama completa de serviços premium para atender todas as necessidades dos entusiastas de veículos esportivos.</p>
            <div className="flex flex-col md:flex-row justify-center md:flex-wrap  gap-10 mt-20">
                <CardServices
                    icon={<CarIcon className="size-8 text-white " />}
                    title={'Test Drive Exclusivo'}
                    subtitle={'Gratuito'}
                    paragrafh={'Experimente o veículo dos seus sonhos em um test drive personalizado com acompanhamento especializado.'}
                    list={
                        <>
                            <li>Agendamento flexível</li>
                            <li>Acompanhamento técnico</li>
                            <li>Experiência premium</li>
                            <li>Sem compromisso</li>
                        </>
                    }
                />
                <CardServices
                    icon={<CreditCardIcon className="size-8 text-white " />}
                    title={'Financiamento Premium'}
                    subtitle={'A partir de 0,99% a.m.'}
                    paragrafh={'Soluções de financiamento personalizadas com as melhores taxas do mercado para supercarros.'}
                    list={
                        <>
                            <li>Taxas competitivas</li>
                            <li>Análise rápida</li>
                            <li>Documentação simplificada</li>
                            <li>Aprovação em 24h</li>
                        </>
                    }
                />
                <CardServices
                    icon={<WrenchIcon className="size-8 text-white " />}
                    title={'Manutenção Especializada'}
                    subtitle={'Sob consulta'}
                    paragrafh={'Serviços de manutenção e reparo com técnicos certificados pelas principais montadoras.'}
                    list={
                        <>
                            <li>Técnicos certificados</li>
                            <li>Peças originais</li>
                            <li>Garantia estendida</li>
                            <li>Atendimento domiciliar</li>
                        </>
                    }
                />
                <CardServices
                    icon={<PaletteIcon className="size-8 text-white " />}
                    title={'Personalização Total'}
                    subtitle={'A partir de R$ 50.000'}
                    paragrafh={'Customize seu veículo com acessórios premium e modificações que respeitam a originalidade.'}
                    list={
                        <>
                            <li>Design exclusivo</li>
                            <li>Materiais premium</li>
                            <li>Instalação profissional</li>
                            <li>Projeto 3D</li>
                        </>
                    }
                />
            </div>
            <h1 className="font-black text-[var(--color-4)] text-5xl mt-24 mb-6">Por que Escolher a SportCars?</h1>
            <p className='text-[var(--color-4)] mt-10 mb-20 text-lg'>Nossos diferenciais fazem toda a diferença na sua experiência.</p>
            <div className="flex items-center flex-col gap-1 md:grid md:grid-cols-2 place-self-center md:gap-20">
                {
                    attributes.map((attr) => (
                        <div className='flex flex-col items-center gap-6 group ' key={attr.id}>
                            <span className='bg-[var(--color-3)] duration-300 group-hover:bg-[var(--color-4)] group-hover:text-[var(--color-2)] w-fit  h-fit p-2 rounded-xl'>
                                {attr.icon}
                            </span>
                            <div className='flex flex-col items-center gap-2'>
                                <h4 className='text-2xl w-50 font-bold text-[var(--color-4)]'>{attr.title}</h4>
                                <p className=' text-[var(--color-4)]'>{attr.info}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="bg-linear-to-tl mt-22 rounded-xl flex text-white flex-col items-center text-center px-8 py-16 from-black to-slate-800">
                <h3 className="text-4xl font-black">Pronto para Começar?</h3>
                <p className="my-6">Entre em contato conosco e descubra como podemos tornar sua experiência automotiva única.</p>
                <div className="flex flex-col w-full gap-4 mt-6">
                    <Button className={'bg-white hover:-translate-y-1 !border-0 !text-[var(--color-4)]'}>Falar com Especialista</Button>
                    <Button>Agendar Test Drive</Button>
                </div>
            </div>
        </div>
    )
}

export default Services
