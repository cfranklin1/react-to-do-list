// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import ToDo from "./Todo";

const Styles = {
  container: {
    //border: '1em solid #000',
    //boxShadow: '1em 1em 4em 1em #ccc',
    overflow: 'scroll',
    maxHeight: '50%',
    boxShadow: 'inset 0 0 0 1em #fff', 
    backgroundImage: `url("https://cdn.pixabay.com/photo/2013/07/12/14/42/education-148605_1280.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#fff',
    display: 'flexbox',
    alignContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    margin: '1em',
    padding: '2em'
  },

  input: {
    display: 'flex',
    width: '95%',
    marginLeft: '3em'
  },

  list: {
    fontSize: '1.5em',
    fontFamily: 'Ink Draft'
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  handleSearch = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div style={Styles.container} id='todo-list'>
        <input
          style={Styles.input}
          value={this.state.searchInput}
          name="searchInput"
          onChange={this.handleSearch}
        />

        <ul style = {Styles.list}>
          {this.props.todos.map(
            todo =>
              todo.task.includes(this.state.searchInput) && (
                <ToDo
                  todo={todo}
                  toggleCompleted={this.props.toggleCompleted}
                />
              )
          )}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
