import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image  from 'react-bootstrap/Image';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to = '/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><a style={{display: "table-cell"}} href="https://9gag.com/tag/girl" target="_blank">SAUCE</a></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                NSFW
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">DARK HUMOR</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                WTF
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {user.photoURL ?
                            <Image
                            style={{height : '40px'}}
                            roundedCircle
                            src={user.photoURL}
                            ></Image>
                            :
                            <FaUserAlt></FaUserAlt>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                           9GAG
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;