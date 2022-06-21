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
exports.buttonInteractions = void 0;
const utils_1 = require("../../utils");
const joinRaid_1 = require("./joinRaid");
const sendRaid_1 = require("./sendRaid");
const buttonInteractions = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    const { customId } = interaction;
    switch (customId) {
        case utils_1.CustomIds.ButtonSend:
            (0, sendRaid_1.sendRaid)(interaction);
            break;
        case utils_1.CustomIds.ButtonJoin:
            (0, joinRaid_1.joinRaid)(interaction);
            break;
    }
});
exports.buttonInteractions = buttonInteractions;
