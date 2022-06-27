import { CommandInteraction } from 'discord.js'
import { SlashCommands } from '../../deploy-commands'
import { characterAdd } from './characterAdd'
import { characterDelete } from './characterDelete'
import { characterUpdate } from './characterUpdate'
import { createRaid } from './createRaid'

export const commandInteractions = (interaction: CommandInteraction) => {
  const { commandName } = interaction

  switch (commandName) {
    case SlashCommands.Create:
      createRaid(interaction)
      break
    case SlashCommands.CharacterAdd:
      characterAdd(interaction)
      break
    case SlashCommands.CharacterUpdate:
      characterUpdate(interaction)
      break
    case SlashCommands.CharacterDelete:
      characterDelete(interaction)
      break
  }
}
