'use client'
import {useState} from 'react'
import Link from 'next/link'
import {Menu,X,ArrowUpRight} from 'lucide-react'
import BrandLogo from './BrandLogo'

export default function SiteHeader(){
  const [open,setOpen]=useState(false)
  const close=()=>setOpen(false)
  return <>
    <header className="nav siteHeader">
      <Link className="brandLink" href="/" onClick={close} aria-label="The Minimical & Co. home"><BrandLogo/></Link>
      <nav className="desktopNav" aria-label="Primary navigation">
        <Link href="/projects">Work</Link><Link href="/about">Studio</Link><Link href="/services">Programs</Link><Link href="/contact">Contact</Link>
      </nav>
      <div className="navActions">
        <Link className="book" href="/contact">Start a project <ArrowUpRight size={13}/></Link>
        <button className="siteMenuTrigger" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}>{open?<X size={22}/>:<Menu size={22}/>}</button>
      </div>
    </header>
    {open&&<nav className="siteMobileNav" aria-label="Mobile navigation">
      <Link href="/projects" onClick={close}>Work <ArrowUpRight size={18}/></Link>
      <Link href="/about" onClick={close}>Studio <ArrowUpRight size={18}/></Link>
      <Link href="/services" onClick={close}>Programs <ArrowUpRight size={18}/></Link>
      <Link href="/contact" onClick={close}>Contact <ArrowUpRight size={18}/></Link>
    </nav>}
  </>
}
