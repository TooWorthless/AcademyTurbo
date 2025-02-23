import React from "react";
import Notification from "./use/props/Notifications";
import EmployeeFilterDashboard from "./use/useMemo_useCallback/EmployeeDashboard/EmployeeFilterDashboard";
import ThemeSwitcher from "./use/useState/ThemeSwitcher";
import LoginForm from "./use/useState/LoginForm";
import SearchList from "./use/useMemo_useCallback/SearchList/SearchList";
import "./App.css";
import { ISearchItem } from "./use/useMemo_useCallback/SearchList/ISearchItem";
import ParentComponent from "./use/forwardRef_imperativeHandle/ControlledInput/ParentComponent";
import { ThemeProvider } from "./class-components/TaskManagerContext/context/ThemeContext";
import TaskManager from "./class-components/TaskManagerContext/components/TaskManagerContext";


interface Employee {
    id: number;
    name: string;
    department: string;
    status: 'active' | 'onLeave' | 'terminated';
}
const mockEmployees: Employee[] = [
    { id: 1, name: 'John Doe', department: 'Engineering', status: 'active' },
    { id: 2, name: 'Jane Smith', department: 'HR', status: 'onLeave' },
    { id: 3, name: 'Bob Johnson', department: 'Sales', status: 'terminated' },
    { id: 4, name: 'Alice Brown', department: 'Engineering', status: 'active' },
];


const mockItems: ISearchItem[] = [
    { id: 1, title: 'It', description: 'Ai, Gpt, Ml' },
    { id: 2, title: 'Finance', description: 'Banks' },
    { id: 3, title: 'It', description: 'Engineering' },
    { id: 4, title: 'Sport', description: 'Volleybal' },
];

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="App-body">
                {/* <Notification message="msg" type="error" onClose={() => console.log("close")} /> */}
                {/* <EmployeeFilterDashboard employees={mockEmployees}/> */}
                {/* <EmployeeFilterDashboard /> */}
                {/* <SearchList items={mockItems}/> */}
                {/* <ThemeSwitcher /> */}
                {/* <LoginForm /> */}
                {/* <ParentComponent /> */}
                <ThemeProvider>
                    <div>
                        <h1>Task Management System</h1>
                        <TaskManager />
                    </div>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default App;
