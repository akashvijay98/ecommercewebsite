import React, { Component } from 'react';


import {ProductConsumer} from '../../Context';
import Checktotal from "../CheckoutForm/Checktotal";

import Success from "./Success";

export default class Page extends Component {
  render() {
    return (
      <section>

      <Success/>
        <ProductConsumer>
          {item => {
              const {cart} =item;
             return(
              <React.Fragment>
                
          
            <Checktotal item={item}/>
      
            </React.Fragment>
             );
                
                  
         
              }
             
            }
           
        </ProductConsumer>
    



        
        </section> 
          
     
 
      

    );
  }
}
