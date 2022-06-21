import dotenv from 'dotenv'

dotenv.config()
const { TOKEN, APPLICATION_ID, GUILD_ID } = process.env

if (!TOKEN || !APPLICATION_ID || !GUILD_ID) {
  throw new Error('Missing env variables')
}

const config: Record<string, string> = {
  APPLICATION_ID,
  TOKEN,
  GUILD_ID
}

export default config
