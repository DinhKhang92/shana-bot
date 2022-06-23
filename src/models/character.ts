export class Character {
  id: string
  name: string
  characterClass: string
  iLvl: number

  constructor (id: string, name: string, characterClass: string, iLvl: number) {
    this.id = id
    this.name = name
    this.characterClass = characterClass
    this.iLvl = iLvl
  }
}
