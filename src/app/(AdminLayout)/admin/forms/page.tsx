import { Suspense } from "react";
import ShowModalWrapper from "../_components/ShowModalWrapper";
import { GetAllForms } from "../_actions/forms";
import FormCard from "../../../../components/Card/FormCard";

export default function Page() {
  return (
    <>
      <ShowModalWrapper />
      <div className="flex gap-4 flex-wrap">
        <Suspense fallback={<h2>Подгружаем формы</h2>}>
          <FormsCards />
        </Suspense>
      </div>
    </>
  );
}

async function FormsCards() {
  const forms = await GetAllForms();
  if (!forms.length) return <h2>Пока нет созданных форм</h2>;
  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}
