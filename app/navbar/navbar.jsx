import Link from "next/link";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import asd from "../../assets/ASH (1).png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 mx-0">
      <div className="container px-0 mx-4">
      

        <Link className="navbar-brand" href="/">
            <Image src={asd} alt="Image" className="image-flex mx-3 pb-1"/>
          Handball Buddy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/attack">
                Attack
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/defence">
                Defence
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/goalkeep">
                Goalkeeping
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
