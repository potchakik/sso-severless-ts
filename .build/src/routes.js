"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var UserController_1 = require("./controller/UserController");
var GoogleController_1 = require("./controller/GoogleController");
exports.Routes = [
    {
        method: "get",
        route: "/users",
        controller: UserController_1.UserController,
        action: "all",
    },
    {
        method: "get",
        route: "/users/:id",
        controller: UserController_1.UserController,
        action: "one",
    },
    {
        method: "post",
        route: "/users",
        controller: UserController_1.UserController,
        action: "save",
    },
    {
        method: "delete",
        route: "/users/:id",
        controller: UserController_1.UserController,
        action: "remove",
    },
    {
        //GOOGLE Routes
        method: "get",
        route: "/google/users",
        controller: GoogleController_1.GoogleController,
        action: "all",
    },
];
//# sourceMappingURL=routes.js.map