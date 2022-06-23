import { CommandInteraction } from 'discord.js'
import { v4 } from 'uuid'
import { renderEmbed } from '../../components/embed/embed'
import { InputArgs } from '../../deploy-commands'
import { Firebase } from '../../firebase'
import { Character } from '../../models/character'
import { mapCharacterClassToIcon } from '../../utils'

const firebase = new Firebase()

export const characterAdd = (interaction: CommandInteraction) => {
  const id = v4()
  const name = interaction.options.getString(InputArgs.Name, true)
  const characterClass = interaction.options.getString(InputArgs.Class, true)
  const iLvl = interaction.options.getNumber(InputArgs.ILvl, true)

  const character = new Character(id, name, characterClass, iLvl)

  firebase.writeToDatabase(character, `users/${interaction.user.id}/${id}`)

  const title = `${name} was added successfully`
  const thumbnailUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Eo_circle_light-green_checkmark.svg/512px-Eo_circle_light-green_checkmark.svg.png'
  const classIcon = mapCharacterClassToIcon(characterClass)
  const fields = [
    { name: 'Character', value: `${classIcon} ${name} (${iLvl})` }
  ]

  return interaction.reply({ embeds: [renderEmbed({ title, thumbnailUrl, fields })], ephemeral: true })
}
