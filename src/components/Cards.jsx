const Card = ({ children, className, cardId }) => {
    return (
        <div key={cardId} className={`${className} flex gap-4 border border-transparent group hover:shadow-lg hover:text-[var(--color-1)] hover:bg-[var(--color-3)] hover:border-zinc-200 rounded-xl p-5`}>{children}</div>
    )
}

export default Card
