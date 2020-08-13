import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm'
import TeachersList from './pages/TeacherList'

const Routes = () => {
  return (
    <Router>
      <Route path='/' exact component={Landing} />
      <Route path='/give-classes' component={TeacherForm} />
      <Route path='/study' component={TeachersList} />
    </Router>
  )
}

export default Routes