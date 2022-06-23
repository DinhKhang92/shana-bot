import { CommandInteraction } from 'discord.js'
import { actionRow } from '../../components/actionRow/actionRow'
import { renderEmbed } from '../../components/embed/embed'
import { selectMenu } from '../../components/selectMenu/selectMenu'
import { InputArgs } from '../../deploy-commands'
import { CustomId } from '../../utils'

export const createRaid = (interaction: CommandInteraction) => {
  const date = interaction.options.getString(InputArgs.Date)
  const time = interaction.options.getString(InputArgs.Time)

  const title = `[${date} ${time}]`

  const row = actionRow([
    selectMenu(CustomId.SelectRaid)
  ])

  return interaction.reply({ embeds: [renderEmbed({ title })], ephemeral: true, components: [row] })
}
