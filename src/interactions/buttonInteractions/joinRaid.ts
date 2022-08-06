import { ButtonInteraction, MessageSelectOptionData } from 'discord.js'
import { firebase } from '../..'
import { actionRow } from '../../components/actionRow/actionRow'
import { selectMenu } from '../../components/selectMenu/selectMenu'
import { Character } from '../../models/character'
import { CustomId, mapCharacterClassToIcon } from '../../utils'

export const joinRaid = async (interaction: ButtonInteraction): Promise<void> => {
  const embeds = interaction.message.embeds
  if (embeds.length < 1) {
    return
  }
  const embed = embeds[0]

  if (embed.fields === undefined) {
    return
  }

  const characters = await firebase.getCharacters(`users/${interaction.user.id}`)
  const selectOptions: MessageSelectOptionData[] = characters.map((character: Character) => ({
    emoji: mapCharacterClassToIcon(character.characterClass), label: `${character.name} (${character.iLvl})`, value: character.id
  }))

  const selectMenuRow = actionRow([
    selectMenu(CustomId.SelectCharacterJoin, undefined, selectOptions)
  ])

  console.log(interaction.message.id)

  await interaction.reply({ components: [selectMenuRow], ephemeral: true })
}
