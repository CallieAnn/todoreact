import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks:[ 
        {task: 'Go to Dentist', isComplete: false},
        {task: 'Do Gardening', isComplete: true},
        {task: 'Renew Library Account', isComplete: false},
      ],
      formInput: JSON.parse(localStorage.getItem('TASKS')),
      }
      

    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);

  }
  
  toggleTaskStatus(index) {
    let tasks=this.state.tasks;
    console.log(tasks);
    tasks[index].isComplete = !tasks[index].isComplete;
    this.setState({
      tasks: tasks
    });
   console.log("Toggle the task");
  }

  deleteTask(event, taskIndex) {
    let tasks=this.state.tasks;
    tasks.splice(taskIndex, 1);
    this.setState({
      tasks: tasks
    });

    console.log("Delete the task");
  }
  addTask(task) {
    let tasks=this.state.tasks;
    let newTask = {
      task,
      isComplete: false,
    };
    let parentDiv = document.getElementById('addTask').parentElement;
    if(task === '') {
      parentDiv.classList.add('has-error');
    } else {
      parentDiv.classList.remove('has-error');
    console.log("Add the task");
  }
}
  
  render() { 
      localStorage.setItem('TASKS', JSON.stringify(this.state.tasks))
      

    return(
      <div className="container">
        <TaskList tasks={this.state.tasks} formInput={this.state.formInput} toggleTaskStatus={this.toggleTaskStatus} 
        deleteTask={this.deleteTask}/>
        <TaskForm tasks={this.state.tasks} addTask={this.addTask}/>
      </div>
    )    
  }
}

export default App;
