"use client";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* ── Top bar ── */}
      <header className="border-b border-cocoa-700/10 bg-oat/85 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sage grid place-items-center">
              <DogHead className="w-6 h-6 text-oat" />
            </div>
            <div>
              <div className="font-display font-bold text-cocoa-800 text-base leading-tight">Custom Canines</div>
              <div className="text-[0.65rem] text-cocoa-500 uppercase tracking-widest leading-tight">Mobile Dog Grooming</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-cocoa-800">
            <a href="#mobile" className="hover:text-sage-700 transition">Why Mobile</a>
            <a href="#services" className="hover:text-sage-700 transition">Services</a>
            <a href="#grooms" className="hover:text-sage-700 transition">Recent Grooms</a>
            <a href="#contact" className="hover:text-sage-700 transition">Book</a>
          </nav>
          <a
            href="tel:+13529423242"
            className="btn-sage bg-sage text-cocoa-800 px-4 py-2 text-sm font-semibold tracking-wide"
          >
            (352) 942-3242
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* organic blobs */}
        <div className="absolute -top-20 -right-20 w-[420px] h-[420px] bg-sage/20 blob float-slow" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] bg-sky/15 blob float-slow" style={{ animationDelay: '2s' }} aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 md:pt-24 pb-24 md:pb-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="anim-settle eyebrow" style={{ ['--anim-delay' as any]: '0ms' }}>
              Hernando · Citrus · Pasco · Mobile Service
            </div>
            <h1 className="anim-settle mt-6 font-display font-extrabold text-cocoa-900 text-5xl md:text-7xl leading-[0.98] tracking-tight"
                style={{ ['--anim-delay' as any]: '120ms' }}>
              Professional<br />
              dog grooming, <span className="text-sage-700">at your door.</span>
            </h1>
            <p className="anim-settle mt-7 max-w-xl text-cocoa-500 text-lg leading-relaxed"
               style={{ ['--anim-delay' as any]: '260ms' }}>
              Sabrina comes to you. No transport stress. No kennel waiting.
              One-on-one attention for your dog, in the place they already
              feel comfortable.
            </p>
            <div className="anim-settle mt-8 flex flex-wrap gap-3"
                 style={{ ['--anim-delay' as any]: '400ms' }}>
              <a href="tel:+13529423242" className="btn-sage bg-sage-700 text-white px-7 py-3.5 font-semibold">
                Call (352) 942-3242
              </a>
              <a href="#contact" className="btn-cocoa bg-cocoa-800 text-oat px-7 py-3.5 font-semibold">
                Book a Groom
              </a>
            </div>

            <div className="anim-settle mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cocoa-500"
                 style={{ ['--anim-delay' as any]: '560ms' }}>
              <Badge>100% Recommend · Facebook</Badge>
              <Badge>5★ Rated · Scrubby</Badge>
              <Badge>Locally Owned</Badge>
            </div>
          </div>

          <div className="md:col-span-5 anim-settle relative" style={{ ['--anim-delay' as any]: '500ms' }}>
            <div className="photo-soft aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80"
                alt="Happy dog after grooming"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="anim-pop absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg px-5 py-4 border border-cocoa-700/10"
                 style={{ ['--anim-delay' as any]: '900ms' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sage/20 grid place-items-center">
                  <PawIcon className="w-5 h-5 text-sage-700 tail-wag" />
                </div>
                <div>
                  <div className="font-display font-bold text-cocoa-900 text-sm leading-tight">Tail-wag guaranteed</div>
                  <div className="text-[0.7rem] text-cocoa-500 leading-tight mt-0.5">Mobile to your driveway</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Mobile ── */}
      <section id="mobile" className="bg-oat-200/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <div data-reveal className="eyebrow">Why Mobile</div>
              <h2 data-reveal className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-cocoa-900 leading-tight">
                Calmer dog, easier day.
              </h2>
            </div>
            <p data-reveal className="md:col-span-5 text-cocoa-500 leading-relaxed">
              Especially good for puppies, seniors, pets with mobility issues,
              and anyone whose dog hates the car.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-4 gap-5">
            {[
              { i: <CarIcon className="w-6 h-6 text-sage-700" />,  t: 'No transport stress', d: 'Your dog stays home, in their own space.' },
              { i: <PawIcon className="w-6 h-6 text-sage-700" />,  t: 'One-on-one attention',  d: 'No kennel waiting between bath and blow-dry.' },
              { i: <HomeIcon className="w-6 h-6 text-sage-700" />, t: 'Familiar environment',  d: 'Their yard, their porch, their normal.' },
              { i: <ClockIcon className="w-6 h-6 text-sage-700" />,t: 'Convenient for you',    d: 'Easier on busy weeks and senior pets.' },
            ].map((b, i) => (
              <div key={b.t} data-reveal style={{ ['--reveal-delay' as any]: `${i * 100}ms` }}
                className="card-soft p-6">
                <div className="w-11 h-11 rounded-xl bg-sage/15 grid place-items-center">{b.i}</div>
                <div className="mt-4 font-display font-bold text-cocoa-900 text-lg">{b.t}</div>
                <div className="mt-2 text-sm text-cocoa-500 leading-relaxed">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-oat">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div data-reveal className="eyebrow">What&apos;s Included</div>
          <h2 data-reveal className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-cocoa-900 max-w-xl leading-tight">
            Every service, in one visit.
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: 'Bath & Blow Dry',         d: 'Gentle shampoo, complete dry.' },
              { t: 'Breed-Specific Cuts',     d: 'Standard styling for your breed.' },
              { t: 'Nail Trimming',           d: 'Clip and file, paws comfortable.' },
              { t: 'Ear Cleaning',            d: 'Gentle clean, healthy ears.' },
              { t: 'De-Shedding',             d: 'Loose coat out, less in the house.' },
              { t: 'Teeth Cleaning',          d: 'Brushing and freshening.' },
              { t: 'Flea & Tick Treatment',   d: 'Add-on prevention treatments.' },
              { t: 'First-Time Welcome',      d: 'Extra patience for new clients.' },
            ].map((s, i) => (
              <div key={s.t} data-reveal style={{ ['--reveal-delay' as any]: `${i * 70}ms` }}
                className="svc-pill">
                <div className="w-10 h-10 rounded-full bg-sage/15 grid place-items-center shrink-0">
                  <PawIcon className="w-5 h-5 text-sage-700" />
                </div>
                <div>
                  <div className="font-display font-semibold text-cocoa-900 text-sm">{s.t}</div>
                  <div className="text-xs text-cocoa-500 mt-0.5">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Grooms ── */}
      <section id="grooms" className="bg-oat-200/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div data-reveal className="eyebrow">Recent Grooms</div>
              <h2 data-reveal className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-cocoa-900">
                Some happy clients.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80', t: 'Cavalier', c: 'Spring Hill' },
              { src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=700&q=80',  t: 'Doodle de-shed', c: 'Brooksville' },
              { src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=700&q=80',  t: 'First-time client', c: 'Hudson' },
            ].map((p, i) => (
              <figure key={p.t} data-reveal style={{ ['--reveal-delay' as any]: `${i * 120}ms` }}>
                <div className="photo-soft aspect-[4/5]">
                  <img src={p.src} alt={`${p.t} in ${p.c}`} className="w-full h-full object-cover" />
                </div>
                <figcaption className="mt-3 flex items-center justify-between text-sm">
                  <span className="font-display font-semibold text-cocoa-900">{p.t}</span>
                  <span className="text-cocoa-500">{p.c}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Sabrina ── */}
      <section className="bg-oat">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div data-reveal className="eyebrow">About</div>
            <h2 data-reveal className="mt-3 font-display font-extrabold text-4xl text-cocoa-900 leading-tight">
              Sabrina drives the van.
            </h2>
            <p data-reveal className="mt-6 text-cocoa-500 leading-relaxed max-w-md">
              Locally-owned mobile groomer serving the tri-county area.
              Personalized attention, a calm environment, and a breed-aware
              cut every time. Your dog comes back home — clean, happy, ready
              for a nap.
            </p>
          </div>
          <div data-reveal className="md:col-span-7">
            {/* Stylized van */}
            <div className="relative h-72 md:h-80 bg-sage/10 rounded-3xl overflow-hidden">
              <svg viewBox="0 0 360 220" className="absolute inset-0 w-full h-full drive-bob">
                <defs>
                  <linearGradient id="vanGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#7BA68A" />
                    <stop offset="1" stopColor="#577863" />
                  </linearGradient>
                </defs>
                {/* ground line */}
                <line x1="0" y1="180" x2="360" y2="180" stroke="#3A2A1F" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
                {/* van body */}
                <rect x="60" y="80" width="220" height="80" rx="14" fill="url(#vanGrad)" />
                <rect x="240" y="55" width="60" height="55" rx="12" fill="url(#vanGrad)" />
                {/* windows */}
                <rect x="246" y="62" width="48" height="32" rx="6" fill="#F7F2EA" opacity="0.92" />
                {/* door */}
                <rect x="160" y="92" width="70" height="60" rx="6" fill="#577863" />
                <circle cx="220" cy="124" r="2" fill="#F7F2EA" />
                {/* paw decal */}
                <g transform="translate(105, 110) scale(0.8)">
                  <circle cx="0" cy="6" r="6" fill="#F7F2EA" />
                  <circle cx="-9" cy="-2" r="3.5" fill="#F7F2EA" />
                  <circle cx="-3" cy="-10" r="3.5" fill="#F7F2EA" />
                  <circle cx="6" cy="-9" r="3.5" fill="#F7F2EA" />
                  <circle cx="11" cy="-1" r="3.5" fill="#F7F2EA" />
                </g>
                <text x="118" y="142" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="14" fill="#F7F2EA" letterSpacing="0.1em">CUSTOM CANINES</text>
                {/* wheels */}
                <g transform="translate(110, 170)">
                  <circle r="16" fill="#241710" />
                  <g className="wheel-roll">
                    <circle r="9" fill="#7A6552" />
                    <line x1="-9" y1="0" x2="9" y2="0" stroke="#F7F2EA" strokeWidth="1.5" />
                    <line x1="0" y1="-9" x2="0" y2="9" stroke="#F7F2EA" strokeWidth="1.5" />
                  </g>
                </g>
                <g transform="translate(240, 170)">
                  <circle r="16" fill="#241710" />
                  <g className="wheel-roll" style={{ animationDelay: '-0.4s' }}>
                    <circle r="9" fill="#7A6552" />
                    <line x1="-9" y1="0" x2="9" y2="0" stroke="#F7F2EA" strokeWidth="1.5" />
                    <line x1="0" y1="-9" x2="0" y2="9" stroke="#F7F2EA" strokeWidth="1.5" />
                  </g>
                </g>
                {/* puffs */}
                <circle cx="40" cy="160" r="4" fill="#A89684" opacity="0.5" />
                <circle cx="28" cy="155" r="3" fill="#A89684" opacity="0.35" />
                <circle cx="18" cy="150" r="2" fill="#A89684" opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="bg-oat-200/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div data-reveal className="eyebrow text-center">From Customers</div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              { q: "Stress-free for my pup — she actually enjoys her grooms now.", a: 'Facebook review' },
              { q: "Sabrina is the best. Clean, kind, and on time every time.",     a: 'Google review' },
            ].map((r, i) => (
              <blockquote key={r.q} data-reveal style={{ ['--reveal-delay' as any]: `${i * 140}ms` }}
                className="card-soft p-7">
                <div className="flex items-center gap-1 text-sage-700">
                  {[0, 1, 2, 3, 4].map((s) => <StarIcon key={s} className="w-4 h-4" />)}
                </div>
                <div className="mt-4 font-display text-xl text-cocoa-900 leading-snug">“{r.q}”</div>
                <div className="mt-4 text-xs text-cocoa-500 uppercase tracking-widest">— {r.a}</div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="bg-oat">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div data-reveal className="eyebrow">Service Area</div>
            <h2 data-reveal className="mt-3 font-display font-extrabold text-4xl text-cocoa-900 leading-tight">
              Three counties.<br />One van.
            </h2>
            <p data-reveal className="mt-5 text-cocoa-500 leading-relaxed max-w-md">
              Mobile service across Hernando, Citrus, and Pasco counties.
            </p>
            <ul data-reveal className="mt-6 grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-cocoa-800 font-display">
              <li>· Spring Hill</li>
              <li>· Brooksville</li>
              <li>· Hudson</li>
              <li>· New Port Richey</li>
              <li>· Crystal River</li>
              <li>· Homosassa</li>
            </ul>
          </div>
          <div data-reveal className="md:col-span-7 maphatch h-72 rounded-3xl border border-cocoa-700/15 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white px-5 py-2.5 rounded-full border border-cocoa-700/15 font-display font-semibold text-cocoa-900">
                Hernando · Citrus · Pasco · FL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Book ── */}
      <section id="contact" className="bg-cocoa-800 text-oat">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <div data-reveal className="eyebrow !text-sage-300">Book a Groom</div>
          <h2 data-reveal className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-oat leading-tight">
            Tell us about your dog.
          </h2>
          <p data-reveal className="mt-3 text-oat/80 max-w-xl">
            Text or call for the fastest response — <a href="tel:+13529423242" className="underline decoration-sage-300 underline-offset-4">(352) 942-3242</a>.
          </p>

          <form onSubmit={(e) => e.preventDefault()} data-reveal className="mt-10 grid md:grid-cols-2 gap-4">
            <input className="field" placeholder="Your name" />
            <input className="field" placeholder="Phone" />
            <input className="field md:col-span-2" placeholder="Address / service area" />
            <input className="field" placeholder="Dog's name" />
            <input className="field" placeholder="Breed" />
            <input className="field md:col-span-2" placeholder="Preferred date" />
            <textarea rows={4} className="field md:col-span-2" placeholder="Notes — coat condition, temperament, any special requests..." />
            <button type="submit" className="btn-sage md:col-span-2 bg-sage-500 text-cocoa-900 px-6 py-4 font-semibold tracking-wide">
              Request Booking
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-oat-200/60 border-t border-cocoa-700/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-3 md:gap-6 md:items-center justify-between text-sm text-cocoa-500">
          <div className="font-display font-semibold text-cocoa-900">
            Custom Canines Dog Grooming · Spring Hill, FL
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href="tel:+13529423242" className="hover:text-sage-700">(352) 942-3242</a>
            <a href="mailto:customcaninesdoggrooming@yahoo.com" className="hover:text-sage-700">customcaninesdoggrooming@yahoo.com</a>
            <span>Mobile · Hernando · Citrus · Pasco</span>
          </div>
          <div className="text-xs text-cocoa-300">
            © {new Date().getFullYear()} · WebSuite Digital
          </div>
        </div>
      </footer>
    </main>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-cocoa-700/10 text-xs font-medium text-cocoa-800">
      <span className="w-1.5 h-1.5 rounded-full bg-sage" />
      {children}
    </span>
  );
}

function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="12" cy="15" r="4.2" />
      <circle cx="5.5" cy="11" r="2.4" />
      <circle cx="9" cy="6" r="2.4" />
      <circle cx="15" cy="6" r="2.4" />
      <circle cx="18.5" cy="11" r="2.4" />
    </svg>
  );
}

function DogHead({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M5 8c0-2 2-3 3-2l2 1c1 0 3 0 4 0l2-1c1-1 3 0 3 2v6a7 7 0 11-14 0V8z" />
      <circle cx="9.5" cy="12" r="1" fill="#3A2A1F" />
      <circle cx="14.5" cy="12" r="1" fill="#3A2A1F" />
      <ellipse cx="12" cy="15" rx="1.2" ry="0.8" fill="#3A2A1F" />
    </svg>
  );
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 13l2-5a2 2 0 012-1h10a2 2 0 012 1l2 5" />
      <rect x="3" y="13" width="18" height="6" rx="1" />
      <circle cx="7" cy="19" r="1.5" />
      <circle cx="17" cy="19" r="1.5" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l3 6.6L22 10l-5.4 4.7L18 22l-6-3.7L6 22l1.4-7.3L2 10l7-1.4L12 2z" />
    </svg>
  );
}
