import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import CheckerboardDivider from "../CheckerboardDivider";
import FooterSection from "../FooterSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <CheckerboardDivider />
      <div
        style={{
          background:
            "linear-gradient(135deg, #bd956dff -40%, #fff 70%, #b98a5a)",
          minHeight: "100vh",
          padding: 0,
        }}
      >
        <div
          className="container-fluid"
          style={{
            background: "center url('/assets/wood-light.png')",
            boxShadow: "0 4px 24px rgba(185, 138, 90, 0.12)",
            padding: "2.5rem 2rem",
            borderTop: "12px solid rgba(97, 73, 48, 1)",
            borderBottom: "12px solid rgba(97, 73, 48, 1)",

            marginBottom: "2.5rem",
          }}
        >
          <div className="row align-items-center justify-content-center">
            <div
              className="col-12 col-md-7 mb-4 mb-md-0"
              style={{
                width: "35%",
                background: "#ffd7afbf",
                borderRadius: "1.5rem",
                padding: "1rem",
                boxShadow: "0 0 32px #ffd7afff",
              }}
            >
              <h1
                className="mb-4"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 900,
                  fontSize: "2.5rem",
                  letterSpacing: "0.04em",
                  color: "#795538ff",
                  textShadow: "0 2px 8px #fff6e7",
                }}
              >
                SOBRE NOSOTROS
              </h1>
              <p
                style={{
                  fontSize: "1.25rem",
                  fontFamily: "'Oswald', sans-serif",
                  color: "#3b1c12",
                }}
              >
                En Chocolatera San Antonio, creemos que el verdadero lujo está
                en lo hecho a mano, con ingredientes excepcionales y tiempo.
                Nuestros chocolates no son solo dulces; son el resultado de la
                alquimia entre el mejor cacao sucrense, técnicas tradicionales y
                un toque de innovación.
              </p>
              <p
                style={{
                  fontSize: "1.25rem",
                  fontFamily: "'Oswald', sans-serif",
                  color: "#3b1c12",
                }}
              >
                Nos esforzamos por compartir la calidez y el sabor auténtico del
                chocolate artesanal con cada persona que prueba nuestros
                productos. Nos apasiona crear experiencias memorables, desde la
                selección del grano hasta la taza final.
              </p>
            </div>
            <div
              className="col-12 col-md-5 d-flex justify-content-center align-items-center"
              style={{ width: "35%", minHeight: "260px" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "320px",
                  height: "240px",
                  maxWidth: "100%",
                  transform: "scale(1.7)",
                }}
              >
                {/* Collage of 5 images, slightly overlapping and rotated */}
                <Image
                  src="/assets/beans.jpg"
                  alt="Collage 1"
                  width={120}
                  height={90}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "10px",
                    zIndex: 2,
                    borderRadius: "0.8rem",
                    border: "2px solid #b98a5a",
                    boxShadow: "0 2px 12px #b98a5a55",
                    transform: "rotate(-7deg)",
                    background: "#fffbe9",
                  }}
                />
                <Image
                  src="/assets/sucre.jpg"
                  alt="Collage 2"
                  width={120}
                  height={90}
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "100px",
                    zIndex: 3,
                    borderRadius: "0.8rem",
                    border: "2px solid #b98a5a",
                    boxShadow: "0 2px 12px #b98a5a55",
                    transform: "rotate(5deg)",
                    background: "#fffbe9",
                  }}
                />
                <Image
                  src="/assets/making.jpg"
                  alt="Collage 3"
                  width={120}
                  height={90}
                  style={{
                    position: "absolute",
                    top: "80px",
                    left: "40px",
                    zIndex: 4,
                    borderRadius: "0.8rem",
                    border: "2px solid #b98a5a",
                    boxShadow: "0 2px 12px #b98a5a55",
                    transform: "rotate(-3deg)",
                    background: "#fffbe9",
                  }}
                />
                <Image
                  src="/assets/cocoa.jpeg"
                  alt="Collage 4"
                  width={120}
                  height={90}
                  style={{
                    position: "absolute",
                    top: "120px",
                    left: "140px",
                    zIndex: 2,
                    borderRadius: "0.8rem",
                    border: "2px solid #b98a5a",
                    boxShadow: "0 2px 12px #b98a5a55",
                    transform: "rotate(8deg)",
                    background: "#fffbe9",
                  }}
                />
                <Image
                  src="/assets/making2.jpeg"
                  alt="Collage 5"
                  width={120}
                  height={90}
                  style={{
                    position: "absolute",
                    top: "150px",
                    left: "60px",
                    zIndex: 1,
                    borderRadius: "0.8rem",
                    border: "2px solid #b98a5a",
                    boxShadow: "0 2px 12px #b98a5a55",
                    transform: "rotate(-10deg)",
                    background: "#fffbe9",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <main className="container-fluid py-5">
          {/* Mission & Vision Section */}
          <div
            className="container"
            style={{
              background: "#fffbe9",
              borderRadius: "1.25rem",
              border: "2px solid #b98a5a",
              boxShadow: "0 2px 12px #b98a5a22",
              padding: "2rem 1.5rem",
              marginTop: "-1.5rem",
              marginBottom: "2.5rem",
              maxWidth: "700px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 750,
                color: "#291911ff",
                marginBottom: "1rem",
                fontSize: "2rem",
                letterSpacing: "0.03em",
              }}
            >
              NUESTRA MISIÓN
            </h3>
            <p
              style={{
                fontSize: "1.25rem",
                fontFamily: "'Oswald', sans-serif",
                color: "#6b3e26",
                marginBottom: "2rem",
              }}
            >
              Brindar una variedad de productos chocolateros que satisfagan el
              paladar de la población sucrense, a través de la formulación de
              recetas originales y la elaboración de nuestros productos
              aprovechando el mejor cacao que ofrece nuestra región.
            </p>
            <h3
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 750,
                color: "#291911ff",
                marginBottom: "1rem",
                fontSize: "2rem",
                letterSpacing: "0.03em",
              }}
            >
              NUESTRA VISIÓN
            </h3>
            <p
              style={{
                fontSize: "1.25rem",
                fontFamily: "'Oswald', sans-serif",
                color: "#6b3e26",
              }}
            >
              Competir en el mercado chocolatero nacional y situar nuestros
              productos entre las opciones preferidas del consumidor venezolano.
            </p>
          </div>
        </main>
        <FooterSection />
      </div>
    </>
  );
}
