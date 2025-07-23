"use client";
import React, { useState } from "react";

export default function AboutSection() {
  const [hovered, setHovered] = useState(false);
  let pathPrefix = "/chocolatera-san-antonio"

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #bd956dff -40%, #fff 70%, #b98a5a)",
        padding: "4rem 0",
      }}
    >
      <div
        className="container"
        style={{
          background: "rgba(185, 138, 90, 0.07)",
          borderRadius: "1.5rem",
          border: "2px solid rgba(185, 138, 90, 1)",
          boxShadow: "0 4px 24px rgba(185, 138, 90, 0.12)",
          padding: "2.5rem 2rem",
        }}
      >
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-8 mb-4 mb-md-0">
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 900,
                fontSize: "2.5rem",
                color: "#795538ff",
                textShadow: "0 2px 8px #fff6e7",
              }}
            >
              SOBRE NOSOTROS
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                fontFamily: "'Oswald', sans-serif",
                color: "#3b1c12",
              }}
            >
              En Chocolatera San Antonio, creemos que el verdadero lujo está en
              lo hecho a mano, con ingredientes excepcionales y tiempo. Nuestros
              chocolates no son solo dulces; son el resultado de la alquimia
              entre el mejor cacao sucrense, técnicas tradicionales y un toque
              de innovación.
            </p>
            <a
              href={"/chocolatera-san-antonio/about"}
              className="btn mt-3 px-4 py-2"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                borderRadius: "999px",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                background: "#b98a5a",
                color: "#fff",
                border: "2px solid #b98a5a",
                boxShadow: hovered
                  ? "0 2px 12px #352b21a6"
                  : "0 2px 12px #b9895ad7",
                letterSpacing: "0.04em",
                transform: hovered ? "scale(1.02)" : "scale(1)",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
            >
              CONÓCENOS
            </a>
          </div>
          {/* Placeholder on the right */}
          <div
            className="col-12 col-md-4 d-flex justify-content-center align-items-center"
            style={{ minHeight: "240px" }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "320px",
                position: "relative",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "1rem",
                  border: "2px solid #b98a5a",
                  boxShadow: "0 2px 16px #b98a5a55",
                  background: "linear-gradient(120deg, #fff 60%, #b98a5a 100%)",
                  objectFit: "contain",
                  display: "block",
                }}
                src={"/chocolatera-san-antonio/assets/about1.webp"}
                alt="Logo Chocolatera"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
