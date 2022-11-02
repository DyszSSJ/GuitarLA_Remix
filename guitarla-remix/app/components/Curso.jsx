import React from "react";

export default function Curso({ curso }) {
  const { titulo, imagen, contenido } = curso;
  return (
    <section className="curso">
      <style jsx="true">{`
        .curso {
          background-image: linear-gradient(
              rgb(0, 0, 0, 0.65),
              rgb(0, 0, 0, 0.8)
            ),
            url(${imagen.data.attributes.url});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
      `}</style>

      <div className="contenedor curso-grid">
        <div className="contenido">
          <h2 className="heading">{titulo}</h2>
          <p className="texto">{contenido}</p>
        </div>
      </div>
    </section>
  );
}
