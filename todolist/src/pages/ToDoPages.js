import React from "react"
import {
    Form,
    Button
} from 'react-bootstrap'

import ToDoItem from "../component/ToDoItem";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import Axios from 'axios'

const ToDoPages = () => {
    const listActivity = useSelector((state => state.todo.activities))
    const dispatch = useDispatch()
    

    const fetchData = () => {
        Axios.get('http://localhost:2000/activities')
        .then(res => {
            dispatch({
                type: 'GET_DATA',
                payload: res.data
            })
        })
    }

    
    useEffect(() => {
        Axios.get('http://localhost:2000/activities')
        .then(res => {
            dispatch({
                type: 'GET_DATA',
                payload: res.data
            })
        })
    }, [dispatch])

    const showData = () => {
        return (
            listActivity.map((item) => {
                return (
                    <ToDoItem 
                    data={item}
                    key={item.id}
                    delete={() => onDelete(item.id)}
                    complete={() => onComplete(item.id)}
                    />
                    )
                })
                )
            }
    
    const onDelete = (id) => {
        Axios.delete(`http://localhost:2000/activities/${id}`)
        .then(res => {
          fetchData()
        })
    }   

    const onComplete = (id) => {
        Axios.patch(`http://localhost:2000/activities/${id}`, {isCompleted: true})
        .then(res => {
            fetchData()
        })
    }

    const newTodo = useRef()
    const obj = {
        name: newTodo.current,
        isCompleted: false
    }

    const onAdd = () => {
        console.log(obj)
    }

    return (
        <div style={styles.container}>
            <h1>TO DO LIST</h1>
            {showData()}
            <div style={styles.input}>
                <Form.Control placeholder="Input New Activity" ref={newTodo}/>
                <Button variant="primary" className="ms-2" onClick={onAdd} >Add</Button>
            </div>
        </div>
    )
    
}

const styles = {
    container: {
        padding: '15px'
    },
    input: {
        width: '25vw',
        display: 'flex'
    }
}

export default ToDoPages