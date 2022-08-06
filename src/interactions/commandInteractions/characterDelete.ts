import { CommandInteraction, MessageSelectOptionData } from 'discord.js'
import { firebase } from '../..'
import { actionRow } from '../../components/actionRow/actionRow'
import { selectMenu } from '../../components/selectMenu/selectMenu'
import { Character } from '../../models/character'
import { CustomId, mapCharacterClassToIcon } from '../../utils'

export const characterDelete = async (interaction: CommandInteraction) => {
  const characters = await firebase.getCharacters(`users/${interaction.user.id}`)
  const selectiOptions: MessageSelectOptionData[] = characters.map((character: Character) => ({
    emoji: mapCharacterClassToIcon(character.characterClass), label: `${character.name} (${character.iLvl})`, value: character.id
  }))

  const row = actionRow([
    selectMenu(CustomId.CharacterDelete, undefined, selectiOptions)
  ])

  return interaction.reply({ ephemeral: true, components: [row] })
}
