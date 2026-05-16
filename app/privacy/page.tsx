import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Erga Properties collects, uses, and protects your personal information under South Africa's Protection of Personal Information Act (POPIA).",
};

export default function PrivacyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm text-navy/60 tracking-wide uppercase text-center mb-12">
            Last updated: 20 April 2026
          </p>

          <div className="space-y-8 text-navy/90 leading-relaxed">
            <Block title="Introduction">
              Erga Concepts (Pty) Ltd, trading as Erga Properties (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;), is committed to protecting
              your personal information in accordance with the Protection of
              Personal Information Act 4 of 2013 (&ldquo;POPIA&rdquo;). This
              policy explains what information we collect through this website,
              how we use it, and the rights available to you.
            </Block>

            <Block title="Information We Collect">
              When you submit our contact form we collect the following personal
              information:
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your phone number (optional)</li>
                <li>The enquiry type you select</li>
                <li>The content of your message</li>
              </ul>
            </Block>

            <Block title="How We Use Your Information">
              We use the information you submit solely to respond to your
              enquiry and, where relevant, to provide further information about
              our property management services. We do not use your information
              for automated decision-making or profiling.
            </Block>

            <Block title="How Your Information Is Stored">
              Contact form submissions are processed through Formspree
              (formspree.io), a third-party form service that may store data on
              servers located outside South Africa. Submissions are delivered
              to our inbox at{" "}
              <a href="mailto:info@erga.co.za" className="text-gold hover:underline">
                info@erga.co.za
              </a>.
            </Block>

            <Block title="Sharing Your Information">
              We do not sell, rent, or trade your personal information to third
              parties. We do not share it with advertisers or marketing
              networks. Your information is only accessed by authorised Erga
              Properties personnel for the purpose of responding to your enquiry.
            </Block>

            <Block title="Your Rights Under POPIA">
              You have the right to:
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Lodge a complaint with the Information Regulator of South Africa</li>
              </ul>
            </Block>

            <Block title="Data Requests">
              To exercise any of the rights above, or to ask a question about
              how we handle your information, contact{" "}
              <a href="mailto:daniel@erga.co.za" className="text-gold hover:underline">
                daniel@erga.co.za
              </a>.
            </Block>

            <Block title="Retention">
              We retain enquiry information for as long as is reasonably
              necessary to respond to and follow up on your enquiry, after
              which it is archived or deleted in line with our internal
              retention practices.
            </Block>

            <Block title="Changes to This Policy">
              We may update this policy from time to time. The &ldquo;Last
              updated&rdquo; date above reflects the most recent revision.
              Material changes will be communicated on this page.
            </Block>

            <Block title="Contact">
              Erga Concepts (Pty) Ltd<br />
              37 Kamferbos Street, Brackendowns, Alberton, 1448<br />
              <a href="mailto:daniel@erga.co.za" className="text-gold hover:underline">
                daniel@erga.co.za
              </a>
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
