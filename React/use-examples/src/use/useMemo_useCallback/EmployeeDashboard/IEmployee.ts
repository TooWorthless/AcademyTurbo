export interface IEmployee {
    id: number;
    name: string;
    department: string;
    status: 'active' | 'onLeave' | 'terminated';
}