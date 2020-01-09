import React from "react";
import "../../sass/main.scss";

const Featurebox = ({title, description}) => (
            <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
                <p className="feature-box__text">
                    {description}
                </p>
            </div>
);

export default Featurebox;
