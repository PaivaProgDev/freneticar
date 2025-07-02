import { Menu, X } from 'lucide-react'
import { useActions } from '../context/userActions'
import NavigationTag from './Navigation'
import Logo from './Logo'

const Header = () => {
    const { handleOpeningModal, menuIsOpen } = useActions()
    return (
        <header className='sticky w-full top-0 z-10 bg-white overflow-hidden'>
            <div className='flex items-center justify-between w-full border-b px-8 py-4  border-zinc-300 '>
                <Logo />
                {
                    menuIsOpen ? <X onClick={handleOpeningModal} className='cursor-pointer' /> : <Menu onClick={handleOpeningModal} className='cursor-pointer' />
                }
            </div>
            <NavigationTag />
        </header>
    )
}

export default Header
