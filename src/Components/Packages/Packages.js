import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Package from '../Package/Package';
import './Packages.css'


const Packages = () => {
    const [packages, setPackages]= useState([])
    const[cart, setCart] = useState([]);
   
    useEffect(() => {
        fetch('./Data.JSON')
        .then(res => res.json())
        .then( data => setPackages(data))
    },[])

    const handleAddToCart = pack => {
        const newCart = [...cart, pack]; 
        console.log(pack.package_name);
        setCart(newCart);
    }
    return (

    <>  
    <div className="shop-container">
        <div className="product-container">
        
            {
                packages.map(pack => <Package 
                    key = {pack.package_name}
                    package ={pack}
                    handleAddToCart ={handleAddToCart}
                ></Package>)
            } 
        
        </div>
        <div className="cart-container">
            <Cart cart={cart}> </Cart>
        </div>
    </div>
    </>
      
    );
};

export default Packages;