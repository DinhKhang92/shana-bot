import { MessageButton, MessageButtonStyleResolvable } from 'discord.js'
import { CustomIds } from '../../utils'

export const messageButton = (customId: CustomIds, label: string, style: MessageButtonStyleResolvable) => new MessageButton().setCustomId(customId).setLabel(label).setStyle(style)
