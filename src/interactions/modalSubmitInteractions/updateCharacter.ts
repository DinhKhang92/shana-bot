import { ModalSubmitInteraction } from 'discord.js'
import { renderEmbed } from '../../components/embed/embed'
import { InputArgs } from '../../deploy-commands'
import { Firebase } from '../../firebase'
import { mapCharacterClassToIcon } from '../../utils'

const firebase = new Firebase()

export const updateCharacter = async (interaction: ModalSubmitInteraction, uuid: string): Promise<void> => {
  const iLvlString = interaction.fields.getTextInputValue(InputArgs.ILvl)

  if (!isNumber(iLvlString)) {
    const title = 'Update character failed'
    const thumbnailUrl = 'https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_1280.png'
    const description = `${iLvlString} is not a valid number.`

    return interaction.reply({ embeds: [renderEmbed({ title, thumbnailUrl, description })], ephemeral: true })
  }

  const updatedData = {
    iLvl: Number(iLvlString)
  }

  await firebase.updateDatabase(updatedData, `users/${interaction.user.id}/${uuid}`)
  const characters = await firebase.getCharacters(`users/${interaction.user.id}`)
  const character = characters.find((character) => character.id === uuid)

  if (character === undefined) {
    return
  }

  const title = `${character.name} was updated successfully`
  const thumbnailUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Eo_circle_light-green_checkmark.svg/512px-Eo_circle_light-green_checkmark.svg.png'
  const classIcon = mapCharacterClassToIcon(character.characterClass)
  const fields = [
    { name: 'Character', value: `${classIcon} ${character.name} (${character.iLvl})` }
  ]

  return interaction.update({ embeds: [renderEmbed({ title, thumbnailUrl, fields })], components: [] })
}

const isNumber = (text: string): boolean => {
  if (typeof text !== 'string') {
    return false
  }

  if (text.trim() === '') {
    return false
  }

  return !Number.isNaN(Number(text))
}
