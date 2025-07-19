"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HeroSection() {
  let pathPrefix = usePathname().includes("chocolatera-san-antonio")
    ? "/chocolatera-san-antonio"
    : "";

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
              background: "rgba(185, 138, 90, 1)",
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
              LO AUTÉNTICO NO SE IMPROVISA. LO EXCEPCIONAL, TAMPOCO.
            </div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontWeight: 700,
                margin: "0.5rem 0 1.5rem 0",
                fontSize: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Llevamos el sabor del cacao del grano a tu mesa: chocolate con
              historia, dedicación y sabor auténtico.
            </div>
            <a
              href="/menu"
              className="btn btn-dark mt-4 px-5 py-3"
              style={{
                borderRadius: "999px",
                fontFamily: "'Oswald', 'Arial Black', sans-serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                letterSpacing: "0.04em",
                width: "fit-content",
                background: "#3b1c12ff",
                color: "#ffffff",
                border: "2px solid #3b1c12ff",
                boxShadow: "0 2px 8px #3b1c1244",

                transition:
                  "background 0.18s, shadow 0.18s, transform 0.18s, border 0.18s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#49261bff";
                ((e.currentTarget as HTMLAnchorElement).style.border =
                  "2px solid #49261bff"),
                  ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 2px 12px #29150e8e");
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#3b1c12ff";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "2px solid #3b1c12ff";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 2px 8px #3b1c1244";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "scale(1)";
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
              src={pathPrefix + "/assets/chocs.webp"} // Replace with your actual hero image path
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
