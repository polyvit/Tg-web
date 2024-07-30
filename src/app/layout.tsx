import Header from "../components/Header";
import { NavLink } from "../components/Nav";
import { ROUTES } from "../utils/routes";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        ></link>
        {/* <script src="https://telegram.org/js/telegram-web-app.js"></script> */}
        <title>MCU shop</title>
      </head>
      <body>
        <div id="root">
          <div className="relative pb-[30px]">
            <div className="w-full pb-[20px]">
              <Header>
                <NavLink href={ROUTES.BOOKS}>Книги</NavLink>
              </Header>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
