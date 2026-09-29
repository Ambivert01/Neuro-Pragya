import {useEffect,useState} from 'react';import {Link,NavLink,useLocation} from 'react-router-dom';import {CONTACT,COMPANY} from './data';import {Icon} from './ui';
const NAV=[['/','Home'],['/about','About'],['/technology','Mastiksh Yantra'],['/research','Research'],['/team','Team'],['/contact','Contact']];
export function Header(){const [o,setO]=useState(false),[s,setS]=useState(false),loc=useLocation();
 useEffect(()=>{setO(false);scrollTo(0,0)},[loc.pathname]);
 useEffect(()=>{const f=()=>setS(scrollY>16);f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
 return <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${s||o?'bg-white/90 backdrop-blur shadow-[0_1px_0_rgba(11,42,111,.08)]':''}`}>
  <div className="wrap flex h-[72px] items-center justify-between">
   <Link to="/" className="flex items-center gap-2.5 font-display font-extrabold text-navy text-lg"><img src="./img/logo.png" alt="" className="h-11 w-11 object-contain"/>Neuro<span className="text-teal -ml-1.5">Pragya</span></Link>
   <nav className="hidden lg:flex items-center gap-1" aria-label="Main">{NAV.map(([p,l])=><NavLink key={p} to={p} end className={({isActive})=>`rounded-full px-4 py-2 text-sm font-medium transition ${isActive?'bg-navy text-white':'text-navy/80 hover:bg-teal-50 hover:text-navy'}`}>{l}</NavLink>)}</nav>
   <Link to="/contact" className="btn-p hidden lg:inline-flex">Get in touch</Link>
   <button className="lg:hidden p-2 text-navy" onClick={()=>setO(!o)} aria-label="Toggle menu" aria-expanded={o}><svg className="h-7 w-7" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">{o?<path d="M6 6l12 12M18 6 6 18"/>:<path d="M4 8h16M4 16h16"/>}</svg></button>
  </div>
  {o&&<div className="lg:hidden bg-white border-t border-navy/10"><nav className="wrap py-4 flex flex-col">{NAV.map(([p,l])=><NavLink key={p} to={p} end className={({isActive})=>`py-3 font-medium ${isActive?'text-teal':'text-navy'}`}>{l}</NavLink>)}</nav></div>}
 </header>}
export function Footer(){return <footer className="bg-navy-900 text-white/80">
 <div className="wrap py-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
  <div><div className="flex items-center gap-3"><img src="./img/logo.png" alt="NeuroPragya" className="h-14 w-14 rounded-full bg-white p-1"/><div className="font-display text-xl font-bold text-white">NeuroPragya<div className="text-xs font-normal tracking-[.25em] text-white/60">PRIVATE LIMITED</div></div></div>
   <p className="mt-5 max-w-sm text-sm leading-relaxed">Empowering minds. Enriching lives. Science, innovation and empathy for a healthier brain and a better future.</p></div>
  <div><h4 className="text-white font-semibold mb-4">Explore</h4><ul className="space-y-2 text-sm">{NAV.map(([p,l])=><li key={p}><Link className="hover:text-teal-400 transition" to={p}>{l}</Link></li>)}</ul></div>
  <div><h4 className="text-white font-semibold mb-4">Contact</h4><ul className="space-y-3 text-sm">
   <li className="flex gap-3"><Icon n="pin" c="h-5 w-5 shrink-0 text-teal-400"/>{CONTACT.address}</li>
   <li className="flex gap-3"><Icon n="mail" c="h-5 w-5 shrink-0 text-teal-400"/><a href={`mailto:${CONTACT.email}`} className="hover:text-teal-400">{CONTACT.email}</a></li>
   <li className="flex gap-3"><Icon n="phone" c="h-5 w-5 shrink-0 text-teal-400"/><a href={`tel:${CONTACT.tel}`} className="hover:text-teal-400">{CONTACT.phone}</a></li></ul></div>
 </div>
 <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">© 2026 {COMPANY.name}. CIN {COMPANY.cin}. Mastiksh Yantra is under development and is not yet a certified diagnostic device.</div>
</footer>}
