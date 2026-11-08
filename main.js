

var pg=document.body.dataset.page;
document.querySelectorAll('.links a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')===(pg==='home'?'index.html':pg+'.html')||(pg==='neet'||pg==='jee'||pg==='cet')&&a.dataset.p==='programs')});

var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
function reveal(){document.querySelectorAll('.rv').forEach(function(el){io.observe(el)})}
// ---- counters
var counted=false;
function counters(){if(counted)return;counted=true;document.querySelectorAll('[data-n]').forEach(function(el){
 var t=parseFloat(el.dataset.n),d=el.dataset.d?1:0,s=performance.now();
 (function f(n){var p=Math.min((n-s)/1600,1),v=t*(1-Math.pow(1-p,3));el.textContent=d?v.toFixed(1):Math.round(v);if(p<1)requestAnimationFrame(f)})(s)})}
// ---- hero slideshow
var sl=document.querySelectorAll('.slides div'),si=0;
if(sl.length)setInterval(function(){sl[si].classList.remove('on');si=(si+1)%sl.length;sl[si].classList.add('on')},6000);
// ---- waves and glitter
(function(){var c=document.getElementById('fx');if(!c)return;var x=c.getContext('2d'),W,H,G=[],T=[],m={x:-999,y:-999,on:0},t=0,dpr=Math.min(window.devicePixelRatio||1,2);
 function rs(){W=c.offsetWidth;H=c.offsetHeight;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);G=[];var n=Math.min(70,Math.round(W/18));for(var i=0;i<n;i++)G.push({x:Math.random()*W,y:Math.random()*H,s:Math.random()*2.2+.6,p:Math.random()*6.3,sp:Math.random()*.02+.008,vy:-(Math.random()*.25+.05),star:Math.random()<.3})}
 rs();window.addEventListener('resize',rs);
 window.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top;m.on=0;T.length=0;if(m.on&&T.length<90)for(var k=0;k<2;k++)T.push({x:m.x+(Math.random()-.5)*10,y:m.y+(Math.random()-.5)*10,vx:(Math.random()-.5)*1.2,vy:(Math.random()-.5)*1.2-.3,l:1,s:Math.random()*2+1})});
 function wave(off,amp,al,w){x.beginPath();for(var i=0;i<=W;i+=8){var y=H*.62+Math.sin(i*.004+t*.6+off)*amp+Math.sin(i*.009-t*.4+off*2)*amp*.5+off*14;if(i===0)x.moveTo(i,y);else x.lineTo(i,y)}x.strokeStyle='rgba(182,255,60,'+al+')';x.lineWidth=w;x.stroke()}
 (function a(){if(c.offsetWidth!==W||c.offsetHeight!==H)rs();if(!W){requestAnimationFrame(a);return}t+=.012;x.clearRect(0,0,W,H);
  for(var k=0;k<5;k++)wave(k*.7,34+k*6,.16+k*.06,k===2?1.6:1);
  for(var i=0;i<G.length;i++){var g=G[i];g.p+=g.sp;g.y+=g.vy;g.x+=(g.vx||0);g.vx=(g.vx||0)*.94;if(m.on){var dx=m.x-g.x,dy=m.y-g.y,dd=Math.sqrt(dx*dx+dy*dy);if(dd<260&&dd>8){var f=(1-dd/260)*.9;g.x+=dx/dd*f*3.2;g.y+=dy/dd*f*3.2}}if(g.y<-10){g.y=H+10;g.x=Math.random()*W}
   var tw=(Math.sin(g.p)+1)/2,al=.15+tw*.75;
   x.fillStyle='rgba(206,255,110,'+al+')';x.shadowColor='rgba(182,255,60,.9)';x.shadowBlur=8+tw*8;
   if(g.star){var r=g.s*(1.6+tw*1.6);x.beginPath();x.moveTo(g.x,g.y-r*2);x.quadraticCurveTo(g.x,g.y,g.x+r*2,g.y);x.quadraticCurveTo(g.x,g.y,g.x,g.y+r*2);x.quadraticCurveTo(g.x,g.y,g.x-r*2,g.y);x.quadraticCurveTo(g.x,g.y,g.x,g.y-r*2);x.fill()}
   else{x.beginPath();x.arc(g.x,g.y,g.s*(.6+tw*.6),0,6.3);x.fill()}}
  for(var q=T.length-1;q>=0;q--){var p=T[q];p.x+=p.vx;p.y+=p.vy;p.l-=.025;if(p.l<=0){T.splice(q,1);continue}x.fillStyle='rgba(206,255,110,'+p.l+')';x.shadowColor='rgba(182,255,60,1)';x.shadowBlur=12;x.beginPath();x.arc(p.x,p.y,p.s*p.l+.4,0,6.3);x.fill()}
  if(m.on){var gr=x.createRadialGradient(m.x,m.y,0,m.x,m.y,120);gr.addColorStop(0,'rgba(182,255,60,.16)');gr.addColorStop(1,'rgba(182,255,60,0)');x.shadowBlur=0;x.fillStyle=gr;x.fillRect(m.x-120,m.y-120,240,240)}
  x.shadowBlur=0;requestAnimationFrame(a)})()})();
