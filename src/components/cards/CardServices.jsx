import Button from "../Button"

const CardServices = ({ icon, title, subtitle, paragrafh, list }) => {
    return (
        <div className={'border-zinc-200 bg-white rounded-xl md:w-md border-2 p-10 w-full flex-col shadow-lg '}>
            <div className="flex flex-col gap-4">
                <div className="p-5 rounded-xl duration-200 text-white bg-[var(--color-4)] h-fit w-fit">
                    {icon}
                </div>
                <div className="text-start">
                    <h3 className="text-2xl font-extrabold w-50 sm:w-full mb-1 text-[var(--color-4)]">
                        {title}
                    </h3>
                    <span className="font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                        {subtitle}
                    </span>
                </div>
            </div>
            <p className="text-start text-zinc-600 my-6">
                {paragrafh}
            </p>
            <ul className="text-start text-[var(--color-4)] list-disc ml-3.5 font-medium">
                {list}
            </ul>
            <Button className={'mt-6'}>Soliciar Orçamento</Button>
        </div>
    )
}

export default CardServices
