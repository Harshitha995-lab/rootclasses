

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
// ---- chapter tabs
document.querySelectorAll('#tabs button').forEach(function(b){b.onclick=function(){var r=b.closest('.pg')||document;
 b.parentNode.querySelectorAll('button').forEach(function(z){z.classList.remove('on')});b.classList.add('on');
 r.querySelectorAll('.chap').forEach(function(c){c.classList.remove('on')});r.querySelector('#c-'+b.dataset.c).classList.add('on')}});
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
var F=[['Mr. Javed Rahi','Founder','B.E. · MBA · B.Ed · PG Diploma in Educational Technology · PG Diploma in Sustainable Science','Founder',{id:7,skin:'#c58b62',shade:'#a56f4a',hair:'#17110d',hs:'short',shirt:'#e9ecef',tie:'#c8141b',bg:'#0f4d25',accent:'#6fd04f'},'f_javed'],
['Ms. Jahnavi Prakash','Faculty','M.A., B.Ed.','Faculty',{id:1,fem:1,skin:'#d9a37a',shade:'#b98259',hair:'#1d1410',hs:'long',glasses:1,shirt:'#2f7d5b',bg:'#173a2a',accent:'#b6ff3c'},'f_jahnavi'],
['Mr. Venkatachala','Faculty','M.A., M.Ed.','Faculty',{id:2,skin:'#c58b62',shade:'#a56f4a',hair:'#17110d',hs:'short',shirt:'#e9ecef',tie:'#2f3b52',bg:'#3a1e10',accent:'#ff5a1f'},'f_venkat'],
['Mr. Madhu Yadav','Faculty','M.Sc.','Faculty',{id:5,fem:1,skin:'#e3b48f',shade:'#c4946e',hair:'#3a2418',hs:'bob',shirt:'#8e4fc4',bg:'#2a1840',accent:'#d68cff'},'f_madhu'],
['Ms. Mamtha','Office Assistant','Front office and student support','Office team',{id:8,fem:1,skin:'#e3b48f',shade:'#c4946e',hair:'#3a2418',hs:'long',shirt:'#c8141b',bg:'#0f4d25',accent:'#6fd04f'},'f_mamtha']];
var facEl=document.getElementById('fac');if(facEl)facEl.innerHTML=F.map(function(f){
 return '<div class="fc rv">'+(f[5]?'<img class="fph" alt="'+f[0]+'" loading="lazy" src="'+(typeof IM!=='undefined'?IM[f[5]]:'images/'+f[5]+'.jpg')+'">':portrait(f[4]))+'<div><h4>'+f[0]+'</h4><p>'+f[1]+'<br>'+f[2]+'</p><em>'+f[3]+''+'</em></div></div>'}).join('');
reveal();if(pg==='home')counters();

// ---- mobile drawer menu
(function(){var nav=document.querySelector('nav .wrap');if(!nav)return;
 var links=[].slice.call(nav.querySelectorAll('.links a'));
 var b=document.createElement('button');b.className='burger';b.setAttribute('aria-label','Open menu');b.setAttribute('aria-expanded','false');b.innerHTML='<i></i><i></i><i></i>';nav.appendChild(b);
 var ov=document.createElement('div');ov.className='dov';
 var dr=document.createElement('aside');dr.className='drawer';dr.setAttribute('aria-label','Site menu');
 dr.innerHTML='<div class="dh"><span class="logo"><img src="images/logo.jpg" alt="Root Classes"></span><button class="dx" aria-label="Close menu">\u2715</button></div>'+links.map(function(a,i){return '<a href="'+a.getAttribute('href')+'" style="--i:'+i+'">'+a.textContent+'</a>'}).join('')+'<a class="btn dcta" href="'+(links[links.length-1]?links[links.length-1].getAttribute('href'):'#')+'" style="--i:'+links.length+'">Enroll now</a>';
 document.body.appendChild(ov);document.body.appendChild(dr);
 function mark(){var cur=nav.querySelector('.links a.on'),h=cur?cur.getAttribute('href'):null;dr.querySelectorAll('a').forEach(function(a){a.classList.toggle('cur',!!h&&a.getAttribute('href')===h&&!a.classList.contains('btn'))})}
 function open(){mark();dr.classList.add('open');ov.classList.add('open');b.setAttribute('aria-expanded','true')}
 function close(){dr.classList.remove('open');ov.classList.remove('open');b.setAttribute('aria-expanded','false')}
 b.addEventListener('click',open);ov.addEventListener('click',close);dr.querySelector('.dx').addEventListener('click',close);
 dr.addEventListener('click',function(e){if(e.target.closest('a'))setTimeout(close,50)});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
 
})();

