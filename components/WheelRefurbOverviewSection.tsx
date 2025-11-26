import { MessageCircle, Wand2, Sparkles } from "lucide-react";

export function WheelRefurbOverviewSection() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <header className="mb-10 text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            How the process works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Quotes, SMART Repairs & Full Refurbishments
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            A clear overview of how we assess your wheels, repair localised damage and carry out full
            powder-coated or diamond cut refurbishments.
          </p>
        </header>

        {/* Quote info */}
        {/* Quote info */}
<div className="mb-12 grid items-stretch gap-6 md:grid-cols-[minmax(0,1.7fr),minmax(0,1.3fr)]">
  {/* Left: redesigned quote card */}
  <div className="relative h-full overflow-hidden rounded-3xl border border-border/80 bg-background shadow-md shadow-black/5">
    {/* subtle gradient accent */}
    <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-primary/40 via-primary/10 to-transparent opacity-80" />

    <div className="relative flex h-full flex-col p-6 md:p-8">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-black">
        <MessageCircle className="h-3.5 w-3.5" />
        Free no-obligation quote
      </div>

      <h3 className="text-xl font-semibold md:text-2xl">
        Send photos & receive a tailored quotation!
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
        A free no-obligation quote is provided. To help with this, you can send us pictures of your
        wheels – especially any damaged bits or scuffs – along with a small description of what you
        would like (for example “gloss black”) so we can assess the best solution for you.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
        We offer full wheel refurbishment or SMART repairs. At this stage, a team member will also
        talk you through our current turnaround times and book you a slot.
      </p>

      {/* Quick highlights */}
      <div className="mt-5 grid gap-3 text-xs text-muted-foreground md:grid-cols-3 md:text-[13px]">
        <div className="rounded-2xl bg-muted/70 px-3 py-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-grey">
            Options
          </p>
          <p className="mt-1.5">
            Full wheel refurbishment or localised SMART repairs.
          </p>
        </div>
        <div className="rounded-2xl bg-muted/70 px-3 py-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-grey">
            Turnaround
          </p>
          <p className="mt-1.5">
            We&apos;ll confirm current turnaround times and book you in.
          </p>
        </div>
        <div className="rounded-2xl bg-muted/70 px-3 py-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-grey">
            Personal service
          </p>
          <p className="mt-1.5">
            Your enquiry is handled directly by the Yorkshire Wheel Specialist team.
          </p>
        </div>
      </div>

      {/* Email / CTA row */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs md:text-[13px]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-brand-black">
            Email your photos to{" "}
            <a
              href="mailto:joe@yorkshirewheelspecialist.co.uk"
              className="underline decoration-primary/60 underline-offset-4"
            >
              joe@yorkshirewheelspecialist.co.uk
            </a>
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground">
          Include photos, finish you’d like and vehicle details.
        </p>
      </div>
    </div>
  </div>

  {/* Right: “What to include” aside with email */}
  <aside className="rounded-2xl border border-dashed border-primary/50 bg-primary/5 p-6 md:p-7">
    <h4 className="text-sm font-semibold text-brand-black md:text-base">
      What to include in your message
    </h4>

    <p className="mt-2 text-xs text-muted-foreground">
      Email photos and details directly to{" "}
      <a
        href="mailto:joe@yorkshirewheelspecialist.co.uk"
        className="font-semibold text-brand-black underline decoration-primary/60 underline-offset-4"
      >
        joe@yorkshirewheelspecialist.co.uk
      </a>
      .
    </p>

    <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
      <li className="flex gap-2.5">
        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[11px] font-semibold text-primary">
          1
        </span>
        <span>Clear photos of each wheel, showing any damage or scuffs.</span>
      </li>
      <li className="flex gap-2.5">
        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[11px] font-semibold text-primary">
          2
        </span>
        <span>
          A short description of the finish you want (e.g. gloss black, OEM silver, custom colour).
        </span>
      </li>
      <li className="flex gap-2.5">
        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[11px] font-semibold text-primary">
          3
        </span>
        <span>Your vehicle make/model and how many wheels need attention.</span>
      </li>
    </ul>
  </aside>
</div>


        {/* Processes: SMART vs Full Refurb */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* SMART repair card */}
          <article className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm md:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
                <Wand2 className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold md:text-lg">SMART Repair</h3>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Localised wheel repairs
                </p>
              </div>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Ideal for localised damage and scuffs on the face of the alloy, without a full strip back
              to bare metal.
            </p>

            <ol className="mt-5 space-y-3 text-sm">
              {[
                "Wheels removed from vehicle",
                "Tyre popped off bead",
                "Removal of damage",
                "Prep the face of the alloy",
                "Repaint and relacquer the face",
                "Quality assurance check and tyre refit",
                "Alloys put back onto the vehicle",
              ].map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="leading-snug">{step}</span>
                </li>
              ))}
            </ol>
          </article>

          {/* Full refurbishment card */}
          <article className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm md:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/15">
                <Sparkles className="h-4.5 w-4.5 text-secondary" />
              </div>
              <div>
                <h3 className="text-base font-semibold md:text-lg">Full Refurbishment</h3>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Powder-coated & diamond cut options
                </p>
              </div>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              A complete strip-back and rebuild of your wheels, with the option of powder coat only or a
              full CNC diamond cut finish.
            </p>

            <ol className="mt-5 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                  1
                </span>
                <span className="leading-snug">
                  Wheels are removed from the vehicle and tyres, weights and valves are removed too.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                  2
                </span>
                <span className="leading-snug">
                  Alloys are dipped into a chemical stripping bath to remove all current paint, dirt and
                  grime, bringing the alloy back to bare aluminium.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                  3
                </span>
                <span className="leading-snug">
                  After chemical stripping, the wheels are washed and put into the preparation system
                  where all corrosion and damage is repaired and treated, then the alloys are shot blasted.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                  4
                </span>
                <span className="leading-snug">
                  Next, the wheels go through a comprehensive three-coat oven process. Powder and
                  water-based products are applied to achieve the perfect colour – manufacturer colour
                  coding, one of our standard colours or a striking custom colour of your choice.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                  5
                </span>
                <span className="leading-snug">
                  If your alloys are having a CNC diamond cut finish, this is where your alloy will be
                  placed onto our in-house lathe.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                  6
                </span>
                <span className="leading-snug">
                  Alloys are then lacquered to a finish of your choice – high-gloss, satin or matt.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                  7
                </span>
                <span className="leading-snug">
                  All wheels are quality assurance checked by an experienced team member before your
                  tyres are re-fitted, balanced and refitted to your vehicle (if applicable).
                </span>
              </li>
            </ol>
          </article>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Every job is assessed individually so we can recommend SMART repair or full refurbishment
          depending on the condition of your wheels.
        </p>
      </div>
    </section>
  );
}
export default WheelRefurbOverviewSection;