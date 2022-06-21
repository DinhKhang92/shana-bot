import { SelectMenuInteraction } from 'discord.js'
import { CustomIds } from '../../utils'
import { actionRow } from '../../components/actionRow/actionRow'
import { messageButton } from '../../components/messageButton/messageButton'
import { updateTitleByMode } from './selectMenuInteractions'

export const selectFinish = async (interaction: SelectMenuInteraction): Promise<void> => {
  const embeds = interaction.message.embeds
  if (embeds.length < 1) {
    return
  }

  const embed = embeds[0]
  const embedTitle = embed.title ?? ''

  if (interaction.values.length < 1) {
    return
  }

  const mode = interaction.values[0]
  embed.title = updateTitleByMode(embedTitle, mode)

  const row = actionRow([
    messageButton(CustomIds.ButtonSend, 'Send', 'PRIMARY')
  ])

  await interaction.update({ embeds: [embed], components: [row] })
}
