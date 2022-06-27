import { CommandInteraction, MessageSelectOptionData } from 'discord.js'
import { actionRow } from '../../components/actionRow/actionRow'
import { selectMenu } from '../../components/selectMenu/selectMenu'
import { Firebase } from '../../firebase'
import { Character } from '../../models/character'
import { CustomId, mapCharacterClassToIcon } from '../../utils'

const firebase = new Firebase()

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
