import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import CheckerboardDivider from "../CheckerboardDivider";
import FooterSection from "../FooterSection";
import Image from "next/image";
import Head from "next/head";

// Values array for easy modification
const values = [
  {
    title: "Pasión",
    description:
      "Ponemos el corazón en cada etapa del proceso chocolatero, desde el grano hasta el empaque final.",
  },
  {
    title: "Calidad",
    description:
      "Seleccionamos los mejores ingredientes y cuidamos cada detalle para ofrecer productos excepcionales.",
  },
  {
    title: "Sustentabilidad",
    description:
      "Trabajamos de manera responsable con el medio ambiente y apoyamos a los productores locales.",
  },
  {
    title: "Creatividad",
    description:
      "Innovamos constantemente en sabores y presentaciones para sorprender a nuestros clientes.",
  },
  {
    title: "Amor por nuestra tierra",
    description:
      "Valoramos produndamente y promovemos la producción y la cultura de nuestra región sucrense.",
  },
];

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
            background:
              "center url('/chocolatera-san-antonio/assets/wood-light.webp')",
            boxShadow: "0 4px 24px rgba(185, 138, 90, 0.12)",
            padding: "2.5rem 2rem",
            borderTop: "12px solid rgba(97, 73, 48, 1)",
            borderBottom: "12px solid rgba(97, 73, 48, 1)",

            marginBottom: "2.5rem",
          }}
        >
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
            <div
              className="col-12 col-md-8 m-4 m-md-0"
              style={{
                minWidth: "300px",
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
                Somos un equipo de maestros chocolateros, creadores de recetas y
                manos apasionadas que envasan con cuidado cada producto. Nos
                esforzamos por llevar el alma de Sucre a tu paladar, creando
                momentos memorables con el mejor chocolate artesanal de nuestra
                región.
              </p>
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
            </div>
            <div
              className="col-12 col-md-5 d-flex justify-content-center align-items-center"
              style={{ width: "35%", minHeight: "260px" }}
            >
              <div
                style={{
                  position: "relative",
                  minWidth: "644px",
                  minHeight: "436px",
                  maxWidth: "100%",
                  top: "0px",
                  left: "100px",
                  transform: "scale(0.8)",
                }}
              >
                {/* Collage of 5 images, slightly overlapping and rotated */}
                <Image
                  src="/chocolatera-san-antonio/assets/beans.jpg"
                  alt="Collage 1"
                  width={260}
                  height={190}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    zIndex: 4,
                    borderRadius: "0.8rem",
                    border: "2px solid #b98a5a",
                    boxShadow: "0 2px 12px #b98a5a55",
                    transform: "rotate(-7deg)",
                    background: "#fffbe9",
                  }}
                />
                <Image
                  src="/chocolatera-san-antonio/assets/sucre.jpg"
                  alt="Collage 2"
                  width={240}
                  height={180}
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: "200px",
                    zIndex: 3,
                    borderRadius: "0.8rem",
                    border: "2px solid #b98a5a",
                    boxShadow: "0 2px 12px #b98a5a55",
                    transform: "rotate(5deg)",
                    background: "#fffbe9",
                  }}
                />
                <Image
                  src="/chocolatera-san-antonio/assets/making.jpg"
                  alt="Collage 3"
                  width={260}
                  height={190}
                  style={{
                    position: "absolute",
                    top: "160px",
                    left: "-80px",
                    zIndex: 4,
                    borderRadius: "0.8rem",
                    border: "2px solid #b98a5a",
                    boxShadow: "0 2px 12px #b98a5a55",
                    transform: "rotate(-3deg)",
                    background: "#fffbe9",
                  }}
                />
                <Image
                  src="/chocolatera-san-antonio/assets/cocoa.webp"
                  alt="Collage 4"
                  width={280}
                  height={190}
                  style={{
                    position: "absolute",
                    top: "240px",
                    left: "240px",
                    zIndex: 2,
                    borderRadius: "0.8rem",
                    border: "2px solid #b98a5a",
                    boxShadow: "0 2px 12px #b98a5a55",
                    transform: "rotate(-8deg)",
                    background: "#fffbe9",
                  }}
                />
                <Image
                  src="/chocolatera-san-antonio/assets/making2.jpeg"
                  alt="Collage 5"
                  width={240}
                  height={180}
                  style={{
                    position: "absolute",
                    top: "300px",
                    left: "40px",
                    zIndex: 3,
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
          {/* Mission, Vision, Values, Objectives, Org Chart Section */}
          <div
            className="container"
            style={{
              background: "#fffbe9",
              borderRadius: "1.25rem",
              border: "2px solid #b98a5a",
              boxShadow: "0 2px 12px #b98a5a22",
              padding: "2.5rem 2rem",
              marginTop: "-1.5rem",
              marginBottom: "2.5rem",
              maxWidth: "1100px",
            }}
          >
            <div className="row g-4">
              {/* Mission & Vision */}
              <div className="col-12 col-md-6">
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
                  Brindar una variedad de productos chocolateros que satisfagan
                  el paladar de la población sucrense, a través de la
                  formulación de recetas originales y la elaboración de nuestros
                  productos aprovechando el mejor cacao que ofrece nuestra
                  región.
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
                  productos entre las opciones preferidas del consumidor
                  venezolano.
                </p>
              </div>
              {/* Values */}
              <div className="col-12 col-md-6">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "1rem",
                    border: "1.5px solid #b98a5a",
                    boxShadow: "0 2px 8px #b98a5a22",
                    padding: "1.5rem 1.25rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      color: "#795538ff",
                      marginBottom: "0.75rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    VALORES
                  </h4>
                  <ul
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "1.1rem",
                      color: "#3b1c12",
                      paddingLeft: "1.2em",
                    }}
                  >
                    {values.map((value, idx) => (
                      <li key={idx} style={{ marginBottom: "0.75em" }}>
                        <span style={{ fontWeight: 600 }}>{value.title}</span>
                        <br />
                        <span
                          style={{ fontSize: "0.98em", color: "#63452dff" }}
                        >
                          {value.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Objectives */}
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "1rem",
                    border: "1.5px solid #b98a5a",
                    boxShadow: "0 2px 8px #b98a5a22",
                    padding: "1.5rem 1.25rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      color: "#795538ff",
                      marginBottom: "0.75rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    OBJETIVOS
                  </h4>
                  <ul
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "1.1rem",
                      color: "#3b1c12",
                      paddingLeft: "1.2em",
                    }}
                  >
                    <li>Expandir nuestra presencia en todo el país</li>
                    <li>Dar a conocer el potencial del cacao sucrense </li>
                    <li>
                      Fomentar el desarrollo sustentable de nuestra región
                    </li>
                  </ul>
                </div>
              </div>
              {/* Organizational Chart */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  border: "1.5px solid #b98a5a",
                  boxShadow: "0 2px 8px #b98a5a22",
                  padding: "1.5rem 1.25rem",
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    color: "#795538ff",
                    marginBottom: "0.75rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  ORGANIGRAMA DE LA EMPRESA
                </h4>
                <img
                  className="img-fluid"
                  src="/chocolatera-san-antonio/assets/organigrama.png"
                ></img>
              </div>
            </div>
          </div>
        </main>
        <FooterSection />
      </div>
    </>
  );
}
