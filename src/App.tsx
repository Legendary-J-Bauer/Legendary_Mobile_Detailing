import { useState } from 'react'

const services = [
  { no: '01', title: 'The Refresh', detail: 'A thoughtful reset for the everyday driver.', price: 'From $99', icon: '✳' },
  { no: '02', title: 'The Signature', detail: 'Our most-loved inside and out experience.', price: 'From $189', icon: '◈' },
  { no: '03', title: 'The Showroom', detail: 'A meticulous, paint-loving deep clean.', price: 'From $299', icon: '✧' },
]

function Arrow() { return <span aria-hidden="true">↗</span> }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
    <div className="announcement"><span className="announcement-star">✳</span> Your driveway called. It wants a detail. <a href="#services">Explore services <Arrow /></a></div>
    <header className="header">
      <a href="#top" className="brand" aria-label="Legendary Mobile Detailing home"><img className="brand-logo" src="/legendary-mobile-detailing-logo.png" alt="Legendary Mobile Detailing" /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? '×' : '☰'}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a><a href="#reviews" onClick={() => setMenuOpen(false)}>Kind words</a><a className="nav-cta" href="#booking">Book a detail <Arrow /></a></nav>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-image" role="img" aria-label="A beautifully detailed classic car in warm evening light" />
        <div className="hero-wash" />
        <div className="hero-content"><div className="eyebrow"><span /> DETAILING THAT COMES TO YOU</div><h1>Good as new.<br /><em>Feels like yours.</em></h1><p>Exceptional mobile detailing for the cars you love. We bring the care, craft, and clean straight to your driveway.</p><div className="hero-actions"><a className="button button-lime" href="#booking">Find your fresh start <Arrow /></a><a href="#services" className="text-link">Explore services <span>↓</span></a></div><div className="hero-proof"><div className="avatar-stack"><span>✳</span></div><div><strong>Thoughtful care, made convenient.</strong><small>Mobile detailing for the cars you love</small></div></div></div>
        <div className="hero-badge"><span>✳</span><strong>WE COME<br />TO YOU</strong><small>YOU KEEP YOUR DAY</small></div>
        <div className="hero-caption">THOUGHTFUL CARE, DOWN TO THE LAST DETAIL <span>EST. FOR THE LOVE OF THE DRIVE</span></div>
      </section>
      <section className="trust-strip"><div><span className="trust-icon">✳</span><strong>We come to you</strong><small>Home, office, wherever</small></div><div><span className="trust-icon">◷</span><strong>Time well spent</strong><small>Easy, on your schedule</small></div><div><span className="trust-icon">✧</span><strong>Care in every detail</strong><small>Thoughtful by design</small></div><div><span className="trust-icon">♡</span><strong>Good people, good work</strong><small>Local, friendly, reliable</small></div></section>
      <section className="services section" id="services"><div className="section-heading"><div><div className="eyebrow dark"><span /> PICK YOUR KIND OF FRESH</div><h2>A little love goes<br /><em>a long way.</em></h2></div><p>From a quick reset to the full works, every detail is done with care. Choose your treatment and we’ll bring the good stuff to you.</p></div><div className="service-grid">{services.map(s => <article className="service-card" key={s.no}><div className="service-top"><span>{s.no} / 03</span><span className="service-icon">{s.icon}</span></div><h3>{s.title}</h3><p>{s.detail}</p><div className="service-bottom"><strong>Custom quote</strong><a href="#booking" aria-label={`Ask about ${s.title}`}><Arrow /></a></div></article>)}</div><div className="service-note"><span>✳</span> Every vehicle is different. We’ll help you find the right fit. <a href="#booking">Booking details <Arrow /></a></div></section>
      <section className="approach" id="approach"><div className="approach-photo"><div className="photo-label">THE LITTLE THINGS<br />MAKE THE DIFFERENCE</div></div><div className="approach-copy"><div className="eyebrow"><span /> A BETTER KIND OF DETAIL</div><h2>Care you can<br /><em>feel.</em></h2><p className="approach-lede">We believe a clean car should feel like a deep breath. No rush, no shortcuts, no mystery add-ons. Just good people taking real pride in their work.</p><div className="approach-points"><div><span>01</span><p><strong>Made for your day</strong><small>We work around your schedule and show up ready.</small></p></div><div><span>02</span><p><strong>Thoughtful by nature</strong><small>Gentle products. Careful hands. Respect for your ride.</small></p></div><div><span>03</span><p><strong>Good from start to finish</strong><small>Clear prices, friendly service, and a finish you’ll love.</small></p></div></div><a className="text-link light-link" href="#booking">Get to know us <Arrow /></a></div></section>
      <section className="testimonial section" id="reviews"><div className="eyebrow dark"><span /> THE LEGENDARY APPROACH</div><div className="quote-mark">✳</div><blockquote>A fresh start for your car.<br /><em>More time back for you.</em></blockquote><p className="testimonial-note">Thoughtful mobile detailing, built around the way you live and drive.</p></section>
      <section className="booking" id="booking"><div className="booking-orb orb-one"/><div className="booking-orb orb-two"/><div className="eyebrow"><span /> THE NEXT STEP</div><h2>We’re getting<br /><em>ready to roll.</em></h2><p>Booking details are coming soon. Check back here for our service area and how to get in touch.</p><small className="booking-footnote">Thanks for being here at the beginning.</small></section>
    </main>
    <footer className="footer"><a href="#top" className="brand footer-brand"><img className="brand-logo" src="/legendary-mobile-detailing-logo.png" alt="Legendary Mobile Detailing" /></a><span>Care for the cars you love.</span><div className="footer-links"><a href="#services">Services</a><a href="#booking">Get in touch</a><a href="#top">Back to top ↑</a></div><small className="copyright">© 2026 Legendary Mobile Detailing</small></footer>
  </>
}
