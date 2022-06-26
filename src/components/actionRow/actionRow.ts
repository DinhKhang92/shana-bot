import { MessageActionRow } from 'discord.js'

export const actionRow = (components: any[]): MessageActionRow<any> => new MessageActionRow().addComponents(components)
