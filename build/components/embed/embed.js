"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderEmbed = exports.EventImage = exports.Thumbnails = void 0;
const discord_js_1 = require("discord.js");
const utils_1 = require("../../utils");
var Thumbnails;
(function (Thumbnails) {
    Thumbnails["Valtan"] = "https://static.wikia.nocookie.net/lostark_gamepedia/images/2/20/Valtan_Card_Portrait.png";
    Thumbnails["Argos"] = "https://static.invenglobal.com/img/lostark/dataninfo/cardimage/card_epic_09_3.png";
})(Thumbnails = exports.Thumbnails || (exports.Thumbnails = {}));
var EventImage;
(function (EventImage) {
    EventImage["Argos"] = "https://images.mein-mmo.de/medien/2022/03/lost-ark-argos-1-780x438.jpg";
    EventImage["Valtan"] = "https://cdn.discordapp.com/attachments/936152768052359208/965494853783916564/valtan.png";
})(EventImage = exports.EventImage || (exports.EventImage = {}));
const renderEmbed = (title, thumbnailUrl, imageUrl) => {
    return new discord_js_1.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(title !== null && title !== void 0 ? title : 'Event xy')
        // .setURL('https://discord.js.org/')
        // .setAuthor({ name: interaction.user.username, iconURL: 'https://i.imgur.com/AfFp7pu.png' })
        .setDescription('Some description here')
        .setThumbnail(thumbnailUrl !== null && thumbnailUrl !== void 0 ? thumbnailUrl : 'https://lostarkcodex.com/icons/freindshipnpc_img_119.webp')
        .addFields({ name: '\u200B', value: '\u200B' }, { name: `${utils_1.Emojis.Group} __Team 1 (1/8)__`, value: `${utils_1.Emojis.Artillerist} Vineyard (Deathblade) \n ${utils_1.Emojis.Artillerist} Methamatics (Sorceress)` })
        .setImage(imageUrl !== null && imageUrl !== void 0 ? imageUrl : '');
};
exports.renderEmbed = renderEmbed;
