"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const PALETTES = {
  cream: {
    "--cap-side-hi": "#f5f3ec",
    "--cap-side-lo": "#bdb9aa",
    "--cap-top-hi": "#fdfcf8",
    "--cap-top-lo": "#ddd9cc",
    "--cap-text": "#55503f",
  },
  blue: {
    "--cap-side-hi": "#a6cede",
    "--cap-side-lo": "#52809e",
    "--cap-top-hi": "#c2e0ef",
    "--cap-top-lo": "#7fb0c9",
    "--cap-text": "#123549",
  },
  green: {
    "--cap-side-hi": "#d3e58a",
    "--cap-side-lo": "#8fa03f",
    "--cap-top-hi": "#e6f1ad",
    "--cap-top-lo": "#bcd15f",
    "--cap-text": "#37430e",
  },
} as const;

type Palette = keyof typeof PALETTES;

type KeySeed = {
  label: string;
  side: "left" | "right";
  offset: string;
  tilt: number;
  palette: Palette;
  depth: number;
};

const KEY_SIZE = 56;

// Easter egg phrases — exactly 15 characters each (15 key slots).
// Read top-to-bottom, alternating sides.
const PHRASES = [
  "ADITYA WAS HERE",
  "HELLO WORLD LOL",
  "TYPE TO BELIEVE",
  "CSS IS AWESOME!",
  "GOT PUSHED -F!!",
  "SHIP IT OR ELSE",
  "PRESS ANY KEY!!",
  "KEYBOARD WARR10",
  "CTRL+Z MY LIFE!",
  "DEV LIFE CHOOSE",
  "BUILD > PERFECT",
  "IT WORKS ON MY💻",
  "SUDO MAKE BRIX?",
  "HELLO FR0M IND!",
  "N0 BUGS ONLY!!!",
  "CODE,COFFEE,Zzz",
];

const KEY_STYLE_SEEDS = [
  { side: "left", offset: "3%", tilt: -9, palette: "cream", depth: 0.06 },
  { side: "right", offset: "4%", tilt: 7, palette: "blue", depth: -0.05 },
  { side: "left", offset: "7%", tilt: 6, palette: "cream", depth: 0.04 },
  { side: "right", offset: "2.5%", tilt: -7, palette: "green", depth: 0.08 },
  { side: "left", offset: "2%", tilt: 8, palette: "cream", depth: -0.06 },
  { side: "right", offset: "6%", tilt: -6, palette: "cream", depth: 0.05 },
  { side: "left", offset: "5%", tilt: 7, palette: "cream", depth: -0.04 },
  { side: "right", offset: "3%", tilt: -8, palette: "blue", depth: 0.07 },
  { side: "left", offset: "8%", tilt: 6, palette: "cream", depth: -0.07 },
  { side: "right", offset: "5%", tilt: -5, palette: "cream", depth: 0.06 },
  { side: "left", offset: "3.5%", tilt: 8, palette: "cream", depth: -0.05 },
  { side: "right", offset: "7%", tilt: -7, palette: "cream", depth: 0.05 },
  { side: "left", offset: "11%", tilt: -6, palette: "green", depth: 0.09 },
  { side: "right", offset: "10%", tilt: 7, palette: "blue", depth: -0.08 },
  { side: "left", offset: "12%", tilt: -5, palette: "cream", depth: 0.08 },
] as const;

const SEEDS: KeySeed[] = KEY_STYLE_SEEDS.map((seed, i) => ({
  ...seed,
  side: seed.side as "left" | "right",
  palette: seed.palette as Palette,
  label: "•",
}));

const pickPhrase = () => PHRASES[Math.floor(Math.random() * PHRASES.length)];

const KEYS = SEEDS.map((seed, i) => ({
  ...seed,
  top: `${((i + 0.5) / SEEDS.length) * 100}%`,
}));

const makeParticles = () =>
  [...Array(8)].map((_, j) => ({
    id: j,
    angle: j * 45 + Math.random() * 36 - 18,
    dist: 38 + Math.random() * 42,
    delay: Math.round(Math.random() * 70),
    len: 14 + Math.random() * 16,
  }));

type Particle = ReturnType<typeof makeParticles>[number];

const FloatingKeys = () => {
  const [phrase, setPhrase] = useState<string | null>(null);
  const [pressed, setPressed] = useState<number | null>(null);
  const [burst, setBurst] = useState<{ i: number; n: number; particles: Particle[] } | null>(null);
  const timer = useRef<number | null>(null);
  const burstTimer = useRef<number | null>(null);
  const burstCount = useRef(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    setPhrase(pickPhrase());
  }, [pathname]);

  useEffect(() => {
    let raf = 0;
    const MAX_SHIFT = 90;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      itemRefs.current.forEach((el) => {
        if (!el) return;
        const depth = Number(el.dataset.depth || 0);
        const shift = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, y * depth));
        el.style.setProperty("--par", `${shift.toFixed(1)}px`);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timer.current !== null) clearTimeout(timer.current);
      if (burstTimer.current !== null) clearTimeout(burstTimer.current);
    };
  }, []);

  const press = (i: number) => {
    setPressed(i);
    if (timer.current !== null) clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPressed(null), 160);

    setBurst({ i, n: ++burstCount.current, particles: makeParticles() });
    if (burstTimer.current !== null) clearTimeout(burstTimer.current);
    burstTimer.current = window.setTimeout(() => setBurst(null), 650);
  };

  return (
    <div className="fk-layer pointer-events-none select-none">
      {KEYS.map((k, i) => (
        <button
          key={k.top + k.side}
          type="button"
          tabIndex={-1}
          aria-hidden
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          data-depth={k.depth}
          className={`fk ${pressed === i ? "fk-pressed" : ""}`}
          style={{
            top: k.top,
            [k.side]: k.offset,
            width: KEY_SIZE,
            height: KEY_SIZE * 0.92,
            "--tilt": `${k.tilt}deg`,
            ...PALETTES[k.palette],
          } as unknown as React.CSSProperties}
          onClick={() => press(i)}
        >
          <span className="fk-housing" />
          <span className="fk-stem">
            <span className="fk-stem-v" />
            <span className="fk-stem-h" />
          </span>
          <span className="fk-cap">
            <span className="fk-legend">
              {phrase ? (phrase[i] === " " ? "␣" : phrase[i]) || "•" : "•"}
            </span>
          </span>
          {burst?.i === i && (
            <span className="fk-burst" key={burst.n} aria-hidden>
              {burst.particles.map((p) => (
                <span
                  key={p.id}
                  className="fk-particle"
                  style={
                    {
                      "--angle": `${p.angle}deg`,
                      "--dist": `${p.dist}px`,
                      "--delay": `${p.delay}ms`,
                      "--len": `${p.len}px`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default FloatingKeys;
