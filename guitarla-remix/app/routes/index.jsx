import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCurso } from "~/models/curso.server";
import ListadoGuitarras from "~/components/ListadoGuitarras";
import ListadoBlog from "~/components/ListadoBlog";
import Curso from "~/components/Curso";
import stylesGuitarras from "~/styles/guitarras.css";
import stylesBlog from "~/styles/blog.css";
import stylesCurso from "~/styles/curso.css";

export function meta() {}

export function links() {
  return [
    { rel: "stylesheet", href: stylesGuitarras },
    { rel: "stylesheet", href: stylesBlog },
    { rel: "stylesheet", href: stylesCurso },
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([getGuitarras(), getPosts(), getCurso()]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main>
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <ListadoBlog posts={posts} />
      </section>
    </>
  );
}

export default Index;
