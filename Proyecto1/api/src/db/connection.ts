import { Sequelize } from "sequelize";

const sequelize = new Sequelize('railway', 'root','khxTMGJmYrANwqDmXtdxWCSGhvpEOYai', {
    host: 'roundhouse.proxy.rlwy.net',
    dialect: 'mysql',
})

export default sequelize;