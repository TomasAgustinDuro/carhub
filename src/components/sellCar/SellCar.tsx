import styles from "./SellCar.module.css";
import Auto from "../../interfaces/auto";
import autos from "../../assets/autos.json";
import fiesta from "../home/assets/fiesta.jpg";
import Dropdown from "../Dropdown";

function SellCar() {

  return (
      <div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="text"
            className={styles.input}
            placeholder="Search..."
          />
          <span className={styles.icon}>
            <svg
              width="19px"
              height="19px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="1"
                  d="M14 5H20"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  opacity="1"
                  d="M14 8H17"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                  stroke="#000"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  opacity="1"
                  d="M22 22L20 20"
                  stroke="#000"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        </div>

        <main>
          <aside className={styles.containerFilters}>
            <div className={styles.filterActions}>
              <p>Ocultar filtros  </p>

              <p>Limpiar</p>
            </div>

            <div className={styles.filters
            }>
                <Dropdown initialState={'Marcas'} options={['Manual', 'Transmision']} />
                <Dropdown initialState={'Estado '} options={['Reservado', 'Disponible']} />
                <Dropdown initialState={'Kilometraje '} options={['- 20.000 km', '20,000 - 50,000 km', '50,000 - 100,000 km', '+ 100.000 km']} />
                <Dropdown initialState={'Color '} options={['Negro', 'Plateado', 'Blanco', 'Gris', 'Otro', 'Rojo']} />
                <Dropdown initialState={'Combustible '} options={['Nafta', 'Gasoil', 'Gas']} />

            </div>
        
          </aside>

          <section className={styles.containerCarsOffer}>
            <div className={styles.offerActions}>
              <p>Resultados</p>

              <p>Ordenar</p>
            </div>

            <div className={styles.containerCards}>
              {autos.map((car: Auto, index: number) => {
                return (
                  <div key={index} className={styles.cardSell}>
                    <img src={fiesta} alt={"imagen de " + car.model} />
                    <div className={styles.informationSell}>
                      <h3>{car.model}</h3>
                      <div className={styles.informationFeatures}>
                        <p>{car.year} </p>
                        <p>{car.mileage} km </p>
                        <p>{car.transmission}</p>
                      </div>
                    </div>

                    <div className={styles.price}>
                      <p>Precio Contado</p>
                      <h2>
                        <strong>$ {car.price}</strong>
                      </h2>
                    </div>

                    <div>
                      <button>+ info</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main> 
      </div>
  );
}

export default SellCar;
