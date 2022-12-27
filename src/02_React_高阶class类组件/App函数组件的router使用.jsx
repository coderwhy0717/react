import React from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  // css
  // npm install react-transition-group
  return (
    <div>
      {/* <Home />
        <Detail /> */}

      <Link to="/home">home</Link>
      <Link to="/detail">detail</Link>
      <Link to="/page">page</Link>

      {useRoutes(routes)}
    </div>
  )
}

export default App
