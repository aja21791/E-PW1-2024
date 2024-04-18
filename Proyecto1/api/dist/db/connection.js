"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('railway', 'root', 'khxTMGJmYrANwqDmXtdxWCSGhvpEOYai', {
    host: 'roundhouse.proxy.rlwy.net',
    dialect: 'mysql',
});
exports.default = sequelize;
