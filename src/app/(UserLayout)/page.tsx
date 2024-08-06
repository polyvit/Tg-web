import CourseForm from "../_components/CourseForm";
import PageHeader from "../_components/PageHeader";
import PageInfo from "../_components/PageInfo";

export default function Home() {
  return (
    <div className="px-[20px]">
      <PageInfo />
      <PageHeader text="Заполните форму записи" />
      <CourseForm />
    </div>
  );
}
