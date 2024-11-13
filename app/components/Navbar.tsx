import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="nav">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/HWiconnew.png" alt="logo" height={25} width={125} priority={false} />
        </Link>

        <div className="flex items-center gap-5 text-white text-xl extra-bold shadow-orange">
          {session && session?.user ?(
            <>
              <Link href="/dashboard/">
                <span>Dashboard</span>
              </Link>
              
              <form action={async () => {
                "use server";
                await signOut();
              }}>
                <button type="submit">Logout</button>
              </form>
              
              <Link href={`/user/${session?.user?.id}`}>
                <span> {session?.user?.name}</span>
              </Link>
            </>
          ) : ( 
              <form action={async () => {
                "use server";
                await signIn();
              }}>
                <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
