import React from "react";
import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
