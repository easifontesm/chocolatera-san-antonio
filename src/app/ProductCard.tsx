"use client";
import React, { useState } from "react";

type ProductCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

export default function ProductCard({
  image,
  alt,
  title,
  description,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card border-0 h-100 d-flex flex-column align-items-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(83, 57, 57, 0.32) -40%, rgba(80, 48, 30, 0.69) 100%)",
        backdropFilter: "blur(2px)",
        borderRadius: "1rem",
        color: "#3b1c12",
        boxShadow: hovered
          ? "0 12px 24px rgba(0, 0, 0, 0.85)"
          : "0 8px 12px rgba(0, 0, 0, 0.65)",
        transform: hovered ? "scale(1.015)" : "scale(1)",
        transition: "box-shadow 0.2s, transform 0.2s",
        maxWidth: "80vw",
        minHeight: "24rem",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image}
        className="card-img-top"
        alt={alt}
        style={{
          objectFit: "contain",
          height: "70%",
          maxWidth: "70%",
          margin: "1rem 1rem 0 1rem",
          minHeight: "15.5rem"
        }}
      />
      <div
        className="card-body"
        style={{
          background: "rgba(240, 186, 132, 0.2)",
          borderRadius: "0 0 1rem 1rem",
        }}
      >
        <h5
          className="card-title"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            color: "#dbc5aeff",
            textShadow: "0 2px 8px #443a28ff",
            
          }}
        >
          {title}
        </h5>
        <p
          className="card-text"
          style={{
            color: "#cca58bff",
            fontFamily: "'Oswald', sans-serif",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
