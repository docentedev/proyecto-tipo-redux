import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import CreateTodo from './containers/create-todo/CreateTodo'
import Home from './containers/home/Home'
import NotFoud from './containers/not-found/NotFound'

const App = () => {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/detail/:id">
            Detail
          </Route>
          <Route path="/todos/create">
            <CreateTodo />
          </Route>
          <Route path="*">
            <NotFoud />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
