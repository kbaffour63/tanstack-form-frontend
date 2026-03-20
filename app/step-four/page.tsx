import Link from "next/link";

export default function Step4() {
  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <form className="mx-auto w-full max-w-xl rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            Step 4 of 5
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            Professional Information
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Add your current work details.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              placeholder="Your Company"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="jobTitle"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              placeholder="Software Engineer"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="industry"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Industry
            </label>
            <select
              id="industry"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select an industry</option>
              <option value="tech">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="retail">Retail</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="experience"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Years of Experience
            </label>
            <input
              type="number"
              id="experience"
              placeholder="5"
              min="0"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <Link
            href="/step-three"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Back
          </Link>
          <Link
            href="/step-five"
            className="inline-flex items-center rounded-lg bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Next
          </Link>
        </div>
      </form>
    </main>
  );
}
