import React from "react"
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";


function Navibar(props){
	return(
		<>
			<Navbar expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						<i className="bi bi-cloud-sun-fill Logo__img" style={{ display: 'inline-flex', marginRight: '10px', fontSize: '50px', color: 'cornflowerblue'}}></i>
						{props.firstHeader.name}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav className="ml-auto">
						<Nav.Link><Link className="navbar__a" to="/">Dashboard</Link></Nav.Link>
						<Nav.Link><Link className="navbar__a" to="/forecast">10-day forecast</Link></Nav.Link>
						<Nav.Link><Link className="navbar__a" to="/about">About</Link></Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Navibar;
