'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus, X } from 'lucide-react'

const projects = [
  { category: 'Fragrance / Brand / Digital', title: 'WHIFFF', year: '2026', text: 'A fragrance universe built around feeling, memory and the rituals of scent.', cls: 'p1' },
  { category: 'Wedding / Brand Identity', title: 'Enchanted Vows', year: '2025', text: 'A cinematic identity for wedding films and photography, built around intimacy and timeless frames.', cls: 'p2' },
  { category: 'Healthcare / Communication', title: 'Health Seva', year: '2025', text: 'A clearer visual language for a healthcare service built around access, trust and human connection.', cls: 'p3' },
  { category: 'Packaging / Brand', title: 'PawPerity', year: '2025', text: 'A considered packaging system that turns an everyday pet essential into a memorable brand touchpoint.', cls: 'p4' },
  { category: 'Event / Visual Identity', title: 'Jaano Junction', year: '2025', text: 'A civic townhall identity designed to make conversation, participation and public dialogue visible.', cls: 'p5' },
]

const services = [
  ['01', 'Brand Identity', 'Positioning, naming, visual identity, art direction and brand systems that give an idea a recognisable point of view.'],
  ['02', 'Digital Design', 'Websites and digital experiences where strategy, interaction, typography and visual craft operate as one system.'],
  ['03', 'Motion Design', 'Motion systems, title design, social films, transitions and visual narratives built to give brands rhythm.'],
  ['04', 'Film & Production', 'Creative direction, cinematography, production, editing and post for films that feel considered from first frame to last.'],
  ['05', 'Photography', 'Campaign, product, portrait, lifestyle and editorial imagery shaped around the identity of the work.'],
]

const faqs = [
  ['What does Minimical do?', 'Minimical is an independent creative practice working across branding, digital design, motion, photography and film.'],
  ['What kind of clients do you work with?', 'Startups, founders, independent brands, cultural projects and established businesses that care about how their ideas are made visible.'],
  ['Can one project cover strategy, design and production?', 'Yes. Projects can begin with a loose brief and move through strategy, identity, digital, motion and production as far as the idea requires.'],
  ['Where is Minimical based?', 'Patna, Bihar, India. The studio works remotely with clients and collaborators beyond its home city.'],
  ['How does a project start?', 'A short conversation establishes the problem, ambition, scope and timing. The engagement is then shaped around the actual needs of the project.'],
  ['Do you take smaller projects?', 'Yes, when the idea and scope make sense. A focused identity, campaign, website or film can be approached independently.'],
]

const clients = ['WHIFFF', 'Health Seva', 'PawPerity', 'Sampann Gurukul', 'Enchanted Vows', 'Jaano Junction', 'Lucky Paul Photography', 'Minimical Studio Films']

