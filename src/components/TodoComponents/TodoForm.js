import React from "react";

const Styles = {
  container: {
    alignSelf: 'flex-end',
    padding: '1em',
    margin: '0 0 1em',
  },
  input: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: 'green',
    border: 'none',
    fontSize: '1.2em'
  },
  add: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2016/10/10/01/49/leave-1727488_1280.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius:'50%',
    width: '5em',
    height: '5em',
    marginLeft: '.5em',
    color: '#fff',
    
  },
  clear: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2012/04/02/16/52/trash-24938_1280.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#ccc',
    color: '#000',
    alignSelf: 'flex-end',
    borderRadius: '25%',
    width: '4em',
    height: '4em',
    margin: '.5em'
  }
  
};

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      newTask: ""
    });
    this.props.handleSubmit(e, this.state.newTask);
  };

  render() {
    return (
      <div style={Styles.container} id='todo-form'>
        <form onSubmit={this.handleSubmit}>
          
          <input
            style={Styles.input}
            value={this.state.newTask}
            name="newTask"
            placeholder="new task..."
            onChange={this.handleInput}
          />

          <button type="submit" style={Styles.add}>+</button>

        </form>
        <button onClick={this.props.clearCompleted} style = {Styles.clear}></button>
      </div>
    );
  }
}

export default ToDoForm;
