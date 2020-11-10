import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from "./components/Todos";
import React from "react";
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/about'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Take out trash",
          completed: false,
        },
        {
          id: 2,
          title: "cook dinner",
          completed: false,
        },
        {
          id: 3,
          title: "Make react application",
          completed: false,
        },
      ],
    };
  }
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => {
        return todo.id !== id
      })]
    })
  }
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo AddTodo={this.addTodo} />
                <h1>
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </h1>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
