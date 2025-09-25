import ServerConfig from "../types/config/ServerConfig";

const config: ServerConfig = {
    port: Number(process.env.PORT) || 4000,
    environment: process.env.ENV || "dev",
    mysql: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        dbname: process.env.MYSQL_DBNAME
    }
}

export default config;