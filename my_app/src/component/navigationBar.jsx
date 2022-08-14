import React from 'react'
import {
    Nav,
    Navbar,
    Dropdown,
    Button,
    Image
} from 'react-bootstrap'
import { LOGO } from '../assets'
import { Link } from 'react-router-dom'

class NavigationBar extends React.Component {
    render () {
        return(
            <Navbar fixed='top' className='px-5' style={styles.navbar} expand="lg">
              <Navbar.Brand href="#home">
                <Image style={styles.image} src={LOGO} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link style={styles.navLink} href="#home">Home</Nav.Link>
                  <Nav.Link style={styles.navLink} href="#link">Product</Nav.Link>
                  <Nav.Link style={styles.navLink} href="#link">Contact Us</Nav.Link>
                </Nav>
                <Button variant="outline-warning" style={{border: 'none'}}><i class="fa-solid fa-cart-shopping"></i></Button>
                <Dropdown style={{marginLeft: '10px'}}>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Username
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/login' >Login</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/register'>Register</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
              </Navbar.Collapse>
            </Navbar>
        )
    }
}

const styles = {
    navbar: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    image: {
        height: '40px'
    },
    navLink: {
        color: 'white'
    }
}


export default NavigationBar