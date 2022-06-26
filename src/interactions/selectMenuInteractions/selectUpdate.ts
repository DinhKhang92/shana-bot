import { MessageActionRow, MessageActionRowComponentResolvable, Modal, SelectMenuInteraction, TextInputComponent } from 'discord.js'
import { InputArgs } from '../../deploy-commands'
import { CustomId } from '../../utils'

export const selectUpdate = async (interaction: SelectMenuInteraction) => {
  const selectionValues = interaction.values
  if (selectionValues.length < 1) {
    return
  }

  const uuid = selectionValues[0]

  const modal = new Modal()
    .setCustomId(`${CustomId.CharacterUpdate}&${uuid}`)
    .setTitle('Update character')
  const iLvlInput = new TextInputComponent()
    .setCustomId(InputArgs.ILvl)
    .setLabel('Item Level')
    .setStyle('SHORT')
    .setRequired(true) as MessageActionRowComponentResolvable

  const firstActionRow = new MessageActionRow().addComponents(iLvlInput)
  modal.addComponents(firstActionRow as any)
  await interaction.showModal(modal)
}
