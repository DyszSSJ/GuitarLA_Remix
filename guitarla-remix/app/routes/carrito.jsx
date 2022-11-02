import { useState, useEffect } from "react";
import { useOutletContext } from "@remix-run/react";
import styles from "../styles/carrito.css";
import { ClientOnly } from "remix-utils";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta() {
  return {
    title: "GuitarLA - Carrito de compras",
    description: "Carrito de compras para ventas de guitarras",
  };
}

function Carrito() {
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const total = carrito.reduce((total, guitarra) => {
      return total + guitarra.precio * guitarra.cantidad;
    }, 0);
    setTotal(total);
  }, [carrito]);
  return (
    <ClientOnly fallback={"Cargando"}>
      {() => (
        <main className="contenedor">
          <h1 className="heading">Carrito de compras</h1>
          <div className="contenido">
            <div className="carrito">
              <h2>Articulos</h2>
              {carrito?.length === 0 ? (
                <p>No hay articulos en el carrito</p>
              ) : (
                carrito?.map((producto) => (
                  <div key={producto.id} className="producto">
                    <div>
                      <img src={producto.imagen} alt={producto.nombre} />
                    </div>
                    <div>
                      <p className="nombre">{producto.nombre}</p>
                      <p>Cantidad:</p>
                      <select
                        name=""
                        id=""
                        value={producto.cantidad}
                        className="select"
                        onChange={(e) =>
                          actualizarCantidad({
                            cantidad: +e.target.value,
                            id: producto.id,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                      <p className="precio">
                        $ <span>{producto.precio}</span>
                      </p>
                      <p className="subtotal">
                        SubTotal: ${" "}
                        <span>{producto.cantidad * producto.precio}</span>
                      </p>
                    </div>
                    <button
                      className="butonEliminar"
                      type="button"
                      onClick={() => eliminarGuitarra(producto.id)}
                    >
                      x
                    </button>
                  </div>
                ))
              )}
            </div>

            <aside className="resumen">
              <h3>Resumen del pedido</h3>
              <p className="total">
                Total a pagar: $ <span>{total}</span>
              </p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
}

export default Carrito;
