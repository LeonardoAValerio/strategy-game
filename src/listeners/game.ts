import { DefaultEventsMap, Socket } from "socket.io";
import { ListenerBase, ListenerBaseAttributes } from "./base";
import { GameService } from "../services/game/game";

type SocketUser = Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;

export interface ListenerGameAttributes extends ListenerBaseAttributes {
    id: string;
    maxPlayers: number;
    rows: number;
    columns: number;
}

export class ListenerGame extends ListenerBase implements ListenerGameAttributes {
    id: string;
    maxPlayers: number;
    playersConnected: string[];
    columns: number;
    rows: number;
    private service: GameService

    constructor(attributes: ListenerGameAttributes) {
        super(attributes.io);
        this.id = attributes.id;
        this.maxPlayers = attributes.maxPlayers;
        this.playersConnected = [];
        this.columns = attributes.columns;
        this.rows = attributes.rows;
        this.service = new GameService({rows: this.rows, columns: this.columns});
    }

    init() {
        this.io.on("connection", this.connection.bind(this));
    }

    private connection(socket: SocketUser) {
        console.log(this);
        if(this.playersConnected.length >= this.maxPlayers){
            socket.disconnect();
        }else {
            this.playersConnected.push(socket.id);
            this.io.emit("message", "Novo jogador entrou na partida!")
        }
    }
}