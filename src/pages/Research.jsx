import {Reveal,Heading,Icon} from '../ui';import {FOCUS} from '../data';import {CTA} from './Home';import PageHero from './PageHero';
export default function Research(){return <>
<PageHero title="Research focus" sub="Research-driven screening and diagnostics for the brain disorders that are hardest to catch early."/>
<section className="sec"><div className="wrap space-y-6">{FOCUS.map((f,i)=><Reveal key={f.t}><div className={`grid items-center gap-8 rounded-3xl p-8 md:p-10 md:grid-cols-[auto_1fr] ${i%2?'bg-ice':'bg-white ring-1 ring-navy/10'}`}>
 <div className="grid h-20 w-20 place-items-center rounded-2xl bg-navy text-white"><Icon n={f.i} c="h-10 w-10"/></div>
 <div><h2 className="text-2xl md:text-3xl font-bold text-navy">{f.t}</h2><p className="mt-2 text-lg text-ink/70 max-w-2xl">{f.d}</p></div></div></Reveal>)}</div></section>
<section className="sec bg-ice"><div className="wrap"><Heading title="Our approach"/>
 <div className="grid gap-5 md:grid-cols-3">{[['Bench','Biological assay development and neuroscience lab setup.'],['Build','In-house instrument design, electronics and mechanical assembly.'],['Bring to care','Affordable point-of-care devices for clinics and labs.']].map(([t,d],i)=><Reveal key={t} delay={i*100}><div className="h-full rounded-2xl bg-white p-7 ring-1 ring-navy/10"><h3 className="text-xl font-bold text-navy">{t}</h3><p className="mt-2 text-ink/70">{d}</p></div></Reveal>)}</div></div></section><CTA/></>}
