
import { FirebaseApp, initializeApp } from 'firebase/app'
import { Database, getDatabase, ref, set } from 'firebase/database'
import config from './config'

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

  public async writeToDatabase (data: string | Object, path?: string): Promise<void> {
    await set(ref(this.database, path), data)
  }
}
