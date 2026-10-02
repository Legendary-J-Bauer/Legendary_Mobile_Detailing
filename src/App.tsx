import { useState } from 'react'

const vehicleSizes = [
  { key: 'sedan', label: 'Sedan / coupe' },
  { key: 'midsize', label: 'Mid-size sedan / 2-row SUV' },
  { key: 'large', label: 'Large SUV / van' },
]

const pricingCategories = [
  {
    id: 'interior',
    title: 'Interior detailing',
    intro: 'A cleaner cabin, from the everyday reset to a deeper clean.',
    tiers: [
      {
        title: 'Interior Refresh',
        prices: ['$89', '$109', '$129'],
        description: 'For regularly maintained vehicles that need a thorough tidy-up.',
        includes: ['Vacuum seats, carpets, mats and cargo area', 'Wipe down dashboard, console, doors and cupholders', 'Clean interior glass and floor mats', 'Remove ordinary loose sand, crumbs and debris'],
      },
      {
        title: 'Interior Deep Clean',
        prices: ['$149', '$169', '$199'],
        description: 'For built-up grime, spills or an interior that needs extra attention.',
        includes: ['Everything in Interior Refresh', 'Detail crevices and hard-to-reach areas', 'Spot-treat common fabric marks', 'Shampoo and extract carpets or fabric where appropriate'],
      },
    ],
  },
  {
    id: 'exterior',
    title: 'Exterior detailing',
    intro: 'A careful hand wash with options for added gloss and protection.',
    tiers: [
      {
        title: 'Exterior Refresh',
        prices: ['$89', '$109', '$129'],
        description: 'A clean, crisp finish for vehicles that are in regular upkeep.',
        includes: ['Foam pre-rinse and careful hand wash', 'Clean wheels, tires and exterior glass', 'Hand dry and apply spray sealant', 'Light bug residue removal'],
      },
      {
        title: 'Exterior Detail & Protect',
        prices: ['$139', '$159', '$179'],
        description: 'Extra decontamination and a longer-lasting paint sealant.',
        includes: ['Everything in Exterior Refresh', 'Iron fallout treatment as needed', 'Targeted bug and road-film removal', 'Apply a paint sealant for added gloss and easier upkeep'],
      },
    ],
  },
  {
    id: 'combo',
    title: 'Interior + exterior combos',
    intro: 'Convenient inside-and-out packages with bundle savings.',
    tiers: [
      {
        title: 'The Daily Driver',
        prices: ['$169', '$199', '$229'],
        description: 'A complete maintenance detail for a car that needs a fresh reset.',
        includes: ['Interior Refresh', 'Exterior Refresh', 'A tidy cabin and clean, protected exterior in one visit'],
      },
      {
        title: 'The Full Reset',
        prices: ['$279', '$309', '$339'],
        description: 'Our most thorough inside-and-out clean for a vehicle ready for a reset.',
        includes: ['Interior Deep Clean', 'Exterior Detail & Protect', 'Extra care for normal buildup, crevices and paint contamination'],
      },
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

function Arrow() { return <span aria-hidden="true">↗</span> }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
    <div className="announcement"><span className="announcement-star">✳</span> Mobile detailing in Beaufort, Port Royal &amp; Lady’s Island <a href="#services">View pricing <Arrow /></a></div>
    <header className="header">
      <a href="#top" className="brand" aria-label="Legendary Mobile Detailing home"><img className="brand-logo" src="/legendary-mobile-detailing-logo.png" alt="Legendary Mobile Detailing" /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? '×' : '☰'}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation"><a href="#services" onClick={() => setMenuOpen(false)}>Services &amp; pricing</a><a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a><a href="#service-area" onClick={() => setMenuOpen(false)}>Service area</a><a className="nav-cta" href="#booking">Request a detail <Arrow /></a></nav>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-image" role="img" aria-label="A beautifully detailed car on the road" />
        <div className="hero-wash" />
        <div className="hero-content"><div className="eyebrow"><span /> MOBILE AUTO DETAILING · BEAUFORT, SC</div><h1>Good as new.<br /><em>Feels like yours.</em></h1><p>Mobile car detailing in Beaufort, Port Royal and Lady’s Island, South Carolina. Thoughtful interior and exterior care, brought to your driveway.</p><div className="hero-actions"><a className="button button-accent" href="#services">Explore packages <Arrow /></a><a href="#service-area" className="text-link">Where we work <span>↓</span></a></div><div className="hero-proof"><div className="avatar-stack"><span>✳</span></div><div><strong>Thoughtful care, made convenient.</strong><small>Serving Beaufort County’s Sea Islands</small></div></div></div>
        <div className="hero-badge"><span>✳</span><strong>WE COME<br />TO YOU</strong><small>YOU KEEP YOUR DAY</small></div>
        <div className="hero-caption">THOUGHTFUL CARE, DOWN TO THE LAST DETAIL <span>BEAUFORT COUNTY, SOUTH CAROLINA</span></div>
      </section>
      <section className="trust-strip"><div><span className="trust-icon">✳</span><strong>We come to you</strong><small>Home, office, wherever</small></div><div><span className="trust-icon">◷</span><strong>Clear, size-based pricing</strong><small>Choose the right fit</small></div><div><span className="trust-icon">✧</span><strong>Care in every detail</strong><small>Thoughtful by design</small></div><div><span className="trust-icon">♡</span><strong>Local service</strong><small>Beaufort, Port Royal &amp; Lady’s Island</small></div></section>

      <section className="services section" id="services">
        <div className="section-heading"><div><div className="eyebrow dark"><span /> MOBILE DETAILING PRICES</div><h2>Pick your kind<br /><em>of fresh.</em></h2></div><p>Choose interior, exterior or a complete inside-and-out detail. Prices are based on vehicle size and typical condition, with extra services listed upfront.</p></div>
        <div className="vehicle-key"><strong>Vehicle size:</strong> Sedan / coupe · Mid-size sedan / 2-row SUV · Large SUV / van. Three-row SUVs and passenger vans use the large-vehicle price. Lifted or oversized vehicles may need a custom quote.</div>
        {pricingCategories.map(category => <section className="price-category" key={category.id} aria-labelledby={`${category.id}-heading`}>
          <div className="price-category-heading"><div><h3 id={`${category.id}-heading`}>{category.title}</h3><p>{category.intro}</p></div></div>
          <div className="tier-grid">{category.tiers.map(tier => <article className="tier-card" key={tier.title}>
            <div className="tier-card-heading"><h4>{tier.title}</h4><p>{tier.description}</p></div>
            <ul className="tier-includes">{tier.includes.map(item => <li key={item}>{item}</li>)}</ul>
            <dl className="vehicle-prices">{vehicleSizes.map((size, index) => <div key={size.key}><dt>{size.label}</dt><dd>{tier.prices[index]}</dd></div>)}</dl>
          </article>)}</div>
        </section>)}
        <div className="pricing-note"><strong>Condition matters.</strong> Listed prices cover routine maintenance and normal use. Heavy soil, severe stains, excess pet hair or packed-in sand take extra time; we’ll confirm any added cost before work begins.</div>
        <section className="addons" aria-labelledby="addons-heading">
          <div className="price-category-heading"><div><div className="eyebrow dark"><span /> THE EXTRA DETAILS</div><h3 id="addons-heading">Add-ons &amp; condition pricing</h3><p>Everyday loose sand is included with interior packages. Add-on prices apply when extra labor is needed.</p></div></div>
          <div className="addon-table-wrap"><table className="addon-table"><thead><tr><th scope="col">Add-on</th>{vehicleSizes.map(size => <th scope="col" key={size.key}>{size.label}</th>)}</tr></thead><tbody>{addOns.map(item => <tr key={item.name}><th scope="row"><strong>{item.name}</strong><small>{item.note}</small></th>{item.prices.map((price, index) => <td key={`${item.name}-${vehicleSizes[index].key}`}>{price}</td>)}</tr>)}</tbody></table></div>
          <p className="addon-footnote">Heavy sand and pet hair vary with how deeply they are embedded. Send a few photos for an accurate quote before we start.</p>
        </section>
      </section>

      <section className="approach" id="approach"><div className="approach-photo"><div className="photo-label">THE LITTLE THINGS<br />MAKE THE DIFFERENCE</div></div><div className="approach-copy"><div className="eyebrow"><span /> A BETTER KIND OF DETAIL</div><h2>Care you can<br /><em>feel.</em></h2><p className="approach-lede">A clean car should feel like a deep breath. No rush, no shortcuts, no mystery add-ons. Just careful work, clear pricing and pride in the finish.</p><div className="approach-points"><div><span>01</span><p><strong>Made for your day</strong><small>Mobile detailing at your home or workplace.</small></p></div><div><span>02</span><p><strong>Thoughtful by nature</strong><small>Careful hands and products selected for your vehicle.</small></p></div><div><span>03</span><p><strong>Good from start to finish</strong><small>We explain condition-based add-ons before work begins.</small></p></div></div><a className="text-link light-link" href="#service-area">See our service area <Arrow /></a></div></section>

      <section className="service-area section" id="service-area"><div className="eyebrow dark"><span /> YOUR LOCAL MOBILE DETAILER</div><h2>Beaufort County,<br /><em>at your doorstep.</em></h2><p className="area-lede">Legendary Mobile Detailing brings car detailing to homes and workplaces in Beaufort, Port Royal and Lady’s Island, SC. Book an interior detail, exterior hand wash or complete vehicle reset without making a trip to a shop.</p><div className="area-grid"><article><h3>Beaufort, SC</h3><p>Interior and exterior mobile auto detailing for Beaufort drivers, from routine cleanups to a deeper cabin reset.</p></article><article><h3>Port Royal, SC</h3><p>Convenient driveway detailing in Port Royal, with extra care for sand, road film and daily-use buildup.</p></article><article><h3>Lady’s Island, SC</h3><p>Mobile car detailing on Lady’s Island with clear package prices for sedans, mid-size vehicles and large SUVs or vans.</p></article></div></section>

      <section className="faq section" id="faq"><div className="eyebrow dark"><span /> BEFORE YOUR DETAIL</div><h2>Good to <em>know.</em></h2><div className="faq-list"><details><summary>How much does mobile car detailing cost in Beaufort, SC?</summary><p>Interior and exterior refresh packages start at $89 each for sedans. A complete inside-and-out detail starts at $169 for a sedan. The final price depends on vehicle size, condition and any requested add-ons.</p></details><details><summary>Is beach-sand removal included?</summary><p>Ordinary loose sand is included with interior packages. Sand packed into carpet, mats, seat tracks or cargo areas may require an add-on; we’ll confirm the price based on vehicle size and condition before starting.</p></details><details><summary>Which vehicle size should I choose?</summary><p>Choose sedan/coupe for standard cars, mid-size for midsize sedans and two-row SUVs, and large for three-row SUVs and passenger vans. Lifted, oversized or unusually configured vehicles may need a custom quote.</p></details><details><summary>What areas do you serve?</summary><p>Mobile appointments are available in Beaufort, Port Royal and Lady’s Island, South Carolina. Ask us to confirm availability for your address.</p></details></div></section>

      <section className="booking" id="booking"><div className="booking-orb orb-one"/><div className="booking-orb orb-two"/><div className="eyebrow"><span /> THE NEXT STEP</div><h2>Ready for a<br /><em>fresh start?</em></h2><p>Call or text <a href="tel:+18034235698">(803) 423-5698</a> or email <a href="mailto:legendarydetailing843@gmail.com">legendarydetailing843@gmail.com</a> to request a detail in Beaufort, Port Royal or Lady’s Island.</p><div className="booking-actions"><a className="button button-accent" href="tel:+18034235698">Call or text <Arrow /></a><a className="button booking-email" href="mailto:legendarydetailing843@gmail.com">Email for a quote <Arrow /></a></div><small className="booking-footnote">Clear pricing. Careful work. Right in your driveway.</small></section>
    </main>
    <footer className="footer"><a href="#top" className="brand footer-brand"><img className="brand-logo" src="/legendary-mobile-detailing-logo.png" alt="Legendary Mobile Detailing" /></a><span>Mobile detailing in Beaufort, SC.</span><div className="footer-links"><a href="#services">Services &amp; pricing</a><a href="#service-area">Service area</a><a href="#top">Back to top ↑</a></div><small className="copyright">© 2026 Legendary Mobile Detailing</small></footer>
  </>
}
