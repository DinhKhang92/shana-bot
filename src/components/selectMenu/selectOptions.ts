import { MessageSelectOptionData } from 'discord.js'
import { Emojis } from '../../utils'

export enum SelectOptionValues {
    AbyssLegionRaids = 'abyss_legion_raids',
    AbyssDungeons = 'abyss_dungeons',
    Argos = 'argos',
    Valtan = 'valtan',
    ArgosAndValtan = 'argos_and_valtan',
    NormalMode = 'normal_mode',
    HardMode = 'hard_mode',
    PhaseOne = 'phase_one',
    PhaseTwo = 'phase_two',
    PhaseThree = 'phase_three',
}

export const defaultSelectOptions: MessageSelectOptionData[] = [
  {
    label: 'Legion/Abyss Raids',
    value: SelectOptionValues.AbyssLegionRaids,
    emoji: Emojis.LegionCommander
  },
  {
    label: 'Abyss Dungeons',
    value: SelectOptionValues.AbyssDungeons,
    emoji: Emojis.Abyss
  }
]

export const abyssLegionRaidSelectOptions: MessageSelectOptionData[] = [
  {
    label: 'Valtan',
    value: SelectOptionValues.Valtan
  },
  {
    label: 'Argos',
    value: SelectOptionValues.Argos
  }
]

export const valtanModeSelectOptions: MessageSelectOptionData[] = [
  {
    label: 'Normal Mode',
    value: SelectOptionValues.NormalMode
  },
  {
    label: 'Hard Mode',
    value: SelectOptionValues.HardMode
  }
]

export const argosModeSelectOptions: MessageSelectOptionData[] = [
  {
    label: 'Phase 1',
    value: SelectOptionValues.PhaseOne
  },
  {
    label: 'Phase 2',
    value: SelectOptionValues.PhaseTwo
  },
  {
    label: 'Phase 3',
    value: SelectOptionValues.PhaseThree
  }
]