// ---- chapter tabs
document.querySelectorAll('#tabs button').forEach(function(b){b.onclick=function(){
 document.querySelectorAll('#tabs button').forEach(function(z){z.classList.remove('on')});b.classList.add('on');
 document.querySelectorAll('.chap').forEach(function(c){c.classList.remove('on')});document.getElementById('c-'+b.dataset.c).classList.add('on')}});
// ---- dummy faculty (illustrated portraits, fictional names)
function portrait(o){var s=o.skin,sh=o.shade,h=o.hair,g='';
 var back='',front='';
 if(o.hs==='long'){back='<path d="M88 125C78 36 222 36 212 125L220 238 80 238Z" fill="'+h+'"/>';front='<path d="M96 108C98 52 202 52 204 108C182 84 128 82 96 108Z" fill="'+h+'"/>'}
 if(o.hs==='short'){front='<path d="M96 112C88 40 212 40 204 112C192 84 108 84 96 112Z" fill="'+h+'"/>'}
 if(o.hs==='bun'){back='<circle cx="150" cy="44" r="24" fill="'+h+'"/>';front='<path d="M95 112C90 48 210 48 205 112C190 84 110 84 95 112Z" fill="'+h+'"/>'}
 if(o.hs==='bob'){back='<path d="M90 128C80 40 220 40 210 128L214 176 86 176Z" fill="'+h+'"/>';front='<path d="M96 110C98 52 202 52 204 110C180 80 128 80 96 110Z" fill="'+h+'"/>'}
 if(o.hs==='senior'){back='<path d="M98 118C96 96 104 88 112 86L112 126Z M202 118C204 96 196 88 188 86L188 126Z" fill="'+h+'"/>';front='<path d="M100 100C104 66 196 66 200 100C186 82 114 82 100 100Z" fill="'+h+'"/>'}
 var eyes='<ellipse cx="124" cy="120" rx="9" ry="5.5" fill="#fff"/><ellipse cx="176" cy="120" rx="9" ry="5.5" fill="#fff"/><circle cx="125" cy="120" r="4" fill="#2b1d16"/><circle cx="177" cy="120" r="4" fill="#2b1d16"/>';
 var brows='<path d="M110 105Q124 98 138 104" stroke="'+(o.brow||h)+'" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M162 104Q176 98 190 105" stroke="'+(o.brow||h)+'" stroke-width="4.5" fill="none" stroke-linecap="round"/>';
 var nose='<path d="M150 118Q143 142 151 146" stroke="'+sh+'" stroke-width="3.5" fill="none" stroke-linecap="round"/>';
 var mouth=o.fem?'<path d="M134 158Q150 172 166 158Q150 164 134 158Z" fill="#a8453f"/>':'<path d="M134 158Q150 170 166 158" stroke="#7a3b32" stroke-width="3.5" fill="none" stroke-linecap="round"/>';
 var hair2=(o.mus?'<path d="M130 152Q140 145 150 150Q160 145 170 152Q160 158 150 154Q140 158 130 152Z" fill="'+(o.mus)+'"/>':'')+(o.beard?'<path d="M100 132C100 190 200 190 200 132C196 160 176 176 150 176C124 176 104 160 100 132Z" fill="'+o.beard+'"/>':'');
 var gl=o.glasses?'<g fill="none" stroke="#1b1f23" stroke-width="3.5"><rect x="106" y="106" width="36" height="28" rx="11"/><rect x="158" y="106" width="36" height="28" rx="11"/><path d="M142 118H158"/></g>':'';
 var bindi=o.bindi?'<circle cx="150" cy="92" r="3.6" fill="#d8212a"/>':'';
 var cloth='<path d="M26 300C26 236 78 206 150 206S274 236 274 300Z" fill="'+o.shirt+'"/>'+(o.tie?'<path d="M150 214L138 232 150 292 162 232Z" fill="'+o.tie+'"/><path d="M118 210L150 236 182 210 170 204 150 222 130 204Z" fill="#f4f1ea"/>':'<path d="M120 208Q150 246 180 208Q150 222 120 208Z" fill="'+sh+'"/>')+(o.blazer?'<path d="M26 300C26 236 78 206 118 208L150 300Z M274 300C274 236 222 206 182 208L150 300Z" fill="'+o.blazer+'"/>':'');
 return '<svg viewBox="0 0 300 300" role="img" aria-label="Illustrated portrait of faculty member"><defs><linearGradient id="bg'+o.id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+o.bg+'"/><stop offset="1" stop-color="#07090c"/></linearGradient></defs><rect width="300" height="300" fill="url(#bg'+o.id+')"/><circle cx="238" cy="62" r="40" fill="'+o.accent+'" opacity=".16"/>'+back+cloth+'<rect x="128" y="168" width="44" height="50" rx="16" fill="'+sh+'"/><circle cx="98" cy="126" r="10" fill="'+s+'"/><circle cx="202" cy="126" r="10" fill="'+s+'"/><ellipse cx="150" cy="120" rx="52" ry="62" fill="'+s+'"/>'+front+brows+eyes+gl+nose+mouth+hair2+bindi+'</svg>'}
