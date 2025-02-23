import React from "react";


interface UserStatusProps {
    name: string,
    status: 'active' | 'onLeave' | 'terminated'
}


const UserStatusWidget: React.FC<UserStatusProps> = ({ name, status }) => {

    const getStatusColor = (status: UserStatusProps['status']) => {
        const statuses: Record<string, string> = {
            'active': 'green',
            'onLeave': 'orange',
            'terminated': 'red'
        };

        return statuses[status] ? statuses[status] : 'gray';
    }

    return (
        <div style={{ border: `2px solid ${getStatusColor(status)}`, padding: '10px', margin: '10px' }}>
            <h3>{name}</h3>
            <p>Staus: {status}</p>
        </div>
    );
}


// Usage
// <div>
    // <h1>HR Panel</h1>
    // <UserStatusWidget name="John Doe" status="active" />
    // <UserStatusWidget name="Jane Smith" status="onLeave" />
    // <UserStatusWidget name="Bob Johnson" status="terminated" />
// </div> 


export default UserStatusWidget;