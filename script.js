// Reveal on scroll, copy actions, CV download, and certificate modal
document.addEventListener('DOMContentLoaded', function(){
  // Intersection Observer for reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if(ent.isIntersecting) ent.target.classList.add('visible');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Copy email
  const copyEmail = document.getElementById('copyEmail');
  if(copyEmail){
    copyEmail.addEventListener('click', async () => {
      const txt = document.getElementById('emailText').innerText;
      try{ await navigator.clipboard.writeText(txt); copyEmail.innerText = 'Copied!'; setTimeout(()=>copyEmail.innerText='Copy Email',1500);}catch(e){alert('Unable to copy');}
    });
  }

  // Download CV button - client side text file
  const downloadBtn = document.getElementById('downloadBtn');
  if(downloadBtn){
    downloadBtn.addEventListener('click', ()=>{
      const cv = `Nawaf Achdan Fairil\nDevOps & Cloud Enthusiast\nEmail: nawafairil@example.com\nLocation: Indramayu, Indonesia\n\nSummary:\nPassionate DevOps student focusing on CI/CD, containerization, and cloud automation.`;
      const blob = new Blob([cv], {type:'text/plain'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'Nawaf_CV.txt'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    });
  }

  // Certificate modal preview
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalCloseBtn = document.getElementById('modalClose');

  document.querySelectorAll('.cert-thumb').forEach(img => {
    img.addEventListener('click', ()=>{
      modalImg.src = img.src;
      modalTitle.textContent = img.getAttribute('data-title') || img.alt;
      modal.setAttribute('aria-hidden','false');
    });
  });

  modalCloseBtn.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click', (e)=>{ if(e.target === modal) modal.setAttribute('aria-hidden','true'); });

  // small copy buttons on project cards (if exist)
  document.querySelectorAll('button[data-copy]').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const v = btn.getAttribute('data-copy');
      try{ await navigator.clipboard.writeText(v); btn.innerText='Copied'; setTimeout(()=>btn.innerText='Copy Title',1200);}catch(e){ alert('Copy failed'); }
    });
  });
});