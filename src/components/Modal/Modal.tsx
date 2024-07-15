import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

interface IModalProps {
  src: string;
  setIsOpen(x: boolean): void;
}

const Modal: React.FC<IModalProps> = ({ src, setIsOpen }) => {
  useEffect(() => {
    document.querySelector("iframe")?.scrollBy(0, 300);
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <button onClick={() => setIsOpen(false)} className={styles.close}>
            &times;
          </button>
          <iframe src={src} className={styles.iframe}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
