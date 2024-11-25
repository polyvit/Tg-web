import FormConstructor from "../../../../../../components/FormConstructor";
import { GetFormById } from "../../../_actions/forms";

export default async function ConstructorPage({
  params,
}: {
  params: { formId: string };
}) {
  const { formId } = params;
  const form = await GetFormById(formId);

  if (!form) throw new Error();

  return <FormConstructor form={form} />;
}

// if form, return FormConstructor
