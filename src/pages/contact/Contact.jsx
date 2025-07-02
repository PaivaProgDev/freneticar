import { CalendarIcon, Mail, MapPinIcon, MessageCircleIcon, PhoneIcon, TimerIcon } from "lucide-react"
import Button from "../../components/Button"
import FormContact from "./FormContact"

const Contact = () => {
    const cardsContact = [
        {
            id: 1,
            icon: <Mail />,
            title: "Email",
            info1: "contato@sportcars.com",
            info2: "vendas@sportcars.com",
        },
        {
            id: 2,
            icon: <PhoneIcon />,
            title: "Telefone",
            info1: "+55 11 9999-9999",
            info2: "+55 11 8888-8888",
        },
        {
            id: 3,
            icon: <MapPinIcon />,
            title: "Endereço",
            info1: "Av. Paulista, 1000",
            info2: "São Paulo, SP - 01310-100",
        },
        {
            id: 4,
            icon: <TimerIcon />,
            title: "Horário",
            info1: "Seg-Sex: 9h às 18h",
            info2: "Sáb: 9h às 14h",
        },
    ]

    return (
        <div className='px-6 pt-6 overflow-hidden text-center pb-12 bg-[var(--color-bg)]'>
            <h1 className='text-5xl font-black text-[var(--color-4)]'>Entre em Contato</h1>
            <p className='text-[var(--color-4)] text-lg mt-5 mb-16'>Cada veículo é uma obra-prima da engenharia automobilística, combinando performance, luxo e tecnologia de ponta.</p>
            <h3 className='font-black text-[var(--color-4)] text-start text-4xl'>Informações de Contato</h3>
            <ul className="flex flex-col gap-8 my-10">
                {
                    cardsContact.map((card) => (
                        <li className="flex gap-6 shadow-lg rounded-xl p-6 border border-zinc-200" key={card.id}>
                            <span className="bg-zinc-200 h-fit p-4 rounded-xl text-[var(--color-4)]">
                                {card.icon}
                            </span>
                            <div className="flex flex-col items-start">
                                <h3 className="font-extrabold mb-2 text-[18px] text-[var(--color-4)]">{card.title}</h3>
                                <h4 className="font-medium">{card.info1}</h4>
                                <h5 className="text-zinc-600">{card.info2}</h5>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className='bg-linear-to-tl rounded-xl text-start flex flex-col gap-6 p-10 from-black to-slate-800'>
                <h2 className="text-2xl text-white font-bold">Atendimento Especializado</h2>
                <p className="text-white">Nossa equipe de especialistas está pronta para atender você com toda a atenção que você merece. Agende uma visita ao nosso showroom.</p>
                <Button className={'bg-white !text-[var(--color-4)]'}>Agendar Visita</Button>
            </div>
            <FormContact />
            <ul className="mt-20 flex flex-col gap-8">
                <li className="flex flex-col items-center text-center gap-6 shadow-lg rounded-xl p-6 border border-zinc-200">
                    <span className="bg-zinc-200 h-fit p-4 rounded-xl text-[var(--color-4)]">
                        <MessageCircleIcon />
                    </span>
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="font-extrabold mb-2 text-[18px] text-[var(--color-4)]">Chat Online</h3>
                        <h4 className="font-medium">Converse em tempo real com nossos especialistas</h4>
                        <Button className={'!w-fit px-10'}>Iniciar Chat</Button>
                    </div>
                </li>
                <li className="flex flex-col items-center text-center gap-5 shadow-lg rounded-xl p-6 border border-zinc-200">
                    <span className="bg-zinc-200 h-fit p-4 rounded-xl text-[var(--color-4)]">
                        <CalendarIcon />
                    </span>
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="font-extrabold mb-2 text-[18px] text-[var(--color-4)]">Agendar Reunião</h3>
                        <h4 className="font-medium">Marque um horário para conversar pessoalmente</h4>
                        <Button className={'!w-fit px-10'}>Agendar</Button>
                    </div>
                </li>
                <li className="flex flex-col items-center text-center gap-5 shadow-lg rounded-xl p-6 border border-zinc-200">
                    <span className="bg-zinc-200 h-fit p-4 rounded-xl text-[var(--color-4)]">
                        <PhoneIcon />
                    </span>
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="font-extrabold mb-2 text-[18px] text-[var(--color-4)]">Ligação Direta</h3>
                        <h4 className="font-medium">Fale diretamente com nosso time de vendas</h4>
                        <Button className={'!w-fit px-10'}>Ligar Agora</Button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Contact
