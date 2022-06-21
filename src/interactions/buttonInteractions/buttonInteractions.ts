import { ButtonInteraction } from 'discord.js'
import { CustomIds } from '../../utils'
import { joinRaid } from './joinRaid'
import { sendRaid } from './sendRaid'

export const buttonInteractions = async (interaction: ButtonInteraction): Promise<void> => {
  const { customId } = interaction
  switch (customId) {
    case CustomIds.ButtonSend:
      sendRaid(interaction)
      break
    case CustomIds.ButtonJoin:
      joinRaid(interaction)
      break
  }
}
