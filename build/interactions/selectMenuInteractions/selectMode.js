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
exports.selectMode = void 0;
const utils_1 = require("../../utils");
const actionRow_1 = require("../../components/actionRow/actionRow");
const embed_1 = require("../../components/embed/embed");
const selectMenu_1 = require("../../components/selectMenu/selectMenu");
const selectOptions_1 = require("../../components/selectMenu/selectOptions");
const selectMode = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const embeds = interaction.message.embeds;
    if (embeds.length < 1) {
        return;
    }
    const embed = embeds[0];
    const embedTitle = (_a = embed.title) !== null && _a !== void 0 ? _a : '';
    const raid = interaction.values.map(raid => raid.charAt(0).toUpperCase() + raid.slice(1)).join('+');
    const updatedEmbedTitle = `${embedTitle} - ${raid}`;
    const selectMenuModePlacehoder = 'Mode..';
    const selectOptions = interaction.values.includes(selectOptions_1.SelectOptionValues.Valtan) ? selectOptions_1.valtanModeSelectOptions : selectOptions_1.argosModeSelectOptions;
    const thumbnail = interaction.values.includes(selectOptions_1.SelectOptionValues.Valtan) ? embed_1.Thumbnails.Valtan : embed_1.Thumbnails.Argos;
    const image = interaction.values.includes(selectOptions_1.SelectOptionValues.Valtan) ? embed_1.EventImage.Valtan : embed_1.EventImage.Argos;
    const row = (0, actionRow_1.actionRow)([
        (0, selectMenu_1.selectMenu)(utils_1.CustomIds.SelectFinish, selectMenuModePlacehoder, selectOptions)
    ]);
    yield interaction.update({ embeds: [(0, embed_1.renderEmbed)(updatedEmbedTitle, thumbnail, image)], components: [row] });
});
exports.selectMode = selectMode;
