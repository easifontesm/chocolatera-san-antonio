import React from "react";
import CheckerboardDivider from "./CheckerboardDivider";

export default function FooterSection() {
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
              <div>Stockists</div>
              <div>About</div>
            </div>
            <div className="col-12 col-md-4 mb-3 text-center">
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  letterSpacing: "0.03em",
                }}
              >
                CHOCOLATERA SAN ANTONIO
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
