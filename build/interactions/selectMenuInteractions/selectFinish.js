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
exports.selectFinish = void 0;
const utils_1 = require("../../utils");
const actionRow_1 = require("../../components/actionRow/actionRow");
const messageButton_1 = require("../../components/messageButton/messageButton");
const selectMenuInteractions_1 = require("./selectMenuInteractions");
const selectFinish = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const embeds = interaction.message.embeds;
    if (embeds.length < 1) {
        return;
    }
    const embed = embeds[0];
    const embedTitle = (_a = embed.title) !== null && _a !== void 0 ? _a : '';
    if (interaction.values.length < 1) {
        return;
    }
    const mode = interaction.values[0];
    embed.title = (0, selectMenuInteractions_1.updateTitleByMode)(embedTitle, mode);
    const row = (0, actionRow_1.actionRow)([
        (0, messageButton_1.messageButton)(utils_1.CustomIds.ButtonSend, 'Send', 'PRIMARY')
    ]);
    yield interaction.update({ embeds: [embed], components: [row] });
});
exports.selectFinish = selectFinish;
