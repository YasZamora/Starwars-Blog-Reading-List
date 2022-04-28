import React from "react";
import { Link } from "react-router-dom";
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3" style={{paddingLeft:"20px", paddingRight:"20px"}}>
			<Link to="/">
				<img src= "https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo-650x366.png" style={{height:"50px"}}></img>
			</Link>
			<div className="ml-auto">
					<DropdownButton id="dropdown-basic-button" title="Favorites">
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</DropdownButton>
			</div>
		</nav>
	);
};
