import React from "react";

export default function AboutSection() {
  return (
    <section style={{ background: "#fff", padding: "4rem 0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 900,
                fontSize: "2.5rem",
              }}
            >
              SOBRE NOSOTROS
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                fontFamily: "'Oswald', sans-serif",
              }}
            >
              En Chocolatera San Antonio, creemos que el verdadero lujo está en
              lo hecho a mano, con ingredientes excepcionales y tiempo. Nuestros
              chocolates no son solo dulces; son el resultado de la alquimia
              entre el mejor cacao sucrense, técnicas tradicionales y un toque
              de innovación.
            </p>
            <a
              href="#about"
              className="btn btn-outline-dark mt-3 px-4 py-2"
              style={{
                borderRadius: "999px",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
              }}
            >
              CONÓCENOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
