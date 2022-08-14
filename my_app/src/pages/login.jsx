import React from 'react'
import {
    InputGroup,
    Form,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false
        }
    }
    
    render() {
        const { visibility } = this.state
        return (
            <div style={styles.cont}>
                <div style={styles.contForm}>
                    <h1 style={{color: 'orange'}}>Hello,</h1>
                    <h3 style={{color: 'orange'}} className='mb-4'>Welcome back !</h3>
                    <Form.Label style={styles.fontColor}>Username</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <i class="fa-solid fa-user"></i>
                        </InputGroup.Text>
                        <Form.Control placeholder="Input Your Username"/>
                    </InputGroup>
                    <Form.Label style={styles.fontColor}>Password</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" onClick={() => this.setState({visibility: !visibility})}>
                            {visibility ? <i class="fa-solid fa-eye"></i> : <i class="fa-solid fa-eye-slash"></i>}
                        </InputGroup.Text>
                        <Form.Control 
                            type={visibility ? 'text' : 'password'} 
                            placeholder="Input Your Password"/>
                    </InputGroup>
                    <div style={styles.contButton}>
                        <Button variant="warning">Login</Button>
                    </div>
                    <p style={styles.parRegislink}>Don't have an account? <Link style={styles.regisLink} to='/register'>Register</Link></p>
                </div>
            </div>
        )
    }
}

const styles = {
    cont: {
        background: "url(https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center",
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center'
    },
    contForm: {
        width: '25vw',
        height: '65vh',
        marginTop: '20vh',
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

export default LoginPage