import { MessageEmbedOptions, ModalSubmitInteraction } from 'discord.js'
import { firebase } from '../..'
import { renderEmbed } from '../../components/embed/embed'
import { InputArgs } from '../../deploy-commands'
import { mapCharacterClassToIcon } from '../../utils'

export const updateCharacter = async (interaction: ModalSubmitInteraction, uuid: string): Promise<void> => {
  const iLvlString = interaction.fields.getTextInputValue(InputArgs.ILvl)

  if (!isNumber(iLvlString)) {
    const embedData: MessageEmbedOptions = {
      title: 'Update character failed',
      thumbnail: {
        url: 'https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_1280.png'
      },
      description: `${iLvlString} is not a valid number`
    }

    return interaction.reply({ embeds: [renderEmbed(embedData)], ephemeral: true })
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

  const classIcon = mapCharacterClassToIcon(character.characterClass)
  const embedData: MessageEmbedOptions = {
    title: `${character.name} was updated successfully`,
    thumbnail: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Eo_circle_light-green_checkmark.svg/512px-Eo_circle_light-green_checkmark.svg.png'
    },
    fields: [{ name: 'Character', value: `${classIcon} ${character.name} (${character.iLvl})` }]
  }

  return interaction.update({ embeds: [renderEmbed(embedData)], components: [] })
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
