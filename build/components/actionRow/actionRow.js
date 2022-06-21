"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionRow = void 0;
const discord_js_1 = require("discord.js");
const actionRow = (components) => new discord_js_1.MessageActionRow().addComponents(components);
exports.actionRow = actionRow;
