import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logoNav.png";
import Panier from "../../assets/Panier.svg";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../Features/modalSlice/modalSlice";
import { Link } from "react-router-dom";

function Navbar(props) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  return (
    <div>
      <div className="Navbar w-full h-10 bg-slate-50">
        <div className="ConnectBar w-full h-11 bg-black flex justify-between items-center ">
          <div className="TitleConnect text-white mx-10">
            <p className="text-md text-white">CandyConnect</p>
          </div>
          <div className="flex gap-10 mx-10 items-center">
            <button
              className="border border-white text-white text-md h-8 w-32 rounded"
              onClick={() => dispatch(openModal())}
            >
              Connectez vous
            </button>
            {isOpen && (
              <div className="modal flex items-center justify-center mb-5">
                <div className="modal-content">
                  <span onClick={() => dispatch(closeModal())}>&times;</span>
                  <form className="flex gap-3">
                    <label htmlFor="email" className="text-white">
                      Email:
                    </label>
                    <br />
                    <input type="email" id="email" name="email" />
                    <br />
                    <label htmlFor="pwd" className="text-white">
                      Mot de passe:
                    </label>
                    <br />
                    <input type="password" id="pwd" name="pwd" />
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="NavBar-link flex justify-between items-center h-24">
        <div className="Navlink mx-8 flex gap-8 text-xl">
          <Link to="/chocolats">Chocolat</Link>
          <Link to="/bonbons">Bonbons</Link>
          <Link to="/glaces">Glaces</Link>
          <Link to="/chips">Chips</Link>
        </div>
        <div className="Nav-Logo">
          <img src={Logo} alt="" className="size-16 me-10 bg-slate-100" />
        </div>
        <div className="Nav-Cart mx-16 gap-5 flex text-md">
          <p>Welcome Guest</p>

          <Link to="/panier">
            <button className="buttonCart">
              <img src={Panier} alt="" className="size-8" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
