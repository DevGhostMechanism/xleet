import 'server-only'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

export async function createUser(name: string, email: string, hashedPassword: string) {
  const rows = await sql`
    INSERT INTO users (name, email, password)
    VALUES (${name}, ${email}, ${hashedPassword})
    RETURNING id
  `
  return rows[0] as { id: string }
}

export async function findUserByEmail(email: string) {
  const rows = await sql`
    SELECT id, name, email, password FROM users WHERE email = ${email} LIMIT 1
  `
  return rows[0] as { id: string; name: string; email: string; password: string } | undefined
}

export async function emailExists(email: string): Promise<boolean> {
  const rows = await sql`
    SELECT 1 FROM users WHERE email = ${email} LIMIT 1
  `
  return rows.length > 0
}
