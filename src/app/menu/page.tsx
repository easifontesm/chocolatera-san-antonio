import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import CheckerboardDivider from "../CheckerboardDivider";
import FooterSection from "../FooterSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Header />
      <CheckerboardDivider />
      <main className="container py-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 mb-4 mb-md-0">
            <h1
              className="mb-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 900,
                fontSize: "2.5rem",
                letterSpacing: "0.04em",
              }}
            >
              NUESTROS PRODUCTOS
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                fontFamily: "'Oswald', sans-serif",
                color: "#3b1c12",
              }}
            >
              BLA BLA BLA
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                fontFamily: "'Oswald', sans-serif",
                color: "#6b3e26",
              }}
            >
              Nos apasiona compartir la calidez y el sabor auténtico del
              chocolate artesanal con cada persona que nos visita. Nos apasiona
              crear experiencias memorables, desde la selección del grano hasta
              la taza final.
            </p>
            <h3
              style={{
                marginTop: "2rem",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 750,
                color: "#291911ff",
              }}
            >
              NUESTRA MISIÓN
            </h3>
            <p
              style={{
                fontSize: "1.25rem",
                fontFamily: "'Oswald', sans-serif",
                color: "#6b3e26",
              }}
            >
              Brindar una variedad de productos chocolateros que satisfagan el
              paladar de la población sucrense, a través de la formulación de
              recetas originales y la elaboración de nuestros productos
              aprovechando el mejor cacao que ofrece nuestra región.
            </p>
            <h3
              style={{
                marginTop: "2rem",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 750,
                color: "#291911ff",
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
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <Image
              src="/assets/ilustraci.jpg"
              alt="Equipo Chocolatera"
              width={320}
              height={240}
              style={{
                borderRadius: "1rem",
                objectFit: "cover",
                width: "100%",
                maxWidth: "320px",
                height: "240px",
              }}
            />
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
