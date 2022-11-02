import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";

export function meta() {
  return {
    title: "GuitarLA - Nosotros",
    description: "Esta es la pagina de nosotros",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    }

  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
            purus ipsum, sagittis id augue nec, molestie imperdiet sem. Sed
            magna nisi, semper quis aliquam eget, pulvinar id enim. Integer
            mattis nisl ac ex suscipit eleifend sit amet at nisi. Donec erat
            nunc, dignissim sit amet tincidunt eget, malesuada non quam. Ut
            vitae odio ac nibh lobortis pretium pulvinar quis quam. 
          </p>
          <p>
            {" "}
            Vivamus mi odio, eleifend vitae dui nec, luctus sollicitudin leo.
            Sed ac ante a ante condimentum convallis vitae vestibulum metus.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Integer consequat aliquet sem, eget
            efficitur leo tempus ut. In maximus congue eros id mattis.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
