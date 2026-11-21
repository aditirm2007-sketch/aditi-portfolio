import Reveal from "@/components/Reveal";
import { profile } from "@/lib/content";

export const metadata = {
  title: "Contact — Aditi RM",
};

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: "aditi-rm-465032378", href: profile.linkedin },
  { label: "GitHub", value: "aditirm2007-sketch", href: profile.github },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-32">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-brand">Contact</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-6xl">
          Have a project in mind?
          <br /> Let&apos;s build it.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-foreground/80">
          Whether it&apos;s a UI/UX engagement, a full product build, or something in
          between — reach out directly.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 border-t border-rule pt-12 sm:grid-cols-2">
        {links.map((link, i) => (
          <Reveal key={link.label} delay={i * 0.05}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-rule p-6 transition-colors hover:border-brand"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{link.label}</p>
                <p className="mt-1 font-display text-lg font-bold">{link.value}</p>
              </div>
              <span className="text-xl text-brand opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
