import React from "react"
// import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

// import file app.js
import App from "./app"

// ReactDOM.render(
//     <App />,
//     document.getElementById(`root`)
// )

createRoot(document.getElementById('root')).render(<App />)