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
exports.sendRaid = void 0;
const actionRow_1 = require("../../components/actionRow/actionRow");
const messageButton_1 = require("../../components/messageButton/messageButton");
const utils_1 = require("../../utils");
const sendRaid = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    const embeds = interaction.message.embeds;
    if (embeds.length < 1) {
        return;
    }
    const embed = embeds[0];
    const row = (0, actionRow_1.actionRow)([
        (0, messageButton_1.messageButton)(utils_1.CustomIds.ButtonJoin, 'Join', 'SUCCESS'),
        (0, messageButton_1.messageButton)(utils_1.CustomIds.ButtonLeave, 'Leave', 'DANGER')
    ]);
    yield interaction.reply({ embeds: [embed], components: [row] });
});
exports.sendRaid = sendRaid;
