import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Erga Properties uses cookies. This website uses only functional cookies — no tracking, analytics, or advertising cookies.",
};

export default function CookiesPage() {
  return (
    <>
      <PageBanner title="Cookie Policy" breadcrumbs={[{ label: "Cookie Policy" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm text-navy/60 tracking-wide uppercase text-center mb-12">
            Last updated: 20 April 2026
          </p>

          <div className="space-y-8 text-navy/90 leading-relaxed">
            <Block title="What Are Cookies">
              Cookies are small text files placed on your device when you
              visit a website. They are commonly used to make websites work,
              remember preferences, and provide analytics.
            </Block>

            <Block title="How We Use Cookies">
              www.erga.co.za is a content website with no login, no
              personalised dashboards, and no advertising. We use only a small
              number of <strong>functional cookies</strong> strictly necessary
              for basic site operation &mdash; for example, to maintain the
              state of the navigation menu or to support secure page delivery
              via our hosting platform.
            </Block>

            <Block title="What We Do Not Do">
              <ul className="list-disc pl-6 space-y-1">
                <li>We do not use tracking or analytics cookies</li>
                <li>We do not use third-party advertising cookies</li>
                <li>We do not use cookies to profile visitors</li>
                <li>We do not sell cookie-derived information to anyone</li>
              </ul>
            </Block>

            <Block title="Managing Cookies">
              You can control or delete cookies through your browser settings
              at any time. Because we do not rely on analytics or advertising
              cookies, disabling cookies will not impair your use of the site.
            </Block>

            <Block title="Third-Party Services">
              Our contact form is powered by Formspree (formspree.io).
              Formspree may set functional cookies required for the form to
              operate. See Formspree&apos;s own privacy and cookie information
              on their website for details.
            </Block>

            <Block title="Changes to This Policy">
              We may update this policy from time to time. The &ldquo;Last
              updated&rdquo; date above reflects the most recent revision.
            </Block>

            <Block title="Contact">
              Questions about this policy can be sent to{" "}
              <a href="mailto:info@erga.co.za" className="text-gold hover:underline">
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
