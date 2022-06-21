"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderEmbed = void 0;
const discord_js_1 = require("discord.js");
const renderEmbed = (title) => {
    return new discord_js_1.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(title !== null && title !== void 0 ? title : "Event xy")
        // .setURL('https://discord.js.org/')
        // .setAuthor({ name: interaction.user.username, iconURL: 'https://i.imgur.com/AfFp7pu.png' })
        .setDescription('Some description here')
        .setThumbnail('https://static.invenglobal.com/img/lostark/dataninfo/cardimage/card_epic_09_3.png')
        .addFields({ name: 'Regular field title', value: 'Some value here' }, { name: '\u200B', value: '\u200B' }, { name: 'Inline field title', value: 'Some value here', inline: true }, { name: 'Inline field title', value: 'Some value here', inline: true })
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://images.mein-mmo.de/medien/2022/03/lost-ark-argos-1-780x438.jpg')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
};
exports.renderEmbed = renderEmbed;
