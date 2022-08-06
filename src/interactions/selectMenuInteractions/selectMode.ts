import { MessageEmbedOptions, SelectMenuInteraction } from 'discord.js'
import { CustomId, Icon } from '../../utils'
import { actionRow } from '../../components/actionRow/actionRow'
import { EventImage, renderEmbed, Thumbnails } from '../../components/embed/embed'
import { selectMenu } from '../../components/selectMenu/selectMenu'
import { argosModeSelectOptions, SelectOptionValues, valtanModeSelectOptions } from '../../components/selectMenu/selectOptions'

export const selectMode = async (interaction: SelectMenuInteraction): Promise<void> => {
  const embeds = interaction.message.embeds
  if (embeds.length < 1) {
    return
  }

  const embed = embeds[0]
  const embedTitle = embed.title ?? ''

  const raid = interaction.values.map(raid => raid.charAt(0).toUpperCase() + raid.slice(1)).join('+')

  const selectMenuModePlacehoder = 'Mode..'
  const selectOptions = interaction.values.includes(SelectOptionValues.Valtan) ? valtanModeSelectOptions : argosModeSelectOptions
  const thumbnailUrl = interaction.values.includes(SelectOptionValues.Valtan) ? Thumbnails.Valtan : Thumbnails.Argos
  const imageUrl = interaction.values.includes(SelectOptionValues.Valtan) ? EventImage.Valtan : EventImage.Argos

  const fields = [
    { name: '\u200B', value: '\u200B' },
    { name: `${Icon.Group} __Team (0/8)__`, value: '\u200B' }
  ]

  const embedData: MessageEmbedOptions = {
    title: `${embedTitle} - ${raid}`,
    thumbnail: {
      url: thumbnailUrl
    },
    image: {
      url: imageUrl
    },
    fields
  }

  const row = actionRow([
    selectMenu(CustomId.SelectFinish, selectMenuModePlacehoder, selectOptions)
  ])

  await interaction.update({ embeds: [renderEmbed(embedData)], components: [row] })
}
