import React from "react"
import NavigationBar from "./component/Navbar.jsx"
import ToDoPages from "./pages/ToDoPages"

class App extends React.Component{
    render() {
        return (
            <div>
                <NavigationBar />
                <ToDoPages />
            </div>
        )
    }
}

export default App