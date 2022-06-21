"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const discord_js_1 = require("discord.js");
const config_1 = __importDefault(require("./config"));
const buttonInteractions_1 = require("./interactions/buttonInteractions/buttonInteractions");
const commandInteractions_1 = require("./interactions/commandInteractions/commandInteractions");
const selectMenuInteractions_1 = require("./interactions/selectMenuInteractions/selectMenuInteractions");
exports.client = new discord_js_1.Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES'] });
exports.client.once('ready', () => {
    console.log('Shana ready.');
});
exports.client.on('interactionCreate', (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    if (interaction.isCommand()) {
        (0, commandInteractions_1.commandInteractions)(interaction);
    }
    if (interaction.isSelectMenu()) {
        (0, selectMenuInteractions_1.selectMenuInteractions)(interaction);
    }
    if (interaction.isButton()) {
        (0, buttonInteractions_1.buttonInteractions)(interaction);
    }
}));
exports.client.login(config_1.default.TOKEN);
