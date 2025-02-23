export interface Task {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
}

export interface TaskManagerState {
    tasks: Task[];
    newTaskTitle: string;
    loading: boolean;
    error: string | null;
    completedCount: number;
}

export interface TaskManagerProps {}