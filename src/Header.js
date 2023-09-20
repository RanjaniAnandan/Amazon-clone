import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Search } from '@material-ui/icons';
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Maskqueen1 from "./Maskqueen1.png"


function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
        {/* logo on the left -> img */}
        
        <Link to="/">
          <img 
            className="header__logo" 
            src={Maskqueen1}
            alt="logo" 
          />
        </Link>

        {/* Search box */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <Search className="header__searchIcon" />
        </div>

        {/* 3 Links */}

        <div className="header__nav">
          {/* 1st link */}
          <Link to= {!user && "/LoginPage"} className='header__link'>
          <div onClick={login} className='header__option'>
            <span className='header__optionLineOne'>Hello {user?.email}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'} </span>
          </div>
          </Link>

          {/* 2nd link */}
          <Link to="/" className='header__link'>
          <div className='header__option'>
            <span  className='header__optionLineOne'>Returns</span>
            <span  className='header__optionLineTwo'> &Orders</span>
          </div>
          </Link>


          {/* 3rd link */}
          <Link to="/" className='header__link'>
          <div className='header__option'>
            <span  className='header__optionLineOne'>Your</span>
            <span  className='header__optionLineTwo'>Prime</span>
          </div>
          </Link>


          {/* 4th link */}
          <Link to="/Checkout" className='header__link'>
            <div className='header__optionBasket'>
              {/* Shopping basket icon */}
              <ShoppingBasket />
              {/* Number of items in the basket */}
              <span className='header__optionLineTwo header__basketCount'>
                {basket?.length}
              </span>
            </div>
          
          </Link>

        </div>


        {/* Basket icon with number */}
    </nav>
  )
}

export default Header;