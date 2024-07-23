import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../components/Button/Button";
import { sendTgMethod } from "../utils/tg-api";
import useHttp from "../hooks/use-http";
import Input from "../components/Input/Input";
import Notification from "../components/Notification/Notification";

const CourseForm = () => {
  const { sendHttpRequest, status } = useHttp(sendTgMethod);
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      placeholder: "Ваше имя",
      name: "name",
      required: true,
    },
    {
      id: 2,
      type: "number",
      placeholder: "Телефон",
      name: "tel",
      required: true,
    },
    {
      id: 3,
      type: "email",
      placeholder: "Эл. почта",
      name: "email",
      required: true,
    },
  ];

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
    const [name, tel, email] = Object.values(formData);
    const text = `Заявка от ${name}\nПочта: ${email}\nТелефон: ${tel}`;
    sendHttpRequest(text);
  };

  return (
    <div className="form_container">
      {status === null && (
        <>
          <div className="title">Оставить заявку</div>
          <form className="fields" onSubmit={formHandler}>
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                value={formData[input.name]}
                onChange={changeHandler}
              />
            ))}
            <Button
              disabled={!Object.values(formData).every((el) => el)}
              text="Отправить"
              type="submit"
              style={{ width: "max-content", marginTop: "20px" }}
            />
          </form>
        </>
      )}
      {status === "success" && <Notification />}
    </div>
  );
};

export default CourseForm;
