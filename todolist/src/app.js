import React from "react"
import NavigationBar from "./component/Navbar.jsx"
import ToDoPages from "./pages/ToDoPages"

const App = () => {
    return (
        <div>
            <NavigationBar />
            <ToDoPages />
        </div>
    )
}

export default App