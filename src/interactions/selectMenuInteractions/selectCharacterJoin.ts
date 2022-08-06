import { EmbedField, Message, SelectMenuInteraction } from 'discord.js'
import { client, firebase } from '../..'
import { Character } from '../../models/character'
import { mapCharacterClassToIcon } from '../../utils'

interface MessageWithReference extends Message {
    reference: {
        guildId: string,
        channelId: string
        messageId: string,
    }
}

export const selectCharacterJoin = async (interaction: SelectMenuInteraction) => {
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
  const interactionMessage = interaction.message as MessageWithReference
  const { guildId, channelId, messageId } = interactionMessage.reference

  if (!guildId || !channelId || !messageId) {
    return
  }

  const guildData = client.guilds.cache.get(guildId)
  const channelData = guildData?.channels.cache.get(channelId) as any
  const messages: Message[] = await channelData.messages.fetch()
  const message = messages.find((message) => message.id === messageId)

  const lobby = await firebase.getLobby(`lobbies/${interaction.guildId}/${interaction.channelId}/${messageId}`)
  if (lobby === undefined) {
    return
  }

  const team = updateTeam(character, lobby.team)
  const updatedLobby = {
    ...lobby,
    team
  }

  await firebase.writeToDatabase(updatedLobby, `lobbies/${interaction.guildId}/${interaction.channelId}/${messageId}`)

  if (message === undefined) {
    return
  }

  const embeds = message.embeds
  if (embeds.length < 1) {
    return
  }
  const embed = embeds[0]
  const teamField = embed.fields[1]
  console.log(teamField)

  const classIcon = mapCharacterClassToIcon(character.characterClass)
  const updatedTeamField: EmbedField = {
    ...teamField,
    value: `${classIcon} ${character.name} (${character.iLvl})`
  }

  embed.setFields(updatedTeamField)
  message.edit({ embeds: [embed] })
}

const updateTeam = (character: Character, team?: Character[]): Character[] => {
  if (team === undefined) {
    return [character]
  }

  const characterInTeam = team.find((teamMember) => teamMember.id === character.id)
  if (characterInTeam === undefined) {
    return [...team, character]
  }

  return team
}
