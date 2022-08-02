import React from "react";
import {
    Form,
    Button
} from 'react-bootstrap'

//import component
import ToDoItem from "./component/ToDoItem";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activities: [
                {id: 1, name: `Eat`},
                {id: 2, name: `Sleep`},
                {id: 3, name: 'Coding'},
            ]
        }
    }

    showData = () => {
        return (
            this.state.activities.map(item => {
                return <ToDoItem data={item} key={item.id} />
            })
        )
    }

    onAdd = () => {
        //mempersiapkan data toDo baru & id nya
        let newToDo = this.refs.toDo.value
        let id = this.state.activities[this.state.activities.length - 1].id + 1
        
        // menyiapkan array untuk state yang baru
        let tempArr = [...this.state.activities]
        
        //menambahkan data baru kedalam temptArr
        tempArr.push({id, name: newToDo})
        
        // mengganti setState activities dengan tempArr yang berisi data aktifitas baru
        this.setState({activities: tempArr})

        // untuk mengosongkan kembali form control
        this.refs.toDo.value = ``
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

export default App