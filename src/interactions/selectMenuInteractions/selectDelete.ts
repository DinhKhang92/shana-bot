import { SelectMenuInteraction } from 'discord.js'
import { renderEmbed } from '../../components/embed/embed'
import { Firebase } from '../../firebase'
import { mapCharacterClassToIcon } from '../../utils'

const firebase = new Firebase()

export const selectDelete = async (interaction: SelectMenuInteraction) => {
  const selectionValues = interaction.values
  if (selectionValues.length < 1) {
    return
  }

  const uuid = selectionValues[0]
  const characters = await firebase.getCharacters(`users/${interaction.user.id}`)
  const character = characters.find((character) => character.id === uuid)

  if (character === undefined) {
    return
  }

  await firebase.removeCharacter(`users/${interaction.user.id}/${uuid}`)

  const title = `${character.name} was deleted successfully`
  const thumbnailUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Eo_circle_light-green_checkmark.svg/512px-Eo_circle_light-green_checkmark.svg.png'
  const classIcon = mapCharacterClassToIcon(character.characterClass)
  const fields = [
    { name: 'Character', value: `${classIcon} ${character.name} (${character.iLvl})` }
  ]

  return interaction.update({ embeds: [renderEmbed({ title, thumbnailUrl, fields })], components: [] })
}
