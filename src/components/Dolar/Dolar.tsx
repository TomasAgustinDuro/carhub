import { useEffect, useState, useRef } from "react";
import { getDolar } from "./services/dolarBlue";
import Dolar from "./interfaces/dolarBlue";
import styles from './dolar.module.scss'

function DolarComponent() {
  const [dolarValue, setDolarValue] = useState<Dolar | null>(null);
  const [carValue, setCarValue] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchDolar = async () => {
      const value = await getDolar();
      setDolarValue(value);
    };

    fetchDolar();
  }, []);

  const handleClick = () => {
    if (inputRef.current) {
      const inputValue = Number(inputRef.current.value);

      if (dolarValue) {
        const carValue = inputValue / dolarValue.venta;
        setCarValue(carValue);
        inputRef.current.value = String(0);
      } else {
        console.error("El valor del dólar no está disponible."); // Manejo de error
      }


    }
  };

  return (
    <>
      <div className={styles.dolarText}>
        <h1>Informativo</h1>

        <p>
          En nuestro sistema utilizamos la cotización del dólar blue para
          reflejar el precio de los vehículos, ya que es la referencia más
          cercana al valor real de la moneda en el mercado informal. La
          cotización que mostramos se actualiza en tiempo real, basada en
          fuentes confiables del mercado paralelo. Si deseas saber el precio
          exacto de un vehículo en dólares, puedes utilizar nuestra calculadora
          ingresando el precio en pesos, y te proporcionaremos el valor
          correspondiente en dólares blue.
        </p>
      </div>

      <div className={styles.calculatorDolar}>
        <input type="number" placeholder="Valor en pesos" ref={inputRef} />
        <button onClick={handleClick}>Convertir a dólar</button>

        <div>
          {carValue !== null && (
            <p>El valor del auto en dólares es de: USD$ {carValue.toFixed(0)}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default DolarComponent;
