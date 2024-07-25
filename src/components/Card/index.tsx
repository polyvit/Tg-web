import Button from "../Button";

interface ICard {
  Image: string;
  price: number;
  title: string;
  src: string;
  setIsOpen(x: boolean): void;
  setCurrentModal(x: string): void;
}

const Card: React.FC<ICard> = ({
  Image,
  title,
  price,
  src,
  setIsOpen,
  setCurrentModal,
}) => {
  const buyClickHandler = () => {
    setIsOpen(true);
    setCurrentModal(src);
  };

  return (
    <div className="h-full border border-solid border-card-border text-center">
      <img src={Image} alt="" className="w-full" />
      <div className="flex flex-col gap-6	text-center pt-2.5 px-2.5 pb-5">
        <a href="" className="text-lg">
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
