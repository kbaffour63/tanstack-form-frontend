"use client";

import Link from "next/link";
import { UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const username = session?.user?.name || "User";

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto w-full">
        {/* Logo/Brand */}
        <Link href="/" className="font-semibold text-lg hover:opacity-80">
          Form Hub
        </Link>

        <div className="flex items-center gap-3">
          {isPending ? (
            // Optional: skeleton/spinner while session loads
            <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
          ) : session ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{username}</span>
              <button className="flex items-center justify-center rounded-full w-10 h-10 hover:bg-muted transition-colors">
                <UserCircle className="w-6 h-6" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button variant="default" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
