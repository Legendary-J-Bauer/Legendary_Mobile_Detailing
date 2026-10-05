import { useEffect, useState } from 'react'

const vehicleSizes = [
  { key: 'sedan', label: 'Sedan / coupe' },
  { key: 'midsize', label: 'Mid-size sedan / 2-row SUV' },
  { key: 'large', label: 'Large SUV / van' },
]

const pricingCategories = [
  {
    id: 'interior', title: 'Interior detailing', intro: 'A cleaner cabin, from the everyday reset to a deeper clean.', tiers: [
      { title: 'Interior Refresh', prices: ['$89', '$109', '$129'], description: 'For regularly maintained vehicles that need a thorough tidy-up.', includes: ['Vacuum seats, carpets, mats and cargo area', 'Wipe down dashboard, console, doors and cupholders', 'Clean interior glass and floor mats', 'Remove ordinary loose sand, crumbs and debris'] },
      { title: 'Interior Deep Clean', prices: ['$149', '$169', '$199'], description: 'For built-up grime, spills or an interior that needs extra attention.', includes: ['Everything in Interior Refresh', 'Detail crevices and hard-to-reach areas', 'Spot-treat common fabric marks', 'Shampoo and extract carpets or fabric where appropriate'] },
    ],
  },
  {
    id: 'exterior', title: 'Exterior detailing', intro: 'A careful hand wash with options for added gloss and protection.', tiers: [
      { title: 'Exterior Refresh', prices: ['$89', '$109', '$129'], description: 'A clean, crisp finish for vehicles that are in regular upkeep.', includes: ['Foam pre-rinse and careful hand wash', 'Clean wheels, tires and exterior glass', 'Hand dry and apply spray sealant', 'Light bug residue removal'] },
      { title: 'Exterior Detail & Protect', prices: ['$139', '$159', '$179'], description: 'Extra decontamination and a longer-lasting paint sealant.', includes: ['Everything in Exterior Refresh', 'Iron fallout treatment as needed', 'Targeted bug and road-film removal', 'Apply a paint sealant for added gloss and easier upkeep'] },
    ],
  },
  {
    id: 'combo', title: 'Interior + exterior combos', intro: 'Convenient inside-and-out packages with bundle savings.', tiers: [
      { title: 'The Daily Driver', prices: ['$169', '$199', '$229'], description: 'A complete maintenance detail for a car that needs a fresh reset.', includes: ['Interior Refresh', 'Exterior Refresh', 'A tidy cabin and clean, protected exterior in one visit'] },
      { title: 'The Full Reset', prices: ['$279', '$309', '$339'], description: 'Our most thorough inside-and-out clean for a vehicle ready for a reset.', includes: ['Interior Deep Clean', 'Exterior Detail & Protect', 'Extra care for normal buildup, crevices and paint contamination'] },
    ],
  },
]

const addOns = [
  { name: 'Moderate beach-sand removal', prices: ['$25', '$35', '$45'], note: 'Extra time for sand worked into carpet and mats.' },
  { name: 'Heavy / packed-in sand removal', prices: ['$50', '$75', '$100+'], note: 'Deeply embedded sand in seams, seat tracks or cargo areas; confirm after photos or inspection.' },
  { name: 'Pet hair removal', prices: ['$35', '$50', '$75+'], note: 'Price depends on how much hair is embedded in fabric and carpet.' },
  { name: 'Extra stain extraction', prices: ['$25', '$35', '$45+'], note: 'Targeted treatment beyond routine spot cleaning.' },
  { name: 'Bug, tar or sap removal', prices: ['$25', '$35', '$45+'], note: 'Targeted removal from affected exterior panels.' },
  { name: 'Odor treatment', prices: ['$45', '$45', '$45+'], note: 'After the odor source is cleaned; severe odors may need an estimate.' },
  { name: 'Headlight restoration', prices: ['$75', '$75', '$75'], note: 'Both headlights; final condition check before work.' },
]

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'Mobile Detailing in Beaufort, SC | Legendary', description: 'Mobile detailing for Beaufort, Port Royal and Lady’s Island. Explore services and clear pricing from Legendary Mobile Detailing.' },
  '/services': { title: 'Detailing Services & Prices | Beaufort, SC | Legendary', description: 'Compare interior, exterior and complete mobile detailing packages with clear size-based pricing in Beaufort, Port Royal and Lady’s Island, SC.' },
  '/about': { title: 'Meet John | Legendary Mobile Detailing in Beaufort, SC', description: 'Meet John, born and raised in Beaufort, and learn why he started Legendary Mobile Detailing after 40 years in corporate life.' },
  '/service-area': { title: 'Mobile Detailing Service Area | Beaufort County, SC', description: 'Mobile car detailing in Beaufort, Port Royal and Lady’s Island, South Carolina. See where Legendary Mobile Detailing comes to you.' },
  '/gallery': { title: 'Before & After Detailing Gallery | Legendary Mobile Detailing', description: 'See before and after mobile detailing transformations. Browse interior and exterior details from Legendary Mobile Detailing in Beaufort County, SC.' },
  '/quote': { title: 'Request a Detailing Quote | Beaufort, SC | Legendary', description: 'Contact Legendary Mobile Detailing for an interior, exterior or complete detail quote in Beaufort, Port Royal and Lady’s Island, SC.' },
}

