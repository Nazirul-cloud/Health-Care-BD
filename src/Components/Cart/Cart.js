import React from 'react';

const Cart = (props) => {
    const { cart, name } = props;
    let totalQuantity = 0;
    let total =0;
 for(const pack of cart){
     if(!pack.quantity){
         pack.quantity = 1;
     }
     total = total + pack.package_rate;
     totalQuantity = totalQuantity + pack.quantity;
     
 }

    return (
        <div className="mt-5 p-1">
            <h4> <i className="fas fa-cart-plus"></i> Added packages: {totalQuantity}</h4>
            <h4 className='text-center pb-4'> Total: {total}</h4>
            <div>
                <ul>
                    {
                        cart.map(name => <li>
                            {name.package_name}</li>)
                    }
                </ul>
            </div>
           
        </div>
    );
};

export default Cart;