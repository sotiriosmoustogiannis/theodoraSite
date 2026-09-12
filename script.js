
const y=document.querySelector('[data-year]'); if(y)y.textContent=new Date().getFullYear();
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{const c=document.getElementById('menu-check');if(c)c.checked=false;}));
const f=document.getElementById('contactForm'); if(f){f.addEventListener('submit',e=>{e.preventDefault();document.getElementById('formStatus').textContent='Το μήνυμα καταχωρήθηκε στο demo. Για πραγματική αποστολή συνδέστε τη φόρμα με email service ή backend.';f.reset();});}
