import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";



function CartWidget() {
	return (
		<div>
			<li>
			 
			 	<div>
			 	<FontAwesomeIcon icon={ faCartShopping } /> 

			 	</div>
			
			</li>
		</div>
	);
}

export default CartWidget;



