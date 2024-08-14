import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Ranjima</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#testimonials" className="footer__link">
                Testimonials
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/piu.ghosh.161/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/_miss__ghosh_/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ranjima-ghosh-90669515a/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <span className="footer__copy">
              &#169; RanjimaGhosh @ All rights reserved | 2024
            </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
