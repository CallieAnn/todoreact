import React, { Component } from 'react';
import Task from './Task'

class TaskList extends Component {
    render(){
        const { tasks } = this.props;

        return( 
            <div>
                <li>
                    { tasks.map((task, index) => 
                    <Task
                    task={task} 
                    index={index} 
                    toggle={this.props.toggleTaskStatus}
                    delete={this.props.deleteTask} 
            
                    /> 
                    )}
                </li>
        
            </div>
        );//tasks.map is mapping over array
        
    }
}

export default TaskList;