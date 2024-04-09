import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    // ...add more providers here


  ],
  database: process.env.DB_URL,
  session: {
    jwt: true
  },
  jwt: {
    secret: "fffff"
  }
} as any

export default NextAuth(authOptions)