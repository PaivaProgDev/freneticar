import {
  ArrowRightIcon,
  ChevronRightIcon,
  FlameIcon,
  Gem,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import homeImage from "../../assets/images/home/bmw-m2-home.png";
import Collections from "./Collections";
import Engineering from "./Engineering";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <section>
      <div className="px-6 pt-6 overflow-hidden pb-12 bg-[var(--color-bg)]">
        <h1 className="font-extrabold text-5xl">Qualidade & Segurança</h1>
        <img
          className="w-full min-w-110 mt-14 mb-8"
          src={homeImage}
          alt="Imagem de um BMW M2"
        />
        <p className="text-[var(--color-4)]">
          Descubra a coleção mais exclusiva de veículos esportivos. Performance,
          design e tecnologia em perfeita harmonia.
        </p>
        <div className="flex flex-col gap-4 w-full mt-8">
          <Link to={"/gallery"}>
            <Button className={"w-full"}>
              Explorar Galeria
              <ChevronRightIcon />
            </Button>
          </Link>
          <Button
            className={
              "!bg-[var(--color-2)] hover:!bg-[var(--color-4)] hover:!text-[var(--color-2)] !text-[var(--color-5)] font-bold"
            }
          >
            Agendar Test Drive
          </Button>
        </div>
        <div className="flex justify-between mt-14">
          <div className="flex flex-col items-center">
            <div className="bg-[var(--color-3)] w-fit p-3 rounded-xl">
              <Zap />
            </div>
            <strong>500+</strong>
            <span>HP Médio</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[var(--color-3)] w-fit p-3 rounded-xl">
              <Gem />
            </div>
            <strong>50+</strong>
            <span>Modelos</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[var(--color-3)] w-fit p-3 rounded-xl">
              <Users />
            </div>
            <strong>1000+</strong>
            <span>Clientes</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-24">
          <h3 className="text-5xl w-50 font-black text-[var(--color-4)]">
            Mais Vendidos
          </h3>
          <FlameIcon className="size-10 stroke-red-400" />
        </div>
        <p className="mt-6">
          Confira os nossos queridos da casa, aqui nosso lema é qualidade,
          velocidade e segurança!
        </p>
        <Collections previewHome />
        <Link to={"/gallery"}>
          <Button className={"mt-16"}>
            Ver todos os veículos
            <ArrowRightIcon className="size-5" />
          </Button>
        </Link>
        <Engineering />
      </div>
      <Newsletter />
    </section>
  );
};

export default Home;
