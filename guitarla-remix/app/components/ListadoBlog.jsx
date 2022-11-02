import Posts from "./Posts";

export default function ListadoBlog({posts}) {
  return (
    <div>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map((post) => (
          <Posts post={post.attributes} key={post.id} />
        ))}
      </div>
    </div>
  );
}
