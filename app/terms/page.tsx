import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms of use for the Erga Properties website, governed by the laws of the Republic of South Africa.",
};

export default function TermsPage() {
  return (
    <>
      <PageBanner title="Terms & Conditions" />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm text-navy/60 tracking-wide uppercase text-center mb-12">
            Last updated: 20 April 2026
          </p>

          <div className="space-y-8 text-navy/90 leading-relaxed">
            <Block title="1. Acceptance">
              By accessing www.erga.co.za you agree to these Terms. If you do
              not accept them, please do not use the site.
            </Block>

            <Block title="2. Website Use">
              Content on this site is provided for general information about
              Erga Concepts (Pty) Ltd, trading as Erga Properties, and the
              services we offer. You may browse the site for personal,
              non-commercial purposes.
            </Block>

            <Block title="3. No Property or Financial Advice">
              Information on this site does not constitute property,
              investment, legal, tax, or financial advice. You should obtain
              independent professional advice before acting on any matter
              described here.
            </Block>

            <Block title="4. Enquiries Are Not Binding">
              Submissions through our contact form, listings, or any other
              channel are enquiries only and do not constitute an offer,
              contract, or binding agreement between you and Erga Properties.
              Any engagement with Erga Properties as a tenant, landlord, or
              managing-agent client is governed by a separate written agreement.
            </Block>

            <Block title="5. Accuracy of Content">
              While we take reasonable care to ensure information on the site
              is accurate, we make no warranty, express or implied, as to its
              completeness or continued accuracy. Listings, fees, and service
              descriptions are subject to change without notice.
            </Block>

            <Block title="6. Intellectual Property">
              All content on this site &mdash; including the Erga Properties
              name, logo, text, images, and design &mdash; is owned by or
              licensed to Erga Concepts (Pty) Ltd and is protected by South
              African and international copyright law. You may not reproduce,
              distribute, or modify any part of the site without prior written
              consent.
            </Block>

            <Block title="7. Third-Party Links">
              The site may contain links to third-party websites. We do not
              control and are not responsible for the content or practices of
              those sites.
            </Block>

            <Block title="8. Limitation of Liability">
              To the fullest extent permitted by law, Erga Concepts (Pty) Ltd
              is not liable for any direct, indirect, incidental, or
              consequential loss arising from your use of this site or
              reliance on its content.
            </Block>

            <Block title="9. Governing Law and Jurisdiction">
              These Terms are governed by and construed in accordance with the
              laws of the Republic of South Africa. You agree to the exclusive
              jurisdiction of the South African courts for any dispute arising
              under these Terms.
            </Block>

            <Block title="10. Contact">
              Erga Concepts (Pty) Ltd<br />
              37 Kamferbos Street, Brackendowns, Alberton, 1448<br />
              <a href="mailto:info@erga.co.za" className="text-gold hover:underline">
                info@erga.co.za
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
