import { MessageActionRow } from 'discord.js'

export const actionRow = (components: any[]): MessageActionRow => new MessageActionRow().addComponents(components)
