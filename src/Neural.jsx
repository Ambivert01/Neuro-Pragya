import {useEffect,useRef} from 'react';
export default function Neural({className=''}){
 const ref=useRef(null);
 useEffect(()=>{const c=ref.current,x=c.getContext('2d');let w,h,pts,raf,mx=-999,my=-999;
  const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const size=()=>{const d=devicePixelRatio||1;w=c.clientWidth;h=c.clientHeight;c.width=w*d;c.height=h*d;x.setTransform(d,0,0,d,0,0);
   const n=Math.min(70,Math.floor(w*h/14000));pts=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))};
  const draw=()=>{x.clearRect(0,0,w,h);
   for(const p of pts){if(!rm){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1}}
   for(let i=0;i<pts.length;i++){const a=pts[i];
    for(let j=i+1;j<pts.length;j++){const b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){x.strokeStyle=`rgba(18,160,184,${(1-d/130)*.35})`;x.lineWidth=1;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
    const dm=Math.hypot(a.x-mx,a.y-my);x.fillStyle=dm<120?'#3CC3D8':'rgba(11,42,111,.55)';x.beginPath();x.arc(a.x,a.y,dm<120?3.200:2,0,7);x.fill()}
   raf=requestAnimationFrame(draw)};
  const mv=e=>{const r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top};
  size();draw();addEventListener('resize',size);addEventListener('mousemove',mv);
  return()=>{cancelAnimationFrame(raf);removeEventListener('resize',size);removeEventListener('mousemove',mv)}},[]);
 return <canvas ref={ref} aria-hidden className={`absolute inset-0 h-full w-full ${className}`}/>}
