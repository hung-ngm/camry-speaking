import { Dispatch, SetStateAction } from "react";

export type Log = {
    text: string;
}

export type LogsProps = {
    logs: Log[];
}

export type SetLogs = Dispatch<SetStateAction<Log[]>>;