import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="bannière principale"
              />
              <div className="main-banner-content position-absolute">
                <h4>POUR LES PROS</h4>
                <h5>zPad S13</h5>
                <p>à partir de 99 000 ou 25 000/mois</p>
                <Link className="button">ACHETEZ</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="bannière principale"
                />
                <div className="small-banner-content position-absolute">
                  <h4>POUR LES PROS</h4>
                  <h5>zPad S13</h5>
                  <p>
                    {" "}
                    à partir de 99 000F <br />
                    ou 25 000F/mois
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="bannière principale"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Nouveauté</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    {" "}
                    à partir de 99 000F <br /> ou 25 000F/mois
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="bannière principale"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST DEALS</h4>
                  <h5>SMARTWATCH</h5>
                  <p>
                    {" "}
                    à partir de 99 000F <br />
                    ou 25 000F/mois
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="bannière principale"
                />
                <div className="small-banner-content position-absolute">
                  <h4>POUR LES PROS</h4>
                  <h5>zPad S13</h5>
                  <p>
                    {" "}
                    99 000F ou <br />
                    25 000F/mois
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Caméras</h6>
                  <p>10 Articles</p>
                </div>
                <img src="images/camera.jpg" alt="caméra" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Articles</p>
                </div>
                <img src="images/tv.jpg" alt="caméra" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Articles</p>
                </div>
                <img src="images/camera.jpg" alt="caméra" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Jeux & Musique</h6>
                  <p>10 Articles</p>
                </div>
                <img src="images/headphone.jpg" alt="caméra" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Caméras</h6>
                  <p>10 Articles</p>
                </div>
                <img src="images/camera.jpg" alt="caméra" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Articles</p>
                </div>
                <img src="images/tv.jpg" alt="caméra" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Articles</p>
                </div>
                <img src="images/camera.jpg" alt="caméra" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Jeux & Musique</h6>
                  <p>10 Articles</p>
                </div>
                <img src="images/headphone.jpg" alt="caméra" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Collections A La Une</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Grands écrans</h5>
                <h6>Smart Watch Séries</h6>
                <p>à partir de 150000 Fcfa ou 25000F/mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">studio d'exposition</h5>
                <h6 className="text-dark">Nuit de lummières</h6>
                <p className="text-dark">27" d'écran</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Iphone 13 Pro</h6>
                <p className="text-dark">
                  Maintenant en vert, à partir de 99 999Fcfa ou 22 000/mo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">haut-parleurs maisons</h5>
                <h6 className="text-dark">Enceintes ambiantes</h6>
                <p className="text-dark">à partir de 19 999Fcfa ou 2 000/mo.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Offres spéciales</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Produits Populaires</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Nos partenaires</h3>
          </div>
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Nos dernières publications</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
