import { MessageButton, MessageButtonStyleResolvable } from 'discord.js'
import { CustomId } from '../../utils'

export const messageButton = (customId: CustomId, label: string, style: MessageButtonStyleResolvable) => new MessageButton()
  .setCustomId(customId)
  .setLabel(label)
  .setStyle(style)
