import { CommandInteraction, MessageEmbedOptions } from 'discord.js'
import { v4 } from 'uuid'
import { renderEmbed } from '../../components/embed/embed'
import { InputArgs } from '../../deploy-commands'
import { Firebase } from '../../firebase'
import { Character } from '../../models/character'
import { mapCharacterClassToIcon } from '../../utils'

const firebase = new Firebase()

export const characterAdd = (interaction: CommandInteraction) => {
  const character: Character = {
    id: v4(),
    name: interaction.options.getString(InputArgs.Name, true),
    characterClass: interaction.options.getString(InputArgs.Class, true),
    iLvl: interaction.options.getNumber(InputArgs.ILvl, true)
  }

  firebase.writeToDatabase(character, `users/${interaction.user.id}/${character.id}`)

  const classIcon = mapCharacterClassToIcon(character.characterClass)
  const embedData: MessageEmbedOptions = {
    title: `${character.name} was added successfully`,
    thumbnail: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Eo_circle_light-green_checkmark.svg/512px-Eo_circle_light-green_checkmark.svg.png'
    },
    fields: [{ name: 'Character', value: `${classIcon} ${character.name} (${character.iLvl})` }]
  }

  return interaction.reply({ embeds: [renderEmbed(embedData)], ephemeral: true })
}
