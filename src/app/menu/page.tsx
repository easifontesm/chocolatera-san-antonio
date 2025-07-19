"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import CheckerboardDivider from "../CheckerboardDivider";
import FooterSection from "../FooterSection";
import ExpandableProductCard from "../ExpandableProductCard";

export default function AboutPage() {
  // Example product data with presentations
  const products = [
    {
      name: "Manitella",
      description:
        "Crema de cacao con maní, ideal para untar o disfrutar sola.",
      image: "/assets/manitella.png",
      presentations: [
        { name: "Envase 100g", description: "Perfecto para calmar una antojo" },
        { name: "Envase 500g", description: "Rinde para reuniones familiares" },
      ],
    },
    {
      name: "Chocolate de Mesa",
      description:
        "Chocolate de mesa artesanal, perfecto para bebidas calientes.",
      image: "/assets/choco_mesa.png",
      presentations: [
        { name: "Tableta 250g", description: "Ideal para 8-10 tazas" },
        {
          name: "Tableta 500g",
          description: "Rinde para reuniones familiares",
        },
      ],
    },
    {
      name: "Chocolate con leche",
      description: "Chocolate con leche cremoso y suave.",
      image: "/assets/choco_leche.png",
      presentations: [{ name: "Barra 100g" }, { name: "Barra 250g" }],
    },
    {
      name: "Bombones rellenos",
      description: "Bombones artesanales con rellenos únicos.",
      image: "/assets/bombones.png",
      presentations: [
        { name: "Caja 6 piezas", description: "Surtido de sabores" },
        { name: "Caja 12 piezas" },
      ],
    },
  ];

  return (
    <>
      <Header />
      <CheckerboardDivider />
      <div
        className="container-fluid p-4"
        style={{
          background:
            "linear-gradient(135deg, #200e08ec -40%, #cfa982ff 70%, #200e08ec)",
          minHeight: "100vh",
        }}
      >
        <main
          className="container py-5"
          style={{
            background: `
            linear-gradient(135deg, #2e160e6e 0%, rgba(185,138,90,0.18) 100%),
            url('/assets/dark-wood-bg.jpg') center center / cover no-repeat
          `,
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
          <div className="row justify-content-center">
            {products.map((product, idx) => (
              <div
                className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch"
                key={idx}
              >
                <ExpandableProductCard
                  image={product.image}
                  alt={product.name}
                  title={product.name}
                  description={product.description}
                  presentations={product.presentations}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
      <FooterSection />
    </>
  );
}
