import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
	
		<nav className="navbar navbar-light bg-light mb-3" style={{paddingLeft:"20px", paddingRight:"20px"}}>
			<Link to="/">
				<img src= "https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo-650x366.png" style={{height:"50px"}}></img>
			</Link>
			<div className="ml-auto">
					<DropdownButton id="dropdown-basic-button" title ={`Favorites ${store.favoritos.length}`} >
					{store.favoritos.map((favorito,idx) => ( 
						<>
						<Dropdown.Item href="#/action-1">{favorito}<i onClick={() => actions.deleteFavoritos(idx)} style={{float:"right"}} className="fa-solid fa-trash-can"></i></Dropdown.Item>
						</>	
					))}
						</DropdownButton>
			</div>
		</nav>
	);
};
