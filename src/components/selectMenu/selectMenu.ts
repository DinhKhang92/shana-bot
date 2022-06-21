import { MessageSelectMenu, MessageSelectOptionData } from 'discord.js'
import { CustomIds } from '../../utils'
import { defaultSelectOptions } from './selectOptions'

const defaultPlacerholder = 'Nothing selected'

export const selectMenu = (customId: CustomIds, placeholder?: string, selectOptions?: MessageSelectOptionData[]): MessageSelectMenu => new MessageSelectMenu()
  .setCustomId(customId)
  .setPlaceholder(placeholder ?? defaultPlacerholder)
  .addOptions(selectOptions ?? defaultSelectOptions)
