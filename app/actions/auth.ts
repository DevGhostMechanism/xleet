'use server'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import { SignupFormSchema, LoginFormSchema, FormState } from '@/app/lib/definitions'
import { createUser, findUserByEmail, emailExists } from '@/app/lib/db'
import { createSession, deleteSession } from '@/app/lib/session'

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password'),
  })

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors }
  }

  const { name, email, password } = validatedFields.data

  const taken = await emailExists(email)
  if (taken) {
    return { errors: { email: ['An account with this email already exists.'] } }
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await createUser(name, email, hashedPassword)

  if (!user) {
    return { message: 'An error occurred while creating your account. Please try again.' }
  }

  await createSession(user.id)
  redirect('/home')
}

export async function login(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors }
  }

  const { email, password } = validatedFields.data

  const user = await findUserByEmail(email)
  if (!user) {
    return { message: 'Invalid email or password.' }
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) {
    return { message: 'Invalid email or password.' }
  }

  await createSession(user.id)
  redirect('/home')
}

export async function logout() {
  await deleteSession()
  redirect('/log-in')
}
