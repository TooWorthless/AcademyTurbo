import { Task } from "../types";

export default function fetchTasks(): Promise<Task[]> {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'Design UI', completed: false, createdAt: new Date() },
                { id: 2, title: 'Implement API', completed: true, createdAt: new Date() },
                { id: 3, title: 'Write tests', completed: false, createdAt: new Date() },
            ]);
        }, 5000);
    });
}