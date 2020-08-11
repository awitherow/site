import React from "react";
import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";

const social = [
  { id: "fb", link: "https://facebook.com/lwithero", icon: faFacebook },
  { id: "twitter", link: "https://twitter.com/highvib_es", icon: faTwitter },
  {
    id: "instagram",
    link: "https://instagram.com/highvib.es",
    icon: faInstagram,
  },
  {
    id: "patreon",
    link: "https://www.patreon.com/awitherow",
    icon: faPatreon,
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <ul>
          {social.map(({ id, link, icon }) => (
            <li key={id}>
              <a href={link} target="_blank">
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
