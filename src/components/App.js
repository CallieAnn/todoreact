import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.formInput = JSON.parse(localStorage.getItem('TASKS'));
    this.state = {
      tasks: []
    };

    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);

  }
  
  toggleTaskStatus(index) {
   console.log("Toggle the task");
  }

  deleteTask(event, taskIndex) {
    console.log("Delete the task");
  }
  addTask(task) {
    console.log("Add the task");
  }
  
  render() { 
    localStorage.setItem('TASKS', JSON.stringify(this.state.tasks));
    return(
      <div className="App">
        This is the task list: {this.state.tasks}
      </div>
    ) 
  }
}

  


export default App;
