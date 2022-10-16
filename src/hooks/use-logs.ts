import { useState, useEffect } from "react";
import { Log } from "types/log";

export default function useLogs(log: string | null) {
    const [logs, setLogs] = useState<Log[]>([]);
    
    useEffect(() => {
        if (log)
            setLogs((prevState: Log[]) => {
                return [...prevState, { text: log }];
            });
    }, [log]);
    
    return {
        logs,
        setLogs
    };
}