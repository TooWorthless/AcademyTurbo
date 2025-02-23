import React, { useState } from "react";


interface Employee {
    id: number;
    name: string;
    department: string;
    status: 'active' | 'onLeave' | 'terminated';
}


interface EmployeeFilterDashboardProps {
    employees: Employee[];
}


const EmployeeFilterDashboard: React.FC<EmployeeFilterDashboardProps> = ({ employees }) => {
    const [departmentFilter, setDepartmentFilter] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<Employee['status'] | ''>('');

    const departments = Array.from(new Set(employees.map((emp) => emp.department)));


    const filteredEmployees = employees.filter((employee) => {
        const matchDepartment = departmentFilter ? employee.department === departmentFilter : true;
        const matchStatus = statusFilter ? employee.status === statusFilter : true;

        return (matchDepartment && matchStatus);
    });

    return (
        <div style={{ padding: '20px' }}>
            <h2>Employee Dashboard</h2>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="department">Department: </label>
                <select
                    name=""
                    id="department"
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                    <option value="">All</option>
                    {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                    ))}
                </select>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="status">Status: </label>
                <select
                    name=""
                    id="status"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as Employee['status'] | '')}
                >
                    <option value="">All</option>
                    <option value="active">Active</option>
                    <option value="onLeave">On Leave</option>
                    <option value="terminated">Terminated</option>
                </select>
            </div>

            <div>
                <h3>Filtered Employees ({ filteredEmployees.length })</h3>
                {filteredEmployees.length > 0 ? (
                    <ul>
                        {filteredEmployees.map((employee) => (
                            <li key={employee.id}>
                                {employee.name} - {employee.department} ({employee.status})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No employees match the filters.</p>
                )}
            </div>
        </div>
    );
}


export default EmployeeFilterDashboard;
