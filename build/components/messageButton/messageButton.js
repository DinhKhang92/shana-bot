"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageButton = void 0;
const discord_js_1 = require("discord.js");
const messageButton = (customId, label, style) => new discord_js_1.MessageButton().setCustomId(customId).setLabel(label).setStyle(style);
exports.messageButton = messageButton;
