import { ArchList, Figure, PageHero, Section, Stats, statIcons } from "./shared";

export default function BitFlipPage() {
  return (
    <>
      <PageHero
        kicker="Game Jam // Godot + GDScript"
        title="BitFlip: Story Based 2D Platformer"
        tagline="A narrative-rich 2D platformer built in 72 hours with a team of three. You wake up as a broken robot chasing a lone cat through ruins — and the world starts whispering forgotten truths."
        links={[
          { label: "Play on itch.io", href: "https://zkio.itch.io/bitflip" },
          { label: "GitHub", href: "https://github.com/Team-Hacksmith/bitflip" },
        ]}
      />

      <Stats
        items={[
          { value: "72 hrs", label: "build time", icon: statIcons.timer },
          { value: "1st", label: "Advitiya Game Jam 2025, IIT Ropar", icon: statIcons.trophy },
          { value: "3", label: "team members", icon: statIcons.users },
          { value: "v3.5", label: "Godot Engine", icon: statIcons.gamepad },
        ]}
      />

      <Section index="01" title="The problem">
        <p>
          Game jams reward finished, memorable games — not engines or ideas.
          With 72 hours and three people, the problem was scope: how do you
          ship a complete platformer with a story worth remembering, without
          running out of time on content? We bet on a tight loop (chase the
          cat), minimal UI, and environmental storytelling instead of cutscenes
          or dialogue trees we could never finish.
        </p>
      </Section>

      <Section index="02" title="My role">
        <p>
          I owned scripting, logic systems, and AI design. Manish handled game
          design, levels, and difficulty balancing; Shahnawaz owned pixel art
          and asset integration. That split — design, art, code — meant I never
          blocked on assets and they never blocked on systems.
        </p>
      </Section>

      <Section index="03" title="Architecture">
        <ArchList
          items={[
            "Modular scene architecture: reusable object and tile scenes so levels could be assembled fast instead of hand-built.",
            "Custom physics layers: selective interaction between game elements and logic zones (triggers that only fire for the right bodies).",
            "FSM-driven entity behavior: lightweight finite state machines for the player and triggers — including the cat companion AI that guides the player and carries the story.",
            "Signal-based triggers: Godot&rsquo;s signal system for clean event-driven gameplay logic, no polling.",
            "Game feel systems: coyote time, variable jump height, and jump buffering — the three tunables that make a platformer feel fair.",
          ]}
        />
      </Section>

      <Section index="04" title="My approach">
        <p>
          Start with movement. A platformer lives or dies on how the jump
          feels, so coyote time, variable jump height, and buffering went in
          before content. Then the cat: an FSM companion whose movement pulls
          the player forward is both a guide system and the emotional core —
          one system doing two jobs is how you survive a 72-hour budget.
          Royalty-free sprite packs covered art so all custom effort went into
          systems and level pacing.
        </p>
        <Figure
          src="/images/projects/bitflip-story.png"
          alt="BitFlip story moment: the roomba meets the cat"
          caption="Story first: the opening encounter that sets the chase."
        />
        <Figure
          src="/images/projects/bitflip-spring.png"
          alt="BitFlip gameplay: the roomba learns to jump"
          caption="Systems as storytelling: abilities unlock through play."
        />
      </Section>

      <Section index="05" title="Learnings">
        <p>
          Constraints are a design tool. The 72-hour clock forced the
          story-into-mechanics approach (a companion AI instead of cutscenes),
          which became the game&rsquo;s most praised feature and the reason it won.
          I also learned that game feel is measurable tuning work, not magic:
          three jump parameters, iterated against real playtest deaths. What
          is still missing — save/load, web and Android builds, gravity
          inversion and memory-echo mechanics — is documented in the repo
          roadmap rather than pretended done.
        </p>
        <Figure
          src="/images/projects/bitflip-gameover.png"
          alt="BitFlip game over screen: You Broke Beyond Repair"
          caption="Failure with personality: even the game-over screen carries the theme."
        />
      </Section>
    </>
  );
}
