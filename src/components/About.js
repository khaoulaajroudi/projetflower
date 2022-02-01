import React from "react";

function About() {
  return (
    <div className="about">
      <h1 class="heading">
        {" "}
        <span> about </span> us{" "}
      </h1>

      <div class="row">
        <div class="photo-container">
          <img src="Florist-pana.png" />
        </div>
        <div class="content">
          <h3>why choose us?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cumque
            sit nemo pariatur corporis perspiciatis aspernatur a ullam
            repudiandae autem asperiores quibusdam omnis commodi alias repellat
            illum, unde optio temporibus.
          </p>
          <a href="#" class="btn">
            learn more
          </a>
        </div>
      </div>
      <div className="boxer-about">
        <div className="boxer">
          <img src="delivery.png" className="photo" />
          <div className="info">
            <h3>free delivery</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div className="boxer">
          <img src="salary.png" className="photo" />
          <div className="info">
            <h3>10 days returns</h3>
            <span>moneyback guarantee</span>
          </div>
        </div>
        <div className="boxer">
          <img src="gift.png" className="photo" />
          <div className="info">
            <h3>offer & gifts</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div className="boxer">
          <img src="paypal.png" className="photo" />
          <div className="info">
            <h3>secure paymens</h3>
            <span>protected by paypal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
