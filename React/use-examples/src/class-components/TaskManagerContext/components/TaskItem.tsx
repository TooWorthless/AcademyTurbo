import React from "react";
import { Task, TaskItemProps } from "../types";


const TaskItem: React.FC<TaskItemProps> = ({ task, toggleCompletion, shouldThrow }) => {
    if (shouldThrow) {
        throw new Error('Test error in TaskItem');
    }

    return (
        <li style={{ marginBottom: '10px' }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
            <small> (Created: {task.createdAt.toLocaleTimeString()})</small>
        </li>
    );
};


export default TaskItem;