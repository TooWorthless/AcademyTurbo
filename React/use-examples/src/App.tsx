import React from "react";
import Notification from "./props/Notifications";
import EmployeeFilterDashboard from "./useState/EmployeeFilterDashboard";
import ThemeSwitcher from "./useState/ThemeSwitcher";
import LoginForm from "./useState/LoginForm";
import "./App.css";


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

function App() {
    return (
        <div className="App">
            <div className="App-body">
                {/* <Notification message="msg" type="error" onClose={() => console.log("close")} /> */}
                {/* <EmployeeFilterDashboard employees={mockEmployees}/> */}
                {/* <ThemeSwitcher /> */}
                <LoginForm />
            </div>
        </div>
    );
}

export default App;
