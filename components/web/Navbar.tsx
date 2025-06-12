"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export function Navbar() {
  const { isAuthenticated } = useKindeBrowserClient();
  return (
    <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto md: px-6 lg:px-8">
      <Link href="/">
        <h1 className="text-3xl font-bold">
          DAL<span className="text-primary">Marshal</span>
        </h1>
      </Link>

      {isAuthenticated ? (
        <Button>Logout</Button>
      ) : (
        <div className="flex gap-4">
          <LoginLink className={buttonVariants()}>Login</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "outline" })}>
            Register
          </RegisterLink>
        </div>
      )}
    </nav>
  );
}
