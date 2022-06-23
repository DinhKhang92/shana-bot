export enum CharaterClass {
    Artillerist = 'Artillerist',
    Bard = 'Bard',
    Berserker = 'Berserker',
    Deadeye = 'Deadeye',
    Deathblade = 'Deathblade',
    Destroyer = 'Destroyer',
    Glaivier = 'Glaivier',
    Gunlancer = 'Gunlancer',
    Gunslinger = 'Gunslinger',
    Paladin = 'Paladin',
    Scrapper = 'Scrapper',
    Shadowhunter = 'Shadowhunter',
    Sharpshooter = 'Sharpshooter',
    Sorceress = 'Sorceress',
    Soulfist = 'Soulfist',
    Striker = 'Striker',
    Wardancer = 'Wardancer'
  }

export enum CustomId {
    SelectRaidType = 'select-raid-type',
    SelectRaid = 'select-raid',
    SelectMode = 'select-mode',
    SelectFinish = 'select-finish',
    ButtonSend = 'button-send',
    ButtonJoin = 'button-join',
    ButtonLeave = 'button-leave',
}

export enum Icon {
    Abyss = '<:abyss:904475743696875590>',
    Artillerist = '<:Artillerist:905274708751167568>',
    Bard = '<:Bard:905274708604371015>',
    Berserker = '<:Berserker:905269841546592287>',
    Deadeye = '<:Deadeye:905274709107687474>',
    Deathblade = '<:Deathblade:905274708935737384>',
    Destroyer = '<:Destroyer:905274708696637440>',
    Glaivier = '<:Glaivier:905274709309014056>',
    Gunlancer = '<:Gunlancer:905274709904597002>',
    Gunslinger = '<:Gunslinger:905274708780535808>',
    Paladin = '<:Paladin:905274708658905099>',
    Scrapper = '<:Scrapper:905274709040570418>',
    Shadowhunter = '<:Shadowhunter:905274708705030194>',
    Sharpshooter = '<:Sharpshooter:905274709015425034>',
    Sorceress = '<:Sorceress:905274709309030450>',
    Soulfist = '<:Soulfist:905274709493575690>',
    Striker = '<:Striker:905274709627785227>',
    Wardancer = '<:Wardancer:905274709615194112>',
    Group = '<:staticgroup:979835631104561222>',
    LegionCommander = '<:legioncommander:979810799549816842>'
}

export const mapCharacterClassToIcon = (charaterClass: string): Icon => {
  switch (charaterClass) {
    case CharaterClass.Artillerist:
      return Icon.Artillerist
    case CharaterClass.Bard:
      return Icon.Bard
    case CharaterClass.Berserker:
      return Icon.Berserker
    case CharaterClass.Deadeye:
      return Icon.Deadeye
    case CharaterClass.Deathblade:
      return Icon.Deathblade
    case CharaterClass.Destroyer:
      return Icon.Destroyer
    case CharaterClass.Glaivier:
      return Icon.Glaivier
    case CharaterClass.Gunlancer:
      return Icon.Gunlancer
    case CharaterClass.Gunslinger:
      return Icon.Gunslinger
    case CharaterClass.Paladin:
      return Icon.Paladin
    case CharaterClass.Shadowhunter:
      return Icon.Shadowhunter
    case CharaterClass.Sharpshooter:
      return Icon.Sharpshooter
    case CharaterClass.Sorceress:
      return Icon.Sorceress
    case CharaterClass.Soulfist:
      return Icon.Soulfist
    case CharaterClass.Striker:
      return Icon.Striker
    case CharaterClass.Wardancer:
      return Icon.Wardancer
    default:
      return Icon.Deathblade
  }
}
