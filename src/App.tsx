import { useState, useEffect } from 'react'
import logoImg from '@/imports/WhatsApp_Image_2026-08-12_at_07.45.04.jpeg'

/* ── Circular motif pulled from the logo's "i" dot and "o" letterform ── */
function Circle({ size, opacity = 1, style }: { size: number; opacity?: number; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,' + opacity * 0.25 + ')',
        flexShrink: 0,
        ...style,
      }}
    />
  )
}

/* ── Section label — mono caps with flanking i-dots ── */
function Label({ children, gold }: { children: React.ReactNode; gold?: boolean }) {
  const col = gold ? '#C8A46B' : '#FFFFFF'
  return (
    <div className="flex items-center gap-3 mb-8">
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: col, flexShrink: 0 }} />
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: col,
          opacity: gold ? 1 : 0.5,
        }}
      >
        {children}
      </span>
    </div>
  )
}

/* ── Nav ── */
function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Explore', 'For Businesses', 'AI Concierge', 'About', 'Resources']

  return (
    <nav className={scrolled ? 'glass' : ''} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'all 0.3s', padding: scrolled ? '14px 0' : '22px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo — white on black, exactly as designed */}
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoImg} alt="ODINI" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
          {links.map(l => (
            <a
              key={l}
              href="#"
              style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          className="hidden md:block"
          style={{
            background: '#fff',
            color: '#000',
            border: 'none',
            borderRadius: 999,
            padding: '10px 22px',
            fontWeight: 700,
            fontSize: 13,
            cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Join the Waitlist
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block', width: 22, height: 2, background: '#fff',
                transition: 'all 0.25s',
                transform: open && i === 0 ? 'rotate(45deg) translateY(7px)' : open && i === 2 ? 'rotate(-45deg) translateY(-7px)' : '',
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {open && (
        <div className="glass md:hidden" style={{ padding: '16px 32px 24px' }}>
          {links.map(l => (
            <div key={l} style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <a href="#" style={{ fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>{l}</a>
            </div>
          ))}
          <button
            style={{ marginTop: 16, background: '#fff', color: '#000', borderRadius: 999, padding: '10px 22px', fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Join the Waitlist
          </button>
        </div>
      )}
    </nav>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: 100, paddingBottom: 60 }}>

      {/* Background: circle-grid pattern from the logo geometry */}
      <div className="circle-grid" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Large blurred background circles — echoing the logo's "o" */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: 500, height: 500, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '20%', left: '8%', width: 300, height: 300, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '5%', width: 600, height: 600, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '15%', right: '12%', width: 12, height: 12, borderRadius: '50%', background: '#C8A46B', opacity: 0.6, zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '35%', left: '15%', width: 8, height: 8, borderRadius: '50%', background: '#fff', opacity: 0.3, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '25%', left: '25%', width: 6, height: 6, borderRadius: '50%', background: '#fff', opacity: 0.2, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '30%', right: '18%', width: 10, height: 10, borderRadius: '50%', background: '#C8A46B', opacity: 0.4, zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>

        {/* Pill badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, padding: '7px 16px', marginBottom: 40 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8A46B' }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
            Preparing for Launch · Zambia
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: 'clamp(3.2rem, 9vw, 7rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: 28 }}>
          Discover experiences<br />
          <span style={{ color: '#C8A46B' }}>you'll love.</span>
        </h1>

        {/* Sub */}
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 620, margin: '0 auto 44px' }}>
          ODINI is building an AI-powered experience platform that will help people discover, plan, and book personalized stays, events, activities, and services—making every journey effortless, memorable, and uniquely yours.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 72 }}>
          <button
            style={{ background: '#fff', color: '#000', borderRadius: 999, padding: '14px 32px', fontWeight: 800, fontSize: 14, border: 'none', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Join the Waitlist
          </button>
          <button
            style={{ background: 'transparent', color: '#fff', borderRadius: 999, padding: '14px 32px', fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", transition: 'border-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
          >
            Partner with ODINI
          </button>
        </div>

        {/* Category pills — four core pillars */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {[
            { icon: '🏨', label: 'Stays' },
            { icon: '🎉', label: 'Events' },
            { icon: '🎯', label: 'Activities' },
            { icon: '🛎', label: 'Services' },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 999, padding: '9px 16px',
                fontSize: 13, fontWeight: 500,
                cursor: 'default',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Why ODINI ── */
function WhyOdini() {
  const cats = [
    { icon: '🏨', title: 'Stays', desc: 'Hotels, boutique stays and unique accommodations tailored to your style.' },
    { icon: '🎉', title: 'Events', desc: 'Concerts, festivals, nightlife, exhibitions and local happenings.' },
    { icon: '🎯', title: 'Activities', desc: 'Adventure, tours, sports, outdoor experiences and attractions.' },
    { icon: '🛎', title: 'Services', desc: 'Restaurants, cafés, photography, wellness, equipment rentals, guides, event services, and other local services.' },
    { icon: '🗺', title: 'Intelligent Itineraries', desc: 'AI-generated day plans that balance your interests, budget, and available time.' },
    { icon: '✨', title: 'Hidden Gems', desc: 'Experiences surfaced by AI relevance rather than existing popularity.' },
  ]

  return (
    <section style={{ padding: '120px 32px', maxWidth: 1280, margin: '0 auto' }}>
      <Label>Why ODINI</Label>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
        {/* Big heading */}
        <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: 600 }}>
          Everything you need to experience<br />
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>a destination.</span>
        </h2>

        {/* Cards — asymmetric: 2 large + 4 small */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {cats.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="card"
              style={{
                padding: 28,
                cursor: 'default',
                transition: 'all 0.25s',
                gridColumn: i < 2 ? 'span 1' : undefined,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.color = '#000'
                e.currentTarget.style.borderColor = '#fff'
                e.currentTarget.style.transform = 'translateY(-3px)'
                const desc = e.currentTarget.querySelector('.desc') as HTMLElement
                if (desc) desc.style.color = 'rgba(0,0,0,0.55)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.transform = 'translateY(0)'
                const desc = e.currentTarget.querySelector('.desc') as HTMLElement
                if (desc) desc.style.color = 'rgba(255,255,255,0.45)'
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 18 }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{title}</div>
              <div className="desc" style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.45)', transition: 'color 0.25s' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── AI Concierge ── */
function AIConcierge() {
  const itinerary = [
    { type: 'Stay',      label: 'The David Livingstone Safari Lodge', meta: 'K850/night · Riverside · Verified' },
    { type: 'Breakfast', label: 'Café Zambezi',                       meta: 'K85 avg · Opens 7am · Hidden gem ✨' },
    { type: 'Activity',  label: 'Victoria Falls Guided Tour',          meta: 'K350 · Guided · Peak slot' },
    { type: 'Dinner',    label: 'The Livingstone Room',                meta: 'K290 avg · Fine dining' },
    { type: 'Event',     label: 'Sunset Cruise on the Zambezi',        meta: 'K420 · Limited seats' },
    { type: 'Evening',   label: 'Moonlit Bush Walk',                   meta: 'K380 · Guide-led · Hidden gem ✨' },
  ]

  const capabilities = [
    'Personalized recommendations', 'Intelligent itinerary planning',
    'Semantic search', 'Budget optimization',
    'Experience bundling', 'Hyperlocal discovery',
  ]

  return (
    <section style={{ padding: '120px 32px', background: 'rgba(255,255,255,0.025)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Section label with "In Development" badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
          <Label>AI Concierge</Label>
        </div>
        <div style={{ marginBottom: 48, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(200,164,107,0.1)', border: '1px solid rgba(200,164,107,0.25)', borderRadius: 999, padding: '5px 14px' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8A46B' }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8A46B' }}>Currently in Development</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="flex-col-on-mobile">
          {/* Left */}
          <div>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24 }}>
              Meet your<br />
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>AI Concierge.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 36 }}>
              The ODINI AI Concierge is being built to help travelers discover personalized experiences, generate intelligent itineraries, optimize budgets, and uncover hidden gems through natural conversation.
            </p>

            {/* Planned capabilities */}
            <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>
              Planned AI Capabilities
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
              {capabilities.map(c => (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#C8A46B', flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Concept preview — clearly labelled, non-interactive */}
          <div style={{ position: 'relative' }}>
            {/* Concept label overlay */}
            <div style={{ position: 'absolute', top: -14, right: 20, zIndex: 10, display: 'flex', alignItems: 'center', gap: 6, background: '#000', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999, padding: '4px 12px' }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Concept Preview</span>
            </div>

            <div style={{ background: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, overflow: 'hidden', opacity: 0.85 }}>
              {/* Header bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ width: 32, height: 32, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontWeight: 900, fontSize: 11, color: '#000', letterSpacing: -0.5 }}>OD</span>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>ODINI AI Concierge</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8A46B' }} />
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Coming soon</span>
                  </div>
                </div>
              </div>

              {/* Static concept messages */}
              <div style={{ padding: 20, minHeight: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div className="chat-user" style={{ padding: '10px 16px', maxWidth: '80%', fontSize: 14, fontWeight: 500 }}>
                    I'm visiting Livingstone for 3 days with a budget of K4,000.
                  </div>
                </div>

                <div className="chat-ai" style={{ padding: '12px 16px', fontSize: 14 }}>
                  <p style={{ color: '#C8A46B', fontWeight: 600, marginBottom: 12 }}>
                    Here's a concept itinerary for your Livingstone trip:
                  </p>
                  {itinerary.map(item => (
                    <div
                      key={item.label}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 9,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          background: 'rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.7)',
                          borderRadius: 6,
                          padding: '3px 7px',
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        {item.type}
                      </span>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.3 }}>{item.label}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{item.meta}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Static input — visually present, non-interactive */}
              <div style={{ display: 'flex', gap: 12, padding: '12px 20px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ flex: 1, fontSize: 13, color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>Available at launch…</span>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.3)',
                    borderRadius: 999, padding: '8px 18px',
                    fontWeight: 700, fontSize: 12,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    flexShrink: 0,
                  }}
                >
                  Send
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── How It Works ── */
function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Tell ODINI what you enjoy.',
      items: ['Travel style', 'Budget', 'Interests', 'Group size'],
      img: 'https://images.unsplash.com/photo-1515914560649-8fe5d631aa62?w=600&h=400&fit=crop&auto=format',
    },
    {
      n: '02',
      title: 'AI builds your experience.',
      items: ['Personal recommendations', 'Optimized itinerary', 'Hidden gems'],
      img: 'https://images.unsplash.com/photo-1709402606682-400133d92ab2?w=600&h=400&fit=crop&auto=format',
    },
    {
      n: '03',
      title: 'Book with confidence.',
      items: ['Launching with verified businesses', 'Seamless booking experience', 'One intelligent platform'],
      img: 'https://images.unsplash.com/photo-1689155494424-d2337856fe3e?w=600&h=400&fit=crop&auto=format',
    },
  ]

  return (
    <section style={{ padding: '120px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Label>How It Works</Label>

        <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 64, maxWidth: 480 }}>
          Three steps to your perfect experience.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {steps.map(({ n, title, items, img }) => (
            <div
              key={n}
              className="card"
              style={{ overflow: 'hidden', cursor: 'default', transition: 'transform 0.25s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {/* Photo */}
              <div style={{ position: 'relative', height: 200, background: '#111' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, transition: 'opacity 0.3s' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, transparent 60%)' }} />
                {/* Step number — large, in the logo's mono typeface */}
                <div
                  style={{
                    position: 'absolute', bottom: 16, left: 20,
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 52, fontWeight: 500,
                    color: '#C8A46B', lineHeight: 1,
                    opacity: 0.9,
                  }}
                >
                  {n}
                </div>
              </div>
              {/* Text */}
              <div style={{ padding: 24 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 16, lineHeight: 1.3 }}>{title}</div>
                {items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#fff', opacity: 0.35, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── For Businesses ── */
function ForBusinesses() {
  const features = [
    { icon: '✦', label: 'AI-Enhanced Listings',  desc: 'Your business will surface to people most likely to genuinely love what you offer.' },
    { icon: '♡', label: 'Followers',              desc: 'Build a loyal audience that gets notified of your latest offerings and updates.' },
    { icon: '⬡', label: 'Referral Tools',         desc: 'Planned tools to turn happy customers into advocates through built-in referrals.' },
    { icon: '◈', label: 'Analytics',              desc: 'Understand who discovers you, when, and how they engage with your listing.' },
    { icon: '⊞', label: 'Booking Management',     desc: 'One dashboard planned for all your reservations, cancellations, and availability.' },
    { icon: '◉', label: 'Promotions',             desc: 'Reach people with high intent through targeted, relevance-driven promotions.' },
  ]

  return (
    <section style={{ padding: '120px 32px', background: 'rgba(255,255,255,0.02)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Label>For Businesses</Label>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="flex-col-on-mobile">
          {/* Left */}
          <div>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24 }}>
              Every business deserves to be discovered.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 32 }}>
              When ODINI launches, our AI will connect your business with people most likely to enjoy it—not just whoever has the biggest ad budget.
            </p>
            <button
              style={{ background: '#fff', color: '#000', borderRadius: 999, padding: '13px 28px', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Become a Business Partner
            </button>

            {/* Concept dashboard — blurred placeholders, clearly labelled */}
            <div style={{ marginTop: 40, position: 'relative' }}>
              {/* Dashboard preview label */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 12, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999, padding: '4px 12px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Dashboard Preview</span>
              </div>

              <div style={{ background: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                  {['#ef4444','#eab308','#22c55e'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.5 }} />)}
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.2)', marginLeft: 6 }}>Business Dashboard · ODINI</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { label: 'Profile Views' },
                    { label: 'Bookings' },
                    { label: 'Avg Rating' },
                    { label: 'Revenue' },
                  ].map(({ label }) => (
                    <div key={label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '14px 16px' }}>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 10, fontFamily: "'DM Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
                      {/* Blurred placeholder value */}
                      <div style={{ fontWeight: 800, fontSize: 20, lineHeight: 1, filter: 'blur(7px)', color: 'rgba(255,255,255,0.5)', userSelect: 'none' }}>—</div>
                      <div style={{ marginTop: 6, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.07)', width: '60%' }} />
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, padding: '12px 0 0', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: 11, color: 'rgba(255,255,255,0.25)', fontStyle: 'italic', textAlign: 'center' }}>
                  Live analytics available at launch
                </div>
              </div>
            </div>
          </div>

          {/* Right: what businesses can expect */}
          <div>
            <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>
              What Businesses Can Expect
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {features.map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="card"
                  style={{ padding: 20, cursor: 'default', transition: 'all 0.2s' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#fff'
                    e.currentTarget.style.color = '#000'
                    e.currentTarget.style.borderColor = '#fff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                  }}
                >
                  <div style={{ fontSize: 18, marginBottom: 10, color: '#C8A46B' }}>{icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{label}</div>
                  <div style={{ fontSize: 11, lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.5)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Philosophy ── */
function Philosophy() {
  return (
    <section style={{ padding: '140px 32px', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative circle ring — the logo's "o" motif, large */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 40 }}>
          <div style={{ height: 1, width: 48, background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8A46B' }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Our Philosophy</span>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8A46B' }} />
          <div style={{ height: 1, width: 48, background: 'rgba(255,255,255,0.15)' }} />
        </div>

        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 32 }}>
          Discovery should be earned through relevance—
          <span style={{ color: 'rgba(255,255,255,0.3)' }}> not popularity.</span>
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: 640, margin: '0 auto' }}>
          ODINI is designed so every stay, event, activity, restaurant, café, and service has the opportunity to reach the right audience. Our AI learns what people genuinely enjoy and recommends experiences based on relevance rather than existing popularity.
        </p>
      </div>
    </section>
  )
}

/* ── Built for Zambia ── */
function BuiltForZambia() {
  const regions = [
    { name: 'Lusaka',           desc: 'Vibrant capital—culture, dining, nightlife.',       img: 'https://images.unsplash.com/photo-1595091588366-f2d38f688594?w=600&h=500&fit=crop&auto=format' },
    { name: 'Livingstone',      desc: 'Gateway to Victoria Falls and world-class adventure.', img: 'https://images.unsplash.com/photo-1627347456206-d3df7d8484b0?w=600&h=500&fit=crop&auto=format' },
    { name: 'Copperbelt',       desc: 'Industrial heartland with rich community culture.',  img: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?w=600&h=500&fit=crop&auto=format' },
    { name: 'Eastern Province', desc: 'Wildlife, national parks, untouched wilderness.',    img: 'https://images.unsplash.com/photo-1759157199071-cf1b46c8ee29?w=600&h=500&fit=crop&auto=format' },
  ]

  return (
    <section style={{ padding: '120px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Label>Built for Zambia</Label>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: 520 }}>
            Zambia's finest experiences, intelligently curated.
          </h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(200,164,107,0.3)', borderRadius: 999, padding: '8px 16px' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8A46B' }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: '#C8A46B' }}>Launching in Zambia with plans to expand across Africa</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {regions.map(({ name, desc, img }) => (
            <div
              key={name}
              style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', height: 300, background: '#111', cursor: 'default' }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                if (img) img.style.opacity = '0.85'
                if (img) img.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                if (img) img.style.opacity = '0.6'
                if (img) img.style.transform = 'scale(1)'
              }}
            >
              <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, transition: 'all 0.6s' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24 }}>
                <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 6, letterSpacing: '-0.02em' }}>{name}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Final CTA ── */
function FinalCTA() {
  return (
    <section style={{ padding: '80px 32px 120px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            position: 'relative', overflow: 'hidden',
            background: '#fff', color: '#000',
            borderRadius: 24, padding: 'clamp(60px, 10vw, 100px) 48px',
            textAlign: 'center',
          }}
        >
          {/* Subtle circle-grid in white card */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.08)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -60, width: 240, height: 240, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 40, left: 60, width: 10, height: 10, borderRadius: '50%', background: '#C8A46B' }} />
          <div style={{ position: 'absolute', bottom: 40, right: 80, width: 7, height: 7, borderRadius: '50%', background: '#000', opacity: 0.2 }} />

          <div style={{ position: 'relative' }}>
            {/* Logo on white background (invert) */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
              <img src={logoImg} alt="ODINI" style={{ height: 40, width: 'auto', objectFit: 'contain', filter: 'invert(1)' }} />
            </div>

            <h2 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#000', marginBottom: 20 }}>
              Be among the first to experience ODINI.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(0,0,0,0.5)', marginBottom: 40, maxWidth: 420, margin: '0 auto 40px', lineHeight: 1.65 }}>
              We're preparing for launch. Join the waitlist to be the first to access ODINI when we open our doors.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              <button
                style={{ background: '#000', color: '#fff', borderRadius: 999, padding: '14px 32px', fontWeight: 800, fontSize: 14, border: 'none', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Join the Waitlist
              </button>
              <button
                style={{ background: 'transparent', color: '#000', borderRadius: 999, padding: '14px 32px', fontWeight: 600, fontSize: 14, border: '1px solid rgba(0,0,0,0.2)', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)')}
              >
                Become a Business Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  const cols = [
    { heading: 'Company', links: ['About', 'Careers', 'Blog'] },
    { heading: 'Legal',   links: ['Privacy', 'Terms', 'Cookies'] },
    { heading: 'Connect', links: ['Contact', 'Twitter / X', 'Instagram', 'LinkedIn'] },
  ]

  return (
    <footer style={{ padding: '64px 32px 48px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }} className="flex-col-on-mobile">
          <div>
            <img src={logoImg} alt="ODINI" style={{ height: 30, width: 'auto', objectFit: 'contain', marginBottom: 16 }} />
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: 260 }}>
              Building Zambia's next-generation AI-powered experience platform.
            </p>
          </div>
          {cols.map(({ heading, links }) => (
            <div key={heading}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>{heading}</div>
              {links.map(l => (
                <div key={l} style={{ marginBottom: 12 }}>
                  <a
                    href="#"
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {l}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>
            © 2026 ODINI Technologies Limited. All rights reserved.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>
              Lusaka, Zambia · Expanding across Africa
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── App ── */
export default function App() {
  return (
    <div style={{ background: '#000000', color: '#FFFFFF', minHeight: '100vh' }}>
      <style>{`
        @media (max-width: 900px) {
          .flex-col-on-mobile {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
      <Nav />
      <Hero />
      <WhyOdini />
      <AIConcierge />
      <HowItWorks />
      <ForBusinesses />
      <Philosophy />
      <BuiltForZambia />
      <FinalCTA />
      <Footer />
    </div>
  )
}