const beforePhotoFiles = import.meta.glob<string>('../gallery_photos/car*-before.{avif,gif,jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
const afterPhotoFiles = import.meta.glob<string>('../gallery_photos/car*-after.{avif,gif,jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })

const currentPath = window.location.pathname.replace(/\/$/, '') || '/'

function Arrow() { return <span aria-hidden="true">↗</span> }

function PageMeta({ path }: { path: string }) {
  useEffect(() => {
    const meta = pageMeta[path]
    if (!meta) return
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://legendary-mobile-detailing.vercel.app${path === '/' ? '/' : path}`)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://legendary-mobile-detailing.vercel.app${path === '/' ? '/' : path}`)
  }, [path])
  return null
}

function Header({ path }: { path: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['/services', 'Services & pricing'], ['/gallery', 'Gallery'], ['/about', 'About John'], ['/service-area', 'Service area']]
  return <>
    <div className="announcement"><span className="announcement-star">✳</span> Mobile detailing in Beaufort, Port Royal &amp; Lady’s Island <a href="/services">View pricing <Arrow /></a></div>
    <header className="header">
      <a href="/" className="brand" aria-label="Legendary Mobile Detailing home"><img className="brand-logo" src="/legendary-mobile-detailing-logo.png" alt="Legendary Mobile Detailing" /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? '×' : '☰'}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {links.map(([href, label]) => <a key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="/quote" onClick={() => setMenuOpen(false)}>Request a quote <Arrow /></a>
      </nav>
    </header>
  </>
}

function Footer() {
  return <footer className="footer"><a href="/" className="brand footer-brand"><img className="brand-logo" src="/legendary-mobile-detailing-logo.png" alt="Legendary Mobile Detailing" /></a><span>Mobile detailing in Beaufort, SC.</span><div className="footer-links"><a href="/services">Services &amp; pricing</a><a href="/gallery">Gallery</a><a href="/about">About John</a><a href="/service-area">Service area</a><a href="/quote">Request a quote</a></div><small className="copyright">© 2026 Legendary Mobile Detailing</small></footer>
}

function Hero() {
  return <section className="hero">
    <div className="hero-image" role="img" aria-label="A beautifully detailed car on the road" /><div className="hero-wash" />
    <div className="hero-content"><div className="eyebrow"><span /> MOBILE AUTO DETAILING · BEAUFORT, SC</div><h1>Good as new.<br /><em>Feels like yours.</em></h1><p>Mobile car detailing in Beaufort, Port Royal and Lady’s Island, South Carolina. Thoughtful interior and exterior care, brought to your driveway.</p><div className="hero-actions"><a className="button button-accent" href="/services">Explore packages <Arrow /></a><a href="/service-area" className="text-link">Where we work <span>↓</span></a></div><div className="hero-proof"><div className="avatar-stack"><span>✳</span></div><div><strong>Thoughtful care, made convenient.</strong><small>Serving Beaufort County’s Sea Islands</small></div></div></div>
    <div className="hero-badge"><span>✳</span><strong>WE COME<br />TO YOU</strong><small>YOU KEEP YOUR DAY</small></div><div className="hero-caption">THOUGHTFUL CARE, DOWN TO THE LAST DETAIL <span>BEAUFORT COUNTY, SOUTH CAROLINA</span></div>
  </section>
}

function ServicesPage() {
  return <main className="page-main"><section className="services section">
    <div className="section-heading"><div><div className="eyebrow dark"><span /> MOBILE DETAILING PRICES</div><h1 className="page-title">Pick your kind<br /><em>of fresh.</em></h1></div><p>Choose interior, exterior or a complete inside-and-out detail. Prices are based on vehicle size and typical condition, with extra services listed upfront.</p></div>
    <div className="vehicle-key"><strong>Vehicle size:</strong> Sedan / coupe · Mid-size sedan / 2-row SUV · Large SUV / van. Three-row SUVs and passenger vans use the large-vehicle price. Lifted or oversized vehicles may need a custom quote.</div>
    {pricingCategories.map(category => <section className="price-category" key={category.id} aria-labelledby={`${category.id}-heading`}><div className="price-category-heading"><div><h2 id={`${category.id}-heading`}>{category.title}</h2><p>{category.intro}</p></div></div><div className="tier-grid">{category.tiers.map(tier => <article className="tier-card" key={tier.title}><div className="tier-card-heading"><h3>{tier.title}</h3><p>{tier.description}</p></div><ul className="tier-includes">{tier.includes.map(item => <li key={item}>{item}</li>)}</ul><dl className="vehicle-prices">{vehicleSizes.map((size, index) => <div key={size.key}><dt>{size.label}</dt><dd>{tier.prices[index]}</dd></div>)}</dl></article>)}</div></section>)}
    <div className="pricing-note"><strong>Condition matters.</strong> Listed prices cover routine maintenance and normal use. Heavy soil, severe stains, excess pet hair or packed-in sand take extra time; we’ll confirm any added cost before work begins.</div>
    <section className="addons" aria-labelledby="addons-heading"><div className="price-category-heading"><div><div className="eyebrow dark"><span /> THE EXTRA DETAILS</div><h2 id="addons-heading">Add-ons &amp; condition pricing</h2><p>Everyday loose sand is included with interior packages. Add-on prices apply when extra labor is needed.</p></div></div><div className="addon-table-wrap"><table className="addon-table"><thead><tr><th scope="col">Add-on</th>{vehicleSizes.map(size => <th scope="col" key={size.key}>{size.label}</th>)}</tr></thead><tbody>{addOns.map(item => <tr key={item.name}><th scope="row"><strong>{item.name}</strong><small>{item.note}</small></th>{item.prices.map((price, index) => <td key={`${item.name}-${vehicleSizes[index].key}`}>{price}</td>)}</tr>)}</tbody></table></div><p className="addon-footnote">Heavy sand and pet hair vary with how deeply they are embedded. Send a few photos for an accurate quote before we start.</p></section>
    <section className="faq" aria-labelledby="faq-heading"><div className="eyebrow dark"><span /> BEFORE YOUR DETAIL</div><h2 id="faq-heading">Good to <em>know.</em></h2><div className="faq-list"><details><summary>How much does mobile car detailing cost in Beaufort, SC?</summary><p>Interior and exterior refresh packages start at $89 each for sedans. A complete inside-and-out detail starts at $169 for a sedan. The final price depends on vehicle size, condition and any requested add-ons.</p></details><details><summary>Is beach-sand removal included?</summary><p>Ordinary loose sand is included with interior packages. Sand packed into carpet, mats, seat tracks or cargo areas may require an add-on; we’ll confirm the price based on vehicle size and condition before starting.</p></details><details><summary>Which vehicle size should I choose?</summary><p>Choose sedan/coupe for standard cars, mid-size for midsize sedans and two-row SUVs, and large for three-row SUVs and passenger vans. Lifted, oversized or unusually configured vehicles may need a custom quote.</p></details><details><summary>What areas do you serve?</summary><p>Mobile appointments are available in Beaufort, Port Royal and Lady’s Island, South Carolina. Ask us to confirm availability for your address.</p></details></div></section>
    <p className="page-cta"><a className="button button-accent" href="/quote">Request a detail <Arrow /></a></p>
  </section></main>
}

function AreaContent() {
  return <div className="area-grid"><article><h2>Beaufort, SC</h2><p>Interior and exterior mobile auto detailing for Beaufort drivers, from routine cleanups to a deeper cabin reset.</p></article><article><h2>Port Royal, SC</h2><p>Convenient driveway detailing in Port Royal, with extra care for sand, road film and daily-use buildup.</p></article><article><h2>Lady’s Island, SC</h2><p>Mobile car detailing on Lady’s Island with clear package prices for sedans, mid-size vehicles and large SUVs or vans.</p></article></div>
}

function ServiceAreaPage() {
  return <main className="page-main"><section className="service-area section"><div className="eyebrow dark"><span /> YOUR LOCAL MOBILE DETAILER</div><h1 className="page-title">Beaufort County,<br /><em>at your doorstep.</em></h1><p className="area-lede">Legendary Mobile Detailing brings car detailing to homes and workplaces in Beaufort, Port Royal and Lady’s Island, SC. Book an interior detail, exterior hand wash or complete vehicle reset without making a trip to a shop.</p><AreaContent /><p className="page-cta"><a className="button button-accent" href="/quote">Request a detail <Arrow /></a></p></section></main>
}

function QuotePage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [photoNames, setPhotoNames] = useState<string[]>([])
  const serviceOptions = ['Interior Refresh', 'Interior Deep Clean', 'Exterior Refresh', 'Exterior Detail & Protect', 'The Daily Driver (interior + exterior)', 'The Full Reset (interior + exterior)', 'Moderate sand removal', 'Heavy / packed-in sand removal', 'Pet hair removal', 'Stain extraction', 'Odor treatment', 'Headlight restoration', 'Bug, tar or sap removal']

  function toggleService(service: string) {
    setSelectedServices(current => current.includes(service) ? current.filter(item => item !== service) : [...current, service])
  }

  return <main className="page-main"><section className="quote-page section">
    <div className="eyebrow dark"><span /> TELL US WHAT YOU NEED</div>
    <h1 className="page-title">Request a<br /><em>detailing quote.</em></h1>
    <p className="quote-lede">Share a few details about you, your vehicle and a time that works. Photos are optional, but they can help us understand the vehicle’s condition.</p>
    <div className="quote-status" role="status"><strong>Online requests are not sending yet.</strong><span>The form is ready for the email connection. Until then, call or email John directly using the contact details alongside it.</span></div>
    <div className="quote-columns">
      <form className="quote-form" onSubmit={event => event.preventDefault()}>
        <fieldset className="quote-fieldset"><legend>How can John reach you?</legend><div className="quote-fields">
          <label className="quote-field"><span>Full name <b>*</b></span><input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
          <label className="quote-field"><span>Email address <b>*</b></span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
          <label className="quote-field"><span>Phone number <b>*</b></span><input name="phone" type="tel" autoComplete="tel" placeholder="(803) 555-0123" required /></label>
          <label className="quote-field"><span>Preferred date <b>*</b></span><input name="preferredDate" type="date" required /></label>
          <label className="quote-field"><span>Best time of day <b>*</b></span><select name="preferredTime" defaultValue="" required><option value="" disabled>Select a time</option><option>Morning (8 am–12 pm)</option><option>Afternoon (12 pm–4 pm)</option><option>Late afternoon (4 pm–6 pm)</option><option>Flexible</option></select></label>
        </div></fieldset>

        <fieldset className="quote-fieldset"><legend>Where is the vehicle?</legend><div className="quote-fields">
          <label className="quote-field quote-field-wide"><span>Service address <b>*</b></span><input name="address" type="text" autoComplete="street-address" placeholder="Street address" required /></label>
          <label className="quote-field"><span>City or area <b>*</b></span><input name="city" type="text" autoComplete="address-level2" placeholder="Beaufort, Port Royal, or Lady’s Island" required /></label>
          <label className="quote-field"><span>ZIP code</span><input name="zip" type="text" inputMode="numeric" autoComplete="postal-code" placeholder="29902" /></label>
        </div></fieldset>

        <fieldset className="quote-fieldset"><legend>Tell us about the vehicle</legend><div className="quote-fields">
          <label className="quote-field"><span>Year <b>*</b></span><input name="vehicleYear" type="number" min="1950" max={new Date().getFullYear()} placeholder="2022" required /></label>
          <label className="quote-field"><span>Make <b>*</b></span><input name="vehicleMake" type="text" placeholder="Toyota" required /></label>
          <label className="quote-field"><span>Model <b>*</b></span><input name="vehicleModel" type="text" placeholder="Camry" required /></label>
          <label className="quote-field"><span>Vehicle size <b>*</b></span><select name="vehicleSize" defaultValue="" required><option value="" disabled>Select vehicle size</option><option>Sedan / coupe</option><option>Mid-size sedan / 2-row SUV</option><option>Large SUV / van</option><option>Other / not sure</option></select></label>
        </div></fieldset>

        <fieldset className="quote-fieldset"><legend>Which service(s) are you interested in?</legend><details className="service-picker"><summary>{selectedServices.length ? `${selectedServices.length} service${selectedServices.length === 1 ? '' : 's'} selected` : 'Choose one or more services'}</summary><div className="service-options">{serviceOptions.map(service => <label key={service}><input type="checkbox" checked={selectedServices.includes(service)} onChange={() => toggleService(service)} /><span>{service}</span></label>)}</div></details><small className="field-help">Select as many as you like. John will confirm the best package and any condition-based add-ons with you.</small></fieldset>

        <fieldset className="quote-fieldset"><legend>Anything else we should know?</legend><label className="quote-field"><span>Notes <small>(optional)</small></span><textarea name="notes" rows={4} placeholder="Tell us about stains, sand, pet hair, or anything else you’d like cleaned." /></label></fieldset>

        <fieldset className="quote-fieldset"><legend>Add photos <small>(optional)</small></legend><label className="quote-field file-field"><span>Choose vehicle photos</span><input name="photos" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={event => setPhotoNames(Array.from(event.target.files ?? [], file => file.name))} /><small>Photos can help us estimate sand, pet hair, stains, or other extra cleaning.</small></label>{photoNames.length > 0 && <p className="selected-files">{photoNames.length} photo{photoNames.length === 1 ? '' : 's'} selected: {photoNames.join(', ')}</p>}</fieldset>

        <button className="button button-accent quote-submit" type="submit" disabled aria-describedby="quote-submit-note">Send quote request <Arrow /></button>
        <p className="submit-note" id="quote-submit-note">Online sending will be enabled after the Resend email service and domain are connected.</p>
      </form>

      <aside className="quote-contact"><span className="about-kicker">NEED A QUOTE TODAY?</span><h2>Reach John<br /><em>directly.</em></h2><p>Online form delivery is being set up. Call, text, or email to request your detail in the meantime.</p><a href="tel:+18034235698">(803) 423-5698</a><a href="mailto:legendarydetailing843@gmail.com">legendarydetailing843@gmail.com</a><small>Serving Beaufort, Port Royal and Lady’s Island, SC.</small></aside>
    </div>
  </section></main>
}

const vehicleDetails: Record<string, { vehicle: string; service: string; detail: string }> = {
  car01: { vehicle: 'Sport sedan', service: 'Interior refresh', detail: 'A brighter cabin with clean seats, mats and trim.' },
  car02: { vehicle: 'Family SUV', service: 'Interior deep clean', detail: 'A careful reset for everyday family use.' },
  car03: { vehicle: 'Pickup truck', service: 'Exterior detail', detail: 'A hand-washed finish with renewed gloss.' },
  car04: { vehicle: 'Performance coupe', service: 'Full detail', detail: 'A polished finish, inside and out.' },
}

function collectGalleryVehicles() {
  const pairs = new Map<string, { before?: string; after?: string }>()
  for (const [path, url] of [...Object.entries(beforePhotoFiles), ...Object.entries(afterPhotoFiles)]) {
    const match = path.match(/car(\d+)-(before|after)\.[^/]+$/i)
    if (!match) continue
    const id = `car${match[1]}`
    const pair = pairs.get(id) ?? {}
    pair[match[2].toLowerCase() as 'before' | 'after'] = url
    pairs.set(id, pair)
  }
  if (pairs.size === 0) for (const id of ['car01', 'car02', 'car03', 'car04']) pairs.set(id, {})
  return [...pairs.entries()].sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true })).map(([id, photos]) => ({
    id,
    before: photos.before,
    after: photos.after,
    ...(vehicleDetails[id] ?? { vehicle: `Vehicle ${Number(id.slice(3))}`, service: 'Mobile detail', detail: 'Before and after photos from a recent detail.' }),
  }))
}

