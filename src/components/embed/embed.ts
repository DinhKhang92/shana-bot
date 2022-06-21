import { MessageAttachment, MessageEmbed } from 'discord.js'
import { Emojis } from '../../utils'

export enum Thumbnails {
  Valtan = 'https://static.wikia.nocookie.net/lostark_gamepedia/images/2/20/Valtan_Card_Portrait.png',
  Argos = 'https://static.invenglobal.com/img/lostark/dataninfo/cardimage/card_epic_09_3.png'
}

export enum EventImage {
  Argos = 'https://images.mein-mmo.de/medien/2022/03/lost-ark-argos-1-780x438.jpg',
  Valtan = 'https://cdn.discordapp.com/attachments/936152768052359208/965494853783916564/valtan.png'
}

export const renderEmbed = (title?: string, thumbnailUrl?: string, imageUrl?: string): MessageEmbed => {
  return new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(title ?? 'Event xy')
    // .setURL('https://discord.js.org/')
    // .setAuthor({ name: interaction.user.username, iconURL: 'https://i.imgur.com/AfFp7pu.png' })
    .setDescription('Some description here')
    .setThumbnail(thumbnailUrl ?? 'https://lostarkcodex.com/icons/freindshipnpc_img_119.webp')
    .addFields(
      { name: '\u200B', value: '\u200B' },
      { name: `${Emojis.Group} __Team 1 (1/8)__`, value: `${Emojis.Artillerist} Vineyard (Deathblade) \n ${Emojis.Artillerist} Methamatics (Sorceress)` }
    )
    .setImage(imageUrl ?? '')
}
