import {Link} from 'react-router-dom';import {useEffect,useRef,useState} from 'react';import Neural from '../Neural';import {Reveal,Heading,Icon} from '../ui';import {FOCUS,VALUES,STEPS} from '../data';
function LiveChart(){const cv=useRef(null);const t=useRef(0);const pts=useRef(Array.from({length:200},(_,i)=>({x:i*2,y:70})));const [vals,setVals]=useState({NfL:'12.4',GFAP:'0.18','Aβ42/40':'0.09','p-tau181':'1.23'});
useEffect(()=>{const c=cv.current;if(!c)return;const ctx=c.getContext('2d');let af;
const draw=()=>{t.current+=0.06;const W=c.width,H=c.height;
const y=H/2-Math.sin(t.current*2.1)*22-Math.sin(t.current*5.3)*8-Math.sin(t.current*0.7)*14;
pts.current.push({x:W,y});pts.current=pts.current.map(p=>({...p,x:p.x-1.4})).filter(p=>p.x>0);
ctx.clearRect(0,0,W,H);
ctx.strokeStyle='rgba(11,42,111,0.07)';ctx.lineWidth=1;
[H*0.25,H*0.5,H*0.75].forEach(gy=>{ctx.beginPath();ctx.moveTo(0,gy);ctx.lineTo(W,gy);ctx.stroke();});
const g=ctx.createLinearGradient(0,0,W,0);g.addColorStop(0,'#0B2A6F');g.addColorStop(1,'#12A0B8');
ctx.beginPath();ctx.strokeStyle=g;ctx.lineWidth=2.5;ctx.lineJoin='round';
pts.current.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));ctx.stroke();
af=requestAnimationFrame(draw);};
draw();
const iv=setInterval(()=>setVals({NfL:(10+Math.random()*5).toFixed(1),GFAP:(0.12+Math.random()*0.15).toFixed(2),'Aβ42/40':(0.07+Math.random()*0.05).toFixed(2),'p-tau181':(0.9+Math.random()*0.8).toFixed(2)}),2000);
return()=>{cancelAnimationFrame(af);clearInterval(iv);};},[]);
return(<div className="rounded-3xl bg-white/80 backdrop-blur p-6 shadow-[0_30px_80px_-30px_rgba(11,42,111,.35)] ring-1 ring-navy/10">
<div className="flex items-center justify-between text-xs text-ink/60 mb-3"><span className="font-semibold text-navy">Electrochemical signal</span><span className="flex items-center gap-1.5"><span className="relative flex h-2.5 w-2.5"><span className="absolute inset-0 rounded-full bg-teal animate-ring"/><span className="h-2.5 w-2.5 rounded-full bg-teal"/></span>Live sensing</span></div>
<canvas ref={cv} width={400} height={140} className="w-full rounded-xl bg-ice/60"/>
<div className="mt-3 grid grid-cols-2 gap-2">{Object.entries(vals).map(([k,v])=><div key={k} className="rounded-xl bg-ice px-3 py-2 flex justify-between items-center"><div><div className="font-bold text-navy text-xs">{k}</div><div className="text-[10px] text-ink/50">pg/mL</div></div><div className="text-teal font-bold text-sm">{v}</div></div>)}</div>
<p className="mt-2 text-[10px] text-ink/40">Illustrative graphic, not measured data.</p>
</div>);}
export function CTA(){return <section className="sec bg-navy relative overflow-hidden"><Neural className="opacity-40"/><div className="wrap relative text-center"><Reveal><h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-[1.05]">Building neurodiagnostics that reach every clinic.</h2>
<p className="mt-5 text-white/70 max-w-xl mx-auto">Clinician, researcher, investor or partner: tell us how you would like to work with NeuroPragya.</p>
<div className="mt-9 flex flex-wrap justify-center gap-3"><Link to="/contact" className="btn bg-white text-navy hover:bg-teal-400 hover:text-white">Contact us</Link><Link to="/technology" className="btn border border-white/30 text-white hover:border-teal-400">See Mastiksh Yantra</Link></div></Reveal></div></section>}
export default function Home(){return <>
<section className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-b from-ice via-white to-white pt-24">
 <Neural/>
 <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] py-16">
  <div>
   <p className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-navy"><span className="h-2 w-2 rounded-full bg-teal"/>Neuroscience and healthcare technology</p>
   <h1 className="mt-6 text-5xl sm:text-6xl xl:text-7xl font-extrabold text-navy leading-[.98]">Catch brain disease <span className="text-teal">years</span> sooner, with one drop of blood.</h1>
   <p className="mt-6 max-w-xl text-lg text-ink/70">NeuroPragya is developing affordable, portable biosensing devices that detect neurodegenerative disorders such as Alzheimer&rsquo;s and Parkinson&rsquo;s early, so care can start earlier.</p>
   <div className="mt-9 flex flex-wrap gap-3"><Link to="/technology" className="btn-p">Explore Mastiksh Yantra</Link><Link to="/about" className="btn-o">Our story</Link></div>
  </div>
  <div className="relative">
   <div className="absolute inset-0 m-auto h-64 w-64 rounded-full bg-teal/20 blur-3xl"/>
   <LiveChart/>
   <img src="./img/logo.png" alt="" className="absolute -bottom-4 -right-4 h-14 w-14 rounded-full bg-white p-1.5 shadow-lg animate-floaty hidden sm:block"/>
  </div>
 </div>
