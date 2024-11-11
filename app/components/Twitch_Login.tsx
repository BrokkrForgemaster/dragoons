
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("twitch")
      }}
    >
      <button type="submit">Signin with Twitch</button>
    </form>
  )
} 