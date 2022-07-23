import React from "react";
import "../../styles/contact.scss";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact">
      <a
        href="https://www.linkedin.com/in/shota-tkemaladze-1a405a187/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className="social" />
        <p>https://www.linkedin.com/in/shota-tkemaladze-1a405a187/</p>
      </a>
      <a
        href="https://github.com/tkemaladze98"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="social" />
        <p>https://github.com/tkemaladze98</p>
      </a>
      <a
        href="https://www.facebook.com/tkemaladze98/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook className="social" />
        <p>https://www.facebook.com/tkemaladze98/</p>
      </a>
      <div>
        <BsFillTelephoneFill className="social" />
        <p>595-989-678</p>
      </div>
    </div>
  );
};

export default Contact;
