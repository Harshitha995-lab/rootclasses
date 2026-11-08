

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
// ---- dummy faculty (illustrated avatars, fictional names)
var F=[['Dr. Ananya Rao','Physics · NEET and JEE','M.Sc., Ph.D. · 12 years teaching','#b6ff3c','#12301a'],
['Mr. Kiran Shetty','Mathematics · JEE and CET','M.Sc. Maths · 10 years teaching','#ff5a1f','#33150a'],
['Ms. Meera Nair','Biology · NEET','M.Sc. Zoology · 9 years teaching','#6ad1ff','#0d2633'],
['Mr. Suresh Gowda','Chemistry · NEET, JEE and CET','M.Sc. Chemistry · 11 years teaching','#ffd23c','#33290a'],
['Ms. Divya Hegde','Foundation and Class 9-10','B.Ed., M.Sc. · 7 years teaching','#d68cff','#2a1535'],
['Mr. Arjun Patil','Test series and doubts','B.Tech · 6 years teaching','#ff7a9c','#331320']];
var facEl=document.getElementById('fac');if(facEl)facEl.innerHTML=F.map(function(f){
 var ini=f[0].replace(/^(Dr\.|Mr\.|Ms\.)\s*/,'').split(' ').map(function(w){return w[0]}).join('');
 return '<div class="fc rv"><svg viewBox="0 0 300 230" role="img" aria-label="Illustrated avatar of '+f[0]+'"><rect width="300" height="230" fill="'+f[4]+'"/><circle cx="150" cy="92" r="46" fill="'+f[3]+'"/><path d="M52 230c0-58 44-92 98-92s98 34 98 92z" fill="'+f[3]+'" opacity=".85"/><text x="150" y="104" text-anchor="middle" font-family="Anton,Impact" font-size="40" fill="'+f[4]+'">'+ini+'</text></svg><div><h4>'+f[0]+'</h4><p>'+f[1]+'<br>'+f[2]+'</p><em>Dummy profile</em></div></div>'}).join('');
reveal();if(pg==='home')counters();

// ---- sitewide glitter that follows the pointer
(function(){var c=document.createElement('canvas');c.setAttribute('aria-hidden','true');c.style.cssText='position:fixed;inset:0;width:100%;height:100%;z-index:70;pointer-events:none';document.body.appendChild(c);
 var x=c.getContext('2d'),W,H,G=[],T=[],m={x:-999,y:-999,on:0},dpr=Math.min(window.devicePixelRatio||1,2);
 function rs(){W=window.innerWidth;H=window.innerHeight;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);G=[];var n=Math.min(55,Math.round(W/24));for(var i=0;i<n;i++)G.push({x:Math.random()*W,y:Math.random()*H,s:Math.random()*1.8+.5,p:Math.random()*6.3,sp:Math.random()*.02+.008,vy:-(Math.random()*.2+.04),star:Math.random()<.3})}
 rs();window.addEventListener('resize',rs);
 window.addEventListener('mousemove',function(e){m.x=e.clientX;m.y=e.clientY;m.on=1;if(T.length<90)for(var k=0;k<2;k++)T.push({x:m.x+(Math.random()-.5)*10,y:m.y+(Math.random()-.5)*10,vx:(Math.random()-.5)*1.2,vy:(Math.random()-.5)*1.2-.3,l:1,s:Math.random()*2+1})});
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
