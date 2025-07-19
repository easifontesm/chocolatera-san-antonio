"use client";

import React from "react";
import CheckerboardDivider from "./CheckerboardDivider";
import { usePathname } from "next/navigation";

export default function FooterSection() {
  let pathPrefix = usePathname().includes("chocolatera-san-antonio")
    ? "/chocolatera-san-antonio"
    : "";
    
  return (
    <>
      <hr
        id="contact"
        style={{
          border: "none",
          borderTop: "20px solid #3b1c12ff",
          margin: 0,
          opacity: 1,
        }}
      />
      <footer
        style={{
          background: "#c49662",
          color: "#111",
          padding: "2rem 0 0 0",
          fontFamily: "'Oswald', sans-serif",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4 mb-3">
              <div style={{ fontWeight: 700 }}>Encuéntranos</div>
              <div className="text-dark" >Calle Guanta, Cumaná 6101, Sucre</div>
              <a href="/about" className="text-dark">Sobre la empresa</a>
              
            </div>
            <div className="col-12 col-md-4 mb-3 text-center">
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                }}
              >
                AUTÉNTICOS EN ESENCIA, EXCEPCIONALES EN SABOR.
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3 text-md-end">
              <div style={{ fontWeight: 700 }}>(412) 555-5555</div>
              <div>hello@chocosanantonio.com.ve</div>
            </div>
          </div>
          <div className="text-center mt-3" style={{ fontSize: "0.9rem" }}>
            CHOCOLATERA SAN ANTONIO © 2025 TODOS LOS DERECHOS RESERVADOS
          </div>
        </div>
        {/* Checkerboard divider at the bottom */}
        <div style={{ marginTop: "2rem" }}>
          <CheckerboardDivider />
        </div>
      </footer>
    </>
  );
}
