'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('minimical-theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    const next = saved ? saved === 'dark' : prefers
    setDark(next)
    document.documentElement.dataset.theme = next ? 'dark' : 'light'
  }, [])
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.dataset.theme = next ? 'dark' : 'light'
    localStorage.setItem('minimical-theme', next ? 'dark' : 'light')
  }
  return <button className="themeToggle" onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={14}/> : <Moon size={14}/>}<span>{dark ? 'Light' : 'Dark'}</span></button>
}
