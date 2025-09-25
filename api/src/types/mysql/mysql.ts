import { Connection } from "mysql";

export interface IMysqlWrapper {

    connection: Connection;

    getConnection: () => Promise<Connection>;
    query: (query: string, values: Array<any>) => Promise<any>;
    destroyConnection: (conn: Connection) => void;
} 