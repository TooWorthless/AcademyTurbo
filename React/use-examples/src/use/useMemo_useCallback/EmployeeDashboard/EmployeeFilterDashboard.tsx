import React, { useState, useEffect, useMemo, useCallback } from "react";

import { IEmployee } from "./IEmployee";
import { fetchEmployees } from "./mockApi";


const EmployeeFilterDashboard: React.FC = () => {

    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [departmentFilter, setDepartmentFilter] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<IEmployee['status'] | ''>('');

    useEffect(() => {
        const loadEmployees = async () => {
            try {
                const data = await fetchEmployees();
                setEmployees(data);
                setLoading(false);
            } catch (error) {
                console.log(error);

                setError('Error');
                setLoading(false);
            }
        }
        loadEmployees();
    }, []);

    const filterEmployees = useCallback(
        (employee: IEmployee) => {
                const matchesDepartment = departmentFilter ? employee.department === departmentFilter : true;
                const matchesStatus = statusFilter ? employee.status === statusFilter : true;
                return matchesDepartment && matchesStatus;
        },
        [[departmentFilter, statusFilter]]
    )
    
    const departments = useMemo(
        () => {
            return Array.from(new Set(employees.map((emp) => emp.department)));
        },
        [employees]
    );

    const filteredEmployees = useMemo(
        () => {
            return employees.filter(filterEmployees);
        },
        [employees, filterEmployees]
    );

    if (loading) {
        return <div>Loading employees...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Employee Dashboard</h2>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="department">Department: </label>
                <select
                    id="department"
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                    <option value="">All</option>
                    {departments.map((dept) => (
                        <option key={dept} value={dept}>
                            {dept}
                        </option>
                    ))}
                </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="status">Status: </label>
                <select
                    id="status"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as IEmployee['status'] | '')}
                >
                    <option value="">All</option>
                    <option value="active">Active</option>
                    <option value="onLeave">On Leave</option>
                    <option value="terminated">Terminated</option>
                </select>
            </div>

            <div>
                <h3>Filtered Employees ({filteredEmployees.length})</h3>
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
