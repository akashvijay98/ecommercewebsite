import React from "react";
import { Link } from "react-router-dom";




export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart,proceed} = value;

  
   
  return (
    
   

   
     

        <div className="row">
        
          <div className="col-10 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <div className="col-10 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/check">
              <button 
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => proceed()}
                
              
              >
              pay with card
             
              </button>
              </Link>
           
        </div>
        <div className="col-10 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/Page">
              <button 
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => proceed()}
               
                
              
              >
              pay on delivery
              </button>
              </Link>
           
        </div>
  
              

           
  


            <h5>
              <span className="text-title">SubTotal :</span>
              <strong>$ {cartSubTotal} </strong>
            </h5>

            <h5>
              <span className="text-title">Tax :</span>
              <strong>$ {cartTax} </strong>
            </h5>

            <h5>
              <span className="text-title">SubTotal :</span>
              <strong>total {cartTotal} </strong>
            </h5>

           
          </div>
        </div>
    
  );
}
