import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="container-fluid px-0">
        {/* Top horizontal line */}
        <hr
          style={{
            border: "none",
            borderTop: "20px solid #3b1c12ff",
            margin: 0,
            opacity: 1,
          }}
        />
        <div className="row g-0" style={{ minHeight: "60vh" }}>
          {/* Left: Headline and Button */}
          <div
            className="col-12 col-md-6 d-flex flex-column justify-content-center"
            style={{
              background: "#b98a5a",
              padding: "3rem 2rem",
              color: "#111",
            }}
          >
            <div
              style={{
                fontFamily: "'Oswald', 'Impact', sans-serif",
                fontWeight: 900,
                fontSize: "2rem",
                lineHeight: 1.1,
              }}
            >
              EL ÚNICO CHOCOLATE ARTESANAL QUE SABE TAN BIEN COMO TE HACE
              SENTIR.
            </div>
            <a
              href="#menu"
              className="btn btn-dark mt-4 px-5 py-3"
              style={{
                borderRadius: "999px",
                fontFamily: "'Oswald', 'Arial Black', sans-serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                letterSpacing: "0.04em",
                width: "fit-content",
              }}
            >
              VER MENÚ
            </a>
          </div>
          {/* Right: Hero Image */}
          <div
            className="col-12 col-md-6"
            style={{ minHeight: "320px", position: "relative" }}
          >
            <Image
              src="/assets/chocs.webp" // Replace with your actual hero image path
              alt="Bebidas de chocolate artesanal"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Bottom horizontal line */}
        <hr
          style={{
            border: "none",
            borderTop: "20px solid #3b1c12ff",
            margin: 0,
            opacity: 1,
          }}
        />
      </section>
    </>
  );
}
