// import './footer.scss';
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <ul className="footer__menu footer-menu">
          <li className="footer-menu__item">
            <a className="footer-menu__link menu-link" href="#">
              Корпоративным клиентам
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
