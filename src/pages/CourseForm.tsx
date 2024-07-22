import Button from "../components/Button/Button";

const CourseForm = () => {
  return (
    <div className="form_container">
      <div>
        <div className="title">Оставить заявку</div>
        <form className="fields">
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Телефон" />
          <input type="text" placeholder="Эл. почта" />
          <Button
            text="Отправить"
            style={{ width: "max-content", marginTop: "20px" }}
          />
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
