import type { MetadataRoute } from 'next'
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},sitemap:'https://minimical.online/sitemap.xml',host:'https://minimical.online'}}
