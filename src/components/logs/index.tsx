import { LogsProps } from "types/log";
import "./styles.css";

export default function Logs({ logs } : LogsProps) {
    return (
        <div className="logs-container">
            {logs.length > 0 && 
                <>
                    <h1 className="logs-label">Logs</h1>
                    <div>
                    {
                        logs.map((log, index) => (
                            <div className="log" key={index}>
                                <p>{log.text}</p>
                            </div>
                        ))
                    }
                    </div>
                </>
            }
        </div>
    )
}