import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container mb-5">
      <nav className="navbar navbar-expand-lg fixed-top text-dark">
        <div className="container">
          <Link className="navbar-brand text-dark fw-bold fs-5 badge bg-warning" to="/">
            PortFolio
          </Link>
          <button
            className="navbar-toggler text-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""><i className="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item navborder">
                <Link className="nav-link text-warning fw-bold fs-5" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item navborder">
                <Link className="nav-link text-warning fw-bold fs-5" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item navborder">
                <Link className="nav-link text-warning fw-bold fs-5" to="/experience">
                  Experience
                </Link>
              </li>
              <li className="nav-item navborder">
                <Link className="nav-link text-warning fw-bold fs-5" to="/skills">
                  Skills
                </Link>
              </li>
              <li className="nav-item navborder">
                <Link className="nav-link text-warning fw-bold fs-5" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item navborder">
                <Link className="nav-link text-warning fw-bold fs-5" to="/contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
