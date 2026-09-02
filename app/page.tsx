'use client'

import { useState } from 'react'
import { ArrowUpRight, ArrowLeft, ArrowRight, Plus, X } from 'lucide-react'

const projects = [
  { category:'Brand / Digital', title:'WHIFFF', text:'A fragrance world built around feeling, memory and the rituals of scent.', cls:'p1' },
  { category:'Brand Identity', title:'Enchanted Vows', text:'A cinematic wedding identity shaped around timeless stories and intimate frames.', cls:'p2' },
  { category:'Healthcare / Brand', title:'Health Seva', text:'A clearer visual language for a healthcare service built around access and trust.', cls:'p3' },
  { category:'Packaging', title:'PawPerity', text:'Packaging designed to make an everyday pet essential feel considered and memorable.', cls:'p4' },
  { category:'Event / Identity', title:'Jaano Junction', text:'A civic townhall identity designed for conversation, participation and visibility.', cls:'p5' },
]

const services = [
  ['Brand Identity','From naming and positioning to identity systems, we turn a point of view into something people can recognise.'],
  ['Digital Design','Websites and digital experiences where strategy, interaction and visual craft work as one system.'],
  ['Motion Design','Movement, transitions and visual narratives built to give brands rhythm and presence.'],
  ['Film & Production','Creative direction, cinematography, production and post for films that feel considered from first frame to last.'],
]

const faqs = [
  ['What kind of work does Minimical take on?','Brand identities, campaigns, websites, packaging, motion, photography and film. Projects can be a focused design engagement or a complete creative direction partnership.'],
  ['Do you work with startups and independent brands?','Yes. Minimical works with ambitious people and teams at different stages, from early identity systems to established brands looking for a sharper visual direction.'],
  ['Can you handle production as well as design?','Yes. The studio can move from concept and art direction through design, production, cinematography, editing and delivery depending on the project.'],
  ['Where is Minimical based?','Patna, India, with projects and collaborations possible remotely across locations.'],
  ['How does a project begin?','Usually with a short conversation about the problem, ambition, scope and timing. From there the engagement is shaped around what the project actually needs.'],
  ['Can I see more work?','The selected work on this site is only a starting point. Additional work and visual archives can be shared when relevant to a project.'],
]

export default function Home() {
  const [menu,setMenu] = useState(false)
  const [open,setOpen] = useState<number|null>(null)
  return <main>
    <header className="nav">
      <a className="wordmark" href="#top">THE MINIMICAL <span>CO.</span></a>
      <nav className="desktopNav"><a href="#about">About</a><a href="#projects">Projects</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
      <a className="call desktopNav" href="#contact">Start a project <ArrowUpRight size={15}/></a>
      <button className="menuBtn" onClick={()=>setMenu(!menu)}>{menu?<X/>:'MENU'}</button>
    </header>
    {menu && <div className="mobileMenu"><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#projects" onClick={()=>setMenu(false)}>Projects</a><a href="#services" onClick={()=>setMenu(false)}>Services</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></div>}

    <section className="hero" id="top">
      <div className="meta"><span>Since 2022</span><span>India</span><span>Creative Practice</span></div>
      <div className="heroVisual"><div className="orbit o1"/><div className="orbit o2"/><div className="orbitalType">IDENTITY · DIGITAL · MOTION · FILM ·</div></div>
      <div className="heroCopy"><h1>Design &<br/><i>Creative</i><br/>Studio</h1><p>We build brands, digital experiences and films for people making something worth remembering.</p><a href="#about" className="circleLink">Explore <ArrowDown/></a></div>
    </section>

    <section className="process" id="about"><div className="sectionHead"><span>01 / Approach</span><h2>Ideas become visible<br/><i>when everything aligns.</i></h2></div><div className="processGrid">{['Discover','Define','Create','Evolve'].map((x,i)=><article key={x}><small>0{i+1}</small><h3>{x}</h3><p>{['We understand the ambition, audience and tension behind the brief.','We find the clearest idea and build a visual direction around it.','We turn the direction into identities, images, interfaces and moving work.','We refine the system so it can live, grow and stay recognisably yours.'][i]}</p></article>)}</div></section>

    <section className="projects" id="projects"><div className="sectionHead"><span>02 / Selected Projects</span><h2>Work with a<br/><i>point of view.</i></h2></div><div className="projectRail">{projects.map((p,i)=><article className="project" key={p.title}><div className={'projectImage '+p.cls}><span>{String(i+1).padStart(2,'0')}</span></div><div className="projectInfo"><div><small>{p.category}</small><h3>{p.title}</h3></div><p>{p.text}</p><ArrowUpRight/></div></article>)}</div><div className="railControls"><button><ArrowLeft/></button><button><ArrowRight/></button></div></section>

    <section className="services" id="services"><div className="sectionHead"><span>03 / Capabilities</span><h2>Everything the<br/><i>idea needs.</i></h2></div><div className="serviceList">{services.map((s,i)=><article key={s[0]}><div className="serviceNo">0{i+1}</div><div><h3>{s[0]}</h3><p>{s[1]}</p></div><ArrowUpRight/></article>)}</div></section>

    <section className="statement"><div className="statementInner"><span>Minimical is an independent</span><h2>design, branding,<br/>motion & <i>film</i> studio.</h2><span>Based in India. Working beyond it.</span></div></section>

    <section className="proof"><div className="sectionHead"><span>04 / Experience</span><h2>Small studio.<br/><i>Wide practice.</i></h2></div><div className="stats"><div><strong>500+</strong><span>projects across design, brand & film</span></div><div><strong>6+</strong><span>years of creative practice</span></div><div><strong>01</strong><span>independent studio, built around the work</span></div></div><div className="proofText"><p>Minimical moves between strategy and execution. A logo system, a campaign, a website, a film or a complete brand world can all start from the same place: finding the idea that deserves to be seen.</p><a href="#contact">Work with us <ArrowUpRight/></a></div></section>

    <section className="clients"><div className="sectionHead"><span>05 / Selected Collaborations</span><h2>Built with people<br/><i>worth building with.</i></h2></div><div className="clientGrid">{['WHIFFF','Health Seva','PawPerity','Sampann Gurukul','Enchanted Vows','Jaano Junction','Lucky Paul Photography','Minimical Studio Films'].map(x=><div key={x}>{x}</div>)}</div></section>

    <section className="testimonials"><div className="quoteMark">“</div><blockquote>Good creative work should make the idea feel inevitable, not decorated.</blockquote><p>THE MINIMICAL CO. / CREATIVE PRINCIPLE</p></section>

    <section className="faq"><div className="sectionHead"><span>06 / Questions</span><h2>Things worth<br/><i>knowing.</i></h2></div><div>{faqs.map((f,i)=><div className="faqItem" key={f[0]}><button onClick={()=>setOpen(open===i?null:i)}><span>{f[0]}</span>{open===i?<X/>:<Plus/>}</button>{open===i&&<p>{f[1]}</p>}</div>)}</div></section>

    <section className="contact" id="contact"><div className="contactTop"><span>07 / Contact</span><h2>Have something<br/><i>worth making?</i></h2><a href="mailto:contact@minimical.online" className="bigMail">contact@minimical.online <ArrowUpRight/></a></div><div className="contactGrid"><div><small>STUDIO</small><p>Patna, Bihar<br/>India</p></div><div><small>DIRECT</small><p>contact@minimical.online</p></div><div><small>SOCIAL</small><p><a href="https://www.instagram.com/theminimical/">Instagram</a><br/><a href="https://www.linkedin.com/company/theminimical/">LinkedIn</a></p></div></div></section>
    <footer><span>THE MINIMICAL & CO. © 2026</span><a href="#top">Back to top ↑</a><span>Built independently.</span></footer>
  </main>
}

function ArrowDown(){return <span className="downArrow">↓</span>}
