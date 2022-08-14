import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import component
import NavigationBar from './component/navigationBar';

//import pages
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisPage from './pages/register';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisPage/>} />
        </Routes>
      </div>
    );

  }
}

export default App;
