"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { usePathname } from "next/navigation";

export default function FeaturedProductsSection() {
  const [heroHovered, setHeroHovered] = useState(false);

  let pathPrefix = usePathname().includes("chocolatera-san-antonio")
    ? "/chocolatera-san-antonio"
    : "";
    
  return (
    <>
      <hr
        id="menu"
        style={{
          border: "none",
          borderTop: "20px solid #3b1c12ff",
          margin: 0,
          opacity: 1,
        }}
      />
      <section
        className="container-fluid d-flex flex-column align-items-center"
        style={{
          background:
            `
            linear-gradient(135deg, rgba(46,22,14,0.43) 0%, rgba(185,138,90,0.18) 100%),
            url('/assets/dark-wood-bg.jpg') center center / cover no-repeat
          `,
          padding: "0 0 4rem 0",
          color: "#fff",
        }}
      >
        <h2
          className="text-center mb-5"
          style={{
            margin: "2rem 0 0 0",
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 900,
            fontSize: "2.5rem",
          }}
        >
          NUESTROS CHOCOLATES
        </h2>
        {/* Hero product highlight */}
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative",
            margin: "0 0 4rem 0",
            boxShadow: heroHovered
              ? "0 12px 24px rgba(0,0,0,0.85)"
              : "0 8px 32px rgba(0,0,0,0.7)",
            width: "60%",
            backgroundColor: "rgba(43, 24, 13, 0.71)",
            backdropFilter: "blur(2px)",

            borderRadius: "1.5rem",
            transform: heroHovered ? "scale(1.015)" : "scale(1)",
            transition: "box-shadow 0.2s, transform 0.2s",
          }}
          onMouseEnter={() => setHeroHovered(true)}
          onMouseLeave={() => setHeroHovered(false)}
        >
          <img
            src={pathPrefix + "/assets/manitellaHero.png"}
            alt="Manitella"
            style={{
              maxWidth: "80%",
              margin: "1.5rem 0 -9rem 0",
              display: "block",
              borderRadius: "0.5rem",
            }}
          />

          <div
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 900,
              fontSize: "4.5vw",
              letterSpacing: "0.04em",
              margin: "0.5em 0 0.2em 0",
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
              fontSize: "1.45vw",
              letterSpacing: "0.02em",
              marginBottom: "0.5em",
              textShadow: "0 2px 8px #000",
            }}
          >
            CREMA DE CACAO Y MANÍ ARTESANAL: DULCE, CREMOSA Y 100% NATURAL
          </div>
        </div>
        {/* ...existing code for NUESTROS FAVORITOS... */}
        <div className="container d-flex justify-content-center">
          <div
            className="row justify-content-center align-items-center"
            style={{ width: "80vw" }}
          >
            <div className="col-12 col-md-4 mb-4">
              <ProductCard
                image="/assets/choco_mesa.png"
                alt="Chocolate de Mesa"
                title="Chocolate de Mesa"
                description="Chocolate amargo con un sabor intenso, aromático y listo para tus creaciones"
              />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <ProductCard
                image="/assets/choco_leche.png"
                alt="Chocolate con Leche"
                title="Chocolate con Leche"
                description="Barras deliciosas y suaves, la armonía perfecta entre cacao fino y leche cremosa."
              />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <ProductCard
                image="/assets/bombones.png"
                alt="Bombones Rellenos"
                title="Bombones Rellenos"
                description="Bocados perfectos para regalar o disfrutar en cualquier ocasión."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
