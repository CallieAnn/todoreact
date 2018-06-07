import React, { Component } from 'react';
import Task from './Task'

class TaskList extends Component {
    render(){
        const { tasks } = this.props;

        return( 
            <div>
                <ul>
                    { tasks.map((task, index) => 
                    <Task
                    key={index}
                    task={task} 
                    index={index} 
                    isComplete={task.isComplete}
                    delete={this.props.deleteTask} 
                    toggleTaskStatus={this.props.toggleTaskStatus}
                    deleteTask={this.props.deleteTask}
            
                    /> 
                    )}
                </ul>
            </div>
        );//tasks.map is mapping over array
        
    }
}

export default TaskList;