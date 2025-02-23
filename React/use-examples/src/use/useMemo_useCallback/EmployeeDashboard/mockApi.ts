import { IEmployee } from "./IEmployee";

export const fetchEmployees = (): Promise<IEmployee[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'John Doe', department: 'Engineering', status: 'active' },
                { id: 2, name: 'Jane Smith', department: 'HR', status: 'onLeave' },
                { id: 3, name: 'Bob Johnson', department: 'Sales', status: 'terminated' },
                { id: 4, name: 'Alice Brown', department: 'Engineering', status: 'active' },
            ]);
        }, 1000); // Имитация задержки сети
    });
};