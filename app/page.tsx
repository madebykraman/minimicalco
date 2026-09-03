'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, Plus, X } from 'lucide-react'
import Link from 'next/link'
import BrandLogo from './components/BrandLogo'
import ThemeToggle from './components/ThemeToggle'
import Reveal from './components/Reveal'

const work = [
  { n:'01', name:'WHIFFF', slug:'whifff', discipline:'Brand identity / Digital', year:'2026', tone:'violet', featured:true },
  { n:'02', name:'Enchanted Vows', slug:'enchanted-vows', discipline:'Identity / Film', year:'2025', tone:'paper' },
  { n:'03', name:'Lucky Paul', slug:'lucky-paul', discipline:'Brand / Photography', year:'2024', tone:'ink' },
  { n:'04', name:'Health Seva', slug:'health-seva', discipline:'Campaign / Communication', year:'2024', tone:'blue' },
  { n:'05', name:'PawPerity', slug:'pawperity', discipline:'Packaging / Brand', year:'2024', tone:'sand' },
  { n:'06', name:'Jaano Junction', slug:'jaano-junction', discipline:'Event / Identity', year:'2023', tone:'brick' },
]

const programs = [
  ['01','Brand','Strategy, positioning, naming, identity and systems.'],
  ['02','Digital','Websites, products, campaigns and digital experiences.'],
  ['03','Campaigns','Ideas, art direction, content and launch systems.'],
  ['04','Production','Photography, film, motion, editing and post.'],
]

const principles = [
  ['01','Start with the problem.','A visual answer is only useful when the question underneath it is clear.'],
  ['02','Keep the distance short.','Strategy, design and production happen close to each other, with fewer handoffs.'],
  ['03','Make it live.','The work has to survive beyond the presentation deck, across real touchpoints and real audiences.'],
]

const faqs = [
  ['What does Minimical do?','We build brands, digital experiences, campaigns and visual content from strategy through production.'],
  ['Do you work with existing brands?','Yes. We can enter at strategy, identity, digital, campaign or production level depending on the problem.'],
  ['Can you handle a project end to end?','Yes. A single engagement can move from positioning and identity through website, content, film and launch.'],
  ['Where are you based?','Patna, India, working with clients and collaborators across India and internationally.'],
]

function ProjectVisual({tone,name,large=false}:{tone:string,name:string,large?:boolean}){
  return <div className={`projectVisual ${tone} ${large?'large':''}`} aria-hidden="true">
    <span className="visualMeta">THE MINIMICAL &amp; CO. / {name}</span>
    <div className="visualFrame"><i></i><i></i><i></i><i></i></div>
    <strong>{name.slice(0,2).toUpperCase()}</strong>
    <small>IDENTITY / IMAGE / SYSTEM</small>
  </div>
}

