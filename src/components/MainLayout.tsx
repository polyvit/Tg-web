import logo from "../assets/logo-text.svg";
import Button from "./Button/Button";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  const currentUrlArray = window.location.href.split("/");
  const page = currentUrlArray[currentUrlArray.length - 1];
  return (
    <div style={{ position: "relative", paddingBottom: "30px" }}>
      <div className="container">
        <div className="menu">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          {page !== "books" && (
            <Link to="books">
              <Button btnType="link" text="Книги" style={{ color: "red" }} />
            </Link>
          )}
          {/* <button>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5" y="10" width="30" height="4" fill="#37383E"></rect>
              <rect x="5" y="18" width="30" height="4" fill="#37383E"></rect>
              <rect x="5" y="26" width="30" height="4" fill="#37383E"></rect>
            </svg>
          </button> */}
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
