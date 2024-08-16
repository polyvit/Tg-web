import { Book } from "@prisma/client";
import Button from "../Button";
import { ROUTES } from "../../utils/routes";
import Link from "next/link";

interface ICard extends Book {
  setIsOpen(x: boolean): void;
  setCurrentModal(x: string): void;
}

type CardProps = Partial<ICard>;

const Card: React.FC<CardProps> = ({
  id,
  imagePath,
  title,
  price,
  widgetGC,
  setIsOpen,
  setCurrentModal,
}) => {
  const buyClickHandler = () => {
    if (setIsOpen && setCurrentModal && widgetGC) {
      setIsOpen(true);
      setCurrentModal(widgetGC);
    }
  };

  return (
    <div className="h-full border border-solid border-card-border text-center">
      <img
        src={imagePath ?? ""}
        alt="Изображение книги"
        className="w-full h-[50%] object-contain"
      />
      <div className="flex flex-col gap-4	text-center pt-2.5 px-2.5 pb-5">
        <a href={`${ROUTES.BOOKS}/${id}`} className="text-l">
          {title}
        </a>
        <div className="text-2xl font-bold">{price} РУБ.</div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Button text="Купить" onClick={buyClickHandler} />
          <Link href={`${ROUTES.BOOKS}/${id}`}>
            <Button btnType="link" text="Подробнее" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
