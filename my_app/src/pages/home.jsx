import React from 'react'
import NavigationBar from '../component/navigationBar';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div style={styles.cont}>
                    <h1 >This is Home Page</h1>
                    <h2 >Coming Soon</h2>
                </div>
            </div>
        )
    }
}

const styles = {
    cont: {
        textAlign: 'center',
        margin: '30vh'
    }
}

export default HomePage