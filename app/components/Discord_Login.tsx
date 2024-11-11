import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button type="submit">Signin with Google</button>
      <button type="submit">Signin with Discord</button>
      <button type="submit">Signin with Twitch</button>
    </form>
  )
} 