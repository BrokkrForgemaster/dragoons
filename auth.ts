import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Discord from "next-auth/providers/discord"
import Twitch from "next-auth/providers/twitch"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Discord, Google,Twitch],
})