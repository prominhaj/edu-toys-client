/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import footerBg from "../../../assets/footer-img/Footer-Bg.png";
import footerImg from "../../../assets/footer-img/footer-logo-img.png";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-no-repeat px-5"
      style={{ backgroundImage: `url('${footerBg}')` }}
    >
      <div className="container flex flex-wrap md:flex-nowrap items-center mx-auto py-[50px] justify-between gap-10">
        <div>
          <img src={footerImg} alt="" />
        </div>
        <p className="text-gray-800 text-center text-base font-normal font-['Inter'] leading-normal">
          © 2077 Untitled UI. All rights reserved.
        </p>
        <div>
          <h2 className="font-medium text-lg mb-3">Social Media</h2>
          <ul className="flex flex-wrap gap-3">
            <li>
              <Link>
                <FaFacebook className="text-blue-600 text-2xl" />
              </Link>
            </li>
            <li>
              <Link>
                <FaYoutube className="text-red-500 text-2xl" />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram className="text-red-500 text-2xl" />
              </Link>
            </li>
            <li>
              <Link>
                <FaLinkedin className="text-blue-600 text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
