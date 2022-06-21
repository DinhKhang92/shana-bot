import { CommandInteraction } from 'discord.js'
import { actionRow } from '../../components/actionRow/actionRow'
import { renderEmbed } from '../../components/embed/embed'
import { selectMenu } from '../../components/selectMenu/selectMenu'
import { InputArgs, SlashCommands } from '../../deploy-commands'
import { CustomIds } from '../../utils'

export const commandInteractions = (interaction: CommandInteraction) => {
  const { commandName } = interaction
  if (commandName === SlashCommands.Create) {
    const date = interaction.options.getString(InputArgs.Date)
    const time = interaction.options.getString(InputArgs.Time)

    const title = `[${date} ${time}]`

    const row = actionRow([
      selectMenu(CustomIds.SelectRaid)
    ])

    return interaction.reply({ embeds: [renderEmbed(title)], ephemeral: true, components: [row] })
  }
}
