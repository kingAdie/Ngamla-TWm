/* ================================================================
   NGAMLA TWM SECURITY — SMART ASSISTANT WIDGET v2
   Hardcoded knowledge base. No external API required.
   ================================================================ */

const NKB = {
  services: [
    { name: 'Manned Guarding', icon: '🛡️', desc: 'Trained, uniformed PSIRA-registered security officers deployed 24/7. Visible deterrence, access management, and rapid incident response.' },
    { name: 'CCTV Surveillance', icon: '📷', desc: 'Full HD IP camera systems from Dahua and Hikvision — designed, supplied, installed and configured by our certified technicians. Includes remote monitoring and NVR setup.' },
    { name: 'Alarm Systems', icon: '🔔', desc: 'Professional alarm systems with motion sensors, door contacts, and armed response integration. Remote arming and 24/7 monitoring.' },
    { name: 'Access Control', icon: '🔑', desc: 'Keycard, biometric, and PIN-based access control. Full audit trails, time-access scheduling, and integration with CCTV.' },
    { name: 'Mobile Patrol', icon: '🚗', desc: 'Regular vehicle patrols providing visible deterrence, quick response, and perimeter checks across your site or neighbourhood.' },
    { name: 'Event Security', icon: '🎪', desc: 'Crowd management, access control, and security for corporate events, festivals, and public gatherings. Pre-event risk assessment included.' }
  ],
  cameras: [
    'Dahua 3MP IP Bullet — full-colour, 40m, IP67',
    'Dahua 3MP PTZ Dome — 25× optical zoom, AI tracking',
    'Dahua 3MP Mini-Bullet — compact, full-colour LED',
    'Dahua 3MP Mini-Dome — flush-mount, IK10',
    'Dahua 4MP Colour Dome — full-colour 24/7, zero-lux',
    'Dahua 4MP Colour Bullet — 60m illumination',
    'Dahua 4MP IP Dome — SMD Plus AI, dual-light',
    'Hikvision 2MP IP Bullet — AcuSense AI, 60m IR',
    'Hikvision 3MP IP Dome — AcuSense, IK10',
    'Hikvision 3MP Mini-Dome — compact, built-in mic',
    'Hikvision 4MP Vari-focal Dome — motorised 2.8–12mm'
  ],
  nvrs: [
    'Dahua 8-Channel NVR — up to 8TB, AI analytics',
    'Dahua 16-Channel NVR — up to 16TB, face detection',
    'Hikvision 32-Channel NVR — 16 PoE ports, 40TB enterprise',
    'Hikvision 64-Channel NVR — 80TB, RAID, government grade'
  ]
};

