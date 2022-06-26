
import { FirebaseApp, initializeApp } from 'firebase/app'
import { child, Database, get, getDatabase, onValue, ref, set, update } from 'firebase/database'
import config from './config'
import { Character } from './models/character'

export class Firebase {
  app: FirebaseApp
  database: Database
  databaseUrl: string

  constructor () {
    this.app = initializeApp({
      apiKey: config.FIREBASE_API_KEY,
      authDomain: config.FIREBASE_AUTH_DOMAIN,
      projectId: config.FIREBASE_PROJECT_ID,
      storageBucket: config.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
      appId: config.FIREBASE_APP_ID
    })
    this.databaseUrl = config.FIREBASE_DATABASE_URL

    this.database = getDatabase(this.app, this.databaseUrl)
  }

  public async writeToDatabase (data: string | object, path: string): Promise<void> {
    await set(ref(this.database, path), data)
  }

  public async updateDatabase (data: object, path: string): Promise<void> {
    await update(ref(this.database, path), data)
  }

  public async getCharacters (path: string): Promise<Character[]> {
    const databaseRef = ref(this.database)
    const snapshot = await get(child(databaseRef, path))
    if (snapshot.exists()) {
      const charactersData = snapshot.val()
      const characterKeys = Object.keys(charactersData)
      const characters: Character[] = characterKeys.map((key) => ({
        id: charactersData[key].id,
        name: charactersData[key].name,
        characterClass: charactersData[key].characterClass,
        iLvl: charactersData[key].iLvl
      }))

      return characters
    }
    return []
  }
}
