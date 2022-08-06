import { EmbedFieldData, MessageEmbed, MessageEmbedOptions } from 'discord.js'

export enum Thumbnails {
  Valtan = 'https://static.wikia.nocookie.net/lostark_gamepedia/images/2/20/Valtan_Card_Portrait.png',
  Argos = 'https://static.invenglobal.com/img/lostark/dataninfo/cardimage/card_epic_09_3.png'
}

export enum EventImage {
  Argos = 'https://images.mein-mmo.de/medien/2022/03/lost-ark-argos-1-780x438.jpg',
  Valtan = 'https://cdn.discordapp.com/attachments/936152768052359208/965494853783916564/valtan.png'
}

export interface EmbedProps {
  title?: string,
  thumbnailUrl?: string,
  imageUrl?: string,
  description?: string,
  fields?: EmbedFieldData[] | EmbedFieldData[][],
}

export const renderEmbed = (data?: MessageEmbed | MessageEmbedOptions): MessageEmbed => {
  return new MessageEmbed(data)
}

// { name: '\u200B', value: '\u200B' },
// { name: `${Emojis.Group} __Team 1 (1/8)__`, value: `${Emojis.Artillerist} Vineyard (Deathblade) \n ${Emojis.Artillerist} Methamatics (Sorceress)` }
