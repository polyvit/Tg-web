import { redirect } from "next/navigation";
import { ROUTES } from "../utils/routes";

export default async function Home() {
  redirect(ROUTES.BOOKS);
}
