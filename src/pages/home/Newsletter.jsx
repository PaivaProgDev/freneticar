import { ArrowRightIcon, Clock4, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const Newsletter = () => {
    return (
        <div className='bg-linear-to-tl flex flex-col items-center text-center px-6 py-20 from-black to-slate-800'>
            <div className='bg-zinc-700 p-4 rounded-xl  '>
                <Mail className='text-white size-10' />
            </div>
            <h1 className='text-[var(--color-2)] my-8 font-black text-5xl'>Fique por Dentro</h1>
            <p className='text-zinc-200'>Receba as últimas novidades sobre lançamentos, eventos exclusivos e oportunidades únicas no mundo dos supercarros.</p>
            <label className='grid grid-cols-3 gap-4 mt-14'>
                <input className='col-start-1 col-end-3 rounded-xl border border-zinc-500  text-white bg-[#31313150] px-6' type="email" placeholder='Seu melhor-email' />
                <Button className={'bg-[var(--color-2)]'}>
                    <ArrowRightIcon className='text-black' />
                </Button>
            </label>
            <p className='text-zinc-100 mt-10 text-sm'>Sem spam. Apenas conteúdo premium sobre carros esportivos.</p>
            <div className='border-t flex flex-col gap-14 pt-20 mt-18 border-zinc-700 w-full'>
                <div className='flex flex-col items-center'>
                    <div className='bg-zinc-200 p-4 rounded-xl w-fit'>
                        <Mail />
                    </div>
                    <span className='text-white font-extrabold py-4'>Email</span>
                    <Link className='text-zinc-100' to={'mailto:freneticar@contato.com'}>freneticar@contato.com</Link>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='bg-zinc-200 p-4 rounded-xl w-fit'>
                        <Phone />
                    </div>
                    <span className='text-white font-extrabold py-4'>Telefone</span>
                    <Link className='text-zinc-100' to={'tel:55119999-9999'}>+55 11 9999-9999</Link>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='bg-zinc-200 p-4 rounded-xl w-fit'>
                        <MapPin />
                    </div>
                    <span className='text-white font-extrabold py-4'>Localização</span>
                    <Link className='text-zinc-100' to={'tel:55119999-9999'}>São Paulo, SP</Link>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='bg-zinc-200 p-4 rounded-xl w-fit'>
                        <Clock4 />
                    </div>
                    <span className='text-white font-extrabold py-4'>Horários</span>
                    <Link className='text-zinc-100' to={'tel:55119999-9999'}>Seg-Sex: 9h às 18h</Link>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
