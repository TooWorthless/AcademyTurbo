import React, { Component } from "react";
import { TaskManagerProps, TaskManagerState, Task } from "../types";
import fetchTasks from "../api/mockApi";


class TaskManager extends Component<TaskManagerProps, TaskManagerState> {
    constructor(props: TaskManagerProps) {
        super(props);

        this.state = {
            tasks: [],
            newTaskTitle: '',
            loading: true,
            error: null,
            completedCount: 0,
        }

        this.handleAddTask = this.handleAddTask.bind(this);
        this.toggleTaskCompletion = this.toggleTaskCompletion.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    async componentDidMount() {
        try {
            const tasks = await fetchTasks();
            this.setState({
                tasks,
                loading: false,
                completedCount: tasks.filter((task) => task.completed).length,
            });
        } catch (err) {
            this.setState({ error: 'Failed to load tasks', loading: false });
        }
    }

    componentDidUpdate(prevProps: TaskManagerProps, prevState: TaskManagerState) {
        if (prevState.tasks !== this.state.tasks) {
            const completedCount = this.state.tasks.filter((task) => task.completed).length;
            if (completedCount !== this.state.completedCount) {
                this.setState({ completedCount });
            }
        }
    }

    componentWillUnmount() {
        console.log('TaskManager unmounted');
    }

    shouldComponentUpdate(nextProps: TaskManagerProps, nextState: TaskManagerState) {
        return (
            this.state.tasks !== nextState.tasks ||
            this.state.newTaskTitle !== nextState.newTaskTitle ||
            this.state.loading !== nextState.loading ||
            this.state.error !== nextState.error ||
            this.state.completedCount !== nextState.completedCount
        );
    }


    handleAddTask() {
        if (!this.state.newTaskTitle.trim()) return;
        const newTask: Task = {
            id: Date.now(),
            title: this.state.newTaskTitle,
            completed: false,
            createdAt: new Date(),
        };
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, newTask],
            newTaskTitle: '',
        }));
    }

    handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ newTaskTitle: e.target.value });
    }

    toggleTaskCompletion(id: number) {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        }));
    }

    render() {

        const { tasks, newTaskTitle, loading, error, completedCount } = this.state;

        if (loading) return <div>Loading tasks...</div>;
        if (error) return <div style={{ color: 'red' }}>{error}</div>;

        return (
            <div style={{ padding: '20px' }}>
                <h2>Task Manager</h2>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="text"
                        value={newTaskTitle}
                        onChange={this.handleInputChange}
                        placeholder="New task title"
                        style={{ marginRight: '10px' }}
                    />
                    <button onClick={this.handleAddTask}>Add Task</button>
                </div>
                <p>
                    Completed: {completedCount} / {tasks.length}
                </p>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} style={{ marginBottom: '10px' }}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => this.toggleTaskCompletion(task.id)}
                            />
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.title}
                            </span>
                            <small> (Created: {task.createdAt.toLocaleTimeString()})</small>
                        </li>
                    ))}
                </ul>
            </div>
        );

    }
}


export default TaskManager;