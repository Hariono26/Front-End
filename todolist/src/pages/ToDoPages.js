import React from "react"
import Axios from "axios"
import {
    Form,
    Button
} from 'react-bootstrap'
import { connect } from 'react-redux'

//import component
import ToDoItem from "../component/ToDoItem";

//import actions
import { getData } from "../redux/actions"

class ToDoPages extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         activities: []
    //     }
    // } => PAKAI REDUX SUDAH TIDAK PERLU LOCALSTATE KARENA DIGANTIKAN DENGAN GLOBAL STATE

    fetchData = () => {
        Axios.get('http://localhost:2000/activities')
        .then(res => {
            //kirim res.data ket todoreducer dengan action getData
            this.props.getData(res.data)
        })
        // .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchData()
    }

    // componentDidUpdate() {
    //     alert('component did update')
    // }
    
    onAdd = () => {
        //mempersiapkan data toDo baru
        let newToDo = this.refs.toDo.value
        
        //siapkan object
        let obj = {
            name: newToDo,
            isCompleted: false
        }

        //menambah data baru di db.json
        Axios.post('http://localhost:2000/activities', obj)
        .then(res => {
            console.log(res.data)
            this.fetchData()
        })
        
        // untuk mengosongkan kembali form control
        this.refs.toDo.value = ``
    }
    
    onDelete = (id) => {
        Axios.delete(`http://localhost:2000/activities/${id}`)
        .then(res => {
            console.log(res.data)
            this.fetchData()
        })
    }

    onComplete = (id) => {
        Axios.patch(`http://localhost:2000/activities/${id}`, {isCompleted: true})
        .then(res => {
            this.fetchData()
        })
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
        // alert('component rendered')
        console.log(this.props.listActivity)
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

export default connect(mapStateToProps, { getData })(ToDoPages)