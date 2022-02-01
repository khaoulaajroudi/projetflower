import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div class="content">
        <h3>fresh flowers</h3>
        <span> natural & beautiful flowers </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laborum ut minus corrupti dolorum dolore assumenda iste voluptate
          dolorem pariatur.
        </p>
        <Link to="/Products" class="btn">
          shop now{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
