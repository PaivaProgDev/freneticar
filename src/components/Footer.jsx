import { useActions } from '../context/userActions'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { Link } from 'react-router-dom'

const Footer = () => {
    const { menuIsOpen } = useActions()
    return (
        <footer className='border-t bg-white  border-zinc-300 px-6 pt-6'>
            <Logo />
            <p className='text-[var(--color-4)] my-5'>Sua paixão por veículos esportivos começa aqui. Experiência premium em cada detalhe.</p>
            <SocialMedia />
            <div className='flex flex-col gap-4 mt-10'>
                <h3 className='text-2xl font-bold flex'>Links Rápidos</h3>
                <Link to={'/'} className={`text-[var(--color-4)]`}>Home</Link>
                <Link to={'/gallery'} className={`text-[var(--color-4)]`}>Galeria</Link>
                <Link to={'/about'} className={`text-[var(--color-4)]`}>Sobre</Link>
                <Link to={'/services'} className={`text-[var(--color-4)]`}>Serviços</Link>
                <Link to={'/contact'} className={`text-[var(--color-4)]`}>Contato</Link>
            </div>
            <div className='flex flex-col gap-4 mt-8'>
                <h3 className='text-2xl font-bold flex'>Serviços</h3>
                <Link to={'/'} className={`text-[var(--color-4)]`}>Test Drive</Link>
                <Link to={'/gallery'} className={`text-[var(--color-4)]`}>Financiamento</Link>
                <Link to={'/about'} className={`text-[var(--color-4)]`}>Manutenção</Link>
                <Link to={'/services'} className={`text-[var(--color-4)]`}>Personalização</Link>
            </div>
            <div className='border-t-2 border-zinc-100 mt-12 flex justify-center'>
                <p className='pt-6 pb-2 w-60   text-center '>&copy; 2025 Freneticar. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
