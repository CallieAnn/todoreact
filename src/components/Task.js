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
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label><input id="toggleTaskStatus" type="checkbox" onChange={this.toggleTask.bind(this)} value="" className="" checked={isComplete ? 'checked' : ''}></input></label>
              </div>
              <div className={"col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text " + (isComplete?'complete':'')}>
                {task.task}
              </div>
              <div className="delete-icon-area">
                <button className="" onClick={onDeleteTask}>Delete</button>
              </div>
            </div>
          </li>
       ) 
    }
}


export default Task;