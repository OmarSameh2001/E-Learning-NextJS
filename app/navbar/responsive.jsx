"use client";
import Link from "next/link";
import { useState } from "react";

export default function Responsive() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
      <div style={{ display: isOpen ? "block" : "none", position: "absolute", top: "100%", right: 0, backgroundColor: "black", padding: "10px" }}>
        <Link href="/attack">
          <h6 style={{ textDecoration: "none", color: "white", margin: "10px" }}>Attack</h6>
        </Link>
        <Link href="/defence">
          <h6 style={{ textDecoration: "none", color: "white", margin: "10px" }}>Defence</h6>
        </Link>
        <Link href="/goalkeep">
          <h6 style={{ textDecoration: "none", color: "white", margin: "10px" }}>Goalkeep</h6>
        </Link>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </header>
  );
}
