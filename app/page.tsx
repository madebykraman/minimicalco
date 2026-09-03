'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, Plus, X } from 'lucide-react'
import BrandLogo from './components/BrandLogo'
import Reveal from './components/Reveal'
import ThemeToggle from './components/ThemeToggle'

const work = [
  { n:'01', name:'WHIFFF', type:'Brand identity / Digital / Strategy', desc:'A fragrance world built around emotion, memory and a distinctly Indian point of view.', tone:'violet' },
  { n:'02', name:'Enchanted Vows', type:'Identity / Film / Photography', desc:'A cinematic wedding studio identity designed to feel intimate, contemporary and timeless.', tone:'cream' },
  { n:'03', name:'Lucky Paul Photography', type:'Brand / Digital / Art direction', desc:'A refined visual language for a wedding photography practice and its growing archive.', tone:'warm' },
  { n:'04', name:'Health Seva', type:'Brand / Communication / Campaign', desc:'A clearer visual system for a healthcare service built around accessibility and trust.', tone:'blue' },
  { n:'05', name:'PawPerity', type:'Packaging / Brand', desc:'An approachable packaging direction for an everyday pet care essential.', tone:'olive' },
  { n:'06', name:'Jaano Junction', type:'Event / Visual identity', desc:'A civic townhall identity that makes public conversation feel open, contemporary and human.', tone:'indigo' },
]

const services = [
  ['01','Brand Strategy','Positioning, naming, architecture and creative direction.'],
  ['02','Identity Design','Visual systems, typography, colour, art direction and guidelines.'],
  ['03','Digital Experiences','Brand-first websites, portfolios, campaigns and interfaces.'],
  ['04','Film & Photography','Commercial photography, cinematography, editing and production.'],
  ['05','Motion & Content','Motion systems, campaign content, social and post-production.'],
]

const faqs = [
  ['What kind of studio is Minimical?','An independent creative studio working across strategy, branding, digital, photography, film, motion and production.'],
  ['Do you take complete brand projects?','Yes. We can take a project from positioning and identity through digital, campaign, packaging and launch content.'],
  ['Can you work as an extension of an existing team?','Yes. We regularly fit into founder, marketing, production and creative teams where an outside point of view is useful.'],
  ['Where are you based?','Patna, Bihar, India. Projects are handled with clients and collaborators across India and beyond.'],
  ['How do we start?','Send the brief, the ambition or simply the problem. We will shape the right scope together.'],
]

const marquee = ['Brand strategy','Identity','Art direction','Digital','Photography','Film','Motion','Packaging','Campaigns','Post production']

