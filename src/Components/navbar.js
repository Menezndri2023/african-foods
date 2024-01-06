import React from "react";
import stylesNavbar from "../Styles/navbar.module.css";
import { NavLink } from "react-router-dom";
import navLogo from "../ressources/Logo.png";
import cartImg from "../ressources/Cart.png"

const Navbar = () =>{
    return(
        <div className={stylesNavbar.navbarContainer}>
            <NavLink to='./home'>
                <img src={navLogo} alt="Logo" className={stylesNavbar.homeImg}/> 
            </NavLink>
            <NavLink to='./pub'>Publier</NavLink>
            <div className={stylesNavbar.panierContener}>
            <NavLink to='./panier'>
            <img src={cartImg} alt="panier" className={stylesNavbar.panierImg}/>
            <div className={stylesNavbar.count}></div>
            <span>Panier</span>
            </NavLink>
            </div>
            <NavLink to='./connexion' >Connexion</NavLink>
            
        </div>
    )
};
export default Navbar;