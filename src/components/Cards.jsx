import Button from "./Button"
import { ArrowRightIcon } from "lucide-react"

const Card = ({ className, cardId, detailBtn, carImage, carName, carBrand, carHp, carPrice }) => {
    return (
        <div key={cardId} className={`${className} ${'grow flex max-w-[10rem] flex-col min-w-[20rem] shadow-lg md:hover:-translate-y-0 md:hover:-translate-x-1 border border-zinc-200 rounded-xl overflow-hidden hover:-translate-y-2 duration-400 !p-0'} `}>
            <div className="overflow-hidden">
                <img
                    className="rounded-t-xl h-50 w-full  group-hover:scale-110 duration-700"
                    src={carImage}
                    alt="Foto do veículo"
                />
            </div>
            <div className="px-6 py-5 text-start">
                <div className="flex flex-col text-md mb-4">
                    <strong className="text-2xl text-[var(--color-4)]">
                        {carName}
                    </strong>
                    <span>{carBrand}</span>
                    <span className="text-zinc-600">{carHp}</span>
                </div>
                <span className="font-bold text-2xl text-[var(--color-4)]">
                    R$ {carPrice}
                </span>
                {
                    detailBtn && (
                        <Button className={"mt-3"}>
                            Ver detalhes
                            <ArrowRightIcon className="size-5" />
                        </Button>
                    )
                }
            </div>
        </div>
    )
}

export default Card