// ---- reviews (real Google reviews, copied word for word)
var RV=[["Rakshitha Cheluva", "Google review", "Root Classes is an excellent tuition center for Class 10 students. The teachers are highly supportive, dedicated, and make learning easy to understand. It is the best place for students to enrich their knowledge, improve confidence, and achieve good results in academics. Highly recommended for every Class 10 student!"], ["Shreya DS", "Google review", "Sir and his physics classes...... Damn amazing!!! It's been years I have completed my 10th!!! But nothing goes off your brain!!! For 10th coaching probably no one can find a better teacher like him!!!! The way he builds conceptual knowledge among students is amazing!!"], ["chaithra gowda", "Google review", "It's best coaching centre for affordable price. Revision, especially helps a lot in board exams .Javed sir especially uses many books and teach all the content which makes topic crystal clear!!!"], ["Pooja", "Google review", "He’s an excellent teacher , uses the best ways to teach students , really good tuition for board exams"], ["Uma Bm", "Google review", "Really good coaching for grade 9th students. Excellence in process of making the students to understand the new concepts. Especially Javidh sir."], ["Dhanush Arya", "Google review", "The teacher is very well experienced and could understand the problems of Student. And also very friendly. Loved the classes.."], ["Varsha S", "Google review", "Excellent mentor!!! and a good coaching centre. Javid sir teaches lessons in a well structured way."], ["shiva kumar", "Google review", "Very good and professional teacheing"]];
document.querySelectorAll('[data-rv]').forEach(function(el){var n=+el.dataset.rv;el.innerHTML=RV.slice(0,n).map(function(r){return '<div class="rc"><div class="who"><span class="av">'+r[0].charAt(0)+'</span><span><b>'+r[0]+'</b><small>'+r[1]+'</small></span></div><div class="stars" style="margin:0">★★★★★</div><p>'+r[2]+'</p><span class="tagr">Posted on Google</span></div>'}).join('');reveal()});
// ---- lightbox
(function(){var figs=[].slice.call(document.querySelectorAll('.gg figure'));if(!figs.length)return;
 var lb=document.createElement('div');lb.className='lb';lb.innerHTML='<button aria-label="Close">\u2715</button><img alt="">';document.body.appendChild(lb);
 figs.forEach(function(f){f.addEventListener('click',function(){lb.querySelector('img').src=f.querySelector('img').src;lb.classList.add('open')})});
 lb.addEventListener('click',function(){lb.classList.remove('open')});})();

// ---- enrolment form -> WhatsApp (no backend)
(function(){var f=document.getElementById('enroll');if(!f)return;
 var err=document.getElementById('ferr');
 f.addEventListener('submit',function(e){e.preventDefault();
  var n=f.name.value.trim(),c=f.cls.value,p=f.phone.value.replace(/[\s\-+]/g,'').replace(/^(91|0)(?=\d{10}$)/,''),m=f.email.value.trim(),msg='';
  if(n.length<2)msg='Please enter the student\u2019s name.';
  else if(!c)msg='Please choose the class for admission.';
  else if(!/^[6-9]\d{9}$/.test(p))msg='Please enter a valid 10-digit mobile number.';
  else if(m&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m))msg='Please check the email ID, or leave it blank.';
  if(msg){err.textContent=msg;err.hidden=false;return}
  err.hidden=true;
  try{var fd=new URLSearchParams();fd.append('entry.1847352711',n);fd.append('entry.977506308',c);fd.append('entry.633697519',p);fd.append('entry.341688759',m);
   fetch('https://docs.google.com/forms/d/e/1FAIpQLSdOozJsG5Nfv4Tp99EnemxJF1gIWiGmlWBiQSJs9Ze1DZSl4w/formResponse',{method:'POST',mode:'no-cors',body:fd})}catch(x){}
  var t='Hello Root Classes, I would like to enroll.\nStudent: '+n+'\nAdmission for: '+c+'\nContact: '+p+(m?'\nEmail: '+m:'');
  window.open('https://wa.me/919019627490?text='+encodeURIComponent(t),'_blank','noopener');
  f.innerHTML='<h3 style="font-size:34px">Thank you, '+n.replace(/[<>&"]/g,'')+'.</h3><p class="sub">Your enrolment request for '+c+' is ready. If WhatsApp did not open, please call <a href="tel:+919019627490" style="color:var(--acc)">9019627490</a>.</p>'})})();

// ---- sticky call / enroll bar (mobile)
(function(){if(document.getElementById('cbar'))return;var b=document.createElement('div');b.id='cbar';
 b.innerHTML='<a class="cb-call" href="tel:+919019627490">Call now</a><a class="cb-enr" href="contact.html">Enroll now</a>';document.body.appendChild(b)})();
