import { neon } from '@neondatabase/serverless'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const sql = neon(process.env.DATABASE_URL!)

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name      TEXT NOT NULL,
      email     TEXT NOT NULL UNIQUE,
      password  TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
  console.log('✓ users table is ready')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
