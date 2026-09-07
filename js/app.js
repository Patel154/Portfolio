/* Portfolio Data */
const DATA = {
  projects: [
    {
      id: "vastu", title: "Vastu", subtitle: "AI Construction Marketplace",
      category: "fullstack", categoryLabel: "Full-Stack · AI",
      award: "INCEPTRIX 2026 Finalist",
      desc: "Full-stack construction marketplace with server-side AI cost estimation, 60+ RESTful endpoints, and a 3NF-normalised relational database.",
      tech: ["React", "TypeScript", "Flask", "SQLAlchemy", "Gemini API", "SQLite"],
      arch: "React + TypeScript SPA → Flask REST API → Google Gemini Pipeline → 3NF SQLite",
      metrics: [
        "60+ RESTful endpoints with Flask & SQLAlchemy",
        "3NF-normalised schema with indexed foreign keys",
        "Real-time AI cost estimation via Google Gemini API",
        "Selected for INCEPTRIX 2026 National Finals"
      ],
      github: "https://github.com/Patel154"
    },
    {
      id: "skillswap", title: "SkillSwap", subtitle: "Peer Skill Exchange",
      category: "fullstack", categoryLabel: "Full-Stack · Real-time",
      desc: "Real-time peer skill exchange platform with sub-second messaging, fuzzy-match discovery, and JWT-backed authentication.",
      tech: ["React", "TypeScript", "Firebase", "Firestore", "Tailwind"],
      arch: "React Client → Firebase Auth → Firestore Real-Time Listeners",
      metrics: [
        "Sub-second chat via Firestore onSnapshot listeners",
        "Fuzzy-match discovery engine with compound queries",
        "JWT-backed Firebase Auth with route guards",
        "Denormalized atomic writes for rating aggregation"
      ],
      github: "https://github.com/Patel154"
    },
    {
      id: "socialz", title: "Socialz", subtitle: "Social Web Platform",
      category: "fullstack", categoryLabel: "Full-Stack · Next.js",
      desc: "Modern social platform built with Next.js 14 App Router, Server Components, ISR, and zero-polling live updates via Firestore.",
      tech: ["Next.js 14", "React", "TypeScript", "Firestore", "Tailwind"],
      arch: "Next.js 14 App Router (RSC + ISR) → Firestore → Tailwind UI",
      metrics: [
        "Next.js 14 with Server Components & ISR",
        "Zero-polling live feeds via Firestore listeners",
        "Zero CLS with skeleton-loading component library",
        "Mobile-first responsive design"
      ],
      github: "https://github.com/Patel154"
    },
    {
      id: "quizmaster", title: "QuizMaster", subtitle: "Android Quiz App",
      category: "mobile", categoryLabel: "Android · Kotlin",
      desc: "Category-based quiz engine with MVVM architecture, Room DB persistence, coroutine timers, and animated progress arcs.",
      tech: ["Kotlin", "MVVM", "Room DB", "LiveData", "Coroutines", "ViewBinding"],
      arch: "Single Activity → MVVM ViewModel → Repository → Room DB",
      metrics: [
        "MVVM with ViewModel-scoped LiveData streams",
        "Offline persistence in Room DB with TypeConverters",
        "ObjectAnimator circular progress rendering",
        "Coroutine-backed timer with difficulty multipliers"
      ],
      github: "https://github.com/Patel154"
    },
    {
      id: "nurse-call", title: "Nurse Call System", subtitle: "IoT Gesture Detection",
      category: "iot", categoryLabel: "IoT · Computer Vision",
      award: "NavaNIEti 2026 Winner",
      desc: "Distributed gesture-activated IoT alert system with sub-800ms latency using ESP32, Raspberry Pi, MQTT, and MediaPipe.",
      tech: ["C++", "Python", "ESP32", "Raspberry Pi", "MQTT", "MediaPipe"],
      arch: "ESP32-CAM → Raspberry Pi MediaPipe → MQTT Broker → ESP32 GPIO Alert",
      metrics: [
        "Sub-800ms end-to-end gesture-to-alert latency",
        "MQTT pub/sub across ESP32 and Raspberry Pi nodes",
        "Real-time hand-landmark inference via MediaPipe",
        "3-of-5 rolling-frame voting to eliminate false positives"
      ],
      github: "https://github.com/Patel154"
    },
    {
      id: "transport", title: "Multi-Transport", subtitle: "Android Routing App",
      category: "mobile", categoryLabel: "Android · Maps",
      desc: "Multi-modal transport routing with dynamic Google Maps polylines, Room DB caching, and runtime permission handling.",
      tech: ["Kotlin", "MVVM", "Navigation Component", "Room DB", "Maps SDK"],
      arch: "Single Activity Nav Graph → ViewModel → Google Maps + Room DB",
      metrics: [
        "Dynamic polyline overlays via Google Maps SDK",
        "Single-activity Navigation Component graph",
        "Offline route caching with coroutine DAO queries",
        "Graceful degraded-mode with ActivityResult API"
      ],
      github: "https://github.com/Patel154"
    },
    {
      id: "llm-analysis", title: "Agricultural LLM Analysis", subtitle: "Model Benchmarking",
      category: "ai", categoryLabel: "AI · Benchmarking",
      desc: "Large-scale benchmark comparing DeepSeek-R1 vs Llama 3.2 across 2,200 agricultural records for accuracy, latency, and JSON reliability.",
      tech: ["Python", "Pandas", "Ollama", "DeepSeek-R1", "Llama 3.2"],
      arch: "Tabular Dataset → Ollama Inference → JSON Parser → Metric Engine",
      metrics: [
        "2,200-record evaluation across 22 crop classes",
        "Benchmarked DeepSeek-R1 1.5B vs Llama 3.2 3B",
        "Llama 3.2: 0% JSON errors vs DeepSeek: 6.73%",
        "Automated batch checkpointing for zero-loss runs"
      ],
      github: "https://github.com/Patel154"
    }
  ],

  skills: {
    rings: [
      { name: "Full-Stack Web", pct: 92, color: "#2997ff", detail: "React · Next.js · Flask" },
      { name: "Android & Mobile", pct: 86, color: "#30d158", detail: "Kotlin · MVVM · Room" },
      { name: "AI & LLMs", pct: 88, color: "#bf5af2", detail: "Gemini · Ollama · Benchmarking" },
      { name: "IoT & Embedded", pct: 85, color: "#ff9f0a", detail: "ESP32 · MQTT · MediaPipe" }
    ],
    groups: [
      { title: "Languages", items: ["JavaScript", "TypeScript", "Python", "Kotlin", "C / C++", "SQL"] },
      { title: "Web & Frameworks", items: ["React", "Next.js 14", "Flask", "Tailwind CSS", "HTML5 / CSS3", "REST APIs"] },
      { title: "Backend & Databases", items: ["SQLAlchemy", "PostgreSQL", "SQLite", "Firebase Firestore", "Room DB", "Firebase Auth"] },
      { title: "AI & Machine Learning", items: ["Google Gemini API", "Prompt Engineering", "Ollama", "DeepSeek-R1", "Llama 3.2", "Pandas"] },
      { title: "Mobile & Embedded", items: ["Android SDK", "MVVM", "LiveData", "ESP32", "Raspberry Pi", "MQTT"] }
    ]
  },

  experience: [
    {
      role: "Software Engineering Intern", company: "Jain Launchpad, Jain University",
      period: "May – Jun 2026", location: "Bengaluru",
      bullets: [
        "Contributed to startup incubation projects with agile sprint workflows.",
        "Engineered backend endpoints and modular frontend components.",
        "Collaborated cross-functionally with Git-based code reviews."
      ]
    },
    {
      role: "Software Testing Intern", company: "TribeMe",
      period: "2 months · 2026", location: "Bengaluru",
      bullets: [
        "Designed and executed end-to-end test cases for a campus social app.",
        "Conducted regression testing and edge-case analysis pre-deployment.",
        "Authored detailed bug reports and partnered with developers on fixes."
      ]
    },
    {
      role: "Web Development Intern", company: "RTsense",
      period: "4 months · 2024", location: "Remote",
      bullets: [
        "Enhanced customer dashboard UI/UX with modern responsive design.",
        "Resolved production-level bugs and performance bottlenecks.",
        "Improved usability metrics and maintained high system uptime."
      ]
    }
  ],

  education: [
    { degree: "B.Tech — Computer Science Engineering", school: "Jain University, Bengaluru", meta: "CGPA 8.0 / 10 · Expected 2028" },
    { degree: "Diploma — ICT", school: "Marwadi University", meta: "CGPA 8.42 / 10 · Completed 2024" }
  ],

  awards: [
    { title: "INCEPTRIX 2026", desc: "National Finals — Shipped Vastu AI marketplace with 60+ REST endpoints.", year: "2026" },
    { title: "NavaNIEti 2026", desc: "24-hour IoT champion — Gesture-activated nurse call system.", year: "2026" },
    { title: "CRCE 2025", desc: "Competitive hackathon — Real-world software challenge.", year: "2025" }
  ]
};

