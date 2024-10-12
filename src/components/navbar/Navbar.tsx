import styles from "./navbar.module.scss";
import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <h1>CarHub</h1>
        </div>
        <ul>
          <li>
            <Link to="/sell-car" className="link link-black">Comprá un auto</Link>
          </li>
          <li>Vendé tu auto</li>
          <li>
            <Dropdown
              initialState={"Nosotros"}
              options={[
                { label: "Preguntas frecuentes", path: "/preguntas" },
                { label: "Opiniones", path: "/reviews" },
                { label: "Historia" },
              ]}
            />
          </li>
          <li>
            <Link to="/dolar" className="link link-black">Dolar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