export default function Home() {
  const [menu, setMenu] = useState(false)
  const [open, setOpen] = useState<number | null>(null)
  const [projectIndex, setProjectIndex] = useState(0)
  const nextProject = () => setProjectIndex((i) => Math.min(i + 1, projects.length - 1))
  const previousProject = () => setProjectIndex((i) => Math.max(i - 1, 0))

  return <main>
    <header className="nav">
      <a className="wordmark" href="#top">THE MINIMICAL <span>CO.</span></a>
      <nav className="desktopNav"><a href="#about">About</a><a href="#projects">Projects</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
      <a className="call desktopNav" href="mailto:contact@minimical.online">Start a project <ArrowUpRight size={15} /></a>
      <button className="menuBtn" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? <X size={20} /> : 'MENU'}</button>
    </header>

    {menu && <div className="mobileMenu"><a href="#about" onClick={() => setMenu(false)}>About</a><a href="#projects" onClick={() => setMenu(false)}>Projects</a><a href="#services" onClick={() => setMenu(false)}>Services</a><a href="#contact" onClick={() => setMenu(false)}>Contact</a></div>}

    <section className="hero" id="top">
      <div className="meta"><span>Since 2022</span><span>Patna, India</span><span>Independent Creative Practice</span></div>
      <div className="heroVisual" aria-hidden="true"><div className="orbit o1" /><div className="orbit o2" /><div className="orbit o3" /><div className="orbitalType">IDENTITY · DIGITAL · MOTION · FILM · PHOTOGRAPHY ·</div><div className="heroDot" /></div>
      <div className="heroCopy"><h1>Design &<br /><i>Creative</i><br />Studio</h1><p>We build brands, digital experiences, moving images and films for people making something worth remembering.</p><a href="#about" className="circleLink">Explore <span>↓</span></a></div>
    </section>

    <section className="process" id="about"><div className="sectionHead"><span>01 / Approach</span><h2>Ideas become visible<br /><i>when everything aligns.</i></h2></div><div className="processGrid">{[['Discover','We understand the ambition, audience, context and tension behind the brief.'],['Define','We find the clearest idea and establish a visual direction around it.'],['Create','We turn the direction into identities, images, interfaces, motion and moving work.'],['Evolve','We refine the system so it can live, grow and stay recognisably yours.']].map(([title,text],i)=><article key={title}><small>0{i+1}</small><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="projects" id="projects"><div className="sectionHead"><span>02 / Selected Projects</span><h2>Work with a<br /><i>point of view.</i></h2></div><div className="projectViewport"><div className="projectRail" style={{ transform: `translateX(-${projectIndex * 20.2}%)` }}>{projects.map((p,i)=><article className="project" key={p.title}><div className={'projectImage ' + p.cls}><span>{String(i+1).padStart(2,'0')}</span><b>{p.year}</b><em>{p.title}</em></div><div className="projectInfo"><div><small>{p.category}</small><h3>{p.title}</h3></div><p>{p.text}</p><ArrowUpRight /></div></article>)}</div></div><div className="railControls"><button aria-label="Previous project" onClick={previousProject}><ArrowLeft /></button><button aria-label="Next project" onClick={nextProject}><ArrowRight /></button></div></section>

    <section className="services" id="services"><div className="sectionHead"><span>03 / Capabilities</span><h2>Everything the<br /><i>idea needs.</i></h2></div><div className="serviceList">{services.map(([no,title,text])=><article key={title}><div className="serviceNo">{no}</div><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight /></article>)}</div></section>

    <section className="statement"><div className="statementInner"><span>Minimical is an independent</span><h2>design, branding,<br />motion & <i>film</i> studio.</h2><span>Based in India. Working beyond it.</span></div></section>

    <section className="proof"><div className="sectionHead"><span>04 / Experience</span><h2>Small studio.<br /><i>Wide practice.</i></h2></div><div className="stats"><div><strong>500+</strong><span>projects across design, brand, content & film</span></div><div><strong>6+</strong><span>years of creative practice</span></div><div><strong>01</strong><span>independent practice built around the work</span></div></div><div className="proofText"><p>Minimical moves between strategy and execution. A visual identity, campaign, website, film or complete brand world can begin from the same place: finding the idea that deserves to be seen.</p><a href="#contact">Work with us <ArrowUpRight /></a></div></section>

    <section className="clients"><div className="sectionHead"><span>05 / Selected Collaborations</span><h2>Built with people<br /><i>worth building with.</i></h2></div><div className="clientGrid">{clients.map(x=><div key={x}>{x}</div>)}</div></section>

    <section className="testimonials"><div className="quoteMark">“</div><blockquote>Good creative work should make the idea feel inevitable, not decorated.</blockquote><p>THE MINIMICAL CO. / CREATIVE PRINCIPLE</p></section>

    <section className="faq"><div className="sectionHead"><span>06 / Questions</span><h2>Things worth<br /><i>knowing.</i></h2></div><div>{faqs.map(([question,answer],i)=><div className="faqItem" key={question}><button onClick={()=>setOpen(open===i?null:i)}><span>{question}</span>{open===i?<X/>:<Plus/>}</button>{open===i&&<p>{answer}</p>}</div>)}</div></section>

    <section className="contact" id="contact"><div className="contactTop"><span>07 / Contact</span><h2>Have something<br /><i>worth making?</i></h2><a href="mailto:contact@minimical.online" className="bigMail">contact@minimical.online <ArrowUpRight /></a></div><div className="contactGrid"><div><small>STUDIO</small><p>Patna, Bihar<br />India</p></div><div><small>DIRECT</small><p>contact@minimical.online</p></div><div><small>SOCIAL</small><p><a href="https://www.instagram.com/theminimical/" target="_blank">Instagram</a><br /><a href="https://www.instagram.com/minimicalstudios.co/" target="_blank">Studio Instagram</a><br /><a href="https://www.linkedin.com/company/theminimical/" target="_blank">LinkedIn</a></p></div></div></section>

    <footer><span>THE MINIMICAL & CO. © 2026</span><a href="#top">Back to top ↑</a><span>Built independently.</span></footer>
  </main>
}
