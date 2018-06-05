import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks:[ 
        {task: 'Go to Dentist', isComplete: false},
        {task: 'Do Gardening', isComplete: true},
        {task: 'Renew Library Account', isComplete: false},
      ],
      formInput: JSON.parse(localStorage.getItem('TASKS'))
    
      }
      

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
      localStorage.setItem('TASKS', JSON.stringify(this.state.tasks))
      

    return(
      <div className="container">
        <TaskList tasks={this.state.tasks} formInput={this.state.formInput} toggleTaskStatus={this.toggleTaskStatus} 
        deleteTask={this.deleteTask}/>
      </div>
    )    
  }
}

export default App;
