import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'

//import pages
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisPage from './pages/register';
import DetailPage from './pages/detail';

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
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisPage />} />
          <Route path='/detail' element={<DetailPage />} />
        </Routes>
      </div>
    );

  }
}

export default connect(null, { keepLogin })(App);
