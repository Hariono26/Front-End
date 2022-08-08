import React from "react"
// import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

// import file app.js
import App from "./app"

//setup redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import allReducer from './redux/reducers'
import ReduxThunk from 'redux-thunk'

let globalState = createStore(allReducer, applyMiddleware(ReduxThunk))

// ReactDOM.render(
//     <Provider store={globalState}>
//         <App />
//     </Provider>
//     ,
//     document.getElementById(`root`)
// )

createRoot(document.getElementById('root')).render(
<Provider store={globalState}>
    <App />
</Provider>)