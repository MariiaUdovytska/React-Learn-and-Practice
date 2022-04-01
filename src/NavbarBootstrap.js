import React from "react"
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

function Navibar(){
	return(
		<>
			<Navbar expand="lg">
				<Container>
					<Navbar.Brand href="#home">
					<i className="bi bi-cloud-sun-fill Logo__img" style={{ display: 'inline-flex', marginRight: '10px', fontSize: '50px', color: 'cornflowerblue'}}></i>
						Weather in any city
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav className="ml-auto">
						<Nav.Link href="#home">Сhoose City</Nav.Link>
						<Nav.Link href="#link">Market</Nav.Link>
						<NavDropdown title="Popular Cities" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Kharkiv</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Kyiv</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Viena</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Phuket</NavDropdown.Item>
						</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
				</Navbar>
		</>
	)
}

export default Navibar;
