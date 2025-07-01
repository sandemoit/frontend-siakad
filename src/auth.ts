import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"

import type { JWT } from "next-auth/jwt";

// Extend NextAuth types
declare module "next-auth" {
  interface User {
    id: string
    email: string
    role: string
    sekolah_id?: string
    accessToken: string
  }

  interface Session {
    user: {
      id: string
      email: string
      role: string
      sekolah_id?: string
      accessToken: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    email: string
    role: string
    sekolah_id?: string
    accessToken: string
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
            {
              email: credentials.email,
              password: credentials.password
            }
          )

          const { user, token } = response.data

          if (user && token) {
            return {
              id: user.id,
              email: user.email,
              role: user.role,
              sekolah_id: user.sekolah_id,
              accessToken: token
            }
          }

          return null
        } catch (error) {
          console.error("Authentication failed:", error)
          return null
        }
      }
    })
  ],

  pages: {
    signIn: "/signin",
    error: "/signin"
  },

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Initial sign in
      if (user) {
        token.id = user.id
        token.email = user.email
        token.role = user.role
        token.sekolah_id = user.sekolah_id
        token.accessToken = user.accessToken
      }

      // Update session
      if (trigger === "update" && session) {
        token = { ...token, ...session }
      }

      return token
    },

    async session({ session, token }) {
      session.user.id = token.id
      session.user.email = token.email
      session.user.role = token.role
      session.user.sekolah_id = token.sekolah_id
      session.user.accessToken = token.accessToken

      return session
    }
  },

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },

  secret: process.env.NEXTAUTH_SECRET,

  debug: process.env.NODE_ENV === "development"
})
