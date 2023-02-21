import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                {/* <img src={newsletter} alt="newsletter" /> */}
                <h2 className="mb-0 text-pink">
                  S'inscrire pour la lettre d'info
                </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Votre Email"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Nous contacter</h4>
              <div>
                <address className="text-white fs-6">
                  Hno : 277 Near Vill chopal, <br /> Douala, Bonanjo <br />
                  BP: 131103
                </address>
                <a
                  href="tel:+237 674667234"
                  className="mt-3 d-block mb-1 text-pink"
                >
                  +237 674667234
                </a>
                <a
                  href="mailto:litoilinop@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  litoilinop@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-pink mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Politique privrée
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Politique de remboursement
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Modalités de livraison
                </Link>
                <Link to="/terms-conditions" className="text-white py-2 mb-1">
                  Termes & Conditions
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Compte</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">A propos de nous</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Sandwich</Link>
                <Link className="text-white py-2 mb-1">Liqueurs</Link>
                <Link className="text-white py-2 mb-1">Gâteaux</Link>
                <Link className="text-white py-2 mb-1">Charcuterie</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Liôï Hub
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
