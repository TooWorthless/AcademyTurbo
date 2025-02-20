import React from "react";


interface EmployeeFilterProps {
    department: string;
    onDepartmentChange: (dept: string) => void;
}


const EmployeeFilter: React.FC<EmployeeFilterProps> = ({ department, onDepartmentChange }) => {
    const departments = ['Emgineering', 'HR', 'Sales'];

    return (
        <div style={{ margin: '20px' }}>
            <label htmlFor="department">
                Filter by Department: 
            </label>

            <select 
                name="" 
                id="department"
                value={department}
                onChange={(e) => onDepartmentChange(e.target.value)}
            >
                <option value="">All</option>
                {departments.map((dept) => (
                    <option key={dept} value={dept}>
                        {dept}
                    </option>
                ))}
            </select>
        </div>
    );
}


export default EmployeeFilter;