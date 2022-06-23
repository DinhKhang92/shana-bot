import { ButtonInteraction } from 'discord.js'
import { CustomId } from '../../utils'
import { joinRaid } from './joinRaid'
import { sendRaid } from './sendRaid'

export const buttonInteractions = async (interaction: ButtonInteraction): Promise<void> => {
  const { customId } = interaction
  switch (customId) {
    case CustomId.ButtonSend:
      sendRaid(interaction)
      break
    case CustomId.ButtonJoin:
      joinRaid(interaction)
      break
  }
}