</section>

<section className="bg-navy text-white"><div className="wrap grid grid-cols-2 md:grid-cols-4 gap-y-6 py-8">
 {[['drop','Blood-based biomarker detection'],['target','High accuracy and fast results'],['touch','User-friendly, portable design'],['shield','Affordable and accessible for all']].map(([i,t])=><div key={t} className="flex items-center gap-3 pr-4"><Icon n={i} c="h-8 w-8 shrink-0 text-teal-400"/><span className="text-sm font-medium leading-snug">{t}</span></div>)}
</div></section>

<section className="sec"><div className="wrap grid gap-12 lg:grid-cols-2 items-center">
 <Reveal><h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.05]">Diagnosis often comes too late, and too far from home.</h2></Reveal>
 <Reveal delay={120}><p className="text-lg text-ink/75 leading-relaxed">Neurodegenerative diseases progress silently. Confirming them usually needs specialised imaging and centralised labs, which many patients in India and beyond cannot easily reach. NeuroPragya combines neuroscience, engineering and empathy to move reliable, non-invasive and cost-effective testing closer to the patient.</p></Reveal>
</div></section>

<section className="sec bg-ice"><div className="wrap">
 <Heading title="What we work on" sub="Four connected focus areas, one goal: earlier answers for brain health."/>
 <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{FOCUS.map((f,i)=><Reveal key={f.t} delay={i*90}><div className="group h-full rounded-2xl bg-white p-6 ring-1 ring-navy/10 transition duration-300 hover:-translate-y-1.5 hover:ring-teal hover:shadow-xl">
  <div className="grid h-12 w-12 place-items-center rounded-xl bg-teal-50 text-teal transition group-hover:bg-navy group-hover:text-white"><Icon n={f.i}/></div>
  <h3 className="mt-5 text-lg font-bold text-navy">{f.t}</h3><p className="mt-2 text-sm text-ink/70 leading-relaxed">{f.d}</p></div></Reveal>)}</div>
</div></section>

<section className="sec"><div className="wrap grid items-center gap-14 lg:grid-cols-2">
 <Reveal><div className="relative"><div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal/25 to-navy/10 blur-2xl"/><img src="./img/device.jpg" alt="Mastiksh Yantra neurodiagnostic platform" className="relative rounded-3xl ring-1 ring-navy/10 shadow-2xl w-full"/></div></Reveal>
 <Reveal delay={120}><h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.05]">Meet Mastiksh Yantra</h2>
  <p className="mt-5 text-lg text-ink/75 leading-relaxed">A semi-automated electrochemical biosensing platform for early detection of neurodegenerative disorders. It reads blood-based biomarkers and uses AI-driven analysis to turn the signal into a result on a touchscreen.</p>
  <ul className="mt-6 space-y-3 text-ink/80">{['Blood-based biomarker detection','Portable, user-friendly design','Built to be affordable for clinics and labs'].map(t=><li key={t} className="flex gap-3"><Icon n="shield" c="h-6 w-6 text-teal shrink-0"/>{t}</li>)}</ul>
  <Link to="/technology" className="btn-p mt-8">How it works</Link></Reveal>
</div></section>

<section className="sec bg-navy-900 text-white"><div className="wrap">
 <div className="mb-12 max-w-2xl"><Reveal><h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">From a blood sample to a result</h2></Reveal></div>
 <ol className="grid gap-4 md:grid-cols-5">{STEPS.map(([t,d],i)=><Reveal key={t} delay={i*100}><li className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-5">
  <div className="font-display text-3xl font-extrabold text-teal-400">{i+1}</div><h3 className="mt-2 font-bold">{t}</h3><p className="mt-2 text-sm text-white/65 leading-relaxed">{d}</p></li></Reveal>)}</ol>
</div></section>

<section className="sec"><div className="wrap"><Heading title="What we stand for"/>
 <div className="grid gap-x-10 gap-y-8 md:grid-cols-4">{VALUES.map(([t,d],i)=><Reveal key={t} delay={i*80}><div className="border-t-2 border-teal pt-4"><h3 className="text-xl font-bold text-navy">{t}</h3><p className="mt-2 text-ink/70">{d}</p></div></Reveal>)}</div>
</div></section>
<CTA/></>}
