import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
// import CustomInput from "../components/CustomInput";
const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Mot de passe oublié" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">
                Réinitialisez votre mot de passe
              </h3>
              <p className="text-center mt-2 mb-3">
                Nous vous enverrons un lien pour réinitialiser votre mot de
                passe
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre Email"
                    className="form-control"
                  />
                </div>
                {/* <CustomInput type="email" name="email" placeholder="Email" /> */}

                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Soumettre
                    </button>
                    <Link to="/login">Annuler</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
