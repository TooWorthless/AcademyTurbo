{
    type Log = 'info' | 'warn' | 'error';

    type LogEntry = [
        Log, ...string[]
    ]

    // ✅ ОК
    const log1: LogEntry = ["info", "User logged in"]; 
    
    // ✅ ОК
    const log2: LogEntry = ["error", "Server crashed", "Restarting..."]; 

    // ❌ Ошибка!
    // const log3: LogEntry = ["warn", 404]; 
}