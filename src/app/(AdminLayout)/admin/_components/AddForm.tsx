import { useFormState } from "react-dom";
import SubmitButton from "../../../../components/SubmitButton";
import Input from "../../../../components/Input";
import { CreateForm } from "../_actions/forms";
import { useEffect } from "react";

function AddForm({ setIsOpen }: { setIsOpen(x: boolean): void }) {
  const [data, actionFunction] = useFormState(CreateForm, {
    status: "",
    payload: "",
  });

  useEffect(() => {
    if (data.status == "success") {
      setIsOpen(false);
    }
  }, [data.status]);

  // async function onSubmit(values) {
  //   try {
  //     const formId = await CreateForm(values);
  //   } catch (err) {}
  // }

  const inputs = [
    {
      id: "name",
      name: "name",
      placeholder: "Укажите название формы",
      label: "Название формы",
      type: "text",
    },
    {
      inputType: "textarea",
      id: "description",
      name: "description",
      placeholder: "Укажите, для чего будет использоваться эта форма",
      label: "Пояснение к форме",
      rows: 4,
    },
  ];

  return (
    <form action={actionFunction} className="mt-[30px]">
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          errorMessage={
            data.status == "failure" &&
            data.payload &&
            data.payload[input.name as keyof typeof data.payload]
              ? data.payload[input.name as keyof typeof data.payload]![0]
              : null
          }
        />
      ))}
      <SubmitButton />
    </form>
  );
}

export default AddForm;
