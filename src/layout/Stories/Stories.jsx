import React from "react";
import "../../sass/main.scss";

import Nat8 from "../../img/nat-8.jpg";
import Nat9 from "../../img/nat-9.jpg";
import VideoMp4 from "../../img/video.mp4";
import VideoWebm from "../../img/video.webm";


const Stories = () => (
  <section className="section-stories">

                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={VideoMp4} type='video/mp4' />
                        <source src={VideoWebm} type='video/webm' />
                            Your browser is not supported!           
                    </video>
                </div>

                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={Nat8} alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">Mary Smith</figcaption>
                        </figure>

                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p> 
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, recusandae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, recusandae!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, recusandae!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={Nat9} alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">Jack Wilson</figcaption>
                        </figure>

                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
                            <p> 
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, recusandae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, recusandae!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, recusandae!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn-text">Read all stories &rarr;</a>
                </div>
            </section>
);

export default Stories;
