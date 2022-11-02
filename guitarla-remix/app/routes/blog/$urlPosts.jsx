import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers";

export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Entrada no encontrada 😢",
      description: "Guitarras, Venta de Guitarras, Entrada no encontrada",
    };
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description: `Guitarras, Venta de Guitarras, Entrada ${data.data[0].attributes.titulo}`,
  };
}

export async function loader({ params }) {
  const { urlPosts } = params;
  const post = await getPost(urlPosts);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada 😢",
    });
  }

  return post;
}

function Post() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post.data[0]?.attributes;
  console.log(post.data[0].attributes);
  return (
    <article className="post mt-3">
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra: ${titulo}`}
        className="imagen"
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
}

export default Post;
