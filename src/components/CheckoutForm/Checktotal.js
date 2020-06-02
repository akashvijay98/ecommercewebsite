import React from "react";
import { Link } from "react-router-dom";


export default function Checktotal({ item }) {
  const { clearCart} = item;

  
   
  return (
    
   

   
     

        <div className="row">
        
          <div className="col-10 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            
            <div className="col-10 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
           
            <div className="row">
             <div className="col-10 mx-aut0 text-center text-title">
                  <Link to="/">
                <button
                 className="btn btn-outline-danger text-uppercase mb-3 px-5"
                 type="button"
                onClick={() => clearCart()}>
                    continue
                    </button>
                    </Link>

             </div>
         </div>
        </div>
        
           
          </div>
        </div>
    
  );
}
