"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputArgs = exports.SlashCommands = void 0;
const builders_1 = require("@discordjs/builders");
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const config_1 = __importDefault(require("./config"));
const utils_1 = require("./utils");
var SlashCommands;
(function (SlashCommands) {
    SlashCommands["Create"] = "create";
    SlashCommands["CharacterAdd"] = "character-add";
})(SlashCommands = exports.SlashCommands || (exports.SlashCommands = {}));
var InputArgs;
(function (InputArgs) {
    InputArgs["Date"] = "date";
    InputArgs["Time"] = "time";
    InputArgs["Name"] = "name";
    InputArgs["Class"] = "class";
    InputArgs["ILvl"] = "ilvl";
})(InputArgs = exports.InputArgs || (exports.InputArgs = {}));
const classChoices = () => Object.values(utils_1.CharaterClasses).map(characterClass => ({
    name: characterClass, value: characterClass.toLowerCase()
}));
const commands = [
    new builders_1.SlashCommandBuilder().setName(SlashCommands.CharacterAdd).setDescription('Add a character')
        .addStringOption(option => option.setName(InputArgs.Name)
        .setDescription('Character name')
        .setRequired(true))
        .addStringOption(option => option.setName(InputArgs.Class)
        .setDescription('character class')
        .addChoices(...classChoices())
        .setRequired(true))
        .addNumberOption(option => option.setName(InputArgs.ILvl)
        .setDescription('character ilvl')
        .setRequired(true)),
    new builders_1.SlashCommandBuilder().setName(SlashCommands.Create).setDescription('Create an event')
        .addStringOption(option => option.setName(InputArgs.Date)
        .setDescription('Date of event: dd.mm')
        .setRequired(true))
        .addStringOption(option => option.setName(InputArgs.Time)
        .setDescription('Time of event: hh:mm')
        .setRequired(true))
];
const rest = new rest_1.REST({ version: '9' }).setToken(config_1.default.TOKEN);
rest.put(v9_1.Routes.applicationCommands(config_1.default.APPLICATION_ID), { body: commands }).then(() => {
    console.log('Commands deployed successfully');
}).catch(console.error);