export default function Home(){
  const [menu,setMenu]=useState(false)
  const [faq,setFaq]=useState<number|null>(null)
  return <main className="studioPage">
    <header className="studioHeader">
      <Link href="#top" className="studioLogo" aria-label="The Minimical & Co."><BrandLogo/></Link>
      <nav className="studioNav"><Link href="#work">Work</Link><Link href="#studio">Studio</Link><Link href="#programs">Programs</Link><Link href="#contact">Contact</Link></nav>
      <div className="studioHeaderRight"><ThemeToggle/><Link className="startLink" href="/contact">Start a project <ArrowUpRight size={14}/></Link><button className="mobileTrigger" onClick={()=>setMenu(!menu)} aria-label={menu?'Close menu':'Open menu'}>{menu?<X size={20}/>:<Menu size={20}/>}</button></div>
    </header>
    {menu&&<nav className="mobileNav"><Link href="#work" onClick={()=>setMenu(false)}>Work</Link><Link href="#studio" onClick={()=>setMenu(false)}>Studio</Link><Link href="#programs" onClick={()=>setMenu(false)}>Programs</Link><Link href="#contact" onClick={()=>setMenu(false)}>Contact</Link><ThemeToggle/></nav>}

    <section className="studioHero" id="top">
      <div className="heroTopline"><span>Independent creative studio</span><span>Patna / India</span><span>2026</span></div>
      <div className="heroIntro"><p className="eyebrow">Strategy / Identity / Digital / Production</p><h1>We build brands<br/>people can <em>feel.</em></h1><p className="heroDescription">Minimical is an independent creative studio for ambitious ideas, from the first strategic question to the final piece of communication.</p><div className="heroActions"><Link href="#work">See the work <ArrowUpRight size={15}/></Link><Link href="/about">About the studio <ArrowUpRight size={15}/></Link></div></div>
      <Link href="/projects/whifff" className="featuredProject"><ProjectVisual tone="violet" name="WHIFFF" large/><div className="featuredCaption"><span>01 / 06</span><strong>WHIFFF</strong><span>Brand identity / Digital / 2026</span><ArrowUpRight size={18}/></div></Link>
      <div className="heroBottom"><span>Selected work</span><span>Scroll / explore</span></div>
    </section>

    <section className="studioStatement" id="studio"><div className="sectionLabel"><span>02 / Studio</span><span>Independent / Multidisciplinary</span></div><div className="statementGrid"><h2>Ideas become stronger when strategy, design and making stay <em>close.</em></h2><div><p>We are a small independent studio working across brand, digital, campaigns and production.</p><p>The studio model keeps the people thinking about the problem close to the people making the answer.</p><Link className="inlineLink" href="/about">Meet the studio <ArrowUpRight size={15}/></Link></div></div></section>

    <section className="workSection" id="work"><div className="sectionLabel"><span>03 / Work</span><Link href="/projects">View all projects <ArrowUpRight size={15}/></Link></div><div className="workLead"><h2>Selected work</h2><p>Identity systems, digital experiences, campaigns and production across culture, commerce and people.</p></div><div className="workMosaic">{work.map((item,i)=><Reveal key={item.slug}><Link href={`/projects/${item.slug}`} className={`mosaicItem ${i===0?'wide':''}`}><ProjectVisual tone={item.tone} name={item.name}/><div className="mosaicCaption"><span>{item.n}</span><div><strong>{item.name}</strong><small>{item.discipline}</small></div><span>{item.year}</span><ArrowUpRight size={16}/></div></Link></Reveal>)}</div></section>

    <section className="programSection" id="programs"><div className="sectionLabel"><span>04 / Programs</span><span>Ways we help</span></div><div className="programIntro"><h2>Bring us the<br/>problem, not<br/>the <em>format.</em></h2><p>Sometimes the answer is a new identity. Sometimes it is a website, campaign, film or a better way of saying what already exists.</p></div><div className="programList">{programs.map(([n,t,d])=><Link href="/services" key={n}><span>{n}</span><strong>{t}</strong><p>{d}</p><ArrowUpRight size={17}/></Link>)}</div></section>

    <section className="principlesSection"><div className="sectionLabel"><span>05 / Point of view</span><span>How we work</span></div><h2>Good work starts before the <em>design.</em></h2><div className="principleList">{principles.map(([n,t,d])=><article key={n}><span>{n}</span><strong>{t}</strong><p>{d}</p></article>)}</div></section>

    <section className="faqSection"><div><div className="sectionLabel"><span>06 / Questions</span><span>Before we begin</span></div><h2>Useful<br/>answers.</h2></div><div className="faqList">{faqs.map(([q,a],i)=><div className="faqRow" key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>{q}</span>{faq===i?<X size={17}/>:<Plus size={17}/>}</button>{faq===i&&<p>{a}</p>}</div>)}</div></section>

    <section className="contactSection" id="contact"><div className="contactTop"><span>07 / Contact</span><span>Patna / India / Worldwide</span></div><div className="contactBody"><div><p>Have something worth building?</p><h2>Let's make<br/>it <em>real.</em></h2></div><Link href="/contact">Start a project <ArrowUpRight size={20}/></Link></div></section>
    <footer className="studioFooter"><div className="footerBrand"><BrandLogo/></div><div><span>Studio</span><p>Independent creative studio<br/>Patna, Bihar, India</p></div><div><span>Navigate</span><Link href="#work">Work</Link><Link href="#studio">Studio</Link><Link href="#programs">Programs</Link><Link href="/contact">Contact</Link></div><div><span>Connect</span><a href="https://www.instagram.com/theminimical/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.linkedin.com/company/theminimical/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><small>© 2026 The Minimical &amp; Co.</small></footer>
  </main>
}
