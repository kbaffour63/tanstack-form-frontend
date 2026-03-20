import Link from "next/link";

export default function Step2() {
  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <form className="mx-auto w-full max-w-xl rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            Step 2 of 5
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            Date of Birth & Phone
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Add your birth date and best contact number.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="dob"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 (555) 000-0000"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <Link
            href="/step-one"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Back
          </Link>
          <Link
            href="/step-three"
            className="inline-flex items-center rounded-lg bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Next
          </Link>
        </div>
      </form>
    </main>
  );
}
