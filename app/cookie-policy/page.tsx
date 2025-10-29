import Link from "next/link";
import OpenCookieSettingsButton from "../../components/OpenCookieSettingsButton";
import CookieActions from '../../components/CookieActions';

export default function CookiePolicy() {
  const updated = "29 October 2025";

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-muted)]/60 shadow-sm">
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="relative p-8 md:p-10">
          <p className="text-xs uppercase tracking-[.15em] text-[var(--color-muted-foreground)]">Legal</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">Last updated: {updated}</p>

          <div className="mt-6">
            <CookieActions
              acceptClass="btn btn-primary rounded-2xl shadow-sm"
              rejectClass="btn btn-secondary rounded-2xl"
              settingsClass="btn rounded-2xl bg-transparent border border-[var(--color-border)] text-foreground hover:bg-[var(--color-muted)]"
            />
          </div>
        </div>
      </header>

      {/* Intro copy */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        <aside className="md:col-span-4">
          <div className="sticky top-6 rounded-2xl border border-[var(--color-border)] bg-background p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Contents</h2>
            <nav className="mt-3 text-sm space-y-2">
              {[
                ["about","1. About this policy"],
                ["what","2. What are cookies?"],
                ["categories","3. Categories we use"],
                ["list","4. Cookies we use"],
                ["choices","5. Managing your choices"],
                ["changes","6. Changes"],
                ["contact","7. Contact"],
              ].map(([id, label]) => (
                <a key={id as string} href={`#${id}`} className="block hover:underline">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="md:col-span-8 space-y-8">
          {/* About */}
          <section id="about" className="rounded-2xl border border-[var(--color-border)] bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">1. About this policy</h3>
            <p className="mt-3 text-[var(--color-muted-foreground)]">
              This Cookie Policy explains how <strong>Yorkshire Wheel Specialist Limited</strong> (company number <strong>16654097</strong>) uses cookies and similar technologies on our website. For how we process personal data more generally, see our <Link href="/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </section>

          {/* What are cookies */}
          <section id="what" className="rounded-2xl border border-[var(--color-border)] bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">2. What are cookies?</h3>
            <p className="mt-3 text-[var(--color-muted-foreground)]">
              Cookies are small text files placed on your device by websites you visit. They can be <em>session</em> cookies (deleted when you close your browser) or <em>persistent</em> cookies (stay until they expire or you delete them). We also use similar technologies such as local storage and pixels.
            </p>
          </section>

          {/* Categories */}
          <section id="categories" className="rounded-2xl border border-[var(--color-border)] bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">3. Categories we use</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[var(--color-border)] p-4">
                <h4 className="font-semibold">Essential</h4>
                <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">Required for core site features (security, network management, remembering your preferences). These are always on and do not store personally identifiable information without your consent.</p>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] p-4">
                <h4 className="font-semibold">Analytics</h4>
                <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">Help us understand performance and usage so we can improve our website. Set only with your consent.</p>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] p-4">
                <h4 className="font-semibold">Marketing (if enabled)</h4>
                <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">Used to deliver more relevant content or offers. Set only with your consent.</p>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] p-4">
                <h4 className="font-semibold">Functional</h4>
                <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">Enhance functionality such as remembering preferences or embedding maps/videos.</p>
              </div>
            </div>
          </section>

          {/* Cookie list */}
          <section id="list" className="rounded-2xl border border-[var(--color-border)] bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">4. Cookies we use</h3>
            <p className="mt-3 text-[var(--color-muted-foreground)]">The table below shows typical cookies and storage used on this site. Exact names may vary; your Consent Management Platform (CMP) should surface an up‑to‑date list.</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--color-border)]">
              <table className="min-w-full text-sm">
                <thead className="bg-[var(--color-muted)]/50 text-left">
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Purpose</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Provider</th>
                    <th className="p-3">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  <tr>
                    <td className="p-3">session</td>
                    <td className="p-3">Maintains session state and security</td>
                    <td className="p-3">Session</td>
                    <td className="p-3">HTTP cookie</td>
                    <td className="p-3">First‑party</td>
                    <td className="p-3">Essential</td>
                  </tr>
                  <tr>
                    <td className="p-3">cookie_consent</td>
                    <td className="p-3">Stores your consent preferences</td>
                    <td className="p-3">6–12 months</td>
                    <td className="p-3">Local storage / cookie</td>
                    <td className="p-3">First‑party</td>
                    <td className="p-3">Essential</td>
                  </tr>
                  <tr>
                    <td className="p-3">_ga, _gid (if Google Analytics enabled)</td>
                    <td className="p-3">Analytics identifiers to measure visits and engagement</td>
                    <td className="p-3">24 hours – 2 years</td>
                    <td className="p-3">HTTP cookie</td>
                    <td className="p-3">Google</td>
                    <td className="p-3">Analytics (consent)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Manage choices */}
          <section id="choices" className="rounded-2xl border border-[var(--color-border)] bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">5. Managing your choices</h3>
            <p className="mt-3 text-[var(--color-muted-foreground)]">
              You can update your preferences any time using the controls below or via your browser settings (which let you block or delete cookies). Blocking some cookies may impact site functionality.
            </p>

            <div className="mt-4">
              <CookieActions
                acceptClass="btn btn-primary rounded-2xl"
                rejectClass="btn btn-secondary rounded-2xl"
                settingsClass="btn rounded-2xl bg-transparent border border-[var(--color-border)] text-foreground hover:bg-[var(--color-muted)]"
              />
            </div>

            <p className="mt-4 text-xs text-[var(--color-muted-foreground)]">
              Non‑essential cookies (e.g., analytics/marketing) are set only with your consent.
            </p>
          </section>

          {/* Changes */}
          <section id="changes" className="rounded-2xl border border-[var(--color-border)] bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">6. Changes to this policy</h3>
            <p className="mt-3 text-[var(--color-muted-foreground)]">
              We may update this Cookie Policy from time to time. We will post the updated version here and revise the "Last updated" date above.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="rounded-2xl border border-[var(--color-border)] bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">7. Contact</h3>
            <p className="mt-3 text-[var(--color-muted-foreground)]">
              Questions about cookies? Email <a className="underline" href="mailto:joe@yorkshirewheelspecialist.co.uk">joe@yorkshirewheelspecialist.co.uk</a> or see our <Link className="underline" href="/privacy">Privacy Policy</Link>.
            </p>
          </section>
        </article>
      </section>

      {/* Footer note */}
      <p className="mt-10 text-xs text-[var(--color-muted-foreground)]">
        Note: Non‑essential cookies are used only with your consent. Essential cookies are required for the website to function.
      </p>
    </main>
  );
}
