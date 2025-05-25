import Image from "next/image";
import Link from "next/link";
import { auth } from "../lib/auth";
// import { signIn, signOut } from "next-auth/react";
import { signInAction } from "../lib/actions";

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans ">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src={"/YCDirectory.png"} alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <>
              <Link href={"/startup/create"}>
                <span>create</span>
              </Link>
              {/* <button onClick={signOut}>
                <span>Logout</span>
              </button> */}
              <Link href={`/user/${session.user.name}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form action={signInAction}>
              <button type="submit">
                <span>login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
