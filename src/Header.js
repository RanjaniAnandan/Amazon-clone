import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Search } from "@material-ui/icons";
import { ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">

      <Link to="/" className="header__link">
        <p className="header__logo">ANRA</p>
      </Link>

      
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>
    
      <div className="header__nav">
       
        <Link to={!user && "/LoginPage"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}{" "}
            </span>
          </div>
        </Link>

       
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo"> &Orders</span>
          </div>
        </Link>

        
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        
        <Link to="/Checkout" className="header__link">
          <div className="header__optionBasket">
            
            <ShoppingBasket />
            
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
