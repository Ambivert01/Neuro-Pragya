import {Reveal} from '../ui';import {TEAM} from '../data';import {CTA} from './Home';import PageHero from './PageHero';
export default function Team(){return <>
<PageHero title="A diverse team with one mission" sub="Four people combining scientific expertise, engineering skills and business acumen to build affordable, accessible and accurate neurodiagnostic solutions."/>
<section className="sec"><div className="wrap grid gap-6 md:grid-cols-2">{TEAM.map((m,i)=><Reveal key={m.n} delay={(i%2)*100}><article className="group flex h-full gap-5 rounded-3xl bg-white p-6 ring-1 ring-navy/10 transition hover:shadow-xl hover:ring-teal">
 <img src={`./img/${m.img}.jpg`} alt={m.n} className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 ring-teal-50 transition group-hover:ring-teal/40"/>
 <div><p className="text-sm font-semibold text-teal">{m.r}</p><h2 className="text-xl font-bold text-navy">{m.n}</h2><p className="mt-1 text-sm text-ink/65">{m.b}</p><p className="mt-3 text-sm"><span className="font-semibold text-navy">Focus: </span>{m.s}</p></div></article></Reveal>)}</div>
 <div className="wrap mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">{[['4','Team members'],['2','Co-founders'],['3','Directors'],['100%','Committed']].map(([a,b])=><Reveal key={b}><div className="font-display text-5xl font-extrabold text-navy">{a}</div><div className="text-sm text-ink/60">{b}</div></Reveal>)}</div>
</section><CTA/></>}
