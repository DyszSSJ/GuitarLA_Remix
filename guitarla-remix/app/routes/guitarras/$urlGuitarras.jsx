import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ params }) {
  const { urlGuitarras } = params;
  const guitarra = await getGuitarra(urlGuitarras);

  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Lo sentimos no encontramos ninguna guitarra 😢",
    });
  }

  return guitarra;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Guitar no encontrada",
      description: "Guitarras, Venta de Guitarras, Guitarra no encontrada",
    };
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `Guitarras, Venta de Guitarras, Guitarra ${data.data[0].attributes.nombre}`,
  };
}

function Guitarra() {
  const { handleAgregarCarrito } = useOutletContext();
  
  const [cantidad, setCantidad] = useState(0);

  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cantidad === 0) {
      alert("Debes agregar al menos una guitarra");
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      nombre: guitarra.data[0].attributes.nombre,
      imagen: imagen.data.attributes.url,
      precio: precio,
      cantidad: cantidad,
    };
    handleAgregarCarrito( guitarraSeleccionada );
  };
  return (
    <div className="guitarra">
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra: ${nombre}`}
        className="imagen"
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">$ {precio}</p>
        <form action="" className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad: </label>
          <select
            name="cantidad"
            id="cantidad"
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
}

export default Guitarra;