const galleryVehicles = collectGalleryVehicles()

function GalleryGrid() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})
  return <div className="gallery-grid">{galleryVehicles.map((item, index) => <article className="gallery-card" key={item.id}>
    <button className={`gallery-pair${revealed[item.id] ? ' is-revealed' : ''}`} type="button" onClick={() => setRevealed(current => ({ ...current, [item.id]: !current[item.id] }))} aria-pressed={Boolean(revealed[item.id])} aria-label={`${item.vehicle} ${item.service} before and after. Tap to ${revealed[item.id] ? 'show before' : 'show after'}.`}>
      {item.before ? <img className="gallery-before" src={item.before} alt={`${item.vehicle} before ${item.service.toLowerCase()}`} loading={index < 2 ? 'eager' : 'lazy'} /> : <span className="gallery-placeholder gallery-before"><strong>Before photo</strong><small>{item.id}-before.webp</small><i>Photo pair ready when you are</i></span>}
      {item.after ? <img className="gallery-after" src={item.after} alt="" aria-hidden="true" loading={index < 2 ? 'eager' : 'lazy'} /> : <span className="gallery-placeholder gallery-after" aria-hidden="true"><strong>After photo</strong><small>{item.id}-after.webp</small><i>Add the matching after photo</i></span>}
      <span className="gallery-label label-before">Before</span><span className="gallery-label label-after">After</span>
      <span className="gallery-hint">Hover or tap to compare</span>
    </button>
    <div className="gallery-card-copy"><div><span>{item.vehicle}</span><span>{item.service}</span></div><p>{item.detail}</p></div>
  </article>)}</div>
}

