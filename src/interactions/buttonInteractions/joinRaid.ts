import { ButtonInteraction } from 'discord.js'
import { CustomIds } from '../../utils'
import { actionRow } from '../../components/actionRow/actionRow'
import { messageButton } from '../../components/messageButton/messageButton'

export const joinRaid = async (interaction: ButtonInteraction): Promise<void> => {
  const embeds = interaction.message.embeds
  if (embeds.length < 1) {
    return
  }
  const embed = embeds[0]

  if (embed.fields === undefined) {
    return
  }
  console.log(interaction)
  embed.fields[1].value = 'hallo'

  const row = actionRow([
    messageButton(CustomIds.ButtonJoin, 'Join', 'SUCCESS'),
    messageButton(CustomIds.ButtonLeave, 'Leave', 'DANGER')
  ])

  await interaction.update({ embeds: [embed], components: [row] })
}
