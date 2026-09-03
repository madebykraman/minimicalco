'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, Plus, X } from 'lucide-react'
import Link from 'next/link'
import BrandLogo from './components/BrandLogo'
import Reveal from './components/Reveal'
import ThemeToggle from './components/ThemeToggle'

const work = [
  { n: '01', name: 'WHIFFF', slug: 'whifff', type: 'Brand identity · Digital', year: '2026', tone: 'violet' },
  { n: '02', name: 'Enchanted Vows', slug: 'enchanted-vows', type: 'Identity · Film', year: '2025', tone: 'paper' },
  { n: '03', name: 'Lucky Paul', slug: 'lucky-paul', type: 'Brand · Photography', year: '2024', tone: 'ink' },
  { n: '04', name: 'Health Seva', slug: 'health-seva', type: 'Communication · Campaign', year: '2024', tone: 'blue' },
  { n: '05', name: 'PawPerity', slug: 'pawperity', type: 'Packaging · Brand', year: '2024', tone: 'sand' },
  { n: '06', name: 'Jaano Junction', slug: 'jaano-junction', type: 'Event · Identity', year: '2023', tone: 'brick' },
]

const capabilities = [
  ['01', 'Strategy', 'Positioning, naming, architecture, research and creative direction.'],
  ['02', 'Identity', 'Visual identity, art direction, systems and brand guidelines.'],
  ['03', 'Digital', 'Websites, digital experiences, campaigns and interfaces.'],
  ['04', 'Production', 'Photography, film, editing, motion and post-production.'],
]

const principles = [
  ['01', 'Clarity first', 'Find the useful idea before adding the visual language around it.'],
  ['02', 'One studio', 'Strategy, design and production stay close so the idea does not get diluted.'],
  ['03', 'Made to live', 'Build identities that work across screens, spaces, objects and moving images.'],
]

const faqs = [
  ['What is Minimical?', 'An independent creative studio working across strategy, identity, digital design and production.'],
  ['What kind of work do you take on?', 'Brand identities, digital experiences, campaigns, packaging, photography, film, motion and creative direction.'],
  ['Can one project cover strategy through production?', 'Yes. The studio can stay involved from the first strategic question through identity, digital and final production.'],
  ['Where are you based?', 'Patna, Bihar, India. The studio works with clients and collaborators across India and internationally.'],
  ['How do I start?', 'Send an email with what you are building, where you are stuck and what you need.'],
]

