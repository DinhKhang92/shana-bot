import { CommandInteraction, MessageSelectOptionData } from 'discord.js'
import { firebase } from '../..'
import { actionRow } from '../../components/actionRow/actionRow'
import { selectMenu } from '../../components/selectMenu/selectMenu'
import { Character } from '../../models/character'
import { CustomId, mapCharacterClassToIcon } from '../../utils'

export const characterUpdate = async (interaction: CommandInteraction) => {
  const characters = await firebase.getCharacters(`users/${interaction.user.id}`)
  const selectOptions: MessageSelectOptionData[] = characters.map((character: Character) => ({
    emoji: mapCharacterClassToIcon(character.characterClass), label: `${character.name} (${character.iLvl})`, value: character.id
  }))

  const row = actionRow([
    selectMenu(CustomId.CharacterUpdate, undefined, selectOptions)
  ])

  return interaction.reply({ ephemeral: true, components: [row] })
}
