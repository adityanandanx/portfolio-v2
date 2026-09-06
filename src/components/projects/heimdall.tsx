import { ArchList, Figure, PageHero, Section, Stats } from "./shared";

const GH = "https://github.com/adityanandanx/heimdall";

export default function HeimdallPage() {
  return (
    <>
      <PageHero
        kicker="Local AI // Python + Tauri 2 // 84 tracked issues"
        title="Heimdall: Local AI Screen Memory"
        tagline="Screen-only memory for Hyprland, shaped around exactly what I run. A capture daemon watches window changes, reads text, and stores everything locally — searchable, recapped nightly, nothing leaves the machine."
        links={[
          { label: "GitHub", href: GH },
          { label: "Issue archive", href: `${GH}/issues` },
        ]}
      />

      <Stats
        items={[
          { value: "84", label: "tracked issues" },
          { value: "~50ms", label: "a11y read vs 3.8s OCR" },
          { value: "18.1 tok/s", label: "Gemma 4 on Arc Vulkan" },
          { value: "0", label: "bytes leave the machine" },
        ]}
      />

      <Section index="01" title="The problem">
        <p>
          I could not remember what I did on my own computer. Cloud recall
          tools send pixels off-machine — unacceptable for screenshots of
          everything I do. And local OCR-only capture produces fuzzy,
          structureless text a recap cannot trust. The v2 problem statement (
          <Issue n={20} />) sharpened it further: tesseract-only text was
          garbled, and media — YouTube, VLC, music, often the biggest part of
          a day — produced no pixel-derived text at all, so recaps
          under-sampled my actual activity and could not answer what I watched
          or read.
        </p>
      </Section>

      <Section index="02" title="Architecture, three versions in">
        <p>
          v1 (<Issue n={1} />, locked in <Issue n={11} />) proved the loop:
          event-driven capture (socket filters, debounce, keepalive for silent
          music stretches), frames and text in an FTS5 schema, plain-function
          pipes instead of LangGraph, a local Gemma 4 E2B QAT model, and
          opt-in self-hosted observability.
        </p>
        <ArchList
          items={[
            "a11y-first text routing (v2): the AT-SPI tree wins when content-bearing — 5 or more real-text nodes beyond shell chrome — and RapidOCR reads pixels only for blind windows, with a perceptual-hash change gate so its 3.8s cost lands only on new content. Tesseract retired.",
            "Watch sessions as first-class memories: an MPRIS state machine over player, title, and source with microsecond positions; watched-range-only transcription, subtitles first (yt-dlp, embedded tracks), lazy faster-whisper ASR as fallback.",
            "CDP replaced by a native-messaging browser extension: no debug port, no Chrome approval popups on every connection.",
            "Tauri 2 desktop client as a pure HTTP client: day timeline filmstrip, rich search with facets and a query language, sessions, status, and a settings surface.",
            "Settings as spine: config.yaml is the single source of truth, write-through over PUT /settings, hot reload with no restart, unknown keys preserved.",
            "NPU OCR track: OpenVINO research, a standalone NPU-vs-CPU bench, and an open decision on making the NPU the default engine.",
            "v3 media map (open): rebuild the session tracker on measured per-player MPRIS fingerprints instead of the documented state machine.",
          ]}
        />
        <Figure
          src="/images/projects/heimdall-day.png"
          alt="Heimdall day timeline: a captured YouTube frame with metadata, OCR text, and the day strip"
          caption="Day timeline: every captured frame with its text, browsable per day."
        />
      </Section>

      <Section index="03" title="My approach: tickets, prototypes, locked specs">
        <p>
          Every workstream starts as a map issue that charters child tickets by
          type: grilling for scope decisions with me in the loop, research for
          background facts, throwaway prototypes for measured spikes, then
          implementation tasks claimed one at a time. Prototypes benchmark on a
          frozen 30-frame corpus under a written fairness protocol — identical
          ambient state, one run at a time after a parallel run crashed the
          machine — and I eyeball samples before anything locks. Module
          docstrings cite the deciding tickets, so the why is always one click
          away. The whole flow is visible in the public issue archive.
        </p>
        <Figure
          src="/images/projects/heimdall-search.png"
          alt="Heimdall search: full-text search across captured text with filters and scores"
          caption="Search: full-text across a11y text, OCR, and watch transcripts, with filters and scores."
        />
      </Section>

      <Section index="04" title="Hardest bugs">
        <ArchList
          items={[
            "The Chromium burst bug: background-tab Chromium throttles MPRIS to one burst per ~30s, then emits a stale position and a caught-up one that differ on title — read as a track switch, closing and reopening the session every cycle. A 26-minute video became 30+ phantom sessions of ~1s wall clock wrapping ~29s of video. Fixed by closing on mismatch only when the position is not a real-time catch-up, suspending instead of closing on zero-positions, and accruing wall time from video position.",
            "Music-player transition theatre: per-second lines arrive in bursts with fake Playing-to-Stopped transitions and mid-transition deregistration, closing sessions at ~0s. Fix direction is a no-compression tracker verified by a replay harness.",
            "Manual-capture re-fire storm: a persisted request flag made the poll loop re-capture forever — 58 frames in 29s. Fix keeps the consumed request id until a new one arrives: 1 frame instead of 58, regression-tested.",
            "The a11y collection gap: 763 frames a week, ~2 carrying accessibility text. The env flag alone yields 3 blind shell nodes; full 242-node trees need renderer flags in desktop overrides too.",
          ]}
        />
      </Section>

      <Section index="05" title="Measurements">
        <p>
          Everything below was measured on my Meteor Lake laptop — Intel Arc on
          Vulkan, Intel NPU via OpenVINO, Gemma 4 E2B QAT on llama-server. Your
          numbers will differ; that is the point of measuring on the target
          machine.
        </p>
        <ArchList
          items={[
            "Capture cadence: 1.5s debounce on window change, 10s minimum interval, 5-minute keepalive, 15s heartbeat.",
            "Engine costs on the frozen corpus: a11y read ~50ms and ~30MB; RapidOCR 3.8s and ~573MB; tuned tesseract 0.58 quality; OmniParser 0.54 at 95s/frame and 18.6GB; vision-LLM 0.38 at up to 98s/frame. Only the first two run at capture time.",
            "Gemma 4 on Arc Vulkan: 18.1 tokens/s, ~2.3GB RSS.",
            "Content-bearing bar: 5+ real-text nodes. Env-only Chromium exposes 3 shell nodes; env plus renderer flag exposes a 242-node tree.",
            "Seek rule: a position jump counts as a seek past elapsed x 2 + 30s; skipped video never counts as watched.",
            "Pipes run nightly — recap at 23:00, breakdown at 23:05 — over 8 fixed categories with deterministic multi-day merge, no extra LLM pass.",
          ]}
        />
        <Figure
          src="/images/projects/heimdall-settings.png"
          alt="Heimdall settings surface: server URL, OCR engine toggle, exclusions, window rules"
          caption="Settings as spine: engine, exclusions, rules, and pipes — live, no restart."
        />
      </Section>

      <Section index="06" title="Learnings">
        <ArchList
          items={[
            "Measure, then lock: every routing call came from same-corpus benchmark numbers plus eyeballing, under a protocol amended only uniformly — never per-candidate.",
            "Fail soft at every seam: blind windows store NULL text, sessions degrade to title-only, a missing tool means no frames, never a crash.",
            "Position streams lie by omission: session trackers must be built on fingerprinted player behavior, not the documented state machine.",
            "Platform UX constraints can kill an architecture: one Chrome approval prompt per connection ended CDP polling and forced the extension.",
            "Serialized prototyping on shared hardware is a correctness requirement, not etiquette.",
          ]}
        />
      </Section>
    </>
  );
}

function Issue({ n }: { n: number }) {
  return (
    <a
      href={`${GH}/issues/${n}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline underline-offset-4 font-mono text-[0.9em]"
    >
      #{n}
    </a>
  );
}
