import { ButtonInteraction } from 'discord.js'

import { actionRow } from '../../components/actionRow/actionRow'
import { renderEmbed } from '../../components/embed/embed'
import { messageButton } from '../../components/messageButton/messageButton'
import { Firebase } from '../../firebase'
import { CustomId, Icon } from '../../utils'

const firebase = new Firebase()

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

  const message = await interaction.reply({ embeds: [embed], components: [row], fetchReply: true })
  await firebase.writeToDatabase({ id: message.id, createdAt: Date.now(), team: [] }, `lobbies/${interaction.guildId}/${interaction.channelId}/${message.id}`)
}