function getNgamlaReply(raw) {
  const m = raw.toLowerCase().trim();
  if (/^(hi|hello|hey|good\s?(morning|afternoon|evening)|howzit|hola)/.test(m))
    return 'Hello! 👋 Welcome to Ngamla Twm Security.\n\nI can help you with our services, products, pricing, locations, or request a quote.\n\nWhat can I help you with?';
  if (/quote|pricing|price|cost|how much|rate|estimate/.test(m))
    return 'To get an accurate quote we need a quick site assessment — completely free.\n\n📋 **Request a Quote:**\n• <a href="contact.html" style="color:#E8651A">Fill in our Contact Form →</a>\n• Call: **066 319 2062** or **063 857 3727**\n• Email: ngamlatwmservices@gmail.com\n\nPricing depends on cameras needed, site size, and equipment. We provide a full written quote within 24 hours.';
  if (/service|what.*offer|what.*provide/.test(m) && !/manned|cctv|alarm|access|patrol|event/.test(m))
    return 'We offer 6 professional security services:\n\n' + NKB.services.map((s,i) => `**${i+1}. ${s.icon} ${s.name}**\n${s.desc}`).join('\n\n') + '\n\nWhich service would you like to know more about?';
  if (/manned|guard|officer|uniform/.test(m))
    return '🛡️ **Manned Guarding**\n\n' + NKB.services[0].desc + '\n\nInterested? Call **066 319 2062** or <a href="contact.html" style="color:#E8651A">request a quote →</a>';
  if (/cctv|camera|install|surveillance|dahua|hikvision|nvr/.test(m))
    return '📷 **CCTV Surveillance**\n\n' + NKB.services[1].desc + '\n\n**Sample cameras:**\n' + NKB.cameras.slice(0,5).map(c => '• ' + c).join('\n') + '\n\n<a href="products.html" style="color:#E8651A">View full product catalogue →</a>';
  if (/alarm|sensor|intruder|armed/.test(m))
    return '🔔 **Alarm Systems**\n\n' + NKB.services[2].desc + '\n\nCall **066 319 2062** or <a href="contact.html" style="color:#E8651A">request a quote →</a>';
  if (/access|biometric|keycard|fingerprint|gate/.test(m))
    return '🔑 **Access Control**\n\n' + NKB.services[3].desc + '\n\nCall **066 319 2062** or <a href="contact.html" style="color:#E8651A">request a quote →</a>';
  if (/patrol|vehicle|mobile|perimeter/.test(m))
    return '🚗 **Mobile Patrol**\n\n' + NKB.services[4].desc + '\n\nCall **066 319 2062** for patrol scheduling.';
  if (/event|crowd|festival|concert|function/.test(m))
    return '🎪 **Event Security**\n\n' + NKB.services[5].desc + '\n\nCall **066 319 2062** or <a href="contact.html" style="color:#E8651A">book a consultation →</a>';
  if (/product|camera model|dome|bullet|ptz/.test(m) && !/service/.test(m))
    return '📦 **Our Products**\n\nWe supply Dahua and Hikvision equipment — 11 cameras + 4 NVR models.\n\n<a href="products.html" style="color:#E8651A">Browse the full catalogue →</a>\n\nAll products include professional installation. No online prices — <a href="contact.html" style="color:#E8651A">request a quote</a> for accurate pricing.';
  if (/project|library|cape town|portfolio|experience/.test(m))
    return '🏛️ **Our Projects**\n\nFeatured project: CCTV installation at the **National Library of South Africa, Cape Town** — including system design, installation, testing, and full commissioning.\n\nWe serve government, public institutions, commercial offices, and schools.\n\n<a href="projects.html" style="color:#E8651A">View Projects →</a>';
  if (/process|how.*work|step|method|assess/.test(m))
    return '⚙️ **Our Process**\n\n**1.** Site Assessment\n**2.** Risk Evaluation\n**3.** System Design\n**4.** Installation\n**5.** Testing & Commissioning\n**6.** Handover & Support\n\nEvery project starts with a free site visit. <a href="contact.html" style="color:#E8651A">Book yours →</a>';
  if (/location|address|where|office|polokwane|tembisa|limpopo|gauteng/.test(m))
    return '📍 **Our Offices**\n\n**Limpopo:**\n36 Rabe St, Polokwane, 0699\n\n**Gauteng:**\n187 Dan Nkabinde Street, Tembisa, 1632\n\n📞 066 319 2062 / 063 857 3727\n📧 ngamlatwmservices@gmail.com';
  if (/contact|phone|call|email|reach|speak|human/.test(m))
    return '📞 **Contact Us**\n\nPhone: **066 319 2062**\nPhone: **063 857 3727**\nEmail: ngamlatwmservices@gmail.com\n\nPolokwane: 36 Rabe St, 0699, Limpopo\nTembisa: 187 Dan Nkabinde Street, 1632, Gauteng\n\n<a href="contact.html" style="color:#E8651A">Contact Form →</a>';
  if (/compli|register|psira|cipc|sars|dti|bbbee/.test(m))
    return '✅ **Registrations**\n\n• CIPC: 2024/412986/07\n• PSIRA: 4738249\n• SARS: 9470461220\n• DTI: Level 1 B-BBEE\n• CSD: MAAA1559555\n• PSSPF: PF/12/8/37197/1\n• Outsurance: OT122664432\n\nFully compliant with all SA security industry regulations.';
  if (/about|company|who|ngamla|background/.test(m))
    return '🏢 **About Ngamla Twm Security**\n\nWe are a 100% South African-owned, PSIRA-registered security company led by CEO **Tshililo William Mulaudzi**. We specialise in CCTV surveillance, manned guarding, alarm systems, access control, mobile patrol, and event security.\n\n<a href="about.html" style="color:#E8651A">Learn more →</a>';
  if (/maintain|repair|fault|upgrade|support|fix/.test(m))
    return '🔧 **Maintenance & Support**\n\n• Preventative maintenance contracts\n• Fault diagnosis and repairs\n• System upgrades and expansion\n• Firmware updates\n\nCall **066 319 2062** or email ngamlatwmservices@gmail.com.';
  if (/thank|thanks|bye|goodbye|great|perfect/.test(m))
    return 'You\'re welcome! 🔒\n\n📞 066 319 2062 | ngamlatwmservices@gmail.com\n\nNgamla Twm Security — Protecting What Matters Most.';
  return 'I can help you with:\n\n• 🛡️ Our services\n• 📦 Products (Dahua & Hikvision)\n• 📋 Requesting a quote\n• 📍 Locations (Polokwane & Tembisa)\n• ✅ Compliance info\n• 📞 Contact details\n\nWhat would you like to know?';
}

