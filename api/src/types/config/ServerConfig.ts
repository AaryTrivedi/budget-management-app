import MysqlConfig from "./MysqlConfig";

export default interface ServerConfig {
    port: number;
    environment: string;
    mysql: MysqlConfig;
}