import styles from "./Card.module.scss";
import Button from "../Button/Button";

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
    <div className={styles.card}>
      <img src={Image} alt="" />
      <div className={styles.info}>
        <a href="">{title}</a>
        <div className={styles.price}>{price} РУБ.</div>
        <div className={styles.controls}>
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
