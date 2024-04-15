import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'bitflix_development',
    username: 'postgres',
    password: 'root',
    define: {
        underscored: true
    }
})