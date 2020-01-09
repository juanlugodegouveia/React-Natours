import React from 'react';
import '../../sass/main.scss';

import Nat8 from "../../img/nat-8.jpg";
import Nat9 from "../../img/nat-9.jpg";


const Popup = () => (
  <div className="popup" id="popup">
        <div className="popup__content">
            <div className="popup__left">
                <img src={Nat8} alt="Tour Photo" className="popup__img"/>
                <img src={Nat9} alt="Tour Photo" className="popup__img"/>
            </div>

            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                <p className="popup__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt reprehenderit minima earum reiciendis soluta a quibusdam architecto aperiam ipsum qui at neque nisi nobis, rrum, officiis, exercitationem sunt repellat cumque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos suscipit perspiciatis voluptatibus atque, modi corporis similique, dolore, quis sequi saepe doloremque error rem vitae illo accusantium voluptatem sed. Accusamus, tenetur?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea architecto voluptates, dicta consequatur blanditiis alias sequi corporis saepe quibusdam sapiente nisi explicabo obcaecati a maiores laboriosam? Hic, ad laboriosam. Accusamus.Lorem ipsum dolor sit amet. ectetur adipisicing elit. Ea architecto voluptates, dicta consequatur blanditiis alias sequi corporis saepe quibusdam sapiente nisi explicabo obcaecati a maiores laboriosam? Hic, ad laboriosam. Accusamus.Lorem ipsum dolor sit amet.
                </p>
                <a href="#" className="btn btn--green">Book Now</a>
            </div>
        </div>
     </div>
);

export default Popup;

