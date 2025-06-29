const Button = ({ className, onClick, disabled, children }) => {
    return <button onClick={onClick} className={`bg-[var(--color-1)] hover:bg-white hover:border-black border-2 hover:text-black duration-200 cursor-pointer text-white w-full font-bold py-4 flex gap-4 items-center justify-center rounded-xl ${className}`} disabled={disabled}>{children}</button>
}

export default Button
