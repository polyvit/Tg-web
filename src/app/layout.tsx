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
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
