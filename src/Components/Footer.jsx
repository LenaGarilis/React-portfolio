import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <footer className="sticky-bottom">
      <div className="footer-networks">
        <a
          href="https://www.linkedin.com/in/elena-garilis-0431a0249/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/lenagarilis"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>
        <a href="mailto:elenagarilis@web.de" target="_blank" rel="noreferrer">
          <GrMail />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Developed by Elena Garilis </small>
      </div>
    </footer>
  );
}

export default Footer;
