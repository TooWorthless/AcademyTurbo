import React, { useState } from "react";



const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const [password, setPassword] = useState<string>('');

    const [error, setError] = useState<string | null>(null);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        //...
        setError(null);
    }


    return (
        <form
            action=""
            onSubmit={handleSubmit}
            style={{ padding: '20px' }}
        >
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginBottom: '10px' }}
                />
            </div>

            <div>
                <label>Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginBottom: '10px' }}
                />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
}


export default LoginForm;