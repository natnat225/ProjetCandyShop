import React, { useState } from 'react';
import './Navbar.css'
import Logo from '../../Assets/logoNav.png'
import Panier from '../../Assets/Panier.svg'
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal,logIn } from '../../Features/modalSlice/modalSlice';

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
            <div className='Navbar w-full bg-slate-50'></div>
            <div className='ConnectBar w-full h-11 bg-black flex justify-between items-center '>
                <div className='TitleConnect text-white mx-10'>
                    <p className='text-md text-white'>CandyConnect</p>
                </div>
                <div className='flex gap-10 mx-10 items-center'>
                    
                    {!isLoggedIn && <button className='border border-white text-white text-md h-8 w-32 rounded'  onClick={() => dispatch(openModal())}>Connectez-vous</button>}
                </div>
                {isOpen && (
                    <div className="modal">
                        <div className="modal-content flex">
                            <span onClick={() => dispatch(closeModal())} className='text-white me-5'>&times;</span>
                            <form onSubmit={handleSubmit} className='flex gap-2'>
                                <label htmlFor="text" className='text-white'>Nom d'utilisateur</label><br />
                                <input type="text" id="email" name="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                                <label htmlFor="pwd" className='text-white'>Mot de passe:</label><br />
                                <input type="password" id="pwd" name="pwd" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <button type="submit" className='text-white border border-white'>Submit</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <div className='NavBar-link flex justify-between items-center h-24'>
                <div className='Navlink mx-8 flex gap-8 text-xl'>
                    <a href="">Chocolat</a>
                    <a href="">Boisson</a>
                    <a href="">Glaces</a>
                    <a href="">Chips</a>
                </div>
                <div className='Nav-Logo'>
                    <img src={Logo} alt="" className='size-16 me-10 bg-slate-100' />
                </div>
                <div className='Nav-Cart mx-16 gap-5 flex text-md'>
                    <p>Welcome, {isLoggedIn ? email : 'Guest'}</p>
                    <button className='buttonCart'>
                        <img src={Panier} alt="" className='size-8' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;