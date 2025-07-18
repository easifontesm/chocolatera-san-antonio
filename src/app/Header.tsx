"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  let pathPrefix = usePathname().includes("chocolatera-san-antonio")
    ? "/chocolatera-san-antonio"
    : "";

  return (
    <header className="container-fluid px-0">
      <div className="d-flex flex-column align-items-center py-4">
        {/* Logo */}
        <Image
          src="/assets/logo.png"
          alt="Chocolatera Logo"
          width={120}
          height={120}
          style={{ marginBottom: "0.5rem" }}
        />
        {/* Brand Name */}
        <div
          style={{
            fontFamily: "'Oswald', 'Impact', sans-serif",
            fontWeight: 900,
            fontSize: "2rem",
            letterSpacing: "0.05em",
            lineHeight: 1,
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "0.25rem",
          }}
        >
          CHOCOLATERA SAN ANTONIO
        </div>
        {/* Tagline */}
        <div
          style={{
            fontFamily: "'Oswald', 'Arial Black', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.02em",
            color: "#6b3e26",
            textAlign: "center",
          }}
        >
          Auténticos en esencia, excepcionales en sabor.
        </div>
      </div>
      {/* Navigation */}
      <nav
        className="d-flex justify-content-center align-items-center border-top border-bottom px-4"
        style={{
          fontFamily: "'Oswald', 'Arial Black', sans-serif",
          fontWeight: 700,
          fontSize: "1.1rem",
        }}
      >
        <a
          href={pathPrefix + "/"}
          className="mx-3 py-2 text-dark text-decoration-none"
          style={{ letterSpacing: "0.04em" }}
        >
          PRINCIPAL
        </a>
        <a
          href={pathPrefix + "/about"}
          className="mx-3 py-2 text-dark text-decoration-none"
          style={{ letterSpacing: "0.04em" }}
        >
          SOBRE NOSOTROS
        </a>
        <a
          href={pathPrefix + "/menu"}
          className="mx-3 py-2 text-dark text-decoration-none"
          style={{ letterSpacing: "0.04em" }}
        >
          MENÚ
        </a>
        <a
          href="#contact"
          className="mx-3 py-2 text-dark text-decoration-none"
          style={{ letterSpacing: "0.04em" }}
        >
          CONTACTO
        </a>
      </nav>
    </header>
  );
}
