import { ArchList, Figure, PageHero, Section, Stats } from "./shared";

export default function NirbhayPage() {
  return (
    <>
      <PageHero
        kicker="Safety // ESP32 + Flutter + Firebase"
        title="Nirbhay: Automated Emergency Detection"
        tagline="Nirbhay (Hindi for fearless) is an accessibility-focused safety system that detects distress automatically and summons help hands-free — for people who may not be able to reach their phone."
        links={[
          { label: "GitHub", href: "https://github.com/Team-Hacksmith/nirbhay" },
          {
            label: "Pitch deck",
            href: "https://www.figma.com/deck/OQExg7NDuFGN1PTDLglY4k/Nirbhay?node-id=1-631&t=GxgE3FQwqfiggT5V-1",
          },
        ]}
      />

      <div className="mt-8 mb-2">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://embed.figma.com/slides/OQExg7NDuFGN1PTDLglY4k/Nirbhay?node-id=2175-2&embed-host=share"
            allowFullScreen
            title="Nirbhay pitch deck"
          />
        </div>
        <p className="text-sm opacity-60 mt-2 text-center">
          The pitch deck: the problem, the system, and the mission.
        </p>
      </div>

      <Stats
        items={[
          { value: "0-touch", label: "alert triggering" },
          { value: "ESP32", label: "wearable hardware" },
          { value: "YAMNet", label: "audio distress detection" },
          { value: "Flutter", label: "mobile app" },
        ]}
      />

      <Section index="01" title="The problem">
        <p>
          In moments of danger, calling for help can be impossible — fear,
          shock, or physical restraint freeze the victim. Elderly people
          experiencing falls or medical emergencies, people with disabilities,
          and victims of violence often cannot access their phones exactly when
          they need them most. Every existing solution we looked at required
          the victim to act: press a button, open an app, make a call.
        </p>
      </Section>

      <Section index="02" title="My approach">
        <p>
          Remove the victim from the critical path. The system has three
          layers: a discreet ESP32 wearable that continuously monitors vital
          signs and movement, detection that recognizes distress patterns —
          sudden impacts for falls and assaults, physiological signs of
          distress, and YAMNet-based real-time audio distress detection — and
          an automated response that alerts emergency contacts with precise
          location and health information. A Flutter mobile app with a Firebase
          backend ties it together for caregivers: real-time alerts, location
          sharing, and remote health monitoring.
        </p>
      </Section>

      <Section index="03" title="Architecture">
        <ArchList
          items={[
            "Wearable (ESP32 firmware): vital-sign and movement sensing in a discreet, comfortable form factor.",
            "Detection: distress pattern recognition, fall and assault detection from motion signatures, YAMNet audio classification for distress sounds.",
            "Response pipeline: automatic alert dispatch to emergency contacts with location data and health context — no user action required.",
            "Caregiver surface (Flutter + Firebase): real-time alerts, location sharing, and vital-sign monitoring for family and responders.",
            "Design constraint throughout: accessible to all ages and abilities, dignity-preserving, independence-enabling rather than surveillance-feeling.",
          ]}
        />
        <Figure
          src="/images/projects/nirbhay-cover.png"
          alt="Nirbhay pitch deck: Always Aware, Always There"
          caption="The pitch: always aware, always there."
        />
      </Section>

      <Section index="04" title="Learnings">
        <p>
          Safety tech is a trust problem before it is a detection problem. The
          hardest design questions were not about sensors — they were about
          false alarms (who gets woken at 3am, and how do you cancel?), privacy
          (continuous monitoring that does not feel like surveillance), and who
          the system answers to when the wearer cannot respond. Building for
          elderly, disabled, and at-risk users forced every interaction to
          justify itself: if it requires the victim to act during an emergency,
          it does not belong in the critical path. Honest scope note: this is a
          working prototype and concept validation, not a clinically validated
          medical device — real-world testing with vulnerable populations and
          healthcare integration remain future work.
        </p>
      </Section>

      <Section index="05" title="Hardware demo">
        <video
          className="w-full aspect-video rounded-xl border border-border bg-black"
          controls
          preload="none"
          poster="/images/projects/nirbhay-demo-poster.png"
        >
          <source src="/videos/nirbhay-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm opacity-60 mt-2 text-center">
          Hardware demo: the ESP32 wearable pairing with the Flutter app over
          BLE (71s).
        </p>
      </Section>
    </>
  );
}
