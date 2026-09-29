import {useState} from 'react';import emailjs from '@emailjs/browser';import {Reveal,Icon} from '../ui';import {CONTACT} from '../data';import PageHero from './PageHero';
export default function Contact(){const [f,setF]=useState({name:'',email:'',topic:'General enquiry',msg:''});const [st,setSt]=useState('idle');const [wa,setWa]=useState(false);
 const on=k=>e=>setF({...f,[k]:e.target.value});
 const submit=async e=>{e.preventDefault();if(st==='sending')return;setSt('sending');
  try{await emailjs.send('service_p9kelvi','template_tu25rvv',{name:f.name,email:f.email,topic:f.topic,message:f.msg},'_UFQlU_je6sm8kOe5');
   if(wa)window.open(`https://wa.me/919974096180?text=${encodeURIComponent(`*New Message*\n\n*Name:* ${f.name}\n*Email:* ${f.email}\n*Topic:* ${f.topic}\n*Message:* ${f.msg}`)}`,'_blank');
   setSt('ok');setF({name:'',email:'',topic:'General enquiry',msg:''})}catch{setSt('err')}}
 const inp='mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/30';
 return <>
<PageHero title="Let&rsquo;s talk" sub="Questions, collaboration, research partnership or investment: write to us and we will reply."/>
<section className="sec"><div className="wrap grid gap-10 lg:grid-cols-[1fr_1.2fr]">
 <Reveal><div className="space-y-4">{[['mail','Email',CONTACT.email,`mailto:${CONTACT.email}`],['phone','Phone',CONTACT.phone,`tel:${CONTACT.tel}`],['pin','Address',CONTACT.address,null]].map(([i,a,b,h])=><div key={a} className="flex gap-4 rounded-2xl bg-ice p-5 ring-1 ring-navy/10"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-white"><Icon n={i} c="h-5 w-5"/></div><div><div className="text-sm text-ink/55">{a}</div>{h?<a href={h} className="font-medium text-navy hover:text-teal break-all">{b}</a>:<div className="font-medium text-navy">{b}</div>}</div></div>)}
  <iframe title="Location map" className="h-56 w-full rounded-2xl ring-1 ring-navy/10" loading="lazy" src="https://www.google.com/maps?q=Limda+Waghodia+Road+Vadodara&output=embed"/></div></Reveal>
 <Reveal delay={120}><form onSubmit={submit} className="rounded-3xl bg-white p-7 md:p-9 ring-1 ring-navy/10 shadow-xl space-y-5">
  <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium text-navy">Name<input required value={f.name} onChange={on('name')} className={inp}/></label><label className="text-sm font-medium text-navy">Email<input required type="email" value={f.email} onChange={on('email')} className={inp}/></label></div>
  <label className="block text-sm font-medium text-navy">Topic<select value={f.topic} onChange={on('topic')} className={inp}>{['General enquiry','Research collaboration','Clinical partnership','Investment','Careers'].map(t=><option key={t}>{t}</option>)}</select></label>
  <label className="block text-sm font-medium text-navy">Message<textarea required rows="5" value={f.msg} onChange={on('msg')} className={inp}/></label>
  <label className="flex items-center gap-2 text-sm text-ink/70 cursor-pointer"><input type="checkbox" checked={wa} onChange={e=>setWa(e.target.checked)} className="h-4 w-4 rounded accent-teal"/>Also send via WhatsApp</label>
  <button disabled={st==='sending'} className="btn-p w-full disabled:opacity-60">{st==='sending'?'Sending...':'Send message'}</button>
  {st==='ok'&&<p role="status" className="rounded-xl bg-teal-50 p-4 text-sm font-medium text-navy">Message sent. Thank you, we will reply to your email soon.</p>}
  {st==='err'&&<p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-700">Message could not be sent. Please try again or write to <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>}
 </form></Reveal>
</div></section></>}