/* ---------- Render Projects ---------- */
let activeFilter = 'all';

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const filtered = activeFilter === 'all'
    ? DATA.projects
    : DATA.projects.filter(p => p.category === activeFilter);

  grid.innerHTML = filtered.map(p => `
    <div class="p-card" data-id="${p.id}">
      <div class="p-card-top">
        <span class="p-category">${p.categoryLabel}</span>
        ${p.award ? `<span class="p-award">★ ${p.award}</span>` : ''}
      </div>
      <h3 class="p-title">${p.title} <span style="color: var(--text-3); font-weight: 400;">— ${p.subtitle}</span></h3>
      <p class="p-desc">${p.desc}</p>
      <div class="p-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="p-footer">
        <button class="p-link" onclick="openSheet('${p.id}')">
          Details
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>
        <a href="${p.github}" target="_blank" rel="noopener" class="p-link" style="color: var(--text-3);">GitHub →</a>
      </div>
    </div>
  `).join('');
}

function renderFilters() {
  const bar = document.getElementById('filterBar');
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'ai', label: 'AI & LLMs' },
    { key: 'mobile', label: 'Android' },
    { key: 'iot', label: 'IoT' }
  ];
  bar.innerHTML = filters.map(f =>
    `<button class="filter-btn${f.key === activeFilter ? ' active' : ''}" data-f="${f.key}">${f.label}</button>`
  ).join('');
  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.f;
      renderFilters();
      renderProjects();
    });
  });
}

