import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Erga uses cookies and similar identifiers, including analytics from Google Analytics 4 and Microsoft Clarity.",
};

export default function CookiesPage() {
  return (
    <>
      <PageBanner title="Cookie Policy" breadcrumbs={[{ label: "Cookie Policy" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm text-navy/60 tracking-wide uppercase text-center mb-12">
            Last updated: 10 November 2026
          </p>

          <div className="space-y-8 text-navy/90 leading-relaxed">
            <Block title="What Are Cookies">
              Cookies are small text files placed on your device when you
              visit a website. They are commonly used to make websites work,
              remember preferences, and provide analytics.
            </Block>

            <Block title="How We Use Cookies">
              www.erga.co.za is a content website with no login, no
              personalised dashboards, and no advertising. We use a small
              number of <strong>functional cookies</strong> necessary for
              basic site operation &mdash; for example, to maintain the state
              of the navigation menu or to support secure page delivery via
              our hosting platform. We also use analytics cookies and
              identifiers from Google Analytics 4 and Microsoft Clarity to
              understand how the site is used (see Third-Party Services
              below).
            </Block>

            <Block title="What We Do Not Do">
              <ul className="list-disc pl-6 space-y-1">
                <li>We do not use third-party advertising cookies</li>
                <li>We do not use cookies to profile visitors</li>
                <li>We do not sell cookie-derived information to anyone</li>
              </ul>
            </Block>

            <Block title="Managing Cookies">
              You can control or delete cookies through your browser settings
              at any time. Blocking analytics cookies will not impair your
              use of the site.
            </Block>

            <Block title="Third-Party Services">
              We use the following third-party services on this website:
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Google Analytics 4 — analytics</li>
                <li>Microsoft Clarity — session recordings and heatmaps</li>
                <li>Brevo — sending enquiry and booking emails</li>
                <li>Google Maps — map display on the contact page</li>
                <li>WhatsApp (wa.me) — chat links</li>
              </ul>
              Questions about privacy can be sent to{" "}
              <a href="mailto:info@erga.co.za" className="text-gold-deep hover:underline">
                info@erga.co.za
              </a>.
            </Block>

            <Block title="Changes to This Policy">
              We may update this policy from time to time. The &ldquo;Last
              updated&rdquo; date above reflects the most recent revision.
            </Block>

            <Block title="Contact">
              Questions about this policy can be sent to{" "}
              <a href="mailto:info@erga.co.za" className="text-gold-deep hover:underline">
                info@erga.co.za
              </a>.
            </Block>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl text-navy mb-2">{title}</h2>
      <span className="block w-10 h-[2px] bg-gold mb-4" />
      <div>{children}</div>
    </div>
  );
}
