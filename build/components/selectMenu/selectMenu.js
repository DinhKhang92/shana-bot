"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectMenu = void 0;
const discord_js_1 = require("discord.js");
const selectOptions_1 = require("./selectOptions");
const defaultPlacerholder = 'Nothing selected';
const selectMenu = (customId, placeholder, selectOptions) => new discord_js_1.MessageSelectMenu()
    .setCustomId(customId)
    .setPlaceholder(placeholder !== null && placeholder !== void 0 ? placeholder : defaultPlacerholder)
    .addOptions(selectOptions !== null && selectOptions !== void 0 ? selectOptions : selectOptions_1.defaultSelectOptions);
exports.selectMenu = selectMenu;
