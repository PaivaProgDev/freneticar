import { Menu, X } from 'lucide-react'
import { useActions } from '../context/userActions'
import NavigationTag from './Navigation'
import Logo from './Logo'

const Header = () => {
    const { handleOpeningModal, menuIsOpen } = useActions()
    return (
        <header className='sticky top-0 z-10 bg-white'>
            <div className='flex items-center justify-between w-full border px-8 py-4 border-zinc-300 '>
                <Logo />
                {
                    menuIsOpen ? <X onClick={handleOpeningModal} className='cursor-pointer' /> : <Menu onClick={handleOpeningModal} className='cursor-pointer' />
                }
            </div>
            <div className={`${menuIsOpen ? 'translate-0 duration-700' : '-translate-x-full duration-700'} bg-[#f3f4f6] fixed w-70 h-full transition-transform `}>
                <NavigationTag />
            </div>
        </header>
    )
}

export default Header
