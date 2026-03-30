import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className={"w-full py-5 flex items-center justify-between"}>
      <div className={"flex items-center gap-8"}>
        <Link href={"/"}>
          <h1 className={"text-3xl font-bold"}>
            Next <span className={"text-blue-500"}>Blog</span>
          </h1>
        </Link>
        <div className={"flex items-center gap-2"}>
          <Link href={"/"} className={buttonVariants()}>
            Home
          </Link>
          <Link href={"/blogs"} className={buttonVariants()}>
            Blogs
          </Link>
          <Link href={"/create"} className={buttonVariants()}>
            Create
          </Link>
        </div>
      </div>
      <div className={"flex items-center gap-2"}>
        <Link href={"/auth/sign-up"} className={buttonVariants()}>
          Sign up
        </Link>
        <Link href={"/auth/login"} className={buttonVariants()}>
          Login
        </Link>
      </div>
    </nav>
  );
}
