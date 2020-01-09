import React from "react";
import "../../sass/main.scss";

import Nat1_large from "../../img/nat-1-large.jpg";
import Nat1_small from "../../img/nat-1.jpg";

import Nat2_large from "../../img/nat-2-large.jpg";
import Nat2_small from "../../img/nat-2.jpg";

import Nat3_large from "../../img/nat-3-large.jpg";
import Nat3_small from "../../img/nat-3.jpg";

const About = () => (

    <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                Exciting tours for adventurous people
            </h2>
        </div>

        <div className="row">
            <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>

                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic autem id ad laborum reiciendis natus, perspiciatis pariatur repellendus architecto ducimus, facere nulla it ametit amet it amet.
                </p>

                <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>

                <p className="paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, itaquc numquam repudiandae provident neque, molestiae iusto laudantium. 
                </p>

                <a href="#" className="btn-text">Learn more &rarr;</a>
            </div>

            <div className="col-1-of-2">
                <div className="composition">
                    <img 
                            srcSet={`${Nat1_small} 300w, ${Nat1_large} 1000w`}
                            src={Nat1_large} 
                            alt="Photo1" 
                            className="composition__photo composition__photo--p1" 
                    />

                    <img 
                            srcSet={`${Nat2_small} 300w, ${Nat2_large} 1000w`}
                            src={Nat2_large} 
                            alt="Photo1" 
                            className="composition__photo composition__photo--p2" 
                    />

                    <img 
                            srcSet={`${Nat3_small} 300w, ${Nat3_large} 1000w`}
                            src={Nat3_large} 
                            alt="Photo1" 
                            className="composition__photo composition__photo--p3" 
                    />
                </div>
            </div>
        </div>
    </section>
);

export default About;
