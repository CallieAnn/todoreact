import React, { Component } from 'react';

class Task extends Component {
    
    render() { 
        const {task}=this.props;
        const {index}=this.props;
        const {isComplete}=this.props;
        const {deleteTask}=this.props;
        const {toggleTaskStatus}=this.props;
        
        return (
            <li className="list-group-item checkbox">
            <div className="row">
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label><input id="toggleTaskStatus" type="checkbox" onChange="toDo.toggleTaskStatus({index})" value="" className="" checked={isComplete ? 'checked' : ''}></input></label>
              </div>
              <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text {isComplete?'complete':''}">
                {task.task}
              </div>
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <a className="" href="/" onClick="toDo.deleteTask(event, {index})"><i id="deleteTask" data-id="{index}" className="delete-icon glyphicon glyphicon-trash"></i></a>
              </div>
            </div>
          </li>
       ) 
    }
}


export default Task;