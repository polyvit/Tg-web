import { Book } from "@prisma/client";
import Button from "../Button";
import { ROUTES } from "../../utils/routes";

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
  console.log(widgetGC);

  return (
    <div className="h-full border border-solid border-card-border text-center">
      <img src={imagePath} alt="image" className="w-full" />
      <div className="flex flex-col gap-6	text-center pt-2.5 px-2.5 pb-5">
        <a href={`${ROUTES.BOOKS}/${id}`} className="text-lg">
          {title}
        </a>
        <div className="text-2xl font-bold">{price} РУБ.</div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Button text="Купить" onClick={buyClickHandler} />
          {/* <Button
            btnType="link"
            text="Подробнее"
            onClick={() => alert("Подробнее")}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
