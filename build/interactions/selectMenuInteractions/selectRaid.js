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
exports.selectRaid = void 0;
const utils_1 = require("../../utils");
const actionRow_1 = require("../../components/actionRow/actionRow");
const selectMenu_1 = require("../../components/selectMenu/selectMenu");
const selectOptions_1 = require("../../components/selectMenu/selectOptions");
const selectRaid = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    const selectMenuPlaceholder = interaction.values.includes(selectOptions_1.SelectOptionValues.AbyssLegionRaids) ? 'Raids..' : undefined;
    const selectMenuOptions = interaction.values.includes(selectOptions_1.SelectOptionValues.AbyssLegionRaids) ? selectOptions_1.abyssLegionRaidSelectOptions : undefined;
    const row = (0, actionRow_1.actionRow)([
        (0, selectMenu_1.selectMenu)(utils_1.CustomIds.SelectMode, selectMenuPlaceholder, selectMenuOptions)
    ]);
    yield interaction.update({ components: [row] });
});
exports.selectRaid = selectRaid;
