"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandInteraction = void 0;
const bot_1 = require("../bot");
const actionRow_1 = require("../components/actionRow/actionRow");
const embed_1 = require("../components/embed/embed");
const selectMenu_1 = require("../components/selectMenu/selectMenu");
const deploy_commands_1 = require("../deploy-commands");
const commandInteraction = (interaction) => {
    const { commandName } = interaction;
    if (commandName === deploy_commands_1.SlashCommands.Create) {
        const date = interaction.options.getString(deploy_commands_1.InputArgs.Date);
        const time = interaction.options.getString(deploy_commands_1.InputArgs.Time);
        const title = `[${date} ${time}]`;
        const row = (0, actionRow_1.actionRow)([
            (0, selectMenu_1.selectMenu)(bot_1.CustomIds.SelectRaid)
        ]);
        return interaction.reply({ embeds: [(0, embed_1.renderEmbed)(title)], ephemeral: true, components: [row] });
    }
};
exports.commandInteraction = commandInteraction;
