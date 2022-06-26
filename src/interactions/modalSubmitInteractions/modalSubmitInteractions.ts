import { ModalSubmitInteraction } from 'discord.js'
import { CustomId } from '../../utils'
import { updateCharacter } from './updateCharacter'

export const modalSubmitInteractions = async (interaction: ModalSubmitInteraction): Promise<void> => {
  const { customId } = interaction
  const uuid = customId.split('&')[1]

  if (customId.startsWith(CustomId.CharacterUpdate)) {
    updateCharacter(interaction, uuid)
  }
}
