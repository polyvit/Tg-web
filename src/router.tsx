import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BooksPage from "./pages/BooksPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/books",
    element: <BooksPage />,
  },
]);
