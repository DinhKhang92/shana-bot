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
exports.updateTitleByMode = exports.selectMenuInteractions = void 0;
const utils_1 = require("../../utils");
const selectOptions_1 = require("../../components/selectMenu/selectOptions");
const selectFinish_1 = require("./selectFinish");
const selectMode_1 = require("./selectMode");
const selectRaid_1 = require("./selectRaid");
const selectMenuInteractions = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    const { customId } = interaction;
    switch (customId) {
        case utils_1.CustomIds.SelectRaid:
            (0, selectRaid_1.selectRaid)(interaction);
            break;
        case utils_1.CustomIds.SelectMode:
            (0, selectMode_1.selectMode)(interaction);
            break;
        case utils_1.CustomIds.SelectFinish:
            (0, selectFinish_1.selectFinish)(interaction);
            break;
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
exports.updateTitleByMode = updateTitleByMode;
