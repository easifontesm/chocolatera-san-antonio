import React from "react";

export default function FeaturedProductsSection() {
  return (
    <section
      style={{ background: "#000", padding: "0 0 4rem 0", color: "#fff" }}
    >
      {/* Hero product highlight */}
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          textAlign: "center",
          position: "relative",
        }}
      >
        <img
          src="/assets/manitellaHero.png"
          alt="Primavera"
          style={{
            maxWidth: "50%",
            margin: "1.5rem 0 -9rem 0",
            display: "block",
            borderRadius: "0.5rem",
            boxShadow: "0 8px 32px rgba(0,0,0,0.7)",
          }}
        />
        <div
          style={{
            display: "inline-block",
            border: "2px solid #fff",
            borderRadius: "999px",
            padding: "0.1em 1em",
            fontSize: "1.1rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            marginBottom: "0.5rem",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          NUESTRO PRODUCTO ESTRELLA
        </div>
        <div
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 900,
            fontSize: "4rem",
            letterSpacing: "0.04em",
            margin: "0.2em 0 0.2em 0",
            lineHeight: 1,
            textShadow: "0 2px 8px #000",
          }}
        >
          MANITELLA
        </div>
        <div
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "1.25rem",
            letterSpacing: "0.02em",
            marginBottom: "0.5em",
            textShadow: "0 2px 8px #000",
          }}
        >
          A BOLD, SPICED APERITIF FEATURING CARDAMOM, GINGER, AND CINNAMON
        </div>
      </div>
      {/* ...existing code for NUESTROS FAVORITOS... */}
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 900,
            fontSize: "2.5rem",
          }}
        >
          NUESTROS FAVORITOS
        </h2>
        <div className="row justify-content-center">
          {/* Example drink cards */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="/assets/drink1.jpg"
                className="card-img-top"
                alt="Drink 1"
                style={{ objectFit: "cover", height: "300px" }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  LAVANDE
                </h5>
                <p className="card-text">
                  Un aperitivo delicado y floral con notas de lavanda y
                  manzanilla.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="/assets/drink2.jpg"
                className="card-img-top"
                alt="Drink 2"
                style={{ objectFit: "cover", height: "300px" }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  PRIMAVERA
                </h5>
                <p className="card-text">
                  Un aperitivo vibrante y refrescante con notas cítricas
                  brillantes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="/assets/drink3.jpg"
                className="card-img-top"
                alt="Drink 3"
                style={{ objectFit: "cover", height: "300px" }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  SPEZIA
                </h5>
                <p className="card-text">
                  Un aperitivo especiado con cardamomo, jengibre y canela.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
