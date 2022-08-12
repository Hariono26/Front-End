import React from "react";
import {
    Navbar,
} from 'react-bootstrap'
import { useSelector } from 'react-redux'

const NavigationBar = () => {
    const toDoQty = useSelector((state) => 
        state.todo.activities)
    
    return (
        <Navbar bg="dark" style={styles.container}>
            <h3>TO DO LIST APP</h3>
            <h3>You have {toDoQty.length} To Do Item(s)</h3>
        </Navbar>
    )
    
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px',
        color: 'white'
    }
}

export default NavigationBar