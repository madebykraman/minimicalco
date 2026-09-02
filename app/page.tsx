'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, Plus, X } from 'lucide-react'
import BrandLogo from './components/BrandLogo'
import Reveal from './components/Reveal'
import ThemeToggle from './components/ThemeToggle'

const projects = [
  ['01','WHIFFF','Brand Strategy / Identity / Digital','A fragrance brand built around emotion, memory and a distinctly Indian point of view.'],
  ['02','Enchanted Vows','Brand Identity / Wedding Films','A cinematic wedding studio identity designed to feel timeless without becoming traditional.'],
  ['03','Lucky Paul Photography','Brand / Photography / Digital','A refined visual direction for a Patna based wedding photography practice and its growing archive.'],
  ['04','Health Seva','Brand / Communication / Campaigns','Clearer communication and visual systems for a healthcare service built around accessibility.'],
  ['05','PawPerity','Packaging / Brand','An approachable packaging direction for an everyday pet care essential.'],
  ['06','Jaano Junction','Event / Visual Identity','A civic townhall identity created to make public conversation feel open, contemporary and human.'],
  ['07','Sampann Gurukul','Brand / Education','A visual communication system for an offline learning environment serving young students and families.'],
  ['08','The Minimical & Co.','Brand / Digital / Studio','Our own evolving identity, built as a living laboratory for strategy, design, film and visual culture.']
]

const services = [
  ['01','Brand Strategy','Positioning, naming, architecture and creative direction that turn a business into a coherent brand.'],
  ['02','Brand Identity','Logos, typography, colour, art direction and complete visual systems designed for real-world use.'],
  ['03','Digital Experiences','Websites, portfolios, campaigns and interfaces where content, interaction and identity work as one.'],
  ['04','Campaigns & Content','Creative concepts, campaign systems, social direction and content designed to build recognition over time.'],
  ['05','Photography & Film','Commercial photography, cinematography, editing and production for brands that need a stronger visual voice.'],
  ['06','Motion & Post','Motion design, title systems, compositing, editing and finishing that give ideas rhythm and presence.']
]

const faqs = [
  ['What does The Minimical & Co. do?','We are an independent creative studio working across branding, digital design, photography, film, motion and creative strategy. We build identities and visual systems, then help bring them into the real world.'],
  ['Who do you work with?','We work with founders, independent businesses, growing brands, cultural projects and teams that care about how their ideas are presented.'],
  ['Do you only work on branding?','No. A project can begin with strategy and identity, then extend into a website, campaign, photography, film, packaging or ongoing creative direction.'],
  ['Can you build the website too?','Yes. Digital design and implementation are part of the studio practice, so the visual language does not stop at the brand guidelines.'],
  ['Do you shoot photography and films?','Yes. Photography, cinematography, editing, motion and post-production are available as standalone services or as part of a larger brand engagement.'],
  ['Where is The Minimical & Co. based?','We are based in Patna, Bihar, India and work with clients and collaborators beyond the city and across markets.'],
  ['How does a project usually start?','Most engagements begin with a conversation about the problem, the ambition and what already exists. From there we define scope, direction and the right team for the work.'],
  ['Can I hire you for a smaller project?','Yes. Not every project needs a full identity engagement. Smaller creative, digital, campaign, photography and production briefs can be scoped independently.']
]

const capabilities = ['Brand Strategy','Identity Design','Art Direction','Web Design','Creative Development','Photography','Cinematography','Motion Design','Editing','Post Production','Packaging','Campaigns']

