import React from "react";
import {
  Button,
} from "react-bootstrap"

import { connect } from 'react-redux'
import { increment, decrement } from './redux/actions'

class App extends React.Component {
  render() {
    return (
      <div style={{height: '100vh'}}>
        <h1 style={styles.title}>COUNTER</h1>
        <div style={styles.container}>
          <Button variant="danger" size='lg' onClick={this.props.decrement} >-</Button>
          <h1 style={styles.content}>{this.props.count}</h1>
          <Button variant="success" size='lg' onClick={this.props.increment}>+</Button>
        </div>
      </div>
    );
  }
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

const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count
  }
}

export default connect(mapStateToProps, { increment, decrement })(App);
