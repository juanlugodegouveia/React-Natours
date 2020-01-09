import React from "react";
import "../../sass/main.scss";

import {Link} from 'react-router-dom';

const Navigation = () => (

    <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link">Your Benefits</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Popular Tours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Stories</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Book Now</a></li>
                </ul>
            </nav>
    </div>
);

export default Navigation;
