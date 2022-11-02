import { Link } from "react-router-dom";
import { formatearFecha } from "~/utils/helpers";

function Posts({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return (
    <article className="post">
      <img
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen blog ${titulo}`}
        className="imagen"
      />
      <div className="contenido">
        <h3 className="">{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
        <Link className="enlace" to={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}

export default Posts;
