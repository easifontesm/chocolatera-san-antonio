import React from "react";
import CheckerboardDivider from "./CheckerboardDivider";

export default function FooterSection() {
  return (
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
                fontSize: "3rem",
                fontWeight: 900,
                letterSpacing: "0.05em",
              }}
            >
              CHOCOLATERA
            </div>
          </div>
          <div className="col-6 col-md-4 mb-3 text-md-end">
            <div style={{ fontWeight: 700 }}>(646) 555-4567</div>
            <div>hello@chocolatera.com</div>
          </div>
        </div>
        <div className="text-center mt-3" style={{ fontSize: "0.9rem" }}>
          COMPANY NAME© 2025 ALL RIGHTS RESERVED
        </div>
      </div>
      {/* Checkerboard divider at the bottom */}
      <div style={{ marginTop: "2rem" }}>
        <CheckerboardDivider />
      </div>
    </footer>
  );
}