var F=[['Dr. Ananya Rao','Physics · NEET and JEE','M.Sc., Ph.D. · 12 years teaching','Senior faculty',{id:1,fem:1,skin:'#d9a37a',shade:'#b98259',hair:'#1d1410',hs:'long',glasses:1,shirt:'#2f7d5b',bg:'#173a2a',accent:'#b6ff3c'}],
['Mr. Kiran Shetty','Mathematics · JEE and CET','M.Sc. Maths · 10 years teaching','Faculty',{id:2,skin:'#c58b62',shade:'#a56f4a',hair:'#17110d',hs:'short',shirt:'#e9ecef',tie:'#2f3b52',bg:'#3a1e10',accent:'#ff5a1f'}],
['Ms. Meera Nair','Biology · NEET','M.Sc. Zoology · 9 years teaching','Faculty',{id:3,fem:1,skin:'#e0b08a',shade:'#c08f68',hair:'#1a120e',hs:'bun',bindi:1,shirt:'#2b7fb0',bg:'#10303f',accent:'#6ad1ff'}],
['Mr. Suresh Gowda','Chemistry · NEET, JEE and CET','M.Sc. Chemistry · 24 years teaching','Senior faculty',{id:4,skin:'#c9936b',shade:'#a9764f',hair:'#d9dcd9',brow:'#aeb2ae',mus:'#cfd2cf',hs:'senior',glasses:1,shirt:'#d9d6cf',blazer:'#3b4552',tie:'#7a1f2a',bg:'#3a3012',accent:'#ffd23c'}],
['Ms. Divya Hegde','Foundation and Class 9-10','B.Ed., M.Sc. · 7 years teaching','Faculty',{id:5,fem:1,skin:'#e3b48f',shade:'#c4946e',hair:'#3a2418',hs:'bob',shirt:'#8e4fc4',bg:'#2a1840',accent:'#d68cff'}],
['Mr. Arjun Patil','Test series and doubts','B.Tech · 6 years teaching','Faculty',{id:6,skin:'#b9805a',shade:'#9a6644',hair:'#120e0b',beard:'#1a130e',hs:'short',shirt:'#1f2937',bg:'#40182a',accent:'#ff7a9c'}]];
var facEl=document.getElementById('fac');if(facEl)facEl.innerHTML=F.map(function(f){
 return '<div class="fc rv">'+portrait(f[4])+'<div><h4>'+f[0]+'</h4><p>'+f[1]+'<br>'+f[2]+'</p><em>'+f[3]+' · dummy profile</em></div></div>'}).join('');
