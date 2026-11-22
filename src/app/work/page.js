import FeatureProject from "@/components/FeatureProject";
import CardDeck from "@/components/CardDeck";
import ProjectStack from "@/components/ProjectStack";
import PosterFan from "@/components/PosterFan";
import Reveal from "@/components/Reveal";
import NumberedHeading from "@/components/NumberedHeading";
import { featuredWork, explorations, posterWork } from "@/lib/content";

export const metadata = {
  title: "Work — Aditi RM",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-accent2">Work</p>
        <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">
          Case studies &amp; explorations.
        </h1>
        <p className="mt-5 max-w-xl text-foreground/70">
          Two full products I designed and built end-to-end, plus a handful of earlier
          design explorations — all below, scroll on.
        </p>
      </Reveal>

      {/* AT-A-GLANCE PROJECT STACK */}
      <Reveal delay={0.1} className="mt-14">
        <p className="mb-4 text-center text-xs uppercase tracking-wide text-muted">
          Tap a card to bring it forward
        </p>
        <ProjectStack
          items={[
            { href: "/work/stansv", name: "STANSV", tag: "Case Study", image: featuredWork[0].image },
            { href: "/work/alufab", name: "Alufab", tag: "Case Study", image: featuredWork[1].image },
            { href: "#lavato", name: "LAVATO", tag: "Exploration", image: explorations[0].cards[0].src },
            { href: "#ocean-editorial", name: "Ocean Editorial", tag: "Exploration", image: explorations[1].cards[0].src },
          ]}
        />
      </Reveal>

      <div className="mt-20">
        <Reveal>
          <NumberedHeading index="01" title="Featured Case Studies" />
        </Reveal>
      </div>

      <div className="mt-12 flex flex-col gap-24">
        {featuredWork.map((project, i) => (
          <FeatureProject key={project.slug} project={project} reverse={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-28 border-t border-rule pt-16">
        <Reveal>
          <NumberedHeading index="02" title="Explorations" />
          <p className="mt-4 max-w-xl text-foreground/70">
            Earlier design work &amp; visual experiments — presented as their source decks,
            not single flattened screenshots.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6">
          {explorations.map((item) => (
            <div key={item.slug} id={item.slug}>
              <CardDeck {...item} />
            </div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <p className="mb-6 text-center text-xs uppercase tracking-wide text-muted">
            Poster Design
          </p>
          <PosterFan items={posterWork} />
        </Reveal>
      </div>
    </div>
  );
}
