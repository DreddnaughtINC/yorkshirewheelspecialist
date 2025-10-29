import Link from 'next/link';

export default function PrivacyPolicy() {
  const updated = "29 October 2025";
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 text-gray-900">
      {/* Header */}
      <header className="mb-10">
        <p className="text-sm uppercase tracking-wide text-slate-500">Legal</p>
        <h1 className="text-4xl font-bold mt-2">Privacy Policy</h1>
        <p className="mt-3 text-gray-600">How Yorkshire Wheel Specialist Limited collects, uses, and safeguards your information.</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-1 text-sm text-gray-600">
          <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
          Last updated: {updated}
        </div>
      </header>

      {/* Top callout */}
      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-600">This Privacy Policy explains how <strong>Yorkshire Wheel Specialist Limited</strong> (company number <strong>16654097</strong>), registered in <strong>England & Wales</strong> (registered office: <strong>7
            Sheffield, England, S6 5BX</strong>) ("we", "us", "our") processes personal data when you visit our website, request a quote, or use our services. We act as <strong>data controller</strong> under UK data protection law.</p>
        <p className="mt-3 text-sm text-gray-600">If you have questions, contact us at <a href="mailto:joe@yorkshirewheelspecialist.co.uk" className="font-medium underline">joe@yorkshirewheelspecialist.co.uk</a> or by post to the registered office above. If you have a Data Protection Officer, add details here.</p>
      </section>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* TOC */}
        <nav className="lg:col-span-4">
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Contents</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              {[
                ["scope","1. Scope"],
                ["data-we-collect","2. Data we collect"],
                ["purposes","3. How we use your data (purposes & lawful bases)"],
                ["cookies","4. Cookies & analytics"],
                ["sharing","5. Sharing & processors"],
                ["transfers","6. International transfers"],
                ["retention","7. Retention"],
                ["security","8. Security"],
                ["marketing","9. Marketing"],
                ["your-rights","10. Your rights"],
                ["complaints","11. Complaints"],
                ["children","12. Children"],
                ["changes","13. Changes"],
                ["contact","14. Contact"]
                ].map(([href, label]) => (
                <li key={href}>
                  <a href={`#${href}`} className="hover:underline text-gray-700">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Body */}
        <article className="lg:col-span-8 space-y-8">
          <section id="scope" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">1. Scope</h2>
            <p className="mt-3 text-gray-700">This policy applies to our website and services including wheel refurbishment, colour changes, crack repairs, straightening, and related bookings/quotes. It covers personal data of website visitors, prospects, and customers.</p>
          </section>

          <section id="data-we-collect" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">2. Data we collect</h2>
            <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
              <li><span className="font-medium">Identity</span>: name, company, vehicle make/model/plate (where provided).</li>
              <li><span className="font-medium">Contact</span>: email, phone, billing/shipping/collection address.</li>
              <li><span className="font-medium">Service details</span>: photos you upload, finish choices, notes about damage/defects.</li>
              <li><span className="font-medium">Transaction</span>: services purchased, prices, payments (we receive card payment confirmations from our payment provider but do <em>not</em> store full card numbers).</li>
              <li><span className="font-medium">Technical</span>: IP address, device/browser, pages viewed, and similar—collected via cookies or similar technologies (see Cookies).</li>
              <li><span className="font-medium">Communications</span>: enquiries, quotes, reviews, and messages you send us.</li>
            </ul>
          </section>

          <section id="purposes" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">3. How we use your data (purposes & lawful bases)</h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3">Purpose</th>
                    <th className="p-3">Lawful basis (UK GDPR)</th>
                    <th className="p-3">Typical data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Provide quotes, bookings, collect/deliver wheels, and perform services</td>
                    <td className="p-3">Contract; Legitimate interests (to operate our business)</td>
                    <td className="p-3">Identity, Contact, Service details</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Customer support and enquiries</td>
                    <td className="p-3">Legitimate interests</td>
                    <td className="p-3">Identity, Contact, Communications</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Taking payments and invoicing</td>
                    <td className="p-3">Contract; Legal obligation (tax/accounting)</td>
                    <td className="p-3">Transaction</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Analytics to improve our site/services</td>
                    <td className="p-3">Consent (non‑essential cookies)</td>
                    <td className="p-3">Technical</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Marketing communications</td>
                    <td className="p-3">Consent (email/SMS); Legitimate interests for existing customers (soft opt‑in)</td>
                    <td className="p-3">Identity, Contact</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Fraud prevention and site security</td>
                    <td className="p-3">Legitimate interests; Legal obligation</td>
                    <td className="p-3">Technical</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="cookies" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">4. Cookies & analytics</h2>
            <p className="mt-3 text-gray-700">We use essential cookies to make the site work. We only set analytics/advertising cookies with your consent via our cookie banner. You can change your choices at any time using the <Link href="/cookie-policy" className="underline">Cookie settings</Link> page.</p>
            <p className="mt-2 text-gray-700">See our <Link href="/cookie-policy" className="underline">Cookie Policy</Link> for the list of cookies, purposes, and durations.</p>
          </section>

          <section id="sharing" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">5. Sharing & processors</h2>
            <p className="mt-3 text-gray-700">We share data with trusted providers who help us run our business, for example: website hosting, payments, email and communications, analytics, and logistics. These providers act under contract and only process data on our instructions. We also share data where required by law, to enforce our terms, or to protect rights, property, or safety.</p>
            <p className="mt-2 text-gray-700">If we refer specialist services (e.g., diamond cutting) we may share job details with the partner with your knowledge.</p>
          </section>

          <section id="transfers" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">6. International transfers</h2>
            <p className="mt-3 text-gray-700">Where personal data is transferred outside the UK, we use appropriate safeguards such as UK Addendum/IDTA standard contractual clauses, adequacy regulations, or other lawful mechanisms.</p>
          </section>

          <section id="retention" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">7. Retention</h2>
            <p className="mt-3 text-gray-700">We keep data only as long as necessary for the purposes above:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
              <li>Quotes and enquiries: typically up to 12 months.</li>
              <li>Customer/order records and invoices: 6 years for tax/accounting.</li>
              <li>Marketing preferences: until you opt out or withdraw consent.</li>
              <li>Analytics data: per cookie policy durations.</li>
            </ul>
          </section>

          <section id="security" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">8. Security</h2>
            <p className="mt-3 text-gray-700">We use technical and organisational measures appropriate to the risk, including encryption in transit, access controls, and staff awareness. No system is 100% secure; we encourage you to use unique, strong passwords for any accounts.</p>
          </section>

          <section id="marketing" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">9. Marketing</h2>
            <p className="mt-3 text-gray-700">We’ll only send marketing by email/SMS with your consent or, for existing customers, under the “soft opt‑in”. You can opt out at any time using the unsubscribe link or by contacting us.</p>
          </section>

          <section id="your-rights" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">10. Your rights</h2>
            <p className="mt-3 text-gray-700">You have rights under UK GDPR, including to request access, rectification, erasure, restriction, data portability, and to object to processing (including where we rely on legitimate interests) and to withdraw consent at any time. Some rights are subject to conditions and exemptions.</p>
          </section>

          <section id="complaints" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">11. Complaints</h2>
            <p className="mt-3 text-gray-700">If you are unhappy with how we handle your data, please contact us first. You also have the right to complain to the UK Information Commissioner’s Office (ICO) at <a className="underline" href="https://ico.org.uk/concerns">ico.org.uk/concerns</a>.</p>
          </section>

          <section id="children" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">12. Children</h2>
            <p className="mt-3 text-gray-700">Our services are not directed to children and we do not knowingly collect personal data from children.</p>
          </section>

          <section id="changes" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">13. Changes</h2>
            <p className="mt-3 text-gray-700">We may update this policy from time to time. We will post the new version here and update the “Last updated” date.</p>
          </section>

          <section id="contact" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">14. Contact</h2>
            <div className="mt-3 text-gray-700 space-y-1">
              <p><span className="font-medium">Data controller:</span> Yorkshire Wheel Specialist Limited</p>
              <p><span className="font-medium">Company number:</span> 16654097</p>
              <p><span className="font-medium">Registered office:</span> Sheffield, England, S6 5BX</p>
              <p><span className="font-medium">Email:</span> <a href="mailto:joe@yorkshirewheelspecialist.co.uk" className="underline">joe@yorkshirewheelspecialist.co.uk</a></p>
              <p><span className="font-medium">Phone:</span> <a href="tel:07455298619" className="underline">07455298619</a></p>
            </div>
          </section>
        </article>
      </div>

      {/* Footer hint */}
      <div className="mt-12 text-xs text-gray-500">
        <p>
          Note: This page is provided for general information and does not constitute legal advice. Please tailor the placeholders (email/phone, cookie list, processors) to your exact setup and consult a professional if needed.
        </p>
      </div>
    </main>
  );
}