export default function Home() {
  const [menu, setMenu] = useState(false)
  const [faq, setFaq] = useState<number | null>(null)

  return (
    <main className="studioPage">
      <header className="studioHeader">
        <Link href="#top" className="studioLogo" aria-label="The Minimical & Co."><BrandLogo /></Link>
        <nav className="studioNav" aria-label="Primary navigation">
          <Link href="#work">Work</Link>
          <Link href="#studio">Studio</Link>
          <Link href="#capabilities">Capabilities</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className="studioHeaderRight">
          <ThemeToggle />
          <Link className="startLink" href="mailto:contact@minimical.online?subject=Project%20enquiry">Start a project <ArrowUpRight size={14} /></Link>
          <button className="mobileTrigger" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu}>
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menu && <nav className="mobileNav">
        <Link href="#work" onClick={() => setMenu(false)}>Work</Link>
        <Link href="#studio" onClick={() => setMenu(false)}>Studio</Link>
        <Link href="#capabilities" onClick={() => setMenu(false)}>Capabilities</Link>
        <Link href="#contact" onClick={() => setMenu(false)}>Contact</Link>
        <ThemeToggle />
      </nav>}

      <section className="studioHero" id="top">
        <div className="heroRail">
          <span>Independent creative studio</span>
          <span>Patna · India</span>
          <span>01 / 08</span>
        </div>
        <div className="heroMain">
          <div className="heroKicker">Brand · Digital · Production</div>
          <h1>Ideas, made<br />clear.</h1>
          <p>Minimical is a design and production studio for brands that need a sharper point of view and a way to bring it to life.</p>
          <Link className="heroLink" href="#work">View selected work <ArrowUpRight size={15} /></Link>
        </div>
        <div className="heroIndexPanel" aria-hidden="true">
          <div className="indexTop"><span>THE MINIMICAL &amp; CO.</span><span>2026</span></div>
          <div className="indexLines"><span></span><span></span><span></span><span></span></div>
          <div className="indexWord">MINIMICAL</div>
          <div className="indexBottom"><span>STRATEGY / IDENTITY / DIGITAL</span><span>01</span></div>
        </div>
        <div className="heroFooter"><span>Scroll to explore</span><span>Independent / Direct / Multidisciplinary</span></div>
      </section>

      <section className="studioIntro" id="studio">
        <Reveal>
          <div className="sectionLabel"><span>02 / The studio</span><span>About Minimical</span></div>
          <div className="introGrid">
            <h2>Thinking and making belong in the same room.</h2>
            <div className="introCopy">
              <p>Minimical is an independent creative studio built around a simple principle: the idea should stay close to the people making it.</p>
              <p>We move between strategy, identity, digital and production without passing the work from one department to another.</p>
              <Link className="textLink" href="/about">About the studio <ArrowUpRight size={14} /></Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="workSection" id="work">
        <Reveal>
          <div className="sectionLabel"><span>03 / Selected work</span><Link href="/projects">View archive <ArrowUpRight size={14} /></Link></div>
          <div className="workHeading"><h2>Recent work</h2><p>A selection of identities, digital experiences, campaigns and productions made by the studio.</p></div>
        </Reveal>
        <div className="workList">
          {work.map((item) => (
            <Reveal key={item.slug}>
              <Link className={`workRow ${item.tone}`} href={`/projects/${item.slug}`}>
                <span className="workNumber">{item.n}</span>
                <div className="workName"><h3>{item.name}</h3><p>{item.type}</p></div>
                <span className="workYear">{item.year}</span>
                <span className="workMark" aria-hidden="true">{item.name.slice(0, 2).toUpperCase()}</span>
                <ArrowUpRight className="workArrow" size={18} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="disciplineBand" aria-label="Disciplines">
        <span>Strategy</span><span>Identity</span><span>Digital</span><span>Photography</span><span>Film</span><span>Motion</span>
      </section>

      <section className="capabilitySection" id="capabilities">
        <Reveal>
          <div className="sectionLabel"><span>04 / Capabilities</span><span>What we do</span></div>
          <div className="capabilityIntro"><h2>One studio.<br />Several ways in.</h2><p>Choose a single discipline or bring the studio in from the beginning. The approach changes with the problem.</p></div>
        </Reveal>
        <div className="capabilityRows">
          {capabilities.map(([n, title, desc]) => (
            <Reveal key={n}>
              <Link href="/services"><span>{n}</span><h3>{title}</h3><p>{desc}</p><ArrowUpRight size={18} /></Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="practiceSection">
        <div className="practicePanel">
          <span>05 / The practice</span>
          <div className="practiceGrid"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
          <strong>IDEA<br />TO<br />OUTPUT</strong>
          <small>Strategy / Identity / Expression / Production</small>
        </div>
        <Reveal><div className="practiceCopy"><span>How we work</span><h2>Small studio.<br />Close collaboration.</h2><p>You work with the people actually making the work. Fewer handoffs, faster decisions and a clearer line from the first question to the final frame.</p><div className="practiceStats"><div><strong>500+</strong><small>projects</small></div><div><strong>06+</strong><small>years</small></div><div><strong>01</strong><small>studio</small></div></div><Link className="textLink" href="/about">More about the practice <ArrowUpRight size={14} /></Link></div></Reveal>
      </section>

      <section className="principlesSection">
        <Reveal><div className="sectionLabel"><span>06 / Point of view</span><span>How we think</span></div><h2>Good work is<br />usually the result of <span>good decisions.</span></h2></Reveal>
        <div className="principleList">{principles.map(([n, title, desc]) => <Reveal key={n}><article><span>{n}</span><h3>{title}</h3><p>{desc}</p></article></Reveal>)}</div>
      </section>

      <section className="faqSection">
        <Reveal><div className="sectionLabel"><span>07 / Questions</span><span>Before we begin</span></div><h2>A few useful<br />answers.</h2></Reveal>
        <div className="faqList">{faqs.map(([q, a], i) => <div className="faqRow" key={q}><button onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span>{faq === i ? <X size={17} /> : <Plus size={17} />}</button>{faq === i && <p>{a}</p>}</div>)}</div>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactLabel"><span>08 / Start a project</span><span>Patna · India · Worldwide</span></div>
        <div className="contactGrid"><div><p>Have a project, a problem or simply a good starting point?</p><h2>Let’s make<br />something useful.</h2></div><Link href="/contact">Start the conversation <ArrowUpRight size={20} /></Link></div>
      </section>

      <footer className="studioFooter">
        <div className="footerBrand"><BrandLogo /></div>
        <div><span>Studio</span><p>Independent creative studio<br />Patna, Bihar, India</p></div>
        <div><span>Navigate</span><Link href="#work">Work</Link><Link href="#studio">Studio</Link><Link href="#capabilities">Capabilities</Link><Link href="#contact">Contact</Link></div>
        <div><span>Connect</span><a href="https://www.instagram.com/theminimical/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.linkedin.com/company/theminimical/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <small>© 2026 The Minimical &amp; Co.</small>
      </footer>
    </main>
  )
}
