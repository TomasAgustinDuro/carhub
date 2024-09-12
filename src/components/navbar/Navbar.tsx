import styles from "./navbar.module.scss";

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
            Nosotros
            {/* <ul>
              <li>Sucursales</li>
              <li>Opiniones</li>
              <li>Historia</li>
            </ul> */}
          </li>
          <li>Dolar</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
