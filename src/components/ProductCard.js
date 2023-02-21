import React from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation, Link } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          {" "}
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="Favoris" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="Article" />
            <img src={watch2} className="img-fluid" alt="article" />
          </div>
          <div className="product-details">
            <h6 className="brand">Dove</h6>
            <h5 className="product-title">Kids headphones bullk 10 packs</h5>
            <ReactStars
              count={5}
              size24
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              officiis deleniti harum doloribus. Omnis sed neque officia
              consequuntur ratione maiores dignissimos libero recusandae cumque
              fuga, sunt dolor incidunt dolores corrupti.
            </p>
            <p className="price">8 500 Fcfa</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="comparer" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addCart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addCart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          {" "}
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="Favoris" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="article" />
            <img src={watch2} className="img-fluid" alt="article" />
          </div>
          <div className="product-details">
            <h6 className="brand">Dove</h6>
            <h5 className="product-title">Kids headphones bullk 10 packs</h5>
            <ReactStars
              count={5}
              size24
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">8 500 Fcfa</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="comparer" />
              </Link>
              <Link>
                <img src={view} alt="addCart" />
              </Link>
              <Link>
                <img src={addcart} alt="addCart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
