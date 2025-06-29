import React from 'react'
import Button from '../../components/Button'
import { ChevronRightIcon, MessageCircleIcon } from 'lucide-react'

const CTA = () => {
    return (
        <div className='bg-[var(--color-1)] text-center p-10 rounded-xl'>
            <h1 className='text-zinc-200 font-black text-3xl'>Pronto para Encontrar seu Supercarro?</h1>
            <p className='text-zinc-200 my-8'>Nossa equipe está pronta para ajudar você a encontrar o veículo esportivo dos seus sonhos.</p>
            <Button className={'!bg-[var(--color-2)] !text-[var(--color-4)] font-semibold'}>
                <MessageCircleIcon />
                Falar com Especialista
            </Button>
        </div>
    )
}

export default CTA
