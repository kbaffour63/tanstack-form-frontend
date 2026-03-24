import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Multi-Step Form
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Learn about multi-step forms by filling out this 5-step application.
            Your data collection includes personal, contact, address, and
            professional information.
          </p>

          <Link href="/step-one">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg">
              Start the Form
            </button>
          </Link>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: 1, title: "Personal", desc: "Name & Email" },
              { step: 2, title: "Contact", desc: "Birth & Phone" },
              { step: 3, title: "Address", desc: "Location" },
              { step: 4, title: "Professional", desc: "Work Info" },
              { step: 5, title: "Review", desc: "Confirm" },
            ].map((item) => (
              <div
                key={item.step}
                className="p-4 border border-border rounded-lg bg-card hover:bg-muted transition-colors"
              >
                <div className="text-2xl font-bold text-primary mb-2">
                  {item.step}
                </div>
                <div className="font-semibold text-foreground text-sm">
                  {item.title}
                </div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
