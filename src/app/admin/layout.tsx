import { ReactNode } from "react";
import Header from "../../components/Header";
import { Nav, NavLink } from "../../components/Nav";
import { ROUTES } from "../../utils/routes";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Header>
        <Nav>
          <NavLink href={ROUTES.PRODUCTS}>Продукты</NavLink>
        </Nav>
      </Header> */}
      <div className="px-[20px]">{children}</div>
    </>
  );
}
