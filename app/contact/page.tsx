import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach the lab and opportunities to join.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <header className="grid gap-8 lg:grid-cols-12 py-16 sm:py-20 border-b border-ink">
        <div className="lg:col-span-8">
          <p className="kicker kicker-crimson">05 — Get in touch</p>
          <h1 className="display display-page mt-5">Contact</h1>
        </div>
        <p className="lg:col-span-4 self-end text-base leading-relaxed text-slate">
          We welcome inquiries from prospective trainees, collaborators, and
          colleagues.
        </p>
      </header>

      {/* big email CTA */}
      <section className="py-16 sm:py-20 border-b border-line prose-links">
        <p className="kicker">Email us</p>
        <a
          href={`mailto:${site.contact.email}`}
          className="body-link display block mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight break-words"
        >
          {site.contact.email}
        </a>
      </section>

      <div className="grid gap-px bg-line sm:grid-cols-2 border-x border-b border-line">
        <section className="bg-white p-8 sm:p-10">
          <p className="kicker">Lab address</p>
          <address className="mt-4 not-italic text-lg leading-relaxed text-body">
            {site.labName}
            <br />
            {site.department}
            <br />
            {site.institution}
            <br />
            {site.contact.address.line1}
            <br />
            {site.contact.address.line2}
          </address>
          <p className="mt-4 num text-slate">{site.contact.phone}</p>
        </section>

        <section className="bg-white p-8 sm:p-10 prose-links">
          <p className="kicker">Join the lab</p>
          <p className="mt-4 text-lg leading-relaxed text-body">
            We are always interested in motivated postdoctoral fellows, graduate
            students, and research assistants.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Please send your CV and a brief statement of research interests to{" "}
            <a className="body-link" href={`mailto:${site.contact.labEmail}`}>
              {site.contact.labEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
