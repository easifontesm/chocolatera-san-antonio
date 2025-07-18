"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import CheckerboardDivider from "../CheckerboardDivider";
import FooterSection from "../FooterSection";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AboutPage() {
  let pathPrefix = usePathname().includes("chocolatera-san-antonio")
    ? "/chocolatera-san-antonio"
    : "";

  // Example product data
  const products = [
    {
      name: "Chocolate de Mesa",
      description:
        "Chocolate de mesa artesanal, perfecto para bebidas calientes.",
      image: pathPrefix + "/assets/choco_mesa.png",
    },
    {
      name: "Chocolate con leche",
      description: "Chocolate con leche cremoso y suave.",
      image: pathPrefix + "/assets/choco_leche.png",
    },
    {
      name: "Bombones rellenos",
      description: "Bombones artesanales con rellenos únicos.",
      image: pathPrefix + "/assets/bombones.png",
    },
  ];
  
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fff 70%, #b98a5a 100%)",
        minHeight: "100vh",
      }}
    >
      <Header />
      <CheckerboardDivider />
      <main
        className="container py-5"
        style={{
          background: "rgba(185, 138, 90, 0.07)",
          borderRadius: "1.5rem",
          border: "2px solid #b98a5a",
          boxShadow: "0 4px 24px rgba(185, 138, 90, 0.12)",
        }}
      >
        <div className="row align-items-center">
          <div className="col-12 mb-4">
            <h1
              className="mb-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 900,
                fontSize: "2.5rem",
                letterSpacing: "0.04em",
                color: "#b98a5a",
                textShadow: "0 2px 8px #fff6e7",
              }}
            >
              NUESTROS PRODUCTOS
            </h1>
          </div>
        </div>
        {/* Product Catalog */}
        <div className="row">
          {products.map((product, idx) => (
            <div className="col-12 col-md-4 mb-4" key={idx}>
              <div
                className="card h-100"
                style={{
                  border: "1.5px solid #b98a5a",
                  borderRadius: "1rem",
                  boxShadow: "0 2px 12px #b98a5a22",
                  background: "#fff9f4",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={200}
                  style={{
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                    objectFit: "cover",
                    width: "100%",
                    height: "200px",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      color: "#b98a5a",
                      fontWeight: 700,
                    }}
                  >
                    {product.name}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      color: "#6b3e26",
                      fontSize: "1.05rem",
                    }}
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
