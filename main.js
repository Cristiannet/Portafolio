// Cursor personalizado
const cursor=document.getElementById('cursor');
document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
document.querySelectorAll('a,button,.tarjeta,.proyecto').forEach(el=>{
  el.addEventListener('mouseenter',()=>cursor.classList.add('grande'));
  el.addEventListener('mouseleave',()=>cursor.classList.remove('grande'));
});
// Texto que se escribe
const frases=['funciona.','posiciona.','conecta.','vende.'];
const t=document.getElementById('typed');let f=0,c=0,borrando=false;
(function escribir(){
  const txt=frases[f];
  t.textContent=txt.slice(0,c);
  if(!borrando&&c===txt.length){borrando=true;return setTimeout(escribir,1400)}
  if(borrando&&c===0){borrando=false;f=(f+1)%frases.length}
  c+=borrando?-1:1;
  setTimeout(escribir,borrando?50:100);
})();
// Aparición al hacer scroll + contadores
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;
  e.target.classList.add('visible');
  e.target.querySelectorAll('[data-n]').forEach(contar);
  io.unobserve(e.target);
}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
function contar(el){
  const n=+el.dataset.n;let i=0;
  const id=setInterval(()=>{i++;el.textContent=i;if(i>=n)clearInterval(id)},200);
}
// Invertir colores (blanco/negro)
document.querySelectorAll('.btn-tema').forEach(b=>b.addEventListener('click',()=>document.body.classList.toggle('claro')));
document.getElementById('year').textContent=new Date().getFullYear();
