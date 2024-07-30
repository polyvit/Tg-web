import CourseForm from "./_components/CourseForm";
import PageHeader from "./_components/PageHeader";

export default function Home() {
  return (
    <div className="px-[20px]">
      <PageHeader text="Заполните форму записи на курс" />
      <CourseForm />
    </div>
  );
}
