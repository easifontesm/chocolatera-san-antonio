"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import CheckerboardDivider from "../CheckerboardDivider";
import FooterSection from "../FooterSection";
import ExpandableProductCard from "../ExpandableProductCard";
import { Collapse } from "react-bootstrap";
import { useState } from "react";

export default function AboutPage() {
  // Example product data with presentations
  const products = [
    {
      id: "manitella",
      name: "Manitella",
      description:
        "Crema de cacao con maní, ideal para untar o disfrutar sola.",
      longDescription:
        "La Nutella venezolana, pero mejor. Crema untable artesanal de cacao Sucre y maní tostado, sin aceites hidrogenados. Dulce pero no empalagosa, con trozos crocantes y aroma a cacao tostado. Úsala en pan, frutas o como ingrediente secreto en repostería.",
      image: "/assets/manitella.png",
      presentations: [
        { name: "Envase 100g", description: "Perfecto para calmar una antojo" },
        { name: "Envase 500g", description: "Rinde para reuniones familiares" },
      ],
    },
    {
      id: "choco-mesa",
      name: "Chocolate de Mesa",
      description:
        "Chocolate de mesa artesanal, perfecto para bebidas calientes.",
      longDescription:
        "El alma pura de Sucre en tu cocina. Nuestra tableta de cacao 70% oscuro es ideal para derretir, hornear o disfrutar en rallado sobre postres. Con granos criollos seleccionados y sin aditivos, ofrece un perfil robusto con notas frutales y un acabado ligeramente ácido. Perfecto para chefs y amantes del chocolate intenso.",
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
      id: "choco-leche",
      name: "Chocolate con leche",
      description: "Chocolate con leche cremoso y suave.",
      longDescription:
        " Suavidad que conquista paladares. Elaborado con 40% cacao venezolano y leche entera fresca, este chocolate equilibra lo dulce y lo terroso en cada bocado. Notas a caramelo y un fundido sedoso lo hacen irresistible solo o acompañado. Ideal para niños y adultos. Sin saborizantes artificiales.",
      image: "/assets/choco_leche.png",
      presentations: [{ name: "Barra 100g" }, { name: "Barra 250g" }],
    },
    {
      id: "bombones",
      name: "Bombones rellenos",
      description: "Bombones artesanales con rellenos únicos.",
      longDescription:
        "Pequeñas joyas de indulgencia. Cada bombón combina una cáscara de chocolate 60% oscuro con rellenos sorpresa: ganache de café local, crema de coco o guayaba artesanal. Texturas contrastantes y sabores que celebran Venezuela. Presentación en caja de regalo reciclable. Perfecto para detalles especiales.",
      image: "/assets/bombones.png",
      presentations: [
        { name: "Caja 6 piezas", description: "Surtido de sabores" },
        { name: "Caja 12 piezas" },
      ],
    },
  ];

  const [openInSidebar, setOpenInSidebar] = useState([true, true, true]);

  return (
    <>
      <Header />
      <CheckerboardDivider />
      <main
        className="row"
        style={{
          background:
            "linear-gradient(135deg, #311005ec -40%, #e0b589ff 70%, #311005ec)",
          minHeight: "100vh",
        }}
      >
        {/* Sidebar */}
        <div
          className="col-xl-2 py-4 px-5"
          style={{
            backgroundColor: "#ffffff41",
            color: "#200e08",
            fontSize: "1.1rem",
          }}
        >
          <div
            className="position-sticky sticky-top"
            style={{ position: "sticky", top: "400px" }}
          >
            <h4 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Catálogo de Productos
            </h4>
            <ul>
              <li
                style={{
                  fontWeight: "600",
                }}
                onClick={() =>
                  setOpenInSidebar([
                    !openInSidebar[0],
                    openInSidebar[1],
                    openInSidebar[2],
                  ])
                }
              >
                Chocolates en barra
              </li>
              <Collapse in={openInSidebar[0]}>
                <ul>
                  <li>
                    <a
                      style={{ color: "#2c0c04ff", textDecoration: "none" }}
                      href="#choco-mesa"
                    >
                      Chocolate de mesa
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "#2c0c04ff", textDecoration: "none" }}
                      href="#choco-leche"
                    >
                      Chocolate con leche
                    </a>
                  </li>
                </ul>
              </Collapse>

              <li
                style={{
                  fontWeight: "600",
                }}
                onClick={() =>
                  setOpenInSidebar([
                    openInSidebar[0],
                    !openInSidebar[1],
                    openInSidebar[2],
                  ])
                }
              >
                Untables
              </li>
              <Collapse in={openInSidebar[1]}>
                <ul>
                  <li>
                    <a
                      style={{ color: "#2c0c04ff", textDecoration: "none" }}
                      href="#manitella"
                    >
                      Manitella
                    </a>
                  </li>
                </ul>
              </Collapse>
              <li
                style={{
                  fontWeight: "600",
                }}
                onClick={() =>
                  setOpenInSidebar([
                    openInSidebar[0],
                    openInSidebar[1],
                    !openInSidebar[2],
                  ])
                }
              >
                Otros
              </li>
              <Collapse in={openInSidebar[2]}>
                <ul>
                  <li>
                    <a
                      style={{ color: "#2c0c04ff", textDecoration: "none" }}
                      href="#bombones"
                    >
                      Bombones rellenos
                    </a>
                  </li>
                </ul>
              </Collapse>
            </ul>
          </div>
        </div>

        {/* Product catalog */}
        <div className="col-10 container-fluid p-lg-5 py-5">
          <div className="row align-items-center">
            <div className="col-12 mb-4">
              <h1
                className="mb-4"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 900,
                  fontSize: "2.5rem",
                  letterSpacing: "0.04em",
                  color: "#2b231bff",
                  textShadow: "0 2px 12px #fff6e6ff",
                }}
              >
                NUESTROS PRODUCTOS
              </h1>
            </div>
          </div>

          {/* Product Catalog */}
          <div className="col justify-content-center">
            {/* Mapping each product object */}
            {products.map((product, idx) => (
              <div className="row" key={idx}>
                <div className="col-10 col-lg-4 my-4" id={product.id}>
                  <ExpandableProductCard
                    image={product.image}
                    alt={product.name}
                    title={product.name}
                    description={product.description}
                    presentations={product.presentations}
                  />
                </div>
                <div className="col-10 col-lg-6 mb-4 d-flex align-items-stretch p-lg-5 d-flex flex-column">
                  <h2
                    style={{
                      fontFamily: "'Arial Black', sans-serif",
                    }}
                  >
                    {product.name}
                  </h2>
                  <h5>{product.longDescription}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FooterSection />
    </>
  );
}
