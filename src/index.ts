import { Client } from 'discord.js'
import config from './config'
import { Firebase } from './firebase'
import { buttonInteractions } from './interactions/buttonInteractions/buttonInteractions'
import { commandInteractions } from './interactions/commandInteractions/commandInteractions'
import { modalSubmitInteractions } from './interactions/modalSubmitInteractions/modalSubmitInteractions'
import { selectMenuInteractions } from './interactions/selectMenuInteractions/selectMenuInteractions'

export const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES'] })
export const firebase = new Firebase()

client.once('ready', () => {
  console.log('Shana ready.')
})

client.on('interactionCreate', interaction => {
  if (interaction.isCommand()) {
    commandInteractions(interaction)
  }

  if (interaction.isSelectMenu()) {
    selectMenuInteractions(interaction)
  }

  if (interaction.isButton()) {
    buttonInteractions(interaction)
  }

  if (interaction.isModalSubmit()) {
    modalSubmitInteractions(interaction)
  }
})

client.login(config.TOKEN)
