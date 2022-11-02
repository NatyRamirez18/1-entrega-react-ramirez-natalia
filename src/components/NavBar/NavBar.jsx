import React from 'react';
import CartWidget from './CartWidget.jsx';
import './NavBar.css'




function NavBar() {
	return (
<nav className="navbar navbar-expand-lg bg-light ms-0 sticky-top w-100">
	<div className="container-fluid">
		<a className="navbar-brand" href="#"><span className= "fs-2 fw-bolder">Tea Time</span></a>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span></button>
    	<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      	<div className="navbar-nav d-flex justify-content-end">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Products</a>
        <a className="nav-link" href="#">Shop</a>
         <a className="nav-link" href="#">FAQ</a>
        <a className="nav-link" href="#"> <CartWidget />count="0" </a>
		
        
      </div>
    </div>
  </div>
</nav>
		
	);
}

export default NavBar;