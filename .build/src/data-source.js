"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Google_1 = require("./entity/Google");
var Profile_1 = require("./entity/Profile");
var User_1 = require("./entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "dansuba",
    password: "123456",
    database: "sso_users",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Google_1.Google, Profile_1.Profile],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map