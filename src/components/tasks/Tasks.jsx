
import './tasks.scss';
import React, { Component } from 'react';
import Task from '../task/Task';

class Tasks extends Component
{

    deleteTask = (id) => {
        console.log('Tasks / deleteTask() - ID: ' + id); // HACK:

        this.props.onDeleteTask(id);
    }

    render()
    {
        return (
            <article className="task-list"/* onDeleteTask={this.deleteTask}*/>
                {this.props.taskList.map(
                    task => <Task key={task.id}
                        bgColor={task.color}
                        text={task.text}
                        dataId={task.id}
                        onDeleteTask={(id) => { this.deleteTask(id); }}></Task>
                )}
            </article>
        );
    }
}

export default Tasks;
