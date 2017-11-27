"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builder = require("botbuilder");
var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector, function (session) { return session.send("You said: " + session.message.text); });
//# sourceMappingURL=app.js.map