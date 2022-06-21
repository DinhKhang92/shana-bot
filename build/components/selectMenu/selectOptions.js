"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argosModeSelectOptions = exports.valtanModeSelectOptions = exports.abyssLegionRaidSelectOptions = exports.defaultSelectOptions = exports.SelectOptionValues = void 0;
const utils_1 = require("../../utils");
var SelectOptionValues;
(function (SelectOptionValues) {
    SelectOptionValues["AbyssLegionRaids"] = "abyss_legion_raids";
    SelectOptionValues["AbyssDungeons"] = "abyss_dungeons";
    SelectOptionValues["Argos"] = "argos";
    SelectOptionValues["Valtan"] = "valtan";
    SelectOptionValues["ArgosAndValtan"] = "argos_and_valtan";
    SelectOptionValues["NormalMode"] = "normal_mode";
    SelectOptionValues["HardMode"] = "hard_mode";
    SelectOptionValues["PhaseOne"] = "phase_one";
    SelectOptionValues["PhaseTwo"] = "phase_two";
    SelectOptionValues["PhaseThree"] = "phase_three";
})(SelectOptionValues = exports.SelectOptionValues || (exports.SelectOptionValues = {}));
exports.defaultSelectOptions = [
    {
        label: 'Legion/Abyss Raids',
        value: SelectOptionValues.AbyssLegionRaids,
        emoji: utils_1.Emojis.LegionCommander
    },
    {
        label: 'Abyss Dungeons',
        value: SelectOptionValues.AbyssDungeons,
        emoji: utils_1.Emojis.Abyss
    }
];
exports.abyssLegionRaidSelectOptions = [
    {
        label: 'Valtan',
        value: SelectOptionValues.Valtan
    },
    {
        label: 'Argos',
        value: SelectOptionValues.Argos
    }
];
exports.valtanModeSelectOptions = [
    {
        label: 'Normal Mode',
        value: SelectOptionValues.NormalMode
    },
    {
        label: 'Hard Mode',
        value: SelectOptionValues.HardMode
    }
];
exports.argosModeSelectOptions = [
    {
        label: 'Phase 1',
        value: SelectOptionValues.PhaseOne
    },
    {
        label: 'Phase 2',
        value: SelectOptionValues.PhaseTwo
    },
    {
        label: 'Phase 3',
        value: SelectOptionValues.PhaseThree
    }
];