reveal();if(pg==='home')counters();

// ---- sitewide glitter that follows the pointer
(function(){var c=document.createElement('canvas');c.setAttribute('aria-hidden','true');c.style.cssText='position:fixed;inset:0;width:100%;height:100%;z-index:70;pointer-events:none';document.body.appendChild(c);
 var x=c.getContext('2d'),W,H,G=[],T=[],m={x:-999,y:-999,on:0},SC=1,dpr=Math.min(window.devicePixelRatio||1,2);
 function rs(){W=window.innerWidth;SC=W<700?1.7:1;H=window.innerHeight;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);G=[];var n=W<700?38:Math.min(55,Math.round(W/24));for(var i=0;i<n;i++)G.push({x:Math.random()*W,y:Math.random()*H,s:(Math.random()*1.8+.5)*SC,p:Math.random()*6.3,sp:Math.random()*.02+.008,vy:-(Math.random()*.2+.04),star:Math.random()<.3})}
 rs();window.addEventListener('resize',rs);
 function trail(px,py){m.x=px;m.y=py;m.on=1;clearTimeout(m.t);if(T.length<110)for(var k=0;k<2;k++)T.push({x:px+(Math.random()-.5)*10,y:py+(Math.random()-.5)*10,vx:(Math.random()-.5)*1.2,vy:(Math.random()-.5)*1.2-.3,l:1,s:(Math.random()*2+1)*SC})}
 function burst(px,py){m.x=px;m.y=py;m.on=1;clearTimeout(m.t);for(var k=0;k<18;k++){var an=Math.random()*6.283,sp=Math.random()*3+.8;T.push({x:px,y:py,vx:Math.cos(an)*sp,vy:Math.sin(an)*sp,l:1.2,s:(Math.random()*2.4+1)*SC})}}
 function letgo(){clearTimeout(m.t);m.t=setTimeout(function(){m.on=0},900)}
 window.addEventListener('mousemove',function(e){trail(e.clientX,e.clientY)});
 window.addEventListener('mousedown',function(e){burst(e.clientX,e.clientY)});
 window.addEventListener('touchstart',function(e){var t=e.touches[0];if(t){burst(t.clientX,t.clientY)}},{passive:true});
 window.addEventListener('touchmove',function(e){var t=e.touches[0];if(t)trail(t.clientX,t.clientY)},{passive:true});
 window.addEventListener('touchend',letgo,{passive:true});window.addEventListener('touchcancel',letgo,{passive:true});
 document.addEventListener('mouseleave',function(){m.on=0});
 (function a(){x.clearRect(0,0,W,H);
  for(var i=0;i<G.length;i++){var g=G[i];g.p+=g.sp;g.y+=g.vy;
   if(m.on){var dx=m.x-g.x,dy=m.y-g.y,dd=Math.sqrt(dx*dx+dy*dy);if(dd<280&&dd>8){var f=(1-dd/280)*.9;g.x+=dx/dd*f*3.2;g.y+=dy/dd*f*3.2}}
   if(g.y<-10){g.y=H+10;g.x=Math.random()*W}
   var tw=(Math.sin(g.p)+1)/2;x.fillStyle='rgba(206,255,110,'+(.2+tw*.7)+')';x.shadowColor='rgba(182,255,60,.9)';x.shadowBlur=8+tw*8;
   if(g.star){var r=g.s*(1.6+tw*1.6);x.beginPath();x.moveTo(g.x,g.y-r*2);x.quadraticCurveTo(g.x,g.y,g.x+r*2,g.y);x.quadraticCurveTo(g.x,g.y,g.x,g.y+r*2);x.quadraticCurveTo(g.x,g.y,g.x-r*2,g.y);x.quadraticCurveTo(g.x,g.y,g.x,g.y-r*2);x.fill()}
   else{x.beginPath();x.arc(g.x,g.y,g.s*(.6+tw*.6),0,6.3);x.fill()}}
  for(var q=T.length-1;q>=0;q--){var p=T[q];p.x+=p.vx;p.y+=p.vy;p.l-=.025;if(p.l<=0){T.splice(q,1);continue}x.fillStyle='rgba(206,255,110,'+p.l+')';x.shadowColor='rgba(182,255,60,1)';x.shadowBlur=12;x.beginPath();x.arc(p.x,p.y,p.s*p.l+.4,0,6.3);x.fill()}
  if(m.on){var gr=x.createRadialGradient(m.x,m.y,0,m.x,m.y,120);gr.addColorStop(0,'rgba(182,255,60,.14)');gr.addColorStop(1,'rgba(182,255,60,0)');x.shadowBlur=0;x.fillStyle=gr;x.fillRect(m.x-120,m.y-120,240,240)}
  x.shadowBlur=0;requestAnimationFrame(a)})()})();

