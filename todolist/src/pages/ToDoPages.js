import React from "react"
import {
    Form,
    Button
} from 'react-bootstrap'
import { connect } from 'react-redux'

import ToDoItem from "../component/ToDoItem";

import { getData, addData, delData, completeData } from "../redux/actions"

class ToDoPages extends React.Component{
    fetchData = () => {
        this.props.getData()
    }

    componentDidMount() {
        this.fetchData()
    }

    onAdd = () => {
        let newToDo = this.refs.toDo.value
        
        let obj = {
            name: newToDo,
            isCompleted: false
        }

        this.props.addData(obj)
        
        this.refs.toDo.value = ``
    }
    
    onDelete = (id) => {
        this.props.delData(id)
    }

    onComplete = (id) => {
       this.props.completeData(id)
    }
    
    showData = () => {
        return (
            this.props.listActivity.map(item => {
                return (
                    <ToDoItem 
                    data={item} 
                    key={item.id}
                    delete={() => this.onDelete(item.id)}
                    complete={() => this.onComplete(item.id)} 
                    />
                    )
                })
                )
            }
            
    render() {
        return (
            <div style={styles.container}>
                <h1>TO DO LIST</h1>
                {this.showData()}
                <div style={styles.input}>
                    <Form.Control placeholder="Input New Activity" ref='toDo' />
                    <Button variant="primary" className="ms-2" onClick={this.onAdd} >Add</Button>
                </div>
            </div>
        )
    }
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

const mapStateToProps = (state) => {
    return {
        listActivity: state.todo.activities
    }
}

const mapDispatchToProps = {
    getData, 
    addData, 
    delData, 
    completeData 
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPages)