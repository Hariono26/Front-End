import React from 'react'
import {
    InputGroup,
    Form,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class RegisPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false,
            visibility2: false
        }
    }
    
    render() {
        const { visibility } = this.state
        const { visibility2 } = this.state
        return (
            <div style={styles.cont}>
                <div style={styles.contForm}>
                    <h2 style={{color: 'orange'}}>Looking for Tasty Pastry?</h2>
                    <h3 style={{color: 'orange'}} className='mb-4'>Register Now!!!</h3>
                    <Form.Label style={styles.fontColor}>Username</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <i className="fa-solid fa-user"></i>
                        </InputGroup.Text>
                        <Form.Control placeholder="Input Your Username"/>
                    </InputGroup>
                    <Form.Label style={styles.fontColor}>E-mail</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <i className="fa-solid fa-envelope"></i>
                        </InputGroup.Text>
                        <Form.Control placeholder="Input Your E-mail"/>
                    </InputGroup>
                    <Form.Label style={styles.fontColor}>Password</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" onClick={() => this.setState({visibility: !visibility})}>
                            {visibility ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                        </InputGroup.Text>
                        <Form.Control 
                            type={visibility ? 'text' : 'password'} 
                            placeholder="Input Your Password"/>
                    </InputGroup>
                    <Form.Label style={styles.fontColor}>Confirm Password</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" onClick={() => this.setState({visibility2: !visibility2})}>
                            {visibility2 ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                        </InputGroup.Text>
                        <Form.Control 
                            type={visibility2 ? 'text' : 'password'} 
                            placeholder="Confirm Your Password"/>
                    </InputGroup>
                    <div style={styles.contButton}>
                        <Button variant="warning">
                            <i style={{marginRight:'10px'}} class="fa-solid fa-file-arrow-up"></i>
                            Register
                        </Button>
                    </div>
                    <p style={styles.parRegislink}>Already have an account? <Link style={styles.regisLink} to='/login'>Login</Link></p>
                </div>
            </div>
        )
    }
}

const styles = {
    cont: {
        background: "url(https://images.unsplash.com/photo-1608582037152-adefa9decb70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80) center",
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'right'
    },
    contForm: {
        width: '35vw',
        marginTop: '70px',
        marginRight: '5px',
        marginBottom: '5px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '2%',
        borderRadius: '20px'
    },
    contButton: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    fontColor: {
        color: 'white'
    },
    parRegislink: {
        textAlign: 'center',
        color: 'white'
    },
    regisLink: {
        color: 'orange',
    }
}

export default RegisPage