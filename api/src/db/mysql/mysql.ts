import mysql, { Connection } from 'mysql';
import config from '../../config/config';
import { IMysqlWrapper } from '../../types/mysql/mysql';

class Mysql implements IMysqlWrapper {

    connection = mysql.createConnection({
        host: config.mysql.host,
        user: config.mysql.user,
        password: config.mysql.password,
        database: config.mysql.dbname
    });

    getConnection = (): Promise<Connection> => {
        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                if (err) {
                    reject(err);
                }
                resolve(this.connection);
            });
        })
    };

    query = (query: string, values: Array<any>): Promise<any> => {
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (error, results, fields) => {
                if (error) {
                    reject(error);
                }
                resolve({ fields, results });
            });
        })
    };

    destroyConnection = (conn: Connection) => {
        conn.end();
    };
};

export default Mysql;