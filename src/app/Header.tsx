"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function getCurrentPageLabel(pathname: string, pathPrefix: string = "") {
  const cleanPath = pathname.replace(pathPrefix, "");
  if (cleanPath === "/" || cleanPath === "") return "PRINCIPAL";
  if (cleanPath.startsWith("/about")) return "SOBRE NOSOTROS";
  if (cleanPath.startsWith("/menu")) return "MENÚ";
  //if (cleanPath.includes("#contact")) return "CONTACTO";
  return "";
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  let pathPrefix = pathname.includes("chocolatera-san-antonio")
    ? "/chocolatera-san-antonio"
    : "";
  const currentLabel = getCurrentPageLabel(pathname, pathPrefix);

  return (
    <header className="container-fluid px-0">
      {/* Responsive Navbar Styles */}
      <style>{`
        .navbar-links {
          display: flex;
        }
        .navbar-hamburger-row {
          display: none;
        }
        @media (max-width: 768px) {
          .navbar-links {
            display: none;
            flex-direction: column;
            width: 100%;
            background: #fff;
            position: absolute;
            left: 0;
            top: 100%;
            z-index: 1000;
            border-bottom: 1px solid #ddd;
            border-top: 1px solid #ddd;
          }
          .navbar-links.open {
            display: flex;
          }
          .navbar-hamburger-row {
            display: flex;
            align-items: center;
            width: 100%;
            min-height: 56px;
            padding-left: 1rem;
            padding-right: 1rem;
            background: #fff;
            border-bottom: 1px solid #ddd;
            border-top: 1px solid #ddd;
            font-family: 'Oswald', 'Arial Black', sans-serif;
            font-weight: 700;
            font-size: 1.1rem;
          }
          .navbar-hamburger {
            display: block;
            background: none;
            border: none;
            font-size: 2rem;
            margin-left: auto;
            margin-right: 0.5rem;
            cursor: pointer;
          }
          .navbar-label {
            flex: 1;
            text-align: left;
            letter-spacing: 0.04em;
            color: #222;
            padding-left: 0.5rem;
            font-family: 'Oswald', 'Arial Black', sans-serif;
            font-weight: 700;
            font-size: 1.1rem;
            text-transform: uppercase;
          }
        }
      `}</style>
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
      {/* Mobile: Hamburger row with current page label */}
      <div
        className="navbar-hamburger-row d-md-none"
        style={{ display: menuOpen ? "none" : undefined }}
      >
        <span className="navbar-label">{currentLabel}</span>
        <button
          className="navbar-hamburger"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      {/* Navigation */}
      <nav
        className="position-relative d-flex justify-content-center align-items-center border-top border-bottom px-4"
        style={{
          fontFamily: "'Oswald', 'Arial Black', sans-serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          minHeight: "56px",
        }}
      >
        {/* Desktop: Links always visible, Mobile: links only if menuOpen */}
        <div
          className={`navbar-links${menuOpen ? " open" : ""}`}
          style={{ position: "static" }}
          onClick={() => setMenuOpen(false)}
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
        </div>
      </nav>
    </header>
  );
}
