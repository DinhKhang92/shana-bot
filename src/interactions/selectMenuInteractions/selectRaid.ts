import { SelectMenuInteraction } from 'discord.js'
import { CustomId } from '../../utils'
import { actionRow } from '../../components/actionRow/actionRow'
import { selectMenu } from '../../components/selectMenu/selectMenu'
import { SelectOptionValues, abyssLegionRaidSelectOptions } from '../../components/selectMenu/selectOptions'

export const selectRaid = async (interaction: SelectMenuInteraction): Promise<void> => {
  const selectMenuPlaceholder = interaction.values.includes(SelectOptionValues.AbyssLegionRaids) ? 'Raids..' : undefined
  const selectMenuOptions = interaction.values.includes(SelectOptionValues.AbyssLegionRaids) ? abyssLegionRaidSelectOptions : undefined

  const row = actionRow([
    selectMenu(CustomId.SelectMode, selectMenuPlaceholder, selectMenuOptions)
  ])

  await interaction.update({ components: [row] })
}
