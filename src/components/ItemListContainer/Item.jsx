import React from 'react';
import ItemListContainer from './ItemListContainer.jsx';

function Item(props) {
	return (
		<div>
			<h3>{props.title}</h3>
			<img class="w-75" src={props.imgurl} alt={props.title}/>
			<p>${props.price}</p>
		</div>
	);
}

export default Item; 