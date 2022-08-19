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
import { connect } from 'react-redux'
import { logout } from '../redux/actions'

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar fixed='top' className='px-5' style={styles.navbar} expand="lg">
                <Navbar.Brand href="#home">
                    <Image style={styles.image} src={LOGO} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={styles.navLink} as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link style={styles.navLink} href="#link">Product</Nav.Link>
                        <Nav.Link style={styles.navLink} href="#link">Contact Us</Nav.Link>
                    </Nav>
                    <Button variant="outline-warning"><i className="fa-solid fa-cart-shopping"></i></Button>
                    <Dropdown style={{ marginLeft: '10px' }}>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            {this.props.username ? this.props.username : "Username"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {this.props.username ?
                                <>
                                    <Dropdown.Item>History</Dropdown.Item>
                                    <Dropdown.Item onClick={this.props.logout}>Logout</Dropdown.Item>
                                </>
                                :
                                <>
                                    <Dropdown.Item as={Link} to='/login' >Login</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/register'>Register</Dropdown.Item>
                                </>
                            }
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

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username
    }
}


export default connect(mapStateToProps, { logout })(NavigationBar)