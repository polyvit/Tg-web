import BookInfo from "../../../../components/BookInfo/BookInfo";
import { getData } from "../../../../data";
import { bookDatabase } from "../../../../utils/workDb";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await bookDatabase.findBookById(params.id);
  return (
    <div>
      <BookInfo data={product} />
    </div>
  );
}
