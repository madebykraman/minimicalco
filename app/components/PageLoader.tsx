'use client'

import {useEffect,useState} from 'react'

export default function PageLoader(){
  const [ready,setReady]=useState(false)
  useEffect(()=>{
    const done=()=>setReady(true)
    if(document.readyState==='complete'){
      const timer=window.setTimeout(done,1200)
      return()=>window.clearTimeout(timer)
    }
    window.addEventListener('load',done,{once:true})
    return()=>window.removeEventListener('load',done)
  },[])
  if(ready)return null
  return <div className="minimicalLoader" aria-hidden="true">
    <span className="minimicalLoaderMark">THE MINIMICAL &amp; CO.</span>
    <span className="minimicalLoaderMeta">PATNA / INDIA</span>
    <div className="minimicalLoaderCore"><strong>M</strong><span>Independent creative studio</span></div>
    <span className="minimicalLoaderCount">%</span>
  </div>
}
