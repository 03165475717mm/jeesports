import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  DollarSign,
  Shield,
  Trophy,
  XCircle,
} from "lucide-react";

const rulesData = [
  {
    title: "Tournament Rules",
    subtitle: "Important guidelines for tournament rules",
    icon: Trophy,
    accent: "text-orange-400",
    items: [
      "Registration closes 30 minutes before tournament start time",
      "Players must join the match room within 5 minutes of invitation",
      "Late arrivals will be disqualified automatically",
      "Screenshots of results must be submitted within 10 minutes of match completion",
      "Disputes must be raised within 15 minutes of match end",
      "Tournament brackets are final once published",
    ],
  },
  {
    title: "Payment & Entry",
    subtitle: "Important guidelines for payment & entry",
    icon: DollarSign,
    accent: "text-emerald-300",
    items: [
      "Minimum entry fee is ₨50 per tournament",
      "Entry fees must be paid before tournament registration deadline",
      "Refunds are only available if tournament is cancelled by admins",
      "Prize money will be distributed within 24 hours of tournament completion",
      "Winners must provide valid payment details for prize distribution",
      "Entry fees are non-transferable between tournaments",
    ],
  },
  {
    title: "Match Rules",
    subtitle: "Important guidelines for match rules",
    icon: Shield,
    accent: "text-cyan-300",
    items: [
      "Use only the designated map and mode specified for each tournament",
      "Custom room settings will be provided by tournament organizers",
      "Players must record their gameplay for verification if requested",
      "Third-party apps and modifications are strictly prohibited",
      "Team formation must be completed before match start",
      "Substitutions are not allowed once the match begins",
    ],
  },
];

const prohibitedItems = [
  "Auto-aim applications",
  "Speed hacks or movement modifiers",
  "Wall hacks or ESP",
  "Aimbot or auto-fire tools",
  "Game memory modifiers",
  "Emulators with macro capabilities",
  "VPN usage during matches",
  "Multiple accounts participation",
];

const allowedItems = [
  "Official Free Fire game client",
  "Standard gaming accessories (headphones, controllers)",
  "Screen recording software",
  "Communication apps (Discord, etc.)",
  "Standard mobile devices and tablets",
  "Official game settings and controls",
];

const penalties = [
  { label: "Warning", desc: "Minor violations, unsportsmanlike conduct" },
  { label: "Disqualification", desc: "Major violations, cheating attempts" },
  { label: "Permanent Ban", desc: "Repeated violations, hacking" },
];

const technicalRequirements = {
  minimum: [
    "Stable internet connection (minimum 10 Mbps)",
    "Device capable of running Free Fire smoothly",
    "Updated Free Fire game client",
    "Working microphone for team communication",
  ],
  recommended: [
    "High-speed internet (50+ Mbps)",
    "High-end gaming device with good specifications",
    "Wired internet connection",
    "Quality gaming headset",
  ],
};

export default function RulesPage() {
  return (
    <div className="global-bg min-h-screen px-4 pb-24 text-white lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 py-16">
        <header className="panel-dark rounded-3xl px-6 py-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">
            JE Esports Rules
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Play fair. Win big.</h1>
          <p className="mt-3 text-muted">
            These policies protect every player in Solo, Duo, and Squad lobbies. Review before
            joining and keep the arena competitive.
          </p>
        </header>

        <section className="space-y-6">
          {rulesData.map(({ title, subtitle, icon: Icon, items, accent }) => (
            <article key={title} className="panel-dark rounded-3xl px-6 py-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Icon className={`h-6 w-6 ${accent}`} />
                  <div>
                    <h2 className="text-xl font-semibold text-white">{title}</h2>
                    <p className="text-sm text-muted">{subtitle}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-4 w-4 text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#862326] bg-[#170809] px-6 py-6">
            <div className="flex items-center gap-3 text-red-300">
              <XCircle className="h-6 w-6" />
              <div>
                <h2 className="text-xl font-semibold text-white">Prohibited Items</h2>
                <p className="text-sm text-muted">Immediate disqualification</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white">
              {prohibitedItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <XCircle className="mt-[2px] h-4 w-4 text-red-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-white/10 bg-[#07160f] px-6 py-6">
            <div className="flex items-center gap-3 text-emerald-300">
              <CheckCircle2 className="h-6 w-6" />
              <div>
                <h2 className="text-xl font-semibold text-white">Allowed Items</h2>
                <p className="text-sm text-muted">Permitted during tournaments</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white">
              {allowedItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-[2px] h-4 w-4 text-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="space-y-6">
          <article className="panel-dark rounded-3xl px-6 py-6">
            <div className="flex items-center gap-3 text-orange-300">
              <AlertTriangle className="h-6 w-6" />
              <div>
                <h2 className="text-xl font-semibold text-white">Penalties & Enforcement</h2>
                <p className="text-sm text-muted">Consequences for rule violations</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {penalties.map((penalty) => (
                <div
                  key={penalty.label}
                  className="rounded-2xl border border-white/10 px-4 py-4 text-center"
                >
                  <p className="text-sm font-semibold text-white">{penalty.label}</p>
                  <p className="mt-2 text-xs text-muted">{penalty.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              <span className="font-semibold text-white">Reporting Violations:</span> Players can report rule
              violations by contacting tournament administrators immediately. All reports will be investigated
              thoroughly with appropriate evidence.
            </p>
          </article>

          <article className="panel-dark rounded-3xl px-6 py-6">
            <div className="flex items-center gap-3 text-cyan-300">
              <Clock className="h-6 w-6" />
              <div>
                <h2 className="text-xl font-semibold text-white">Technical Requirements</h2>
                <p className="text-sm text-muted">Device and connection standards</p>
              </div>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-white">Minimum Requirements</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {technicalRequirements.minimum.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-4 w-4 text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Recommended</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {technicalRequirements.recommended.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-4 w-4 text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>

        <div className="panel-dark rounded-3xl px-6 py-8 text-center">
          <p className="text-sm text-muted">
            Questions about policies? Email <span className="text-white">rules@jeesports.gg</span> before the lobby starts.
          </p>
        </div>
      </div>
    </div>
  );
}
