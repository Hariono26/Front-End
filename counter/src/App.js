import React from "react";
import {
  Button,
} from "react-bootstrap"

import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const counter = useSelector((state) => 
    state.countReducer)

  const dispatch = useDispatch()

  const onMin = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }

  const onPlus = () => {
    dispatch({
      type: 'INCREMENT'
    })
  }

  return (
    <div style={{height: '100vh'}}>
      <h1 style={styles.title}>COUNTER</h1>
      <div style={styles.container}>
        <Button variant="danger" size='lg' onClick={onMin}>-</Button>
        <h1 style={styles.content}>{counter.count}</h1>
        <Button variant="success" size='lg' onClick={onPlus}>+</Button>
      </div>
    </div>
  )
}

const styles = {
  title: {
    textAlign: 'center'
  },
  container: {
    height: '70%',
    width: '40%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto'
  },
  content: {
    fontSize: '200px'
  }
}

export default App
