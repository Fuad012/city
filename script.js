var LOGO="images/logo.png";
var P=["images/photo-01.jpg","images/photo-02.jpg","images/photo-03.jpg","images/photo-04.jpg","images/photo-05.jpg","images/photo-06.jpg","images/photo-07.jpg","images/photo-08.jpg","images/photo-09.jpg","images/photo-10.jpg","images/photo-11.jpg","images/photo-12.jpg","images/photo-13.jpg","images/photo-14.jpg","images/photo-15.jpg","images/photo-16.jpg","images/photo-17.jpg","images/photo-18.jpg","images/photo-19.jpg","images/photo-20.jpg","images/photo-21.jpg","images/photo-22.jpg","images/photo-23.jpg","images/photo-24.jpg","images/photo-25.jpg"];
var F=[["⚡","24/7 Electricity"],["🎮","Games: PS5, Table Tennis, Snooker, Chess, Jenga"],["📶","Free WiFi / Netflix"],["🛋️","Nice Seat-Out Lounge"],["🛡️","24/7 Standby Security"],["🛏️","Exquisite Bedroom + Study"],["🍳","Modern Kitchen Appliances"],["🧺","Washing Machine"],["🏃","Treadmill"],["🚗","Ample Parking Space"]];
document.getElementById('fg').innerHTML=F.map(function(x){return '<div class="card fac rv"><i>'+x[0]+'</i><h3 style="font-size:1rem">'+x[1]+'</h3></div>'}).join('');
document.querySelectorAll('[data-l]').forEach(function(e){e.src=LOGO});
document.querySelectorAll('[data-i]').forEach(function(e){e.src=P[+e.dataset.i]});
document.querySelectorAll('[data-bg]').forEach(function(e){e.style.backgroundImage='url('+P[+e.dataset.bg]+')'});
var C={0:'living',3:'living',11:'living',13:'living',2:'bed',4:'bed',6:'bed',8:'bed',14:'bed',16:'bed',1:'kit',5:'kit',7:'kit',9:'kit',12:'kit',15:'kit',17:'kit',10:'kit',18:'ev',19:'ev',20:'ev',21:'ev',22:'ev',23:'ev',24:'ev'};
var G=document.getElementById('gal');
function gal(f){G.innerHTML=P.map(function(s,i){return (f=='all'||C[i]==f)?'<img src="'+s+'" alt="City Nest photo">':''}).join('')}
gal('all');
document.getElementById('fl').onclick=function(e){var f=e.target.dataset.f;if(!f)return;this.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b===e.target)});gal(f)};
var LB=document.getElementById('lb');
G.onclick=function(e){if(e.target.tagName=='IMG'){LB.firstChild.src=e.target.src;LB.classList.add('on')}};
LB.onclick=function(){LB.classList.remove('on')};
var IO=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('v');IO.unobserve(x.target);var n=x.target.querySelectorAll('[data-n]');n.forEach(cnt)}})},{threshold:.15});
function cnt(el){var t=+el.dataset.n,i=0,s=setInterval(function(){i+=Math.ceil(t/40);if(i>=t){i=t;clearInterval(s)}el.textContent=i},40)}
function route(){var h=(location.hash||'#home').slice(1);if(!document.getElementById(h))h='home';
document.querySelectorAll('.pg').forEach(function(p){p.classList.toggle('on',p.id==h)});
document.querySelectorAll('.links a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')=='#'+h)});
document.getElementById('ln').classList.remove('open');window.scrollTo(0,0);
document.querySelectorAll('#'+h+' .rv').forEach(function(e){IO.observe(e)})}
window.addEventListener('hashchange',route);route();
document.getElementById('mb').onclick=function(){document.getElementById('ln').classList.toggle('open')};
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();var v=function(i){return document.getElementById(i).value||'-'};
var m='Hello City Nest, I would like to book.\nName: '+v('n')+'\nPhone: '+v('p')+'\nType: '+v('s')+'\nCheck-in: '+v('a')+'\nCheck-out: '+v('b')+'\nGuests: '+v('g')+'\nNote: '+v('m');
window.open('https://wa.me/2349067870343?text='+encodeURIComponent(m),'_blank')});
