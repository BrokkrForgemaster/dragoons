
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button
        type="submit"
        className="buttonStyle hover">Signin with Google</button>
    </form>
  )
} 

