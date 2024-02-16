import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assets/logoNav.png";
import Panier from "../../Assets/Panier.svg";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal, logIn } from "../../Features/modalSlice/modalSlice";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen);
    const isLoggedIn = useSelector((state) => state.modal.isLoggedIn);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            dispatch(logIn(email));
            dispatch(closeModal());
        }
    };

    return (
        <div>
            <div className="Navbar w-full h-10 bg-slate-50">
                <div className="ConnectBar w-full h-11 bg-black flex justify-between items-center ">
                    <div className="TitleConnect text-white mx-10">
                        <p className="text-md text-white">CandyConnect</p>
                    </div>
                    <div className="flex gap-10 mx-10 items-center">
                        {!isLoggedIn && <button onClick={() => dispatch(openModal())} className="text-white">Connectez-vous</button>}
                        {isOpen && (
                            <div className="modal flex">
                                <div className="modal-content flex gap-3 ">
                                    <span onClick={() => dispatch(closeModal())} className="text-white ">x</span>
                                    <form onSubmit={handleSubmit} className="flex gap-3">
                                        <label htmlFor="email" className="text-white">Utilisateur:</label><br />
                                        <input type="text" id="" name="" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                                        <label htmlFor="pwd" className="text-white">Mot de passe:</label><br />
                                        <input type="password" id="pwd" name="pwd" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <button type="submit" className="border border-white text-white w-16 rounded-md">Submit</button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="NavBar-link flex justify-between items-center h-24">
                    <div className="Navlink mx-8 flex gap-8 text-xl">
                        <a href="/chocolats">Chocolat</a>
                        <a href="/bonbons">Bonbons</a>
                        <a href="/glaces">Glaces</a>
                        <a href="/chips">Chips</a>
                    </div>
                    <div className="Nav-Logo">
                        <img src={Logo} alt="" className="size-16 me-10 bg-slate-100" />
                    </div>
                    <div className="Nav-Cart mx-16 gap-5 flex text-md">
                    <p>Welcome, {isLoggedIn ? email : 'Guest'}</p>
                        <button className="buttonCart">
                            <img src={Panier} alt="" className="size-8" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
