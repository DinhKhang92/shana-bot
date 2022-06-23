import { SlashCommandBuilder } from '@discordjs/builders'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import config from './config'
import { CharaterClass } from './utils'

export enum SlashCommands {
  Create = 'create',
  CharacterAdd = 'character-add'
}

export enum InputArgs {
  Date = 'date',
  Time = 'time',
  Name = 'name',
  Class = 'class',
  ILvl = 'ilvl'
}

const classChoices = () => Object.values(CharaterClass).map(characterClass => ({
  name: characterClass, value: characterClass
}))

const commands = [
  new SlashCommandBuilder().setName(SlashCommands.CharacterAdd).setDescription('Add character')
    .addStringOption(option =>
      option.setName(InputArgs.Name)
        .setDescription('Character name')
        .setRequired(true))
    .addStringOption(option =>
      option.setName(InputArgs.Class)
        .setDescription('character class')
        .addChoices(...classChoices())
        .setRequired(true))
    .addNumberOption(option =>
      option.setName(InputArgs.ILvl)
        .setDescription('character ilvl')
        .setRequired(true)),
  new SlashCommandBuilder().setName(SlashCommands.Create).setDescription('Create an event')
    .addStringOption(option =>
      option.setName(InputArgs.Date)
        .setDescription('Date of event: dd.mm')
        .setRequired(true))
    .addStringOption(option =>
      option.setName(InputArgs.Time)
        .setDescription('Time of event: hh:mm')
        .setRequired(true))
]

const rest = new REST({ version: '9' }).setToken(config.TOKEN)

rest.put(Routes.applicationCommands(config.APPLICATION_ID), { body: commands }).then(() => {
  console.log('Commands deployed successfully')
}).catch(console.error)