function GalleryPage() {
  return <main className="page-main"><section className="gallery-page section"><div className="eyebrow dark"><span /> THE FINISH, SIDE BY SIDE</div><h1 className="page-title">A little care.<br /><em>A big difference.</em></h1><p className="gallery-lede">Compare each vehicle before and after its detail. Add photo pairs to the gallery_photos folder and they’ll appear here automatically.</p><GalleryGrid /><p className="gallery-back"><a className="text-link" href="/services">Explore our detailing packages <Arrow /></a></p></section></main>
}

function HomePage() {
  return <main><Hero /></main>
}

function AboutPage() {
  return <main className="page-main"><section className="about-story section">
    <div className="eyebrow dark"><span /> A BEAUFORT-RAISED DETAILER</div>
    <h1 className="page-title">A new chapter,<br /><em>right at home.</em></h1>
    <p className="about-lede">I’m John. I was born and raised in Beaufort, and after 40 years in corporate life, I recently stepped away to build a business of my own: Legendary Mobile Detailing.</p>
    <div className="about-story-grid">
      <article><span className="about-kicker">WHY DETAILING</span><h2>Work you can<br /><em>see and feel.</em></h2><p>I’ve always been someone who notices the details. What I love about detailing is the immediate gratification: you put in the care, step back, and see the results right away. Every clean surface and finished panel tells you the work mattered.</p></article>
      <aside className="about-family"><span className="about-kicker">MY TOUGHEST CUSTOMER</span><h2>My oldest daughter.</h2><p>She has three kids who love to get food and sand all over the car. I take care of her every time—and that keeps me ready for the everyday messes Beaufort drivers bring me.</p><span className="family-mark" aria-hidden="true">✳</span></aside>
    </div>
    <section className="about-local"><div className="eyebrow"><span /> BUILT HERE, ONE DETAIL AT A TIME</div><h2>Local roots.<br /><em>Word-of-mouth growth.</em></h2><p>Legendary is a brand-new business, and I’m starting with the neighbors and drivers who give me a chance. My goal is to earn loyal customers through careful work, then grow locally and organically through word of mouth.</p><div className="about-actions"><a className="button button-accent" href="/services">Explore services <Arrow /></a><a className="button about-quote" href="/quote">Talk with John <Arrow /></a></div></section>
  </section></main>
}

function NotFoundPage() {
  return <main className="not-found section"><div className="eyebrow dark"><span /> PAGE NOT FOUND</div><h1 className="page-title">Let’s get you<br /><em>back on track.</em></h1><a className="button button-accent" href="/">Go to home <Arrow /></a></main>
}

export default function App() {
  const page = pageMeta[currentPath] ? currentPath : ''
  return <><PageMeta path={page} /><Header path={page} />{page === '/' ? <HomePage /> : page === '/services' ? <ServicesPage /> : page === '/about' ? <AboutPage /> : page === '/service-area' ? <ServiceAreaPage /> : page === '/gallery' ? <GalleryPage /> : page === '/quote' ? <QuotePage /> : <NotFoundPage />}<Footer /></>
}
