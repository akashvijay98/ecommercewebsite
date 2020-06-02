import React, { Component } from 'react';
import Title from '../Title';

import {ProductConsumer} from '../../Context';

import Checkout from './Checkout'

import Checktotal from "./Checktotal"

export default class check extends Component {
  render() {
    return (
      <section>

        <ProductConsumer>
          {item => {
              const {cart} =item;
              if(cart.length>0) {
                return(
                  <React.Fragment>
                
                    <Checkout total={item.cartTotal}/>
                  
                   <Checktotal item={item} />
                    


                
                  
               

                

            
                  </React.Fragment>
                
                );

              }
             
            }
           
        
          }
        </ProductConsumer>
    



        
        </section>
     
 
      

    );
  }
}
