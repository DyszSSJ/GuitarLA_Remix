import { Link } from "react-router-dom";

function Guitarras({ guitarra }) {
  const { nombre, precio, imagen, descripcion, url } = guitarra;
  return (
    <div className="guitarra">
      <img
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen Guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">$ {precio}</p>
        <Link to={`/guitarras/${url}`} className="enlace">
          {" "}
          Ver Producto
        </Link>
      </div>
    </div>
  );
}

export default Guitarras;
