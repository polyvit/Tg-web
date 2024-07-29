import { ReactNode } from "react";
import Header from "../../../components/Header";
import { Nav, NavLink } from "../../../components/Nav";
import { ROUTES } from "../../../utils/routes";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>
        <NavLink href={ROUTES.BOOKS}>Книги</NavLink>
      </Header>
      {children}
    </>
  );
}
