import React, { useState, useEffect } from 'react';

interface UserSettings {
    theme: 'light' | 'dark';
    notifications: boolean;
}

const fetchSettings = (): Promise<UserSettings> =>
    Promise.resolve({ theme: 'light', notifications: true });

const UserSettingsLoader: React.FC = () => {
    const [settings, setSettings] = useState<UserSettings | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadSettings = async () => {
            const data = await fetchSettings();
            setSettings(data);
            setLoading(false);
        };
        loadSettings();
    }, []);

    if (loading) return <div>Loading settings...</div>;

    return (
        <div style={{ padding: '20px' }
        }>
            <h3>User Settings </h3>
            < p > Theme: {settings?.theme} </p>
            < p > Notifications: {settings?.notifications ? 'On' : 'Off'} </p>
        </div>
    );
};

export default UserSettingsLoader;