"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valtanModeSelectOptions = exports.abyssLegionRaidSelectOptions = exports.renderSelectMenu = exports.SelectOptionValues = void 0;
const discord_js_1 = require("discord.js");
const utils_1 = require("../utils");
var SelectOptionValues;
(function (SelectOptionValues) {
    SelectOptionValues["AbyssLegionRaids"] = "abyss_legion_raids";
    SelectOptionValues["AbyssDungeons"] = "abyss_dungeons";
    SelectOptionValues["Argos"] = "argos";
    SelectOptionValues["Valtan"] = "valtan";
    SelectOptionValues["ArgosAndValtan"] = "argos_and_valtan";
    SelectOptionValues["NormalMode"] = "normal_mode";
    SelectOptionValues["HardMode"] = "hard_mode";
})(SelectOptionValues = exports.SelectOptionValues || (exports.SelectOptionValues = {}));
const defaultSelectOptions = [
    {
        label: 'Legion/Abyss Raids',
        value: SelectOptionValues.AbyssLegionRaids,
        emoji: utils_1.Emojis.LegionCommander,
    },
    {
        label: 'Abyss Dungeons',
        value: SelectOptionValues.AbyssDungeons,
        emoji: utils_1.Emojis.Abyss,
    },
];
const renderSelectMenu = (customId, placeholder, selectOptions, maxValuesCount) => new discord_js_1.MessageSelectMenu()
    .setCustomId(customId)
    .setPlaceholder(placeholder !== null && placeholder !== void 0 ? placeholder : 'Nothing selected')
    .addOptions(selectOptions !== null && selectOptions !== void 0 ? selectOptions : defaultSelectOptions)
    .setMinValues(1)
    .setMaxValues(maxValuesCount !== null && maxValuesCount !== void 0 ? maxValuesCount : 1);
exports.renderSelectMenu = renderSelectMenu;
exports.abyssLegionRaidSelectOptions = [
    {
        label: 'Valtan',
        value: SelectOptionValues.Valtan,
    },
    {
        label: 'Argos',
        value: SelectOptionValues.Argos,
    },
];
exports.valtanModeSelectOptions = [
    {
        label: 'Normal Mode',
        value: SelectOptionValues.NormalMode,
    },
    {
        label: 'Hard Mode',
        value: SelectOptionValues.HardMode,
    },
];
