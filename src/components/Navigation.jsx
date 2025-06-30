import { NavLink, Link } from 'react-router-dom'
import { useActions } from '../context/userActions'
import Button from './Button'
import { useEffect } from 'react'

const NavigationTag = () => {
    const { menuIsOpen, handleOpeningModal } = useActions()

    if (menuIsOpen) {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                handleOpeningModal()
            }
        })
    }

    return (
        <div onClick={handleOpeningModal} className='w-screen h-full'>
            <nav onClick={(e) => e.stopPropagation()} className={`flex flex-col gap-4 px-6 py-4 border-r-1 z-30 border-r-zinc-200 max-w-70  text-sm font-medium text-[var(--color-4)]`}>
                <NavLink to={'/'} className={`${menuIsOpen ? 'translate-0 duration-300' : '-translate-x-full duration-800'}`}>
                    {({ isActive }) => (
                        <span className={`${isActive && 'bg-[var(--color-4)] duration-100 text-white px-4.5 py-1.5 rounded-lg'}`}>Home</span>
                    )}
                </NavLink>
                <NavLink to={'/gallery'} className={`${menuIsOpen ? 'translate-0 duration-400' : '-translate-x-full duration-700'}`}>
                    {({ isActive }) => (
                        <span className={`${isActive && 'bg-[var(--color-4)] duration-100 text-white px-4.5 py-1.5 rounded-lg'}`}>Galeria</span>
                    )}
                </NavLink>
                <NavLink to={'/about'} className={`${menuIsOpen ? 'translate-0 duration-500' : '-translate-x-full duration-600'}`}>
                    {({ isActive }) => (
                        <span className={`${isActive && 'bg-[var(--color-4)] duration-100 text-white px-4.5 py-1.5 rounded-lg'}`}>Sobre</span>
                    )}
                </NavLink>
                <NavLink to={'/services'} className={`${menuIsOpen ? 'translate-0 duration-600' : '-translate-x-full duration-500'}`}>
                    {({ isActive }) => (
                        <span className={`${isActive && 'bg-[var(--color-4)] duration-100 text-white px-4.5 py-1.5 rounded-lg'}`}>Serviços</span>
                    )}
                </NavLink>
                <NavLink to={'/contact'} className={`${menuIsOpen ? 'translate-0 duration-700' : '-translate-x-full duration-400'}`}>
                    {({ isActive }) => (
                        <span className={`${isActive && 'bg-[var(--color-4)] duration-100 text-white px-4.5 py-1.5 rounded-lg'}`}>Contato</span>
                    )}
                </NavLink>
                <Link to={'/budget'}>
                    <Button className={`${menuIsOpen ? 'translate-0 duration-800' : '-translate-x-full'} px-4`}>Solicitar orçamento</Button>
                </Link>
            </nav>
        </div>
    )
}

export default NavigationTag
