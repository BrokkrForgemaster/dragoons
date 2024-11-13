import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import TwitchProvider from "next-auth/providers/twitch";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.AUTH_DISCORD_CLIENT_ID!,
      clientSecret: process.env.AUTH_DISCORD_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
    }),
    TwitchProvider({
      clientId: process.env.AUTH_TWITCH_CLIENT_ID!,
      clientSecret: process.env.AUTH_TWITCH_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/signin", // Custom sign-in page
    error: "/error",   // Custom error page
  },
  callbacks: {
    async signIn() {
      return true; // Return true to allow sign-in
    },
    async redirect({ baseUrl }) {
      return baseUrl + "/"; // Redirect to home page after sign-in
    },
  },
});

export default auth;
  
