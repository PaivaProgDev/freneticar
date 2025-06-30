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
        <div onClick={handleOpeningModal} className={`${menuIsOpen ? 'translate-0 duration-700' : '-translate-x-full duration-700'} bg-trans fixed w-full h-full transition-transform `}>
            <nav className={`w-70 border-r-1 z-30 bg-white border-r-zinc-200 h-full text-sm font-medium text-[var(--color-4)]`}>
                <div className='flex flex-col' onClick={(e) => e.stopPropagation()}>
                    <NavLink to={'/'} className={`${menuIsOpen ? 'translate-0 duration-300' : '-translate-x-full duration-800'} px-6 pt-5`}>
                        {({ isActive }) => (
                            <span className={`${isActive && 'bg-[var(--color-4)] duration-100 !translate-x-0 text-white px-4.5 py-1.5 rounded-lg'} duration-200 flex hover:translate-x-1`}>Home</span>
                        )}
                    </NavLink>
                    <NavLink to={'/gallery'} className={`${menuIsOpen ? 'translate-0 duration-400' : '-translate-x-full duration-700'} px-6 pt-5`}>
                        {({ isActive }) => (
                            <span className={`${isActive && 'bg-[var(--color-4)] duration-100 !translate-x-0 text-white px-4.5 py-1.5 rounded-lg'} duration-200 flex hover:translate-x-1`}>Galeria</span>
                        )}
                    </NavLink>
                    <NavLink to={'/about'} className={`${menuIsOpen ? 'translate-0 duration-500' : '-translate-x-full duration-600'} px-6 pt-5`}>
                        {({ isActive }) => (
                            <span className={`${isActive && 'bg-[var(--color-4)] duration-100 !translate-x-0 text-white px-4.5 py-1.5 rounded-lg'} duration-200 flex hover:translate-x-1`}>Sobre</span>
                        )}
                    </NavLink>
                    <NavLink to={'/services'} className={`${menuIsOpen ? 'translate-0 duration-600' : '-translate-x-full duration-500'} px-6 pt-5`}>
                        {({ isActive }) => (
                            <span className={`${isActive && 'bg-[var(--color-4)] duration-100 !translate-x-0 text-white px-4.5 py-1.5 rounded-lg'} duration-200 flex hover:translate-x-1`}>Serviços</span>
                        )}
                    </NavLink>
                    <NavLink to={'/contact'} className={`${menuIsOpen ? 'translate-0 duration-700' : '-translate-x-full duration-400'} px-6 py-5`}>
                        {({ isActive }) => (
                            <span className={`${isActive && 'bg-[var(--color-4)] duration-100 !translate-x-0 text-white px-4.5 py-1.5 rounded-lg'} duration-200 flex hover:translate-x-1`}>Contato</span>
                        )}
                    </NavLink>
                    <Link className='px-6' to={'/budget'}>
                        <Button className={`${menuIsOpen ? 'translate-0 duration-800' : '-translate-x-full'} px-4`}>Solicitar orçamento</Button>
                    </Link>
                </div>
            </nav>
        </div >
    )
}

export default NavigationTag
