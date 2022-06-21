import { SelectMenuInteraction } from 'discord.js'
import { CustomIds } from '../../utils'
import { SelectOptionValues } from '../../components/selectMenu/selectOptions'
import { selectFinish } from './selectFinish'
import { selectMode } from './selectMode'
import { selectRaid } from './selectRaid'

export const selectMenuInteractions = async (interaction: SelectMenuInteraction): Promise<void> => {
  const { customId } = interaction

  switch (customId) {
    case CustomIds.SelectRaid:
      selectRaid(interaction)
      break
    case CustomIds.SelectMode:
      selectMode(interaction)
      break
    case CustomIds.SelectFinish:
      selectFinish(interaction)
      break
  }
}

export function updateTitleByMode (title: string, mode: string): string {
  switch (mode) {
    case SelectOptionValues.NormalMode:
      return title.replace('Valtan', 'Valtan NM')
    case SelectOptionValues.HardMode:
      return title.replace('Valtan', 'Valtan HM')
    case SelectOptionValues.PhaseOne:
      return title.replace('Argos', 'Argos P1')
    case SelectOptionValues.PhaseTwo:
      return title.replace('Argos', 'Argos P2')
    case SelectOptionValues.PhaseThree:
      return title.replace('Argos', 'Argos P3')
    default:
      return title
  }
}
