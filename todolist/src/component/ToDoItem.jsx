import React from "react";
import {
    Button
} from "react-bootstrap"

const ToDoItem = (data) => {
    const activity = data

    return(
        <div style={styles.container}>
            <p style={styles.p}>ID: {activity.data.id}, {activity.data.name}</p>
            <div>
            <Button variant="danger" className="me-2" onClick={activity.delete} >Delete</Button>
            <Button variant="success" onClick={activity.complete} disabled={activity.data.isCompleted} >
                {activity.data.isCompleted ? 'Finished' : "Complete"}
            </Button>
            </div>
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: 'salmon',
        width: '25vw',
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    p: {
        margin: '0px'
    }
}

export default ToDoItem