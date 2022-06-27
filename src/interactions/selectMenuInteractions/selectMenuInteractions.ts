import { SelectMenuInteraction } from 'discord.js'
import { CustomId } from '../../utils'
import { SelectOptionValues } from '../../components/selectMenu/selectOptions'
import { selectFinish } from './selectFinish'
import { selectMode } from './selectMode'
import { selectRaid } from './selectRaid'
import { selectUpdate } from './selectUpdate'
import { selectDelete } from './selectDelete'

export const selectMenuInteractions = async (interaction: SelectMenuInteraction): Promise<void> => {
  const { customId } = interaction

  switch (customId) {
    case CustomId.SelectRaid:
      selectRaid(interaction)
      break
    case CustomId.SelectMode:
      selectMode(interaction)
      break
    case CustomId.SelectFinish:
      selectFinish(interaction)
      break
    case CustomId.CharacterUpdate:
      selectUpdate(interaction)
      break
    case CustomId.CharacterDelete:
      selectDelete(interaction)
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
