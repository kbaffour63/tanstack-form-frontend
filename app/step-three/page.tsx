import Link from "next/link";

export default function Step3() {
  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <form className="mx-auto w-full max-w-xl rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            Step 3 of 5
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            Address Information
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Share your current location details.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="street"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Street Address
            </label>
            <input
              type="text"
              id="street"
              placeholder="123 Main Street"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="city"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="New York"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                State/Province
              </label>
              <input
                type="text"
                id="state"
                placeholder="NY"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="zip"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Zip/Postal Code
              </label>
              <input
                type="text"
                id="zip"
                placeholder="10001"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                placeholder="United States"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <Link
            href="/step-two"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Back
          </Link>
          <Link
            href="/step-four"
            className="inline-flex items-center rounded-lg bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Next
          </Link>
        </div>
      </form>
    </main>
  );
}
