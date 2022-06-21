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
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectMenuInteractions = void 0;
const bot_1 = require("../../bot");
const actionRow_1 = require("../../components/actionRow/actionRow");
const embed_1 = require("../../components/embed/embed");
const messageButton_1 = require("../../components/messageButton/messageButton");
const selectMenu_1 = require("../../components/selectMenu/selectMenu");
const selectOptions_1 = require("../../components/selectMenu/selectOptions");
const selectMenuInteractions = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const embeds = interaction.message.embeds;
    if (embeds.length < 1) {
        return;
    }
    const embed = embeds[0];
    const { customId } = interaction;
    if (customId === bot_1.CustomIds.SelectRaid) {
        const selectMenuPlaceholder = interaction.values.includes(selectOptions_1.SelectOptionValues.AbyssLegionRaids) ? 'Raids..' : undefined;
        const selectMenuOptions = interaction.values.includes(selectOptions_1.SelectOptionValues.AbyssLegionRaids) ? selectOptions_1.abyssLegionRaidSelectOptions : undefined;
        const row = (0, actionRow_1.actionRow)([
            (0, selectMenu_1.selectMenu)(bot_1.CustomIds.SelectMode, selectMenuPlaceholder, selectMenuOptions)
        ]);
        yield interaction.update({ components: [row] });
    }
    if (customId === bot_1.CustomIds.SelectMode) {
        const previousEmbedTitle = embeds[0].title;
        const raid = interaction.values.map(raid => raid.charAt(0).toUpperCase() + raid.slice(1)).join('+');
        const updatedEmbedTitle = `${previousEmbedTitle} - ${raid}`;
        const selectMenuModePlacehoder = 'Mode..';
        const selectOptions = interaction.values.includes(selectOptions_1.SelectOptionValues.Valtan) ? selectOptions_1.valtanModeSelectOptions : selectOptions_1.argosModeSelectOptions;
        const thumbnail = interaction.values.includes(selectOptions_1.SelectOptionValues.Valtan) ? embed_1.Thumbnails.Valtan : embed_1.Thumbnails.Argos;
        const image = interaction.values.includes(selectOptions_1.SelectOptionValues.Valtan) ? embed_1.EventImage.Valtan : embed_1.EventImage.Argos;
        const row = (0, actionRow_1.actionRow)([
            (0, selectMenu_1.selectMenu)(bot_1.CustomIds.SelectFinish, selectMenuModePlacehoder, selectOptions)
        ]);
        yield interaction.update({ embeds: [(0, embed_1.renderEmbed)(updatedEmbedTitle, thumbnail, image)], components: [row] });
    }
    if (customId === bot_1.CustomIds.SelectFinish) {
        const previousEmbedTitle = (_a = embed.title) !== null && _a !== void 0 ? _a : '';
        if (interaction.values.length < 1) {
            return;
        }
        const mode = interaction.values[0];
        embed.title = updateTitleByMode(previousEmbedTitle, mode);
        const row = (0, actionRow_1.actionRow)([
            (0, messageButton_1.messageButton)(bot_1.CustomIds.ButtonPost, 'Post', 'PRIMARY')
        ]);
        yield interaction.update({ embeds: [embed], components: [row] });
    }
});
exports.selectMenuInteractions = selectMenuInteractions;
function updateTitleByMode(title, mode) {
    switch (mode) {
        case selectOptions_1.SelectOptionValues.NormalMode:
            return title.replace('Valtan', 'Valtan NM');
        case selectOptions_1.SelectOptionValues.HardMode:
            return title.replace('Valtan', 'Valtan HM');
        case selectOptions_1.SelectOptionValues.PhaseOne:
            return title.replace('Argos', 'Argos P1');
        case selectOptions_1.SelectOptionValues.PhaseTwo:
            return title.replace('Argos', 'Argos P2');
        case selectOptions_1.SelectOptionValues.PhaseThree:
            return title.replace('Argos', 'Argos P3');
        default:
            return title;
    }
}
