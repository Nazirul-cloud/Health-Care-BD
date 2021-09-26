import React from 'react';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
           
           <nav>
               <div className='text-center bg-info pb-3'>
               <a className="navbar-brand text-white" href="">
                    <img src={logo} width="50" height="40"  alt="logo"/>
                Health Care</a>
                <h4 className="text-gray">Affordable full body health checkups only $550</h4> 
               </div>
            </nav>
        </div>
    );
};

export default Header;