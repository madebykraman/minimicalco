'use client'

import {useEffect,useState} from 'react'

export default function PageLoader(){
  const [ready,setReady]=useState(false)
  useEffect(()=>{
    let timer:ReturnType<typeof window.setTimeout>
    const done=()=>{timer=window.setTimeout(()=>setReady(true),1900)}
    if(document.readyState==='complete') done()
    else window.addEventListener('load',done,{once:true})
    return()=>{window.removeEventListener('load',done);window.clearTimeout(timer)}
  },[])
  if(ready)return null
  return <div className="minimicalLoader" aria-hidden="true">
    <span className="minimicalLoaderMark">THE MINIMICAL &amp; CO.</span>
    <span className="minimicalLoaderMeta">PATNA / INDIA</span>
    <div className="minimicalLoaderCore"><strong>M</strong><span>Independent creative studio</span></div>
    <span className="minimicalLoaderCount">%</span>
  </div>
}
