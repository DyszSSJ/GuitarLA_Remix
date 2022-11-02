import { useLoaderData } from "@remix-run/react";
import ListadoBlog from "~/components/ListadoBlog";
import { getPosts } from "~/models/posts.server";

export function meta() {
  return {
    title: "GuitarLA - Blog",
    description: "Blog de Venta de Guitarras",
  };
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

function Blog() {
  const posts = useLoaderData();
  return (
      <ListadoBlog posts={posts} />
  );
}

export default Blog;
