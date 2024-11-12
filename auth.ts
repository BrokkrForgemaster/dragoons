import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Discord from "next-auth/providers/discord"
import Twitch from "next-auth/providers/twitch"
import type { Provider } from "next-auth/providers"

const providers: Provider[] = [
  Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
  }),
  Discord({
    clientId: process.env.AUTH_DISCORD_ID,
    clientSecret: process.env.AUTH_DISCORD_SECRET,
  }),
  Twitch({
    clientId: process.env.AUTH_TWITCH_ID,
    clientSecret: process.env.AUTH_TWITCH_SECRET,
  }),
]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name, type: providerData.type }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")
 
  export const { handlers, auth, signIn, signOut } = NextAuth({
    providers,
  })