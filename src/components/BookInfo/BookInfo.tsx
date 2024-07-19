import React from "react";
import Button from "../Button/Button";
import styles from "./BookInfo.module.scss";

const BookInfo = ({ data }) => {
  return (
    <>
      <h1>{data.title}</h1>
      <img className={styles.image} src={data.Image} alt="image" />
      <p style={{ lineHeight: "1.4" }}>{data.about}</p>
      <div className={styles.order}>
        <div>Цена:</div>
        <div className={styles.prices}>
          <span className={styles.actual}>{data.price} РУБ.</span>
          <span className={styles.old}>1500 РУБ.</span>
        </div>
        <Button text="Сделать заказ" />
      </div>
    </>
  );
};

export default BookInfo;
