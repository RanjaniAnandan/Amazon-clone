import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket }] = useStateValue();
  
  return (
    <div className='checkout'>
      <div className='checkout__left'>
      <img 
        className='checkout__ad'
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Coupons/Carnival_Sep23/Header/Header_PC.gif"
        alt=""
      /> 
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            Your have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>

          {/*  List out all of the Checkout Product */}
          {basket.map(item => (   
            <CheckoutProduct 
            id = {item.id}
            title = {item.title}
            image = {item.image}
            price = {item.price}
            rating = {item.rating}
            />
          ))}
        </div>
      )}
  </div>
      {basket.length > 0 && (
        <div className='checkout__right'>
           <Subtotal /> 
        </div>
      )}
    </div>
  );
}

export default Checkout