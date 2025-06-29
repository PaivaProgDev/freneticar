import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
    return (
        <div className='flex items-center gap-4'>
            <Link to={'#'} className='bg-[var(--color-3)] hover:scale-105 hover:bg-[var(--color-1)] hover:text-[var(--color-3)] duration-300 w-fit p-3 rounded-xl cursor-pointer'>
                <FiInstagram className='size-6' />
            </Link>
            <Link to={'#'} className='bg-[var(--color-3)] hover:scale-105 hover:bg-[var(--color-1)] hover:text-[var(--color-3)] duration-300 w-fit p-3 rounded-xl cursor-pointer'>
                <FiFacebook className='size-6' />
            </Link>
            <Link to={'#'} className='bg-[var(--color-3)] hover:scale-105 hover:bg-[var(--color-1)] hover:text-[var(--color-3)] duration-300 w-fit p-3 rounded-xl cursor-pointer'>
                <FiTwitter className='size-6' />
            </Link>
            <Link to={'#'} className='bg-[var(--color-3)] hover:scale-105 hover:bg-[var(--color-1)] hover:text-[var(--color-3)] duration-200 w-fit p-3 rounded-xl cursor-pointer'>
                <FiYoutube className=' size-6' />
            </Link>
        </div>
    )
}

export default SocialMedia
