import { DefaultEventsMap, Namespace, Server } from "socket.io"

type IO = Namespace<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>

export interface ListenerBaseAttributes {
    io: IO;
}

export class ListenerBase implements ListenerBaseAttributes {
    io: IO;

    constructor(io: IO) {
        this.io = io;
    }
}