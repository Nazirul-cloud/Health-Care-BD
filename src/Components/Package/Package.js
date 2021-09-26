import React from 'react';
import './Package.css'

const Package = (props) => {
    // console.log(props);
    const {package_name, age_range, package_rate, details, img, offer } = props.package;
    return (
        
             <div className="single-package" style={{"width": "18rem"}}>
                <img src={img} height="100" className="card-img-top mb-4" alt="..."/>
                <div className="">
                    <h5 className="">{package_name}</h5>
                    <p>Ideal for person aged: {age_range}</p>
                    <div className="d-flex justify-content-around bg-light bg-gradient rounded ">
                    <h5>{offer} off</h5>
                    <h5><small>Only ${package_rate}</small></h5>
                    </div>
                    <p><small>{details}</small></p>

                    <div className='text-center'>
                    
                    <button  onClick ={() => props.handleAddToCart(props.package)}  type="button" className="btn btn-info regular-btn">
                    <i className="fas fa-cart-plus"></i>
                         Add Package
                        </button>
                    </div>
                    
                </div>
           </div>
       
      
    );
};

export default Package;