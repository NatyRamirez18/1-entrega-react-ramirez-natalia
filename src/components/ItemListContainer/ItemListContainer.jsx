import React from 'react';
import Item from './Item';

function ItemListContainer() {
	return (
		<div className="d-flex justify-content-around">
			
			
			<Item imgurl="/img/cup-old1.jpg" title= "Product 1" price={100}/> 

			<Item imgurl="/img/tea-cup.jpg" title= "Product 2" price={200}/> 
			<Item imgurl="/img/tea-cup-1.jpg" title= "Product 3" price={300}/> 
		</div>
	);
}

export default ItemListContainer;