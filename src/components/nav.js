import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <header>
    <h1>Testing stuff!</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/fetch-data">Fetch Data</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Nav
