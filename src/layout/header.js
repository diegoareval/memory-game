import React from "react";
import { Link } from "react-router-dom";

import "./header.css";
const Header = ({ children }) => {
  return (
    <header>
      <div className="navWrapper" id="home">
        <div className=" clearfix">
          <h2 className="companyName">GameMemory</h2>
          <nav className="mainNav clearfix">
            <ul>
              <li>
                <Link to="/sudoku">Sudoku</Link>
              </li>
              <li>
                <Link to="/matches" className="smoothScroll">
                  Matches
                </Link>
              </li>
              <li>
                <a href="#about" className="smoothScroll">
                  Coming soon
                </a>
              </li>
              <li>
                <Link to="/about" className="smoothScroll">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section className="hero">
        <div className="innerWrapper">{children}</div>
      </section>
    </header>
  );
};

export default Header;
