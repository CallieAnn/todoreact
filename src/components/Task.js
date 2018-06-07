import React, { Component } from 'react';

class Task extends Component {
    
    onDeleteTask(event) {
        event.preventDefault();
        const {deleteTask}=this.props;
        const {index}=this.props;
        deleteTask(event, index);
    }

    toggleTask(index)
    {
        this.props.toggleTaskStatus(this.props.index);
    }
    render() { 
        const {task}=this.props;
        const {index}=this.props;
 
        const {isComplete}=this.props;
        //const {deleteTask}=this.props;
        const toggleTaskStatus=this.props.toggleTaskStatus;
        const onDeleteTask = this.onDeleteTask.bind(this);
        
        return (
          <li className="list-group-item checkbox">
            <div className="row">
              <span className="checkbox-area">
                <label><input id="toggleTaskStatus" type="checkbox" onChange={this.toggleTask.bind(this)} value="" className="" checked={isComplete ? 'checked' : ''}></input></label>
              </span>
              <span className={"task-area" + (isComplete? ' complete':'')}>
                {task.task}
              </span>
              <span className="delete-area">
                <button className="delete" onClick={onDeleteTask}>Delete</button>
              </span>
            </div>
          </li>
       ) 
    }
}


export default Task;