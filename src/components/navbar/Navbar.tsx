import styles from "./navbar.module.scss";
import Dropdown from "../Dropdown";

function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <h1>CarHub</h1>
        </div>
        <ul>
          <li>Comprá un auto</li>
          <li>Vendé tu auto</li>
         <li>
          <Dropdown initialState={'Nosotros'} options={['Preguntas frecuentes', 'Opiniones', 'Historia']}/>
         </li>
          <li>Dolar</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
