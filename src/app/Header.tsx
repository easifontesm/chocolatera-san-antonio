"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Collapse from "react-bootstrap/Collapse";

export default function Header() {
  const path = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
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
        className="navbar navbar-expand-lg navbar-light bg-light border-top"
        style={{
          fontFamily: "'Oswald', 'Arial Black', sans-serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          minHeight: "56px",
        }}
      >
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-controls="myNavbar"
          aria-expanded={navbarOpen}
        >
          <span className="px-3">Navegación</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Collapse in={navbarOpen}>
          <div className="collapse navbar-collapse" id="myNavbar">
            <div className="navbar-nav d-flex justify-content-center w-100">
              <a
                className={
                  "nav-item nav-link px-5" + (path === "/" ? " active" : "")
                }
                href="/"
              >
                Principal
              </a>
              <a
                className={
                  "nav-item nav-link px-5" +
                  (path.includes("menu") ? " active" : "")
                }
                href="/menu"
              >
                Productos
              </a>
              <a
                className={
                  "nav-item nav-link px-5" +
                  (path.includes("about") ? " active" : "")
                }
                href="/about"
              >
                Nosotros
              </a>
              <a className={"nav-item nav-link px-5"} href="#contact">
                Contacto
              </a>
            </div>
          </div>
        </Collapse>
      </nav>
    </header>
  );
}
