import { Link } from 'react-router-dom'
import { useActions } from '../context/userActions'
import Button from './Button'

const NavigationTag = () => {
    const { menuIsOpen } = useActions()

    return (
        <nav className={`flex flex-col gap-4 px-6 py-4 text-sm font-medium text-[var(--color-4)]`}>
            <Link to={'/'} className={`${menuIsOpen ? 'translate-0 duration-300' : '-translate-x-full duration-800'}`}>Home</Link>
            <Link to={'/gallery'} className={`${menuIsOpen ? 'translate-0 duration-400' : '-translate-x-full duration-700'}`}>Galeria</Link>
            <Link to={'/about'} className={`${menuIsOpen ? 'translate-0 duration-500' : '-translate-x-full duration-600'}`}>Sobre</Link>
            <Link to={'/services'} className={`${menuIsOpen ? 'translate-0 duration-600' : '-translate-x-full duration-500'}`}>Serviços</Link>
            <Link to={'/contact'} className={`${menuIsOpen ? 'translate-0 duration-700' : '-translate-x-full duration-400'}`}>Contato</Link>
            <Link to={'/budget'}>
                <Button className={`${menuIsOpen ? 'translate-0 duration-800' : '-translate-x-full'} px-4`}>Solicitar orçamento</Button>
            </Link>
        </nav>
    )
}

export default NavigationTag
