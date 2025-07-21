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
          background: `
            linear-gradient(135deg, rgba(46,22,14,0.43) 0%, rgba(185,138,90,0.18) 100%),
            url('/chocolatera-san-antonio/assets/dark-wood-bg.jpg') center center / cover no-repeat
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

        {""}
        {/* Hero product highlight */}
        {""}

        <a
          href="/chocolatera-san-antonio/menu#manitella"
          className="d-flex justify-content-center"
          style={{ color: "#f8e9cdff", textDecoration: "none" }}
        >
          <div
            className={`hero-product-card${heroHovered ? " hero-hovered" : ""}`}
            onMouseEnter={() => setHeroHovered(true)}
            onMouseLeave={() => setHeroHovered(false)}
            style={{
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
          >
            <img
              src={"/chocolatera-san-antonio/assets/manitellaHero.png"}
              alt="Manitella"
              className="hero-product-img"
            />

            <div className="hero-product-title">MANITELLA</div>
            <div className="hero-product-desc">
              CREMA DE CACAO Y MANÍ ARTESANAL: DULCE, CREMOSA Y 100% NATURAL
            </div>
          </div>
        </a>

        {""}
        {/* ...existing code for NUESTROS FAVORITOS... */}
        {""}
        <div className="container d-flex justify-content-center">
          <div
            className="row justify-content-center align-items-center"
            style={{ width: "80vw" }}
          >
            <div className="col-12 col-md-4 mb-4">
              <a
                href="/chocolatera-san-antonio/menu#choco-mesa"
                style={{ color: "#f8e9cdff", textDecoration: "none" }}
              >
                <ProductCard
                  image="/chocolatera-san-antonio/assets/choco_mesa.png"
                  alt="Chocolate de Mesa"
                  title="Chocolate de Mesa"
                  description="Chocolate amargo con un sabor intenso, aromático y listo para tus creaciones"
                />
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                href="/chocolatera-san-antonio/menu#choco-leche"
                style={{ color: "#f8e9cdff", textDecoration: "none" }}
              >
                <ProductCard
                  image="/chocolatera-san-antonio/assets/choco_leche.png"
                  alt="Chocolate con Leche"
                  title="Chocolate con Leche"
                  description="Barras deliciosas y suaves, la armonía perfecta entre cacao fino y leche cremosa."
                />
              </a>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <a
                href="/chocolatera-san-antonio/menu#bombones"
                style={{ color: "#f8e9cdff", textDecoration: "none" }}
              >
                <ProductCard
                  image="/chocolatera-san-antonio/assets/bombones.png"
                  alt="Bombones Rellenos"
                  title="Bombones Rellenos"
                  description="Bocados perfectos para regalar o disfrutar en cualquier ocasión."
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
