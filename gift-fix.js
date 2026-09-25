(() => {
  const final = document.querySelector('.scene.final');
  const btn = document.getElementById('openGift');
  if (!final || !btn) return;

  const style = document.createElement('style');
  style.textContent = `
    .final-gift-button{width:190px;height:170px;border:0;background:transparent;cursor:pointer;position:relative;display:block;margin:24px auto 4px;padding:0;filter:drop-shadow(0 20px 22px rgba(104,48,67,.2))}
    .final-gift-button .gbox{position:absolute;left:25px;right:25px;bottom:5px;height:105px;border-radius:12px;background:linear-gradient(135deg,#ffb3c5,#d95782);box-shadow:inset 0 -10px 0 #c84f76}
    .final-gift-button .glid{position:absolute;left:17px;right:17px;top:34px;height:38px;border-radius:11px;background:linear-gradient(135deg,#f58eab,#df6288);z-index:3;transform-origin:10% 90%;transition:transform .75s cubic-bezier(.2,.8,.2,1)}
    .final-gift-button .gribbon{position:absolute;left:81px;top:31px;width:29px;height:112px;background:#fff1dfb8;z-index:4}
    .final-gift-button .gbow{position:absolute;left:64px;top:5px;width:62px;height:39px;z-index:6;transition:transform .75s ease}
    .final-gift-button .gbow:before,.final-gift-button .gbow:after{content:"";position:absolute;width:39px;height:29px;border:7px solid #fff1df;border-radius:50% 50% 10% 50%;transform:rotate(24deg)}
    .final-gift-button .gbow:after{right:0;transform:scaleX(-1) rotate(24deg)}
    .final-gift-hint{font-family:"Playfair Display";font-style:italic;color:#8d626d;font-size:13px}
    .final-gift-open .final-gift-button .glid{transform:translate(-7px,-55px) rotate(-18deg)}
    .final-gift-open .final-gift-button .gbow{transform:translate(-8px,-50px) rotate(-18deg)}
    .final-gift-open .final-gift-button{animation:none}
    .final-gift-reveal{display:none;animation:in .7s ease both}
    .final-gift-open .final-gift-button,.final-gift-open .final-gift-hint{display:none}
    .final-gift-open .final-gift-reveal{display:block}
  `;
  document.head.appendChild(style);

  btn.className = 'final-gift-button';
  btn.innerHTML = '<span class="gbow"></span><span class="glid"></span><span class="gribbon"></span><span class="gbox"></span>';
  btn.insertAdjacentHTML('afterend','<div class="final-gift-hint">tap the gift to open 🎁</div><div class="final-gift-reveal"><span class="bigheart">💗</span><div class="kicker">the surprise inside</div><h2 class="title">Happy Birthday,<br>Ayu.</h2><p class="sub">My Rasmalai. My Jaan. My Duniya. Thank you for being my favourite chapter. I love you, always. ❤️</p><div class="dots"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="footer"><button class="btn primary" id="celebrate">celebrate ✨</button><button class="btn soft" id="restart">start again</button></div></div>');

  btn.addEventListener('click', () => {
    final.classList.add('final-gift-open');
    const t=document.getElementById('finalTitle');
    const s=document.getElementById('finalSub');
    if(t) t.textContent='You opened it ♡';
    if(s) s.textContent='A little birthday surprise from your Manguman.';
  });
})();