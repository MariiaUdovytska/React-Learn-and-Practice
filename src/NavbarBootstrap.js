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
						<Nav.Link href="#link">About</Nav.Link>
						{/* <Nav.Link href="/">Dashboard</Nav.Link>
						<Nav.Link href="/forecast">8-day forecast</Nav.Link>
						<Nav.Link href="#link">About</Nav.Link> */}
						{/* <NavDropdown title="Popular Cities" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Kharkiv</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Kyiv</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Viena</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Phuket</NavDropdown.Item>
						</NavDropdown> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
				</Navbar>
		</>
	)
}

export default Navibar;
