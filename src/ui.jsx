import {useEffect,useRef,useState} from 'react';
export function Reveal({children,delay=0,className=''}){
 const r=useRef(null);const [v,setV]=useState(false);
 useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.disconnect()}},{threshold:.15});r.current&&o.observe(r.current);return()=>o.disconnect()},[]);
 return <div ref={r} style={{transitionDelay:delay+'ms'}} className={`rv ${v?'in':''} ${className}`}>{children}</div>}
export function Heading({title,sub,center}){return <div className={`mb-12 max-w-2xl ${center?'mx-auto text-center':''}`}><Reveal><h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.05]">{title}</h2>{sub&&<p className="mt-4 text-lg text-ink/70">{sub}</p>}</Reveal></div>}
export function Icon({n,c='h-7 w-7'}){
 const p={fill:'none',stroke:'currentColor',strokeWidth:1.6,strokeLinecap:'round',strokeLinejoin:'round',className:c,viewBox:'0 0 24 24'};
 const m={
 brain:<><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V4a3 3 0 0 0-3 0Z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/></>,
 neuron:<><circle cx="12" cy="12" r="2.5"/><path d="M12 9.5V4M14.2 13.3 19 17M9.8 13.3 5 17M9.5 12H3M14.5 12H21M12 4l-2-2M12 4l2-2"/></>,
 flask:<><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M8 15h8"/></>,
 device:<><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 13h1.5l1-3 2 5 1-2H15"/></>,
 drop:<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.500 6-11 6-11Z"/>,
 target:<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/></>,
 touch:<path d="M9 11V5a2 2 0 0 1 4 0v6l4 1a2 2 0 0 1 1.500 2.400L17.500 20a2 2 0 0 1-2 1.500H10a2 2 0 0 1-1.600-.8L4 15l1.500-1.500L9 16"/>,
 shield:<><path d="M12 2 4 5v6c0 5 3.500 9 8 11 4.500-2 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></>,
 clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
 heart:<path d="M12 21s-8-5.500-8-11a4.500 4.500 0 0 1 8-2.700A4.500 4.500 0 0 1 20 10c0 5.500-8 11-8 11Z"/>,
 globe:<><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
 mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
 phone:<path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>,
 pin:<><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.500"/></>,
 people:<><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.500 2.700-6 6-6s6 2.500 6 6"/><circle cx="17" cy="9" r="2.200"/><path d="M17 14c2.500 0 4 2 4 5"/></>};
 return <svg {...p}>{m[n]}</svg>}
