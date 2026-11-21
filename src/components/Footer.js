import Link from "next/link";
import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-sm text-muted">
          © 2026 {profile.name}. Built from scratch, end-to-end.
        </p>
        <div className="flex gap-6 text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent2">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent2">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent2">
            GitHub
          </a>
          <Link href="/contact" className="transition-colors hover:text-accent2">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
