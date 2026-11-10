import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/PageBanner";
import { SITE, whatsappLink, mailLink } from "@/lib/site";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Erga | Electrician Alberton and Property Management",
  },
  description:
    "Book an electrician in Alberton or enquire about property management. WhatsApp or email Erga and we respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Get In Touch"
        subtitle="Electrical callout, quote or property enquiry: choose the quickest way to reach us."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section tone="white">
        <Container>
          {/* Intro */}
          <p className="text-navy/80 max-w-2xl mx-auto text-center mb-12">
            Need an electrician? Book a callout or message us on WhatsApp.
            Property owner or tenant? Use the form below.
          </p>

          {/* Three quickest routes */}
          <div className="grid gap-5 sm:grid-cols-3 mb-14">
            <Card className="p-6 flex flex-col items-start gap-4">
              <div>
                <Eyebrow muted>Fastest</Eyebrow>
                <h3 className="text-navy text-[16px] font-bold mt-1.5">
                  Book an electrical callout
                </h3>
                <p className="text-navy/60 text-[14px] leading-relaxed mt-2">
                  Licensed inspection, transparent quoting. Book online in
                  minutes.
                </p>
              </div>
              <Button href="/electrical#booking" variant="primary">
                Book a Callout
              </Button>
            </Card>

            <Card className="p-6 flex flex-col items-start gap-4">
              <div>
                <Eyebrow muted>Chat</Eyebrow>
                <h3 className="text-navy text-[16px] font-bold mt-1.5">
                  WhatsApp us
                </h3>
                <p className="text-navy/60 text-[14px] leading-relaxed mt-2">
                  Send us a message and we&apos;ll reply when we&apos;re back
                  online.
                </p>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm tracking-widest uppercase text-white transition-colors rounded-sm"
                style={{ background: "#25D366" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </Card>

            <Card className="p-6 flex flex-col items-start gap-4">
              <div>
                <Eyebrow muted>Write</Eyebrow>
                <h3 className="text-navy text-[16px] font-bold mt-1.5">
                  Email us
                </h3>
                <p className="text-navy/60 text-[14px] leading-relaxed mt-2">
                  For quotes, property enquiries, and anything else.
                </p>
              </div>
              <a
                href={mailLink}
                className="inline-flex items-center justify-center min-h-[44px] px-5 bg-navy text-white text-sm font-semibold tracking-wide hover:text-gold-light transition-colors"
              >
                {SITE.email}
              </a>
            </Card>
          </div>

          {/* Enquiry form + details aside */}
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <ContactForm />

            <aside className="space-y-8">
              <div>
                <h3 className="text-sm tracking-widest uppercase text-gold mb-2">
                  Email
                </h3>
                <a
                  href="mailto:info@erga.co.za"
                  className="text-navy hover:text-gold transition-colors text-lg"
                >
                  info@erga.co.za
                </a>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-gold mb-2">
                  Office Hours
                </h3>
                <p className="text-navy/80 leading-relaxed">
                  Monday–Friday<br />08:00–17:00
                </p>
                <p className="text-navy/60 text-sm mt-1 italic">
                  We respond to all enquiries within 1 business day.
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-gold mb-2">
                  Address
                </h3>
                <address className="not-italic text-navy/90 leading-relaxed">
                  37 Kamferbos Street<br />
                  Brackendowns<br />
                  Alberton, 1448<br />
                  Gauteng, South Africa
                </address>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-gold mb-2">
                  Entity
                </h3>
                <p className="text-navy/80 text-sm leading-relaxed">
                  Erga Concepts (Pty) Ltd<br />
                  Trading as Erga Properties
                </p>
              </div>
            </aside>
          </div>

          {/* Google Maps */}
          <div className="mt-16">
            <div className="border border-gold/40 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=37+Kamferbos+Street%2C+Brackendowns%2C+Alberton%2C+1448%2C+South+Africa&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Erga Properties office location"
              />
            </div>
            <p className="text-xs text-navy/50 text-center mt-3 italic">
              37 Kamferbos Street, Brackendowns, Alberton — by appointment
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
