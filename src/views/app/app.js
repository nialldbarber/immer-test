import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import configureStore from 'store'
import Home from 'views/home'
import TodosPage from 'views/todos'
import CounterPage from 'views/counter'
import FetchDataPage from 'views/fetch-data'
import Nav from 'components/nav'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={TodosPage} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/fetch-data" component={FetchDataPage} />
      </Switch>
    </Router>
  </Provider>
)

export default App