// ---- mobile drawer menu
(function(){var nav=document.querySelector('nav .wrap');if(!nav)return;
 var links=[].slice.call(nav.querySelectorAll('.links a'));
 var b=document.createElement('button');b.className='burger';b.setAttribute('aria-label','Open menu');b.setAttribute('aria-expanded','false');b.innerHTML='<i></i><i></i><i></i>';nav.appendChild(b);
 var ov=document.createElement('div');ov.className='dov';
 var dr=document.createElement('aside');dr.className='drawer';dr.setAttribute('aria-label','Site menu');
 dr.innerHTML='<div class="dh"><span class="logo">ROOT<b>CLASSES</b></span><button class="dx" aria-label="Close menu">\u2715</button></div>'+links.map(function(a,i){return '<a href="'+a.getAttribute('href')+'" style="--i:'+i+'">'+a.textContent+'</a>'}).join('')+'<a class="btn dcta" href="'+(links[links.length-1]?links[links.length-1].getAttribute('href'):'#')+'" style="--i:'+links.length+'">Book a free demo</a>';
 document.body.appendChild(ov);document.body.appendChild(dr);
 function mark(){var cur=nav.querySelector('.links a.on'),h=cur?cur.getAttribute('href'):null;dr.querySelectorAll('a').forEach(function(a){a.classList.toggle('cur',!!h&&a.getAttribute('href')===h&&!a.classList.contains('btn'))})}
 function open(){mark();dr.classList.add('open');ov.classList.add('open');b.setAttribute('aria-expanded','true')}
 function close(){dr.classList.remove('open');ov.classList.remove('open');b.setAttribute('aria-expanded','false')}
 b.addEventListener('click',open);ov.addEventListener('click',close);dr.querySelector('.dx').addEventListener('click',close);
 dr.addEventListener('click',function(e){if(e.target.closest('a'))setTimeout(close,50)});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
 window.addEventListener('resize',function(){if(window.innerWidth>900)close()});
})();