export default function Home() {
  const [menu, setMenu] = useState(false)
  const [faq, setFaq] = useState<number | null>(null)
  const [project, setProject] = useState(0)
  return <main>
    <header className="nav">
      <a className="brandLink" href="#top"><BrandLogo/></a>
      <nav className="desktopNav"><a href="#top">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
      <div className="navActions"><ThemeToggle/><a className="book desktopNav" href="mailto:contact@minimical.online?subject=Project%20enquiry">Start a project <ArrowUpRight size={14}/></a><button className="menuBtn" onClick={()=>setMenu(!menu)} aria-label="Open menu">{menu?<X size={19}/>:<Menu size={19}/>}</button></div>
    </header>
    {menu && <nav className="mobileMenu"><a href="#top" onClick={()=>setMenu(false)}>Home</a><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#projects" onClick={()=>setMenu(false)}>Projects</a><a href="#services" onClick={()=>setMenu(false)}>Services</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a><ThemeToggle/><a href="mailto:contact@minimical.online">Start a project ↗</a></nav>}

    <section className="hero" id="top">
      <div className="heroGlow heroGlowA"/><div className="heroGlow heroGlowB"/>
      <div className="heroMeta"><span>Since 2022</span><span>Patna / India</span><span>Working worldwide</span></div>
      <div className="heroStatement"><Reveal><div className="eyebrow">Independent creative studio</div><h1>Ideas into<br/><span>identities.</span><br/><i>Stories.</i></h1><p>We build brands, digital experiences and visual stories for people who have something worth making visible.</p><a className="roundCta" href="#projects">Explore the work <ArrowUpRight size={13}/></a></Reveal></div>
      <div className="heroVisual"><div className="orb orbOne"/><div className="orb orbTwo"/><div className="heroMark"><BrandLogo/></div><span className="heroCaption">THE MINIMICAL &amp; CO. / CREATIVE PRACTICE</span></div>
      <div className="heroTicker"><span>Branding</span><span>Digital</span><span>Photography</span><span>Film</span><span>Motion</span><span>Strategy</span></div>
    </section>

    <section className="manifesto" id="about"><Reveal><div className="sectionIntro"><span>About the studio</span><h2>Not a production line.<br/><i>A point of view.</i></h2><p>Minimical is an independent design and branding studio from Patna, India. We move between strategy, identity, digital, photography and film because the best ideas rarely fit inside one medium.</p></div></Reveal><div className="manifestoGrid"><Reveal><div className="bigNumber">500<span>+</span></div><p>projects and creative engagements across branding, design, photography, film and digital.</p></Reveal><Reveal><div className="bigNumber">06<span>+</span></div><p>years of making, directing and building visual worlds for people and businesses.</p></Reveal><Reveal><div className="bigNumber">01</div><p>independent practice connecting thinking, making and production under one roof.</p></Reveal></div></section>

    <section className="capabilityBand"><div className="capabilityIntro"><span>What we make</span><p>From the first strategic question to the final exported frame.</p></div><div className="capabilityMarquee">{capabilities.map(x=><span key={x}>{x}<b>·</b></span>)}</div></section>

    <section className="projects" id="projects"><Reveal><div className="sectionIntro"><span>Selected Work</span><h2>Different briefs.<br/><i>Same obsession.</i></h2><p>Some identities need a system. Some need a film. Some need both. Here are a few worlds built through the studio.</p><a className="textLink" href="/projects">View the full archive <ArrowUpRight size={14}/></a></div></Reveal><div className="projectViewport"><div className="projectRail" style={{transform:`translateX(calc(-${project} * (var(--project-card) + var(--project-gap))))`}}>{projects.map(([n,t,c,d])=><article className="projectCard" key={t}><div className="projectImage"><div className="projectGradient"/><span>{n}</span><em>{t}</em><small>{c}</small></div><div className="projectInfo"><small>{c}</small><h3>{t}</h3><p>{d}</p><ArrowUpRight size={16}/></div></article>)}</div></div><div className="railControls"><span>{String(project+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span><div><button disabled={project===0} onClick={()=>setProject(Math.max(0,project-1))}><ArrowLeft size={17}/></button><button disabled={project===projects.length-1} onClick={()=>setProject(Math.min(projects.length-1,project+1))}><ArrowRight size={17}/></button></div></div></section>

    <section className="services" id="services"><Reveal><div className="sectionIntro"><span>Capabilities</span><h2>What we can<br/><i>build together.</i></h2><p>One studio, multiple disciplines. Bring us the problem and we will find the medium it deserves.</p></div></Reveal><div className="serviceList">{services.map(([n,t,d])=><Reveal key={n}><article><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={18}/></article></Reveal>)}</div></section>

    <section className="studioStory"><div className="storyVisual"><div className="storyGrid"/><div className="storyWord">MAKE<br/><i>MEAN</i><br/>MORE.</div></div><Reveal><div className="storyCopy"><span>How we think</span><h2>Good design is not decoration. <i>It is direction.</i></h2><p>We begin with the reason something needs to exist. Then we decide what it should say, how it should feel and where it should live. The result is work that looks considered because it is considered.</p><a className="roundCta" href="/about">Inside the studio <ArrowUpRight size={13}/></a></div></Reveal></section>

    <section className="insights"><Reveal><div className="sectionIntro"><span>Studio Notes</span><h2>Thinking before<br/><i>making.</i></h2><p>Three ways we approach creative work: find the truth, build the system, make it felt.</p></div></Reveal><div className="notesGrid"><Reveal><article><span>01</span><h3>Find the truth.</h3><p>Strategy starts by asking better questions. What is actually different? Who needs to believe it? What should remain when everything unnecessary is removed?</p></article></Reveal><Reveal><article><span>02</span><h3>Build the system.</h3><p>A strong identity is more than a mark. It is a repeatable visual language that works on a screen, a package, a poster, a frame and a feed.</p></article></Reveal><Reveal><article><span>03</span><h3>Make it felt.</h3><p>Photography, film, motion and art direction turn a rational idea into something people can remember. Emotion is part of the structure.</p></article></Reveal></div></section>

    <section className="experience"><Reveal><div className="experienceBlock"><div className="experienceVisual gradientVisual"><span>01 / BRAND</span><strong>FROM<br/><i>THOUGHT</i><br/>TO FORM.</strong></div><div><span>Brand worlds</span><h2>Identity that can <i>actually live.</i></h2><p>We create visual identities with enough structure to stay consistent and enough character to stay alive. Logo, type, colour, art direction, motion and the rules that connect them.</p></div></div></Reveal><Reveal><div className="experienceBlock reverse"><div><span>Visual stories</span><h2>Film, photography and <i>everything between.</i></h2><p>Our production practice brings brands into motion through photography, cinematography, editing, post-production and campaign content.</p></div><div className="experienceVisual gradientVisual second"><span>02 / FILM</span><strong>FRAME<br/><i>THE</i><br/>FEELING.</strong></div></div></Reveal></section>

    <section className="clients"><Reveal><div className="sectionIntro"><span>Selected Collaborations</span><h2>Built with people<br/><i>we believe in.</i></h2></div></Reveal><div className="clientGrid">{['WHIFFF','Enchanted Vows','Lucky Paul','Health Seva','PawPerity','Jaano Junction','Sampann Gurukul','The Minimical & Co.'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div></section>

    <section className="testimonials"><Reveal><div className="sectionIntro"><span>Words from the work</span><h2>What collaboration<br/><i>feels like.</i></h2></div></Reveal><div className="testimonialFeature"><span>“</span><blockquote>The work feels considered from the first conversation to the final delivery. There is always a reason behind the visual choice, and the idea never gets lost while making it.</blockquote><div><strong>Founder / Creative Partner</strong><small>Independent client collaboration</small></div></div></section>

    <section className="faq"><Reveal><div className="sectionIntro"><span>Questions</span><h2>Before we<br/><i>start.</i></h2><p>A few useful answers before the first conversation.</p></div></Reveal><div className="faqList">{faqs.map(([q,a],i)=><div className="faqItem" key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>{q}</span>{faq===i?<X size={17}/>:<Plus size={17}/>}</button>{faq===i&&<p>{a}</p>}</div>)}</div></section>

    <section className="contact" id="contact"><div className="contactGlow"/><Reveal><div className="contactIntro"><span>Have something in mind?</span><h2>Let’s make<br/><i>something matter.</i></h2><a className="contactMail" href="mailto:contact@minimical.online">contact@minimical.online <ArrowUpRight size={19}/></a></div></Reveal><div className="contactDetails"><div><small>OFFICE</small><p>kankarbagh, patna-20<br/>bihar, india</p></div><div><small>CONTACT</small><p>+91-8709539814</p></div><div><small>SOCIAL</small><p><a href="https://www.instagram.com/theminimical/" target="_blank">Instagram</a><br/><a href="https://www.linkedin.com/company/theminimical/" target="_blank">LinkedIn</a></p></div></div></section>

    <footer><div className="footerBrand"><BrandLogo/></div><div><span>Independent creative studio</span><span>Patna / India</span></div><div><span>Explore</span><a href="#about">About</a><a href="#projects">Projects</a><a href="#services">Services</a><a href="#contact">Contact</a></div><div><span>Start a project</span><a href="mailto:contact@minimical.online">contact@minimical.online</a><a href="https://www.instagram.com/theminimical/" target="_blank">Instagram ↗</a></div><small>The Minimical &amp; Co. 2026. All rights reserved.</small></footer>
  </main>
}
