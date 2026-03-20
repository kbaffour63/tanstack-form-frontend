import Link from "next/link";

export default function Step5() {
  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <section className="mx-auto w-full max-w-xl rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            Step 5 of 5
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            Review & Confirm
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Please review your details before submitting.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg bg-muted p-4">
            <h3 className="mb-3 font-semibold text-foreground">Form Summary</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              Please review your information before submitting.
            </p>
            <p className="text-sm text-muted-foreground">
              You will be able to edit any information if needed.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Personal Information
              </p>
              <p className="mt-1 text-sm text-foreground">Name, Email</p>
            </div>

            <div className="border-b border-border pb-4">
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Date & Contact
              </p>
              <p className="mt-1 text-sm text-foreground">
                Date of Birth, Phone
              </p>
            </div>

            <div className="border-b border-border pb-4">
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Address
              </p>
              <p className="mt-1 text-sm text-foreground">
                Street, City, State, Zip, Country
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Professional
              </p>
              <p className="mt-1 text-sm text-foreground">
                Company, Job Title, Industry, Experience
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <Link
            href="/step-four"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Back
          </Link>
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Submit Form
          </button>
        </div>
      </section>
    </main>
  );
}
