﻿import builder = require("botbuilder");

let connector = new builder.ConsoleConnector().listen();
let bot = new builder.UniversalBot(
    connector,
    (session) => session.send(`You said: ${session.message.text}`)
);