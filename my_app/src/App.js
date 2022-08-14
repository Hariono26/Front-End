import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// import component
import NavigationBar from './component/navigationBar';

//import pages
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisPage from './pages/register';

//import actions
import { keepLogin } from './redux/actions'

class App extends React.Component {
  componentDidMount() {
    let id = localStorage.getItem('idUser')
    this.props.keepLogin(id)
  }
  render() {
    return (
      <div>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisPage />} />
        </Routes>
      </div>
    );

  }
}

export default connect(null, { keepLogin })(App);
