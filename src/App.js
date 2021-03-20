import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";
import "./App.css";


const Styles = {

  container: {
    fontFamily: 'convection',
    backgroundImage: `url("https://cdn.pixabay.com/photo/2015/07/28/22/01/office-865091_1280.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    maxWidth: '100%'
  },

  title: {
    fontSize: '5em',
    color: '#000',
    padding: '.2em',
    textShadow: '2px 2px #fff',
  },  

}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: []
  };

  componentDidMount = () => {
    const localToDos = JSON.parse(localStorage.getItem("todoList"));
    this.setState({
      todos: localToDos || []
    });
  };

  

  handleSubmit = (e, newTask) => {
    e.preventDefault();
    let taskShape = {
      task: newTask,
      id: Date.now(),
      completed: false
    };
    const newToDoList = [...this.state.todos, taskShape];
    
    this.setState({
      todos: newToDoList
    });
    localStorage.setItem("todoList", JSON.stringify(newToDoList));

  };

  toggleCompleted = id => {
    const toDoById = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({
      todos: toDoById
    });
    localStorage.setItem("todoList", JSON.stringify(toDoById));
  };
  clearCompleted = () => {
    const completed = this.state.todos.filter(todo => {
      return todo.completed === false;
    });
    this.setState({
      todos: completed
    });
    localStorage.setItem("todoList", JSON.stringify(completed));
  };




  render() {
    if (!this.state.todos) return <h1>loading to dos... </h1>;

    return (
      <div style = {Styles.container} id='app-div'>
        <h2 style = {Styles.title}>To-do</h2>
        <ToDoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <h2 style = {Styles.title}>List</h2>

        <ToDoForm
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );

  }

}


export default App;
