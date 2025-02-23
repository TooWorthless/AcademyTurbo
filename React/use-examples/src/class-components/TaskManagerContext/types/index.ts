import { ReactNode } from "react";

export interface Task {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
}
export interface TaskItemProps {
    task: Task;
    toggleCompletion: (id: number) => void;
    shouldThrow?: boolean;
}



export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}
export interface ThemeProviderProps {
    children: ReactNode;
}



export interface TaskManagerState {
    tasks: Task[];
    newTaskTitle: string;
    loading: boolean;
    error: string | null;
    completedCount: number;
    hasError: boolean;
}

export interface TaskManagerProps {
    style?: React.CSSProperties; // Опциональный пропс для стилей
}


