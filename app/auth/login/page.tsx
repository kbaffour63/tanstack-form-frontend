import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
	return (
		<main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background px-4 py-10">
			<section className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-sm">
				<div className="mb-6 space-y-1">
					<h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
					<p className="text-sm text-muted-foreground">Login to your account.</p>
				</div>

				<form className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="you@example.com"
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							name="password"
							type="password"
							placeholder="Enter your password"
							required
						/>
					</div>

					<Button type="submit" className="w-full">
						Login
					</Button>
				</form>

				<p className="mt-5 text-center text-sm text-muted-foreground">
					Don&apos;t have an account?{" "}
					<Link href="/auth/signup" className="font-medium text-primary hover:underline">
						Sign Up
					</Link>
				</p>
			</section>
		</main>
	)
}
