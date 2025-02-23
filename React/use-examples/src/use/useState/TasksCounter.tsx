import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskCounter: React.FC<{ initialTasks: Task[] }> = ({ initialTasks }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const completedCount = tasks.filter((task) => task.completed).length;

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Tasks: {completedCount}/{tasks.length} completed</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskCounter;