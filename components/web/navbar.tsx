"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useConvexAuth } from "convex/react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <nav className={"w-full py-5 flex items-center justify-between"}>
      <div className={"flex items-center gap-8"}>
        <Link href={"/"}>
          <h1 className={"text-3xl font-bold"}>
            Next <span className={"text-blue-500"}>Blog</span>
          </h1>
        </Link>
        <div className={"flex items-center gap-2"}>
          <Link href={"/"} className={buttonVariants({ variant: "ghost" })}>
            Home
          </Link>
          <Link
            href={"/blogs"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Blogs
          </Link>
          <Link
            href={"/create"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Create
          </Link>
        </div>
      </div>
      <div className={"flex items-center gap-2"}>
        {isLoading ? null : isAuthenticated ? (
          <Button onClick={() => authClient.signOut({})}>LogOut</Button>
        ) : (
          <>
            <Link href={"/auth/sign-up"} className={buttonVariants()}>
              Sign up
            </Link>
            <Link
              href={"/auth/login"}
              className={buttonVariants({ variant: "secondary" })}
            >
              Login
            </Link>
          </>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
}
