export const metadata = {
  title: 'About — CondomHat',
  description: 'What CondomHat is, why it exists, and where it is going.',
}

export default function AboutPage() {
  return (
    <div className="min-h-full bg-white">
      <section className="border-b border-gray-100 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">About</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
            What this is really about.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            CondomHat started as a story. It stays a story. The gear is how the story pays for itself.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-6 py-16 space-y-16">

        {/* The story */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">The story comes first</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every scenario on this site is a story. A real character, a real threat, a real set of decisions.
            The gear shows up because it has to — because that is how the character survives. Product placement
            in the truest sense: the item earns its place in the scene, or it doesn't appear.
          </p>
          <p className="text-gray-600 leading-relaxed">
            These stories are built for short-form video — YouTube Shorts, Instagram Reels, TikTok, X.
            As the format improves, so will the production: from AI stills to full video, animation,
            claymation, frame-by-frame — whatever serves the story best. The only rule is that it has
            to be worth watching.
          </p>
        </section>

        {/* The gear */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">One best option per category</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We do not carry ten versions of the same thing. Every item is the single best option
            in its category at its price point — or it is not here. Three tiers, three price points,
            no filler.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { tier: 'Essential', desc: 'Best value. Does the job. No shortcuts on quality.' },
              { tier: 'Recommended', desc: 'Mid-range. Better materials, longer lifespan.' },
              { tier: 'Premium', desc: 'Top of the line. Military spec. Lifetime gear.' },
            ].map(({ tier, desc }) => (
              <div key={tier} className="rounded-xl border border-gray-200 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{tier}</p>
                <p className="text-sm text-gray-600 leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The brand */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">More than gear</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            CondomHat is building toward something broader. The brand stands for a specific kind of
            life: locally rooted, self-reliant, and hard to track. That means the site will eventually
            cover more than physical gear.
          </p>
          <ul className="space-y-3">
            {[
              'Privacy tools — VPNs, offline AI, communication that doesn\'t depend on the cloud',
              'Local food networks — who near you sells beef, eggs, raw milk, vegetables',
              'Surveillance awareness — where the cameras are in your area, what they can see',
              'Community emergency contacts — who to call, how to reach them when networks are down',
              'Off-grid living resources — practical guides from people who are already doing it',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Philosophy */}
        <section className="rounded-2xl bg-gray-950 p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Philosophy</p>
          <p className="text-white text-lg leading-relaxed font-medium">
            "Anti-fear. Pro-knowledge."
          </p>
          <p className="text-white/60 mt-3 leading-relaxed">
            Preparedness is not paranoia. It is pattern recognition. The people who handled every
            crisis in history well were the ones who had already thought about it. CondomHat exists
            to make that thinking accessible, credible, and — occasionally — entertaining.
          </p>
        </section>

      </div>
    </div>
  )
}
