import { Settings } from 'lucide-react'
import { BsLightningCharge, BsShieldCheck } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'
import { MdSpeed } from 'react-icons/md'
import { FiShield } from 'react-icons/fi'
import Card from '/src/components/Cards'

const Engineering = () => {

    const cards = [
        {
            id: 1,
            title: 'Performance Extra',
            description: 'Motores de alta performance com até 1500HP de potência pura',
            info: '0-100 km/h em menos de 4 segundos',
            icon: <MdSpeed className='size-8' />
        },
        {
            id: 2,
            title: 'Tecnologia Avançada',
            description: 'Sistemas eletrônicos de última geração para controle total',
            info: 'Central multimídia com IA integrada',
            icon: <BsLightningCharge className='size-8' />
        },
        {
            id: 3,
            title: 'Segurança Premium',
            description: 'Estrutura de segurança ativa e passiva certificada',
            info: '5 estrelas em todos os testes',
            icon: <FiShield className='size-8' />
        },
        {
            id: 4,
            title: 'Personalização Total',
            description: 'Customize cada detalhe do seu veículo dos sonhos',
            info: 'Milhares de combinações possíveis',
            icon: <Settings className='size-8' />
        }
    ]

    return (
        <div className='mt-26 mb-10'>
            <h3 className='text-5xl font-black text-[var(--color-4)]'>Engenharia de Precisão</h3>
            <p className='text-[var(--color-4)] text-lg mt-5 mb-16'>Cada veículo é uma obra-prima da engenharia automobilística, combinando performance, luxo e tecnologia de ponta.</p>
            <div className='flex items-center flex-col gap-12'>
                {cards.map((card) => (
                    <div className='flex gap-6 group ' key={card.id}>
                        <div className='bg-[var(--color-3)] duration-300 group-hover:bg-[var(--color-1)] group-hover:text-[var(--color-2)] w-fit  h-fit p-2 rounded-xl'>
                            {card.icon}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-2xl w-50 font-bold text-[var(--color-4)]'>{card.title}</h4>
                            <p className='text-zinc-600'>{card.description}</p>
                            <strong className='font-bold text-sm text-[var(--color-4)]'>{card.info}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Engineering
