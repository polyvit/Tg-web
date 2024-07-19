import BookInfo from "../../../../components/BookInfo/BookInfo";
import { getData } from "../../../../db";

const data = getData();

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <BookInfo data={data[params.id]} />
    </div>
  );
}
