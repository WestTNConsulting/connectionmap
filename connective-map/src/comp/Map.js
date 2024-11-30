import '../App.css';
import React, { useState } from "react";

function map() {
  const [dots] = useState([
    { id: 1, x: 100, y: 100 },
    { id: 2, x: 300, y: 150 },
    { id: 3, x: 200, y: 300 },
  ]);
  const [hoveredDot, setHoveredDot] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Interactive Map</h1>
      <svg width="500" height="500" style={{ border: "1px solid black" }}>
        {/* Lines connecting dots */}
        <line
          x1={dots[0].x}
          y1={dots[0].y}
          x2={dots[1].x}
          y2={dots[1].y}
          stroke="blue"
          strokeWidth="2"
        />
        <line
          x1={dots[1].x}
          y1={dots[1].y}
          x2={dots[2].x}
          y2={dots[2].y}
          stroke="blue"
          strokeWidth="2"
        />
        <line
          x1={dots[2].x}
          y1={dots[2].y}
          x2={dots[0].x}
          y2={dots[0].y}
          stroke="blue"
          strokeWidth="2"
        />

        {/* Dots */}
        {dots.map((dot) => (
          <circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r={10}
            fill={hoveredDot === dot.id ? "orange" : "red"}
            onMouseEnter={() => setHoveredDot(dot.id)}
            onMouseLeave={() => setHoveredDot(null)}
          />
        ))}
      </svg>
      {hoveredDot && <p>Hovered over dot: {hoveredDot}</p>}
    </div>
  );
}

export default map;
