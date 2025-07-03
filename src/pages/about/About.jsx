import { MedalIcon, UsersIcon, LucideLoaderPinwheel, CalendarIcon, CheckCircle, GemIcon, HandshakeIcon, ShieldIcon } from 'lucide-react'
import lamboRed from './images/Lambo.red.png'
import larenWhite from './images/Laren.white.png'
import CTA from './CTA'

const About = () => {
    return (
        <div className='px-6 pt-6 overflow-hidden text-start pb-12'>
            <div className='w-full max-w-250 m-auto'>
                <h1 className="font-extrabold text-center text-[var(--color-4)] text-5xl mb-6">Nossa História</h1>
                <p className=' text-zinc-600 text-center'>Há mais de 15 anos realizando sonhos automotivos e conectando pessoas aos veículos esportivos mais exclusivos do mundo.</p>
                <div className='relative mb-16 flex items-center justify-center'>
                    <div className='bg-amber-500 rounded-xl w-full max-w-70 sm:max-w-150 skew-5 h-65 mt-9 '></div>
                    <img className='w-full min-w-130 max-w-60 absolute top-0' src={lamboRed} alt="Lamborghini vermelha" />
                </div>
                <h2 className='font-extrabold text-3xl my-6 text-[var(--color-4)]'>Paixão que Move</h2>
                <div className='flex flex-col gap-7  text-zinc-500'>
                    <p>
                        A SportCars nasceu da paixão genuína por veículos esportivos. Fundada em 2009, começamos como um pequeno showroom em São Paulo com o objetivo de democratizar o acesso aos supercarros mais desejados do planeta.
                    </p>
                    <p>
                        Ao longo dos anos, construímos uma reputação sólida baseada na confiança, transparência e excelência no atendimento. Cada veículo que passa por nossas mãos é cuidadosamente selecionado e inspecionado pelos nossos especialistas.
                    </p>
                    <p>
                        Hoje, somos referência no mercado de veículos esportivos premium, com uma cartela de clientes satisfeitos que se tornaram embaixadores da nossa marca.
                    </p>
                </div>
                <div className='border-t flex flex-col gap-14 pt-20 mt-18 border-zinc-200 w-full'>
                    <div className='flex flex-col items-center group'>
                        <div className='bg-zinc-200 p-5 rounded-xl group-hover:bg-[var(--color-4)] w-fit'>
                            <MedalIcon className='group-hover:text-[var(--color-2)]' />
                        </div>
                        <strong className='text-4xl font-black text-[var(--color-4)]  my-4'>15+</strong>
                        <span className='font-bold text-[var(--color-4)] text-[20px]'>Anos de Experiência</span>
                        <p className='text-zinc-600'>Especialistas em veículos esportivos</p>
                    </div>
                    <div className='flex flex-col items-center group'>
                        <div className='bg-zinc-200 p-5 rounded-xl group-hover:bg-[var(--color-4)] w-fit'>
                            <UsersIcon className='group-hover:text-[var(--color-2)]' />
                        </div>
                        <strong className='font-black text-4xl text-[var(--color-4)] my-4'>5000+</strong>
                        <span className='font-bold text-[var(--color-4)] text-[20px]'>Clientes Satisfeitos</span>
                        <p className='text-zinc-600'>Realizamos sonhos automotivos</p>
                    </div>
                    <div className='flex flex-col items-center group'>
                        <div className='bg-zinc-200 p-5 rounded-xl group-hover:bg-[var(--color-4)] w-fit'>
                            <CalendarIcon className='group-hover:text-[var(--color-2)]' />
                        </div>
                        <strong className='font-black text-4xl text-[var(--color-4)] my-4'>500+</strong>
                        <span className='font-bold text-[var(--color-4)] text-[20px]'>Veículos Vendidos</span>
                        <p className='text-zinc-600'>Supercarros entregues com excelência</p>
                    </div>
                    <div className='flex flex-col items-center group'>
                        <div className='bg-zinc-200 p-5 rounded-xl group-hover:bg-[var(--color-4)] w-fit'>
                            <LucideLoaderPinwheel className='group-hover:text-[var(--color-2)]' />
                        </div>
                        <strong className='font-black text-4xl text-[var(--color-4)] my-4'>50+</strong>
                        <span className='font-bold text-[var(--color-4)] text-[20px]'>Marcas Parceiras</span>
                        <p className='text-zinc-600'>As melhores do mundo</p>
                    </div>
                    <div className='relative flex items-center justify-center'>
                        <div className='bg-amber-500 -translate-x-40 w-full rounded-full min-w-100 sm:max-w-full h-full min-h-100 mt-9 '></div>
                        <img className='w-full min-w-150 max-w-100 absolute top-25 right-15' src={larenWhite} alt="Lamborghini vermelha" />
                    </div>
                    <div>
                        <h1 className="font-extrabold text-center text-[var(--color-4)] text-5xl mb-6">Nossos Valores</h1>
                        <p className=' text-zinc-600 text-center'>Os princípios que nos guiam em cada negociação e relacionamento.</p>
                    </div>
                    {/* Nossos Valores */}
                    <div className='border-t flex flex-col gap-14 pt-14 text-center border-zinc-200 w-full'>
                        <div className='flex flex-col items-center group'>
                            <div className='bg-zinc-200 p-5 rounded-xl group-hover:bg-[var(--color-4)] w-fit'>
                                <ShieldIcon className='group-hover:text-[var(--color-2)] size-8' />
                            </div>
                            <strong className='text-3xl font-black text-[var(--color-4)]  my-4'>Performance</strong>
                            <p className='text-zinc-600'>Buscamos sempre a excelência em performance, tanto nos veículos quanto no atendimento.</p>
                        </div>
                        <div className='flex flex-col items-center group '>
                            <div className='bg-zinc-200 p-5 rounded-xl group-hover:bg-[var(--color-4)] w-fit'>
                                <HandshakeIcon className='group-hover:text-[var(--color-2)] size-8' />
                            </div>
                            <strong className='font-black text-3xl text-[var(--color-4)] my-4'>Confiança</strong>
                            <p className='text-zinc-600'>Construímos relacionamentos duradouros baseados na transparência e confiabilidade.</p>
                        </div>
                        <div className='flex flex-col items-center group'>
                            <div className='bg-zinc-200 p-5 rounded-xl group-hover:bg-[var(--color-4)] w-fit'>
                                <GemIcon className='group-hover:text-[var(--color-2)] size-8' />
                            </div>
                            <strong className='font-black text-3xl text-[var(--color-4)] my-4'>Qualidade</strong>
                            <p className='text-zinc-600'>Oferecemos apenas os melhores veículos, com histórico comprovado e procedência garantida.</p>
                        </div>
                    </div>
                    <CTA />
                </div>
            </div>
        </div>
    )
}

export default About
