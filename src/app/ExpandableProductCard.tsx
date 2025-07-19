import React, { useState } from "react";
import Image from "next/image";

export type Presentation = {
  name: string;
  description?: string;
};

export type ExpandableProductCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  presentations?: Presentation[];
};

export default function ExpandableProductCard({
  image,
  alt,
  title,
  description,
  presentations = [],
}: ExpandableProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
        cursor: presentations.length > 0 ? "pointer" : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => presentations.length > 0 && setExpanded((e) => !e)}
      tabIndex={0}
      role={presentations.length > 0 ? "button" : undefined}
      aria-expanded={expanded}
    >
      <Image
        src={image}
        className="card-img-top"
        alt={alt}
        width={320}
        height={200}
        style={{
          objectFit: "contain",
          height: "70%",
          maxWidth: "70%",
          margin: "1rem 1rem 0 1rem",
          minHeight: "15.5rem",
        }}
      />
      <div
        className="card-body w-100"
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
        {presentations.length > 0 && (
          <div
            style={{
              marginTop: "0.5rem",
              transition: "max-height 0.3s",
              overflow: "hidden",
              maxHeight: expanded ? 400 : 0,
            }}
          >
            <div
              style={{
                background: "rgba(240, 186, 132, 0.18)",
                borderRadius: "0.5rem",
                padding: expanded ? "1rem" : "0 1rem",
                color: "#6b3e26",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "1rem",
                boxShadow: expanded ? "0 2px 8px #b98a5a33" : undefined,
                opacity: expanded ? 1 : 0,
                transition: "opacity 0.3s, padding 0.3s",
              }}
            >
              <strong>Presentaciones:</strong>
              <ul style={{ margin: "0.5rem 0 0 1rem", padding: 0 }}>
                {presentations.map((p, i) => (
                  <li key={i} style={{ marginBottom: "0.25rem" }}>
                    <span style={{ fontWeight: 600 }}>{p.name}</span>
                    {p.description && (
                      <span style={{ color: "#a97c50", marginLeft: 4 }}>
                        — {p.description}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {presentations.length > 0 && (
          <div
            style={{
              textAlign: "center",
              marginTop: "0.5rem",
              color: "#b98a5a",
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.95rem",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            {expanded ? "▲ Ocultar presentaciones" : "▼ Ver presentaciones"}
          </div>
        )}
      </div>
    </div>
  );
}
