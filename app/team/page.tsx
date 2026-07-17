import type { Metadata } from "next";
import { team, alumni } from "@/data/team";
import Avatar from "@/components/Avatar";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description: "Members and alumni of the lab.",
};

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <header className="grid gap-8 lg:grid-cols-12 py-16 sm:py-20 border-b border-ink">
        <div className="lg:col-span-8">
          <p className="kicker kicker-crimson">03 — The people</p>
          <h1 className="display display-page mt-5">Team</h1>
        </div>
        <p className="lg:col-span-4 self-end text-base leading-relaxed text-slate">
          The researchers, clinicians, and students driving our work forward.
        </p>
      </header>

      {/* members grid */}
      <section className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 border-x border-b border-line">
        {team.map((member) => (
          <Reveal
            key={member.name}
            as="article"
            className="group bg-white flex flex-col"
          >
            <Avatar member={member} />
            <div className="p-6 border-t border-line">
              <h2 className="text-lg font-bold text-ink">{member.name}</h2>
              <p className="kicker kicker-crimson mt-1">{member.role}</p>
              {member.bio && (
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {member.bio}
                </p>
              )}
              {member.email && (
                <p className="mt-3 text-sm prose-links">
                  <a className="body-link" href={`mailto:${member.email}`}>
                    {member.email}
                  </a>
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </section>

      {alumni.length > 0 && (
        <section className="py-16 sm:py-20">
          <h2 className="display display-section">Alumni</h2>
          <ul className="mt-8 border-t border-ink">
            {alumni.map((person) => (
              <li
                key={person.name}
                className="grid gap-2 sm:grid-cols-12 items-baseline border-b border-line py-5"
              >
                <span className="sm:col-span-4 font-bold text-ink">
                  {person.name}
                </span>
                <span className="sm:col-span-8 text-sm text-slate">
                  {person.role}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
