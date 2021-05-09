import React from "react";
import "./header.css"
const Header = ({children}) => {
  return (
    <header>
      <div className="navWrapper" id="home">
        <div className=" clearfix">
          <h2 className="companyName">GameMemory</h2>
          <nav className="mainNav clearfix">
            <ul>
              <li>
                <a href="#home">Sudoku</a>
              </li>
              <li>
                <a href="#work" className="smoothScroll">
                  Matches 
                </a>
              </li>
              <li>
                <a href="#about" className="smoothScroll">
                  Coming soon
                </a>
              </li>
              <li>
                <a href="#about" className="smoothScroll">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section className="hero">
        <div className="innerWrapper">
          {children}
        </div>
      </section>
    </header>
  );
};

export default Header;
