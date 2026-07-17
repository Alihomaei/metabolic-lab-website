import type { Metadata } from "next";
import {
  leadership,
  fellows,
  students,
  collaborators,
  alumni,
  type Member,
} from "@/data/team";
import Avatar from "@/components/Avatar";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description: "Leadership, fellows, students, collaborators, and alumni of the lab.",
};

function MemberCard({ member }: { member: Member }) {
  return (
    <Reveal as="article" className="group flex flex-col">
      <Avatar member={member} />
      <div className="pt-5">
        <h3 className="text-lg font-bold text-ink">{member.name}</h3>
        <p className="kicker kicker-crimson mt-1">{member.role}</p>
        {member.bio && (
          <p className="mt-3 text-sm leading-relaxed text-slate">{member.bio}</p>
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
  );
}

function MemberGrid({ members }: { members: Member[] }) {
  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m) => (
        <MemberCard key={m.name + m.role} member={m} />
      ))}
    </div>
  );
}

function SectionHeading({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-8">
      <p className="kicker kicker-crimson">{index} · {label}</p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <header className="grid gap-8 lg:grid-cols-12 py-16 sm:py-20 border-b border-ink">
        <div className="lg:col-span-8">
          <p className="kicker kicker-crimson">03 · The people</p>
          <h1 className="display display-page mt-5">Team</h1>
        </div>
        <p className="lg:col-span-4 self-end text-base leading-relaxed text-slate">
          The researchers, clinicians, students, and collaborators driving our
          work forward.
        </p>
      </header>

      {/* Leadership */}
      <section className="py-14 sm:py-20 border-b border-line">
        <SectionHeading index="01" label="Leadership" />
        <MemberGrid members={leadership} />
      </section>

      {/* Fellows */}
      <section className="py-14 sm:py-20 border-b border-line">
        <SectionHeading index="02" label="Fellows" />
        <MemberGrid members={fellows} />
      </section>

      {/* Students */}
      {students.length > 0 && (
        <section className="py-14 sm:py-20 border-b border-line">
          <SectionHeading index="03" label="Students" />
          <MemberGrid members={students} />
        </section>
      )}

      {/* Collaborators */}
      {collaborators.length > 0 && (
        <section className="py-14 sm:py-20 border-b border-line">
          <SectionHeading index="04" label="Collaborators" />
          <ul className="border-t border-ink">
            {collaborators.map((c) => (
              <li
                key={c.name + c.role}
                className="grid gap-2 sm:grid-cols-12 items-baseline border-b border-line py-5"
              >
                <span className="sm:col-span-4 font-bold text-ink">
                  {c.href ? (
                    <a
                      className="hover:text-crimson transition-colors"
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </span>
                <span className="sm:col-span-8 text-sm text-slate">
                  {c.role}
                  {c.bio ? <span className="block mt-1">{c.bio}</span> : null}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Alumni */}
      {alumni.length > 0 && (
        <section className="py-16 sm:py-20">
          <SectionHeading index="05" label="Alumni" />
          <ul className="border-t border-ink">
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
