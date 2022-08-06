import { Character } from './character'

export interface Lobby {
    id: string,
    createdAt: number,
    team?: Character[]
}
