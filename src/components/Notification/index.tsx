const Notification = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-4">
      <img
        width="96"
        height="96"
        src="https://img.icons8.com/fluency/96/checkmark--v1.png"
        alt="checkmark--v1"
      />
      <h2>Благодарим за обращение в Медицинский Корпоративный Университет</h2>
      <p className="leading-snug">
        В ближайшее время с вами свяжется менеджер с номера +7 (495) 198-11-01
        или в WhatsApp с номера +7 (999) 803-75-51 (с 9:00 до 18:00 Мск).
      </p>
      <p>Будьте на связи!</p>
    </div>
  );
};

export default Notification;
