import React from "react";
import "../../sass/main.scss";
// import Featurebox from "../Featurebox/Featurebox";
import Featurebox from "../../components/Featurebox/Featurebox";


const Features = () => (
    <section className="section-features">
        <div className="row">
            <div className="col-1-of-4">
                <Featurebox
                    title='Explore the world'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illum veniam repellendus deleniti molestias'
                />
            </div>

            <div className="col-1-of-4">
                <Featurebox
                    title='Explore the world'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illum veniam repellendus deleniti molestias'
                />
            </div>

            <div className="col-1-of-4">
                <Featurebox
                    title='Explore the world'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illum veniam repellendus deleniti molestias'
                />
            </div>

            <div className="col-1-of-4">
                <Featurebox
                    title='Explore the world'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illum veniam repellendus deleniti molestias'
                />
            </div>
        </div>
    </section>
);

export default Features;
