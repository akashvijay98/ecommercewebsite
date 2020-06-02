import React from 'react';
import Checkitem from './Checkitem';
export default function Checklist({item}){
    const { cart } = item;
        return (
        <div className="container-fluid">
            {cart.map(item => {
                return  <Checkitem key={item.id}  item={item}
                  />
                
               
                
            })}
        
        </div>
    );


}