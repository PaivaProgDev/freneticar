import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { ArrowRightIcon } from "lucide-react";
import Card from "../../components/Cards";

const Collections = ({
  id,
  showButtonDetails,
  showFilterButtons,
  previewHome,
  previewGallery,
}) => {
  const [activatedButton, setActivatedButton] = useState("Todos");
  const [activatedCardList, setActivatedCardList] = useState([]);
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      const res = await fetch("/cars.json");
      const data = await res.json();
      setAllCars(data);
    };

    getCars();
  }, []);

  const handleSelectCard = (e) => {
    const targetValue = e.target.textContent;
    setActivatedButton(targetValue);

    // Filtra os carros de acordo com a escolha do usuário
    const filteredCard = allCars.filter((car) => car.brand === targetValue);
    setActivatedCardList(filteredCard);
  };

  const preview = [
    {
      id: 1,
      name: "Chiron",
      brand: "Bugatti",
      hp: "670 CV • 0-100 em 3.0s",
      price: "50.000.000",
      image: "../../images/cars/Bugatti-blue.png",
    },
    {
      id: 2,
      name: " Huracán",
      brand: "Lamborghini",
      hp: "630 CV • 0-100 em 3.2s",
      price: "2.200.200",
      image: "/src/images/cars/Huracan.png",
    },
    {
      id: 3,
      name: "720s",
      brand: "McLaren",
      hp: "720 CV • 0-100 em 2.8s",
      price: "3.500.000",
      image: "/src/images/cars/720s.png",
    },
    {
      id: 4,
      name: "R8",
      brand: "Audi",
      hp: "610 CV • 0-100 em 3.2s",
      price: "2.069.831",
      image: "/src/images/cars/Audi-r8.png",
    },
    {
      id: 5,
      name: "Vantage",
      brand: "Aston Martin",
      hp: "700 CV • 0-100 em 3.5s",
      price: "3.200.000",
      image: "/src/images/cars/Aston-vantage.png",
    },
  ];

  return (
    <div className="mt-16">
      {showFilterButtons && (
        <div className="grid grid-cols gap-4">
          <Button
            onClick={handleSelectCard}
            className={`col-start-1 col-span-3 font-medium  ${
              activatedButton === "Todos"
                ? "!bg-[var(--color-1)] !text-[var(--color-2)] border-2 border-[var(--color-2)]"
                : "!bg-[var(--color-2)] !text-[var(--color-4)] border-2 border-zinc-300"
            }`}
          >
            Todos
          </Button>
          <Button
            onClick={handleSelectCard}
            className={`col-start-1 col-end-3  font-medium ${
              activatedButton === "Lamborghini"
                ? "!bg-[var(--color-1)] !text-[var(--color-2)] border-2 border-[var(--color-2)]"
                : "!bg-[var(--color-2)] !text-[var(--color-4)] border-2 border-zinc-300"
            }`}
          >
            Lamborghini
          </Button>
          <Button
            onClick={handleSelectCard}
            className={`col-start-3 font-medium ${
              activatedButton === "Bugatti"
                ? "!bg-[var(--color-1)] !text-[var(--color-2)] border-2 border-[var(--color-2)]"
                : "!bg-[var(--color-2)] !text-[var(--color-4)] border-2 border-zinc-300"
            }`}
          >
            Bugatti
          </Button>
          <Button
            onClick={handleSelectCard}
            className={`col-start-1 font-medium ${
              activatedButton === "McLaren"
                ? "!bg-[var(--color-1)] !text-[var(--color-2)] border-2 border-[var(--color-2)]"
                : "!bg-[var(--color-2)] !text-[var(--color-4)] border-2 border-zinc-300"
            }`}
          >
            McLaren
          </Button>
          <Button
            onClick={handleSelectCard}
            className={`col-start-2 font-medium ${
              activatedButton === "Audi"
                ? "!bg-[var(--color-1)] !text-[var(--color-2)] border-2 border-[var(--color-2)]"
                : "!bg-[var(--color-2)] !text-[var(--color-4)] border-2 border-zinc-300"
            }`}
          >
            Audi
          </Button>
          <Button
            onClick={handleSelectCard}
            className={`col-start-3 font-medium ${
              activatedButton === "Aston Martin"
                ? "!bg-[var(--color-1)] !text-[var(--color-2)] border-2 border-[var(--color-2)]"
                : "!bg-[var(--color-2)] !text-[var(--color-4)] border-2 border-zinc-300"
            }`}
          >
            Aston Martin
          </Button>
        </div>
      )}
      {previewGallery && (
        <p className="mt-7 font-medium text-[17px]">
          {(activatedCardList !== 0 && activatedCardList.length) ||
            (allCars.length !== 0 && allCars.length)}{" "}
          veículos encontrados
        </p>
      )}
      <div className="flex flex-col gap-8 mt-12">
        {activatedCardList.length !== 0 ? (
          activatedCardList.map((car) => (
            <Card
              key={car.id}
              className="flex flex-col shadow max-w-10rem overflow-hidden hover:-translate-y-2 duration-400 !p-0"
            >
              <img
                className="rounded-t-xl hover:scale-110 duration-700 object-cover"
                src={car.image}
                alt="Foto do veículo"
              />
              <div className="px-6 py-5 text-start">
                <div className="flex flex-col text-md mb-4">
                  <strong className="text-2xl text-[var(--color-4)]">
                    {car.name}
                  </strong>
                  <span>{car.brand}</span>
                  <span className="text-zinc-600">{car.hp}</span>
                </div>
                <span className="font-bold text-1xl ">R$ {car.price}</span>
                {showFilterButtons && (
                  <Button className={"mt-3"}>
                    Ver detalhes
                    <ArrowRightIcon className="size-5" />
                  </Button>
                )}
              </div>
            </Card>
          ))
        ) : (
          <>
            {previewHome &&
              preview.map((car) => (
                <Card
                  key={car.id}
                  className="flex flex-col shadow max-w-10rem overflow-hidden hover:-translate-y-2 duration-400 !p-0"
                >
                  <div className="overflow-hidden ">
                    <img
                      className="rounded-t-xl group-hover:scale-110 duration-700"
                      src={car.image}
                      alt="Foto do veículo"
                    />
                  </div>
                  <div className="px-6 pb-5 text-start">
                    <div className="flex flex-col text-md mb-4">
                      <strong className="text-2xl text-[var(--color-4)]">
                        {car.name}
                      </strong>
                      <span>{car.brand}</span>
                      <span className="text-zinc-600">{car.hp}</span>
                    </div>
                    <span className="font-bold text-1xl text-[var(--color-4)]">
                      R$ {car.price}
                    </span>
                    {showFilterButtons && (
                      <Button className={"mt-3"}>
                        Ver detalhes
                        <ArrowRightIcon className="size-5" />
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            {previewGallery &&
              allCars.map((car) => (
                <Card
                  key={car.id}
                  className={
                    "flex flex-col !border-zinc-300 max-w-10rem overflow-hidden hover:-translate-y-2 duration-400 !p-0"
                  }
                >
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-xl group-hover:scale-110 duration-700"
                      src={car.image}
                      alt="Foto do veículo"
                    />
                  </div>
                  <div className="px-6 py-5 text-start">
                    <div className="flex flex-col text-md mb-4">
                      <strong className="text-2xl text-[var(--color-4)]">
                        {car.name}
                      </strong>
                      <span>{car.brand}</span>
                      <span className="text-zinc-600">{car.hp}</span>
                    </div>
                    <span className="font-bold text-2xl text-[var(--color-4)]">
                      R$ {car.price}
                    </span>
                    {showFilterButtons && (
                      <Button className={"mt-3"}>
                        Ver detalhes
                        <ArrowRightIcon className="size-5" />
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Collections;
