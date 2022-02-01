import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="heading">
        {" "}
        <span> contact </span> us{" "}
      </h1>
      <div className="rowc">
        <div className="form">
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="number" placeholder="number" className="box" />
          <textarea
            name=""
            class="box"
            placeholder="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="send message" className="btn" />
        </div>
        <div className="imagee">
          <img src="Contact us-rafiki.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