const QUICK_ACTIONS = [
  { label: 'Request a Quote', msg: 'I want to request a quote', icon: '📋' },
  { label: 'CCTV Products',   msg: 'Tell me about your camera products', icon: '📷' },
  { label: 'Our Services',    msg: 'What services do you offer?', icon: '🛡️' },
  { label: 'Locations',       msg: 'Where are your offices?', icon: '📍' },
  { label: 'Compliance',      msg: 'Show me your registrations', icon: '✅' },
  { label: 'Contact',         msg: 'How do I contact you?', icon: '📞' },
];

function initNgamlaChat() {
  if (document.getElementById('ngamla-chat')) return;

  const style = document.createElement('style');
  style.textContent = `
    :root{--nc-og:#E8651A;--nc-ogh:#FF7A2F;--nc-bg:#0d0d0d;--nc-s1:#161616;--nc-s2:#1e1e1e;--nc-br:rgba(255,255,255,0.07);--nc-tx:#e0e0e0;--nc-mu:#888;}
    #ngamla-chat{position:fixed;bottom:28px;right:28px;z-index:9999;font-family:'Barlow',-apple-system,sans-serif;}
    .nc-toggle{width:58px;height:58px;border-radius:50%;background:var(--nc-og);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 32px rgba(232,101,26,0.5),0 2px 8px rgba(0,0,0,0.3);transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s;position:relative;}
    .nc-toggle:hover{transform:scale(1.12);box-shadow:0 12px 44px rgba(232,101,26,0.65);}
    .nc-ti,.nc-tx-x{display:flex;align-items:center;justify-content:center;position:absolute;inset:0;border-radius:50%;transition:opacity .25s,transform .3s;}
    .nc-ti{opacity:1;transform:scale(1) rotate(0);}
    .nc-tx-x{opacity:0;transform:scale(0.5) rotate(45deg);}
    .nc-toggle.open .nc-ti{opacity:0;transform:scale(0.5) rotate(-45deg);}
    .nc-toggle.open .nc-tx-x{opacity:1;transform:scale(1) rotate(0);}
    .nc-ti svg,.nc-tx-x svg{width:24px;height:24px;color:#fff;}
    .nc-badge{position:absolute;top:-3px;right:-3px;width:17px;height:17px;border-radius:50%;background:#fff;border:2px solid var(--nc-og);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:var(--nc-og);animation:ncPulse 2s ease-in-out infinite;}
    @keyframes ncPulse{0%,100%{box-shadow:0 0 0 0 rgba(232,101,26,0.5);}50%{box-shadow:0 0 0 7px rgba(232,101,26,0);}}
    .nc-win{position:absolute;bottom:72px;right:0;width:380px;max-height:82vh;background:var(--nc-bg);border:1px solid rgba(232,101,26,0.18);border-radius:16px;box-shadow:0 24px 80px rgba(0,0,0,0.8),0 0 0 1px rgba(255,255,255,0.04);display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(16px) scale(0.97);pointer-events:none;transition:opacity .3s,transform .35s cubic-bezier(.34,1.56,.64,1);}
    .nc-win.open{opacity:1;transform:translateY(0) scale(1);pointer-events:all;}
    .nc-hdr{background:linear-gradient(135deg,#1c1c1c,#111);border-bottom:1px solid rgba(232,101,26,0.12);padding:15px 18px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
    .nc-hdr-l{display:flex;align-items:center;gap:12px;}
    .nc-av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#E8651A,#FF7A2F);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 16px rgba(232,101,26,0.35);position:relative;}
    .nc-av svg{width:20px;height:20px;color:#fff;}
    .nc-av-dot{position:absolute;bottom:1px;right:1px;width:10px;height:10px;border-radius:50%;background:#4ade80;border:2px solid var(--nc-bg);}
    .nc-hdr-name{font-weight:700;color:#fff;font-size:.9rem;}
    .nc-hdr-stat{font-size:.68rem;color:#4ade80;display:flex;align-items:center;gap:5px;margin-top:2px;}
    .nc-hdr-stat::before{content:'';width:5px;height:5px;border-radius:50%;background:#4ade80;display:block;animation:ncBlink 2.5s ease-in-out infinite;}
    @keyframes ncBlink{0%,100%{opacity:1;}50%{opacity:0.3;}}
    .nc-hdr-r{display:flex;align-items:center;gap:8px;}
    .nc-reg-tag{font-size:.58rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--nc-og);background:rgba(232,101,26,0.1);border:1px solid rgba(232,101,26,0.2);border-radius:100px;padding:3px 10px;}
    .nc-close-btn{width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.05);border:1px solid var(--nc-br);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s;}
    .nc-close-btn:hover{background:rgba(255,255,255,0.12);}
    .nc-close-btn svg{width:12px;height:12px;color:#666;}
    .nc-feed{flex:1;overflow-y:auto;padding:18px 14px;display:flex;flex-direction:column;gap:12px;scroll-behavior:smooth;}
    .nc-feed::-webkit-scrollbar{width:3px;}
    .nc-feed::-webkit-scrollbar-thumb{background:#333;border-radius:2px;}
    .nc-row{display:flex;align-items:flex-end;gap:8px;}
    .nc-row.bot{justify-content:flex-start;}
    .nc-row.user{justify-content:flex-end;}
    .nc-av-sm{width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,var(--nc-og),#FF7A2F);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-bottom:2px;}
    .nc-av-sm svg{width:12px;height:12px;color:#fff;}
    .nc-bub{max-width:84%;padding:11px 15px;font-size:.875rem;line-height:1.65;word-break:break-word;}
    .nc-bub a{color:var(--nc-og)!important;text-decoration:underline;}
    .nc-bub strong{color:#fff;font-weight:600;}
    .nc-row.bot .nc-bub{background:var(--nc-s1);border:1px solid var(--nc-br);border-radius:2px 14px 14px 14px;color:var(--nc-tx);}
    .nc-row.user .nc-bub{background:linear-gradient(135deg,var(--nc-og),#FF7A2F);border-radius:14px 2px 14px 14px;color:#fff;}
    .nc-ts{font-size:.6rem;color:rgba(255,255,255,.18);margin-top:3px;padding:0 3px;}
    .nc-row.user .nc-ts{text-align:right;}
    .nc-typ .nc-bub{background:var(--nc-s1);border:1px solid var(--nc-br);border-radius:2px 14px 14px 14px;padding:13px 16px;}
    .nc-dots{display:flex;gap:4px;align-items:center;}
    .nc-dots span{width:6px;height:6px;border-radius:50%;background:var(--nc-og);opacity:.5;animation:ncDot 1.4s ease-in-out infinite;}
    .nc-dots span:nth-child(2){animation-delay:.2s;}
    .nc-dots span:nth-child(3){animation-delay:.4s;}
    @keyframes ncDot{0%,60%,100%{transform:translateY(0);opacity:.4;}30%{transform:translateY(-5px);opacity:1;}}
    .nc-qa-wrap{padding:10px 12px 0;border-top:1px solid rgba(255,255,255,.04);flex-shrink:0;}
    .nc-qa-scroll{display:flex;gap:6px;overflow-x:auto;padding-bottom:10px;}
    .nc-qa-scroll::-webkit-scrollbar{display:none;}
    .nc-qa{flex-shrink:0;display:flex;align-items:center;gap:5px;padding:7px 13px;border-radius:100px;background:rgba(232,101,26,.08);border:1px solid rgba(232,101,26,.18);color:var(--nc-og);font-size:.73rem;font-weight:600;cursor:pointer;white-space:nowrap;transition:background .2s,transform .15s;}
    .nc-qa:hover{background:rgba(232,101,26,.22);transform:translateY(-1px);}
    .nc-in-bar{display:flex;gap:8px;align-items:center;padding:11px 12px;background:var(--nc-s1);border-top:1px solid var(--nc-br);flex-shrink:0;}
    .nc-in{flex:1;background:var(--nc-s2);border:1px solid var(--nc-br);border-radius:100px;padding:10px 17px;color:#fff;font-size:.875rem;outline:none;font-family:inherit;transition:border-color .2s;}
    .nc-in:focus{border-color:rgba(232,101,26,.4);}
    .nc-in::placeholder{color:rgba(255,255,255,.22);}
    .nc-snd{width:38px;height:38px;flex-shrink:0;background:var(--nc-og);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,transform .15s;}
    .nc-snd:hover{background:var(--nc-ogh);transform:scale(1.08);}
    .nc-snd svg{width:14px;height:14px;color:#fff;}
    .nc-foot{padding:7px 14px;background:var(--nc-s1);border-top:1px solid rgba(255,255,255,.03);text-align:center;}
    .nc-foot-t{font-size:.6rem;color:rgba(255,255,255,.18);letter-spacing:.06em;text-transform:uppercase;}
    .nc-foot-t span{color:rgba(232,101,26,.55);}
    @media(max-width:480px){#ngamla-chat{bottom:20px;right:16px;}.nc-win{position:fixed;bottom:82px;right:12px;left:12px;width:auto;max-height:80vh;}}
  `;
  document.head.appendChild(style);

  const w = document.createElement('div');
  w.id = 'ngamla-chat';
  w.innerHTML = `
    <button class="nc-toggle" id="ncTog" aria-label="Chat with Ngamla Assistant" aria-expanded="false">
      <div class="nc-ti"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
      <div class="nc-tx-x"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
      <div class="nc-badge" id="ncBadge">1</div>
    </button>
    <div class="nc-win" id="ncWin" role="dialog" aria-label="Ngamla Chat">
      <div class="nc-hdr">
        <div class="nc-hdr-l">
          <div class="nc-av">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <div class="nc-av-dot"></div>
          </div>
          <div>
            <div class="nc-hdr-name">Ngamla Assistant</div>
            <div class="nc-hdr-stat">Online &amp; ready</div>
          </div>
        </div>
        <div class="nc-hdr-r">
          <span class="nc-reg-tag">PSIRA 4738249</span>
          <button class="nc-close-btn" id="ncClose" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
      </div>
      <div class="nc-feed" id="ncFeed"></div>
      <div class="nc-qa-wrap" id="ncQA">
        <div class="nc-qa-scroll">${QUICK_ACTIONS.map(a=>`<button class="nc-qa" data-msg="${a.msg}">${a.icon} ${a.label}</button>`).join('')}</div>
      </div>
      <div class="nc-in-bar">
        <input class="nc-in" id="ncIn" type="text" placeholder="Ask me anything…" autocomplete="off" maxlength="300"/>
        <button class="nc-snd" id="ncSnd" aria-label="Send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
      </div>
      <div class="nc-foot"><div class="nc-foot-t"><span>Ngamla Twm Security</span> — Protecting What Matters Most</div></div>
    </div>`;
  document.body.appendChild(w);

  const tog=document.getElementById('ncTog'),win=document.getElementById('ncWin'),
        close=document.getElementById('ncClose'),feed=document.getElementById('ncFeed'),
        inp=document.getElementById('ncIn'),snd=document.getElementById('ncSnd'),
        badge=document.getElementById('ncBadge'),qa=document.getElementById('ncQA');
  let open=false;

  function ts(){return new Date().toLocaleTimeString('en-ZA',{hour:'2-digit',minute:'2-digit'});}

  function addMsg(html,who){
    const d=document.createElement('div');
    d.className='nc-row '+who;
    const b=`<div class="nc-bub">${html.replace(/\n/g,'<br>')}</div><div class="nc-ts">${ts()}</div>`;
    if(who==='bot'){
      d.innerHTML=`<div class="nc-av-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div>${b}</div>`;
    } else {
      d.innerHTML=`<div>${b}</div>`;
    }
    feed.appendChild(d); feed.scrollTop=feed.scrollHeight;
  }

  function showTyp(){
    const d=document.createElement('div');d.className='nc-row bot nc-typ';d.id='ncTyp';
    d.innerHTML=`<div class="nc-av-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="nc-bub"><div class="nc-dots"><span></span><span></span><span></span></div></div>`;
    feed.appendChild(d);feed.scrollTop=feed.scrollHeight;
  }
  function hideTyp(){const t=document.getElementById('ncTyp');if(t)t.remove();}

  function send(txt){
    txt=txt.trim();if(!txt)return;
    inp.value='';
    if(qa)qa.style.display='none';
    addMsg(txt,'user');showTyp();
    setTimeout(()=>{hideTyp();addMsg(getNgamlaReply(txt),'bot');},(700+Math.random()*500)|0);
  }

  function openChat(){open=true;win.classList.add('open');tog.classList.add('open');tog.setAttribute('aria-expanded','true');badge.style.display='none';setTimeout(()=>inp.focus(),320);}
  function closeChat(){open=false;win.classList.remove('open');tog.classList.remove('open');tog.setAttribute('aria-expanded','false');}

  tog.addEventListener('click',()=>open?closeChat():openChat());
  close.addEventListener('click',closeChat);
  snd.addEventListener('click',()=>send(inp.value));
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send(inp.value);}});
  document.querySelectorAll('.nc-qa').forEach(b=>b.addEventListener('click',()=>{openChat();setTimeout(()=>send(b.dataset.msg),250);}));

  // Greeting
  setTimeout(()=>addMsg('👋 Hello! Welcome to <strong>Ngamla Twm Security</strong>.\n\nI can help with our services, products, locations, pricing, and more. What can I help you with today?','bot'),450);
}

document.addEventListener('DOMContentLoaded', initNgamlaChat);
