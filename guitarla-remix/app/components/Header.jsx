import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
import Navegacion from "./Navegacion";

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link className="logo" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Navegacion />
      </div>
    </header>
  );
}

export default Header;
