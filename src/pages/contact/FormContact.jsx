import { ChevronDownIcon, SendIcon } from "lucide-react"
import Button from "../../components/Button"

const FormContact = () => {
    return (
        <form className="shadow-lg flex items-center w-full max-w-xl bg-white mt-18 p-8 flex-col gap-10 border border-zinc-200 rounded-xl">
            <legend className="text-2xl text-start text-[var(--color-4)] font-black">Envie uma Mensagem</legend>
            <label className="w-full flex flex-col gap-2 text-start">
                <span className="text-sm font-bold  text-[var(--color-4)]">Nome Completo</span>
                <input className="border-2 w-full border-zinc-300 px-5 rounded-xl py-2" type="text" placeholder="Seu nome completo" />
            </label>
            <label className="w-full flex flex-col gap-2 text-start">
                <span className="text-sm font-bold  text-[var(--color-4)]">Email</span>
                <input className="border-2 w-full border-zinc-300 px-5 rounded-xl py-2" type="text" placeholder="seu@email.com" />
            </label>
            <label className="w-full flex flex-col gap-2 text-start">
                <span className="text-sm font-bold  text-[var(--color-4)]">Telefone</span>
                <input className="border-2 w-full border-zinc-300 px-5 rounded-xl py-2" type="text" placeholder="(11) 99999-9999" />
            </label>
            <label className="w-full flex flex-col gap-2 text-start">
                <span className="text-sm font-bold  text-[var(--color-4)]">Email</span>
                <input className="border-2 w-full border-zinc-300 px-5 rounded-xl py-2" type="text" placeholder="seu@email.com" />
            </label>
            <label className="w-full flex flex-col gap-2 text-start">
                <span className="text-sm font-bold text-[var(--color-4)]">Assunto</span>
                <div className="border-2 relative flex items-center justify-between  w-full border-zinc-300 rounded-xl ">
                    <select className="appearance-none rounded-xl w-full px-5 py-2">
                        <option value="" selected>Selecione um assunto</option>
                        <option value="Test Drive">Test Drive</option>
                        <option value="Interesse em Compra">Interesse em Compra</option>
                        <option value="Financiamento">Financiamento</option>
                        <option value="Manutenção">Manutenção</option>
                        <option value="Personalização">Personalização</option>
                        <option value="Outros">Outros</option>
                    </select>
                    <ChevronDownIcon className="text-[var(--color-4)] pointer-events-none absolute right-3" />
                </div>
            </label>
            <label className="w-full flex flex-col gap-2 text-start">
                <span className="text-sm font-bold text-[var(--color-4)]">Mensagem</span>
                <textarea maxLength={3} className="resize-none px-4 py-3 border-2 border-zinc-300 rounded-xl placeholder:text-sm" placeholder="Conte-nos como podemos ajudar você..."></textarea>
            </label>
            <Button>
                <SendIcon />
                <span>Enviar Mensagem</span>
            </Button>
        </form>
    )
}

export default FormContact
