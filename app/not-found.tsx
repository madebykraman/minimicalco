import Link from 'next/link'
import {ArrowUpRight} from 'lucide-react'
import BrandLogo from './components/BrandLogo'
export default function NotFound(){return <main className="innerPage"><div className="siteHeader" style={{position:'relative'}}><Link href="/" className="brandLink"><BrandLogo/></Link></div><section className="pageHero"><span>404 / Not found</span><h1>That page<br/><i>isn't here.</i></h1><p>The link may have moved, or the project may not be public yet.</p><Link className="inlineLink" href="/projects">Return to the work <ArrowUpRight size={15}/></Link></section></main>}
