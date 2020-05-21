import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

import { Text, View } from "react";


import './App.css';


//white screen background
const view = () => {
  return (
    <View style={{backgroundColor: 'white', flex:1}}>
      <Text>Some Text</Text>
    </View>
   );
 };

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'make a list',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'finish a list',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: newTodos,
    });
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    const newtodos = this.state.todos
    newtodos.push(newTodo);
    
    this.setState({ 
      todos: newtodos
    });
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} 
                delTodo={this.delTodo} />
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


