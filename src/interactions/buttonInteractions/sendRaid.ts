import { ButtonInteraction } from 'discord.js'

import { actionRow } from '../../components/actionRow/actionRow'
import { messageButton } from '../../components/messageButton/messageButton'
import { CustomId } from '../../utils'

export const sendRaid = async (interaction: ButtonInteraction): Promise<void> => {
  const embeds = interaction.message.embeds
  if (embeds.length < 1) {
    return
  }
  const embed = embeds[0]

  const row = actionRow([
    messageButton(CustomId.ButtonJoin, 'Join', 'SUCCESS'),
    messageButton(CustomId.ButtonLeave, 'Leave', 'DANGER')
  ])

  await interaction.reply({ embeds: [embed], components: [row] })
}