export default function Home(){
  const [menu,setMenu]=useState(false)
  const [faq,setFaq]=useState<number|null>(null)
  return <main>
    <header className="siteHeader">
      <a href="#top" className="brandLink"><BrandLogo/></a>
      <nav className="headerNav"><a href="#work">Work</a><a href="#studio">Studio</a><a href="#services">Capabilities</a><a href="#contact">Contact</a></nav>
      <div className="headerRight"><ThemeToggle/><a className="headerCta" href="mailto:contact@minimical.online?subject=Project%20enquiry">Start a project <ArrowUpRight size={13}/></a><button className="menuBtn" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X size={19}/>:<Menu size={19}/>}</button></div>
    </header>
    {menu&&<div className="mobileMenu"><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#studio" onClick={()=>setMenu(false)}>Studio</a><a href="#services" onClick={()=>setMenu(false)}>Capabilities</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a><ThemeToggle/></div>}

    <section className="newHero" id="top">
      <div className="heroTopline"><span>Independent creative studio</span><span>Patna / India</span><span>Est. 2022</span></div>
      <div className="heroWords"><div className="heroKicker">Strategy + design + production</div><h1>We make<br/><span>brands</span><br/>matter<span className="period">.</span></h1><p>Minimical is a design and branding studio for ambitious people, products and ideas. We turn what you mean into something people can see, feel and remember.</p></div>
      <div className="heroSide"><div className="heroDisc"><span>SCROLL TO<br/>EXPLORE</span><ArrowDownRight size={19}/></div><div className="heroIndex">01<br/><small>/ 06</small></div></div>
      <div className="heroCanvas"><div className="canvasWord">MINIMICAL</div><div className="canvasOrb one"/><div className="canvasOrb two"/><div className="canvasCross">+</div><span className="canvasNote">A SMALL STUDIO<br/>WITH A LARGE FIELD OF VIEW</span></div>
      <div className="heroBottom"><span>Branding</span><span>Digital</span><span>Visual culture</span><span>Film / Photo</span><span>↗</span></div>
    </section>

    <section className="statement" id="studio"><Reveal><div className="statementLabel">01 / The studio</div><div className="statementText">We do not believe in making brands louder just to make them visible. <em>We find the idea worth remembering, then build everything around it.</em></div></Reveal><div className="statementFoot"><span>Strategy before styling.</span><span>Design with a reason.</span><span>Production without compromise.</span></div></section>

    <section className="workSection" id="work"><div className="sectionHead"><Reveal><div><span>02 / Selected work</span><h2>Work that<br/><i>speaks first.</i></h2></div><p>A selection across identity, digital, campaign, photography and film. Every project starts with a different problem. The standard stays the same.</p></Reveal></div><div className="workGrid">{work.map((item,i)=><Reveal key={item.name} className={`workItem work${i+1}`}><a href="/projects"><div className={`workVisual ${item.tone}`}><div className="workTexture"/><span className="workNo">{item.n}</span><strong>{item.name}</strong><small>{item.type}</small><ArrowUpRight className="workArrow" size={18}/></div><div className="workMeta"><span>{item.type}</span><p>{item.desc}</p></div></a></Reveal>)}</div><a className="archiveLink" href="/projects">View all work <ArrowUpRight size={16}/></a></section>

    <section className="marqueeBand"><div className="marqueeTrack">{[...marquee,...marquee].map((x,i)=><span key={i}>{x}<b>•</b></span>)}</div></section>

    <section className="capabilities" id="services"><div className="sectionHead"><Reveal><div><span>03 / Capabilities</span><h2>One studio.<br/><i>Many disciplines.</i></h2></div><p>Strategy sets the direction. Design gives it form. Photography, film and motion make it live beyond the presentation.</p></Reveal></div><div className="serviceRows">{services.map(([n,t,d])=><Reveal key={n}><a href="/services"><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={19}/></a></Reveal>)}</div></section>

    <section className="splitFeature"><div className="featureVisual"><div className="featureLines"/><div className="featureType">THINK<br/><i>MAKE</i><br/>MOVE.</div><span>04 / THE PRACTICE</span></div><Reveal><div className="featureCopy"><span>How we work</span><h2>Small by design.<br/><i>Deep by default.</i></h2><p>You work directly with the people thinking about the work. No layers between the brief and the idea. No separation between the identity and how it eventually behaves in the world.</p><div className="miniStats"><div><strong>500+</strong><span>projects</span></div><div><strong>06+</strong><span>years</span></div><div><strong>01</strong><span>studio</span></div></div><a className="lineCta" href="/about">Meet the studio <ArrowUpRight size={15}/></a></div></Reveal></section>

    <section className="notes"><Reveal><div className="sectionHead"><div><span>05 / Point of view</span><h2>Good work needs<br/><i>a point of view.</i></h2></div><p>We care about the thinking underneath the surface. Because a beautiful answer to the wrong question is still the wrong answer.</p></div></Reveal><div className="notesList"><article><span>01</span><h3>Find the tension.</h3><p>What is changing? What feels tired? Where is the opportunity hiding?</p></article><article><span>02</span><h3>Make it ownable.</h3><p>Build a visual language with enough character to be recognised without a logo.</p></article><article><span>03</span><h3>Make it move.</h3><p>Let identity extend into image, sound, motion, interaction and the real world.</p></article></div></section>

    <section className="faqSection"><div className="faqIntro"><span>06 / Questions</span><h2>Before we<br/><i>begin.</i></h2></div><div className="faqList">{faqs.map(([q,a],i)=><div className="faqRow" key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>{q}</span>{faq===i?<X size={17}/>:<Plus size={17}/>}</button>{faq===i&&<p>{a}</p>}</div>)}</div></section>

    <section className="newContact" id="contact"><div className="contactNoise"/><div className="contactLabel">Start a conversation</div><h2>Have an idea?<br/><i>Let’s make it real.</i></h2><div className="contactBottom"><p>For branding, digital, campaigns, photography, film or something that does not fit neatly into a category.</p><a href="mailto:contact@minimical.online">contact@minimical.online <ArrowUpRight size={20}/></a></div></section>

    <footer className="siteFooter"><div className="footerLogo"><BrandLogo/></div><div><span>Independent creative studio</span><span>Patna / India</span></div><div><span>Navigate</span><a href="#work">Work</a><a href="#studio">Studio</a><a href="#services">Capabilities</a><a href="#contact">Contact</a></div><div><span>Elsewhere</span><a href="https://www.instagram.com/theminimical/" target="_blank">Instagram ↗</a><a href="https://www.linkedin.com/company/theminimical/" target="_blank">LinkedIn ↗</a></div><small>© 2026 The Minimical &amp; Co.</small></footer>
  </main>
}
