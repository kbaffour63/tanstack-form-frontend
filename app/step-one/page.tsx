import Link from "next/link";

export default function StepOne() {
  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <form className="mx-auto w-full max-w-xl rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            Step 1 of 5
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            Personal Information
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us a little about yourself to get started.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Back
          </Link>

          <Link
            href="/step-two"
            className="inline-flex items-center rounded-lg bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Next
          </Link>
        </div>
      </form>
    </main>
  );
}
