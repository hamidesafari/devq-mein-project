import { Link } from "react-router-dom";
import "./index.scss";
/* import { BiUser } from "react-icons/bi"; */
import useUser from "../hooks/useUser";

export default function Layout(props) {
  const user = useUser();

  const accountLink = user.data ? "/account" : "/login";

  return (
    <div className="Layout">
      <header>
        <Link to="/" className="logo">
          DevQ
        </Link>
        <div className="spacer" />
        <Link to={accountLink} className="icon-wrapper">
          {/*  <BiUser size={30} color="black" /> */}
        </Link>
        <Link to="/create-question" className="question-button">
          Erstellen
        </Link>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