/* ---------- Sheet ---------- */
window.openSheet = function(id) {
  const p = DATA.projects.find(x => x.id === id);
  if (!p) return;
  const body = document.getElementById('sheetBody');
  body.innerHTML = `
    <span class="p-category" style="margin-bottom: 8px; display: inline-block;">${p.categoryLabel}</span>
    <h2>${p.title} — ${p.subtitle}</h2>
    <p class="sheet-tagline">${p.desc}</p>
    <p class="sheet-section-title">Architecture</p>
    <div class="sheet-arch">${p.arch}</div>
    <p class="sheet-section-title">Key Deliverables</p>
    <ul class="sheet-metrics">${p.metrics.map(m => `<li>${m}</li>`).join('')}</ul>
    <p class="sheet-section-title">Tech Stack</p>
    <div class="p-tech" style="margin-bottom: 1.5rem;">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
    <a href="${p.github}" target="_blank" rel="noopener" class="btn-primary" style="display: inline-flex;">View on GitHub →</a>
  `;
  document.getElementById('sheetOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
};

function closeSheet() {
  document.getElementById('sheetOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---------- Activity Rings ---------- */
function renderRings() {
  const row = document.getElementById('ringsRow');
  row.innerHTML = DATA.skills.rings.map((r, i) => {
    const size = 80, sw = 8, radius = (size - sw) / 2;
    const circ = 2 * Math.PI * radius;
    const offset = circ - (r.pct / 100) * circ;
    return `
      <div class="ring-cell">
        <svg class="ring-svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform: rotate(-90deg);">
          <circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="${r.color}" stroke-width="${sw}" opacity="0.15"/>
          <circle id="ring${i}" cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="${r.color}" stroke-width="${sw}" stroke-linecap="round"
            stroke-dasharray="${circ}" stroke-dashoffset="${circ}"
            style="transition: stroke-dashoffset 1.2s cubic-bezier(0.34,1.56,0.64,1) ${i*0.12}s;"/>
        </svg>
        <p class="ring-name">${r.name}</p>
        <p class="ring-detail">${r.pct}% · ${r.detail}</p>
      </div>`;
  }).join('');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        DATA.skills.rings.forEach((r, i) => {
          const size = 80, sw = 8, radius = (size - sw) / 2;
          const circ = 2 * Math.PI * radius;
          const offset = circ - (r.pct / 100) * circ;
          const el = document.getElementById(`ring${i}`);
          if (el) el.style.strokeDashoffset = offset;
        });
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(row);
}

function renderSkillGroups() {
  const el = document.getElementById('skillGroups');
  el.innerHTML = DATA.skills.groups.map(g => `
    <div class="skill-group">
      <p class="skill-group-title">${g.title}</p>
      <div class="skill-chips">${g.items.map(i => `<span class="skill-chip">${i}</span>`).join('')}</div>
    </div>
  `).join('');
}

/* ---------- Experience ---------- */
function renderExperience() {
  document.getElementById('expList').innerHTML = DATA.experience.map(e => `
    <div class="exp-card">
      <div class="exp-card-header">
        <div>
          <p class="exp-role">${e.role}</p>
          <p class="exp-company">${e.company}</p>
        </div>
        <span class="exp-period">${e.period} · ${e.location}</span>
      </div>
      <ul class="exp-bullets">${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>
  `).join('');

  document.getElementById('eduGrid').innerHTML = DATA.education.map(e => `
    <div class="edu-card">
      <p class="edu-degree">${e.degree}</p>
      <p class="edu-school">${e.school}</p>
      <p class="edu-meta">${e.meta}</p>
    </div>
  `).join('');

  document.getElementById('awardsGrid').innerHTML = DATA.awards.map(a => `
    <div class="award-card">
      <p class="award-year">${a.year}</p>
      <p class="award-title">${a.title}</p>
      <p class="award-desc">${a.desc}</p>
    </div>
  `).join('');
}

/* ---------- Terminal ---------- */
function initTerminal() {
  const overlay = document.getElementById('termOverlay');
  const body = document.getElementById('termBody');
  const input = document.getElementById('termInput');

  function openTerm() { overlay.classList.add('open'); setTimeout(() => input.focus(), 100); }
  function closeTerm() { overlay.classList.remove('open'); }

  document.querySelectorAll('.trigger-terminal').forEach(b => b.addEventListener('click', openTerm));
  document.getElementById('termClose').addEventListener('click', closeTerm);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeTerm(); });
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); overlay.classList.contains('open') ? closeTerm() : openTerm(); }
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeTerm();
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim(); input.value = '';
      if (!cmd) return;
      print(`<span style="color:#2997ff;">~$</span> ${cmd}`);
      exec(cmd.toLowerCase());
      body.scrollTop = body.scrollHeight;
    }
  });

  function print(html) { const d = document.createElement('div'); d.className = 'term-line'; d.innerHTML = html; body.appendChild(d); }

  function exec(cmd) {
    const cmds = {
      help: () => print('Commands: <b>whoami</b> · <b>projects</b> · <b>skills</b> · <b>experience</b> · <b>contact</b> · <b>clear</b> · <b>sudo hire</b>'),
      whoami: () => { print('Monil Patel · CS Engineering @ Jain University, Bengaluru'); print('Full-Stack · Android · IoT · AI builder'); },
      projects: () => DATA.projects.forEach(p => print(`<span style="color:#30d158;">→</span> <b>${p.title}</b> — ${p.subtitle} (${p.tech.slice(0,3).join(', ')})`)),
      skills: () => DATA.skills.groups.forEach(g => print(`<b>${g.title}:</b> ${g.items.join(', ')}`)),
      experience: () => DATA.experience.forEach(e => print(`<b>${e.role}</b> @ ${e.company} (${e.period})`)),
      contact: () => { print('Email: monilpatel154@gmail.com'); print('Phone: +91 88497 40412'); print('GitHub: github.com/Patel154'); },
      clear: () => body.innerHTML = ''
    };
    if (cmd.startsWith('sudo hire')) { print('<span style="color:#30d158;">✓ Access granted.</span> Opening mail...'); setTimeout(() => window.location.href = 'mailto:monilpatel154@gmail.com?subject=Job%20Opportunity', 800); }
    else if (cmds[cmd]) cmds[cmd]();
    else print(`<span style="color:#ff375f;">command not found:</span> ${cmd}. Type <b>help</b>.`);
  }
}

/* ---------- Theme ---------- */
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateIcon(saved);

  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
  });

  function updateIcon(t) {
    btn.innerHTML = t === 'dark'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>';
  }
}

/* ---------- Nav Active ---------- */
function initNav() {
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id], .wrap[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  });
}

/* ---------- Contact Form ---------- */
function initContact() {
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'mailto:monilpatel154@gmail.com?subject=Portfolio%20Inquiry';
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  renderFilters();
  renderProjects();
  renderRings();
  renderSkillGroups();
  renderExperience();
  initTerminal();
  initContact();

  document.getElementById('sheetClose').addEventListener('click', closeSheet);
  document.getElementById('sheetOverlay').addEventListener('click', e => { if (e.target.id === 'sheetOverlay') closeSheet(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });

  document.getElementById('year').textContent = new Date().getFullYear();
});
