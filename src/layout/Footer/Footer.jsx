import React from 'react';
import '../../sass/main.scss';

import Logofull from "../../img/JL_LOGO_WHITE.png";

const Header = () => (
  <footer className="footer">
        <div className="footer__logo-box">
            <img src={Logofull} alt="Full logo" className="footer__logo" />
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>

            <div className="col-1-of-2">
                <p className="footer__copyright">
                    Built by <a href="#" className="footer__link">Juan Lugo</a> for his online course <a href="#" className="footer__link">Advanced CSS and Sass</a>. Copyright &copy; by Juan Lugo. Your are 100% allowed to use this webpage for both personal and comercial use, but NOT to calim it as your own design.
                </p>
            </div>
        </div>
    </footer>
);

export default Header;

