'use strict';

/* =========================================================
   COMPLETE PORTFOLIO DATA
   Based on the information you originally supplied.

   repo is intentionally empty: individual repository URLs
   were not supplied. GitHub profile links remain available.
   ========================================================= */

const PROFILE = {
  name: 'Monil Patel',
  email: 'monilpatel154@gmail.com',
  phone: '+91 88497 40412',
  github: 'https://github.com/Patel154',
  linkedin: 'https://www.linkedin.com/in/monil-patel-946845255/'
};

const DATA = {
  projects: [
    {
      id: 'vastu',
      title: 'Vastu',
      subtitle: 'AI Construction Marketplace',
      category: 'fullstack',
      tags: ['fullstack', 'ai'],
      categoryLabel: 'Full-Stack · AI',
      award: 'INCEPTRIX 2026 Finalist',
      desc: 'Full-stack construction marketplace with server-side AI cost estimation, 60+ RESTful endpoints, and a 3NF-normalised relational database.',
      tech: ['React', 'TypeScript', 'Flask', 'SQLAlchemy', 'Gemini API', 'SQLite'],
      arch: 'React + TypeScript SPA → Flask REST API → Google Gemini Pipeline → 3NF SQLite',
      metrics: [
        '60+ RESTful endpoints with Flask and SQLAlchemy',
        '3NF-normalised schema with indexed foreign keys',
        'Real-time AI cost estimation via Google Gemini API',
        'Selected for INCEPTRIX 2026 National Finals'
      ],
      repo: ''
    },
    {
      id: 'skillswap',
      title: 'SkillSwap',
      subtitle: 'Peer Skill Exchange',
      category: 'fullstack',
      tags: ['fullstack'],
      categoryLabel: 'Full-Stack · Real-time',
      desc: 'Real-time peer skill exchange platform with sub-second messaging, fuzzy-match discovery, and JWT-backed authentication.',
      tech: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Tailwind'],
      arch: 'React Client → Firebase Auth → Firestore Real-Time Listeners',
      metrics: [
        'Sub-second chat via Firestore onSnapshot listeners',
        'Fuzzy-match discovery with compound queries',
        'JWT-backed Firebase Auth with route guards',
        'Denormalized atomic writes for rating aggregation'
      ],
      repo: ''
    },
    {
      id: 'socialz',
      title: 'Socialz',
      subtitle: 'Social Web Platform',
      category: 'fullstack',
      tags: ['fullstack'],
      categoryLabel: 'Full-Stack · Next.js',
      desc: 'Modern social platform built with Next.js 14 App Router, Server Components, ISR, and zero-polling live updates via Firestore.',
      tech: ['Next.js 14', 'React', 'TypeScript', 'Firestore', 'Tailwind'],
      arch: 'Next.js 14 App Router (RSC + ISR) → Firestore → Tailwind UI',
      metrics: [
        'Next.js 14 with Server Components and ISR',
        'Zero-polling live feeds via Firestore listeners',
        'Skeleton-loading component library',
        'Mobile-first responsive design'
      ],
      repo: ''
    },
    {
      id: 'quizmaster',
      title: 'QuizMaster',
      subtitle: 'Android Quiz App',
      category: 'mobile',
      tags: ['mobile'],
      categoryLabel: 'Android · Kotlin',
      desc: 'Category-based quiz engine with MVVM architecture, Room DB persistence, coroutine timers, and animated progress arcs.',
      tech: ['Kotlin', 'MVVM', 'Room DB', 'LiveData', 'Coroutines', 'ViewBinding'],
      arch: 'Single Activity → MVVM ViewModel → Repository → Room DB',
      metrics: [
        'MVVM with ViewModel-scoped LiveData streams',
        'Offline persistence in Room DB with TypeConverters',
        'ObjectAnimator circular progress rendering',
        'Coroutine-backed timer with difficulty multipliers'
      ],
      repo: ''
    },
    {
      id: 'nurse-call',
      title: 'Nurse Call System',
      subtitle: 'IoT Gesture Detection',
      category: 'iot',
      tags: ['iot', 'ai'],
      categoryLabel: 'IoT · Computer Vision',
      award: 'NavaNIEti 2026 Winner',
      desc: 'Distributed gesture-activated IoT alert system with sub-800ms latency using ESP32, Raspberry Pi, MQTT, and MediaPipe.',
      tech: ['C++', 'Python', 'ESP32', 'Raspberry Pi', 'MQTT', 'MediaPipe'],
      arch: 'ESP32-CAM → Raspberry Pi MediaPipe → MQTT Broker → ESP32 GPIO Alert',
      metrics: [
        'Sub-800ms end-to-end gesture-to-alert latency',
        'MQTT pub/sub across ESP32 and Raspberry Pi nodes',
        'Real-time hand-landmark inference via MediaPipe',
        '3-of-5 rolling-frame voting to reduce false positives'
      ],
      repo: ''
    },
    {
      id: 'transport',
      title: 'Multi-Transport',
      subtitle: 'Android Routing App',
      category: 'mobile',
      tags: ['mobile'],
      categoryLabel: 'Android · Maps',
      desc: 'Multi-modal transport routing with dynamic Google Maps polylines, Room DB caching, and runtime permission handling.',
      tech: ['Kotlin', 'MVVM', 'Navigation Component', 'Room DB', 'Maps SDK'],
      arch: 'Single Activity Nav Graph → ViewModel → Google Maps + Room DB',
      metrics: [
        'Dynamic polyline overlays via Google Maps SDK',
        'Single-activity Navigation Component graph',
        'Offline route caching with coroutine DAO queries',
        'Graceful degraded-mode with ActivityResult API'
      ],
      repo: ''
    },
    {
      id: 'llm-analysis',
      title: 'Agricultural LLM Analysis',
      subtitle: 'Model Benchmarking',
      category: 'ai',
      tags: ['ai'],
      categoryLabel: 'AI · Benchmarking',
      desc: 'Benchmark comparing DeepSeek-R1 and Llama 3.2 across 2,200 agricultural records for accuracy, latency, and JSON reliability.',
      tech: ['Python', 'Pandas', 'Ollama', 'DeepSeek-R1', 'Llama 3.2'],
      arch: 'Tabular Dataset → Ollama Inference → JSON Parser → Metric Engine',
      metrics: [
        '2,200-record evaluation across 22 crop classes',
        'Benchmarked DeepSeek-R1 1.5B and Llama 3.2 3B',
        'Llama 3.2: 0% JSON errors versus DeepSeek: 6.73%',
        'Automated batch checkpointing for zero-loss runs'
      ],
      repo: ''
    }
  ],

  skills: {
    rings: [
      {
        name: 'Full-Stack Web', pct: 92, color: '#2997ff',
        detail: 'React · Next.js · Flask'
      },
      {
        name: 'Android & Mobile', pct: 86, color: '#30d158',
        detail: 'Kotlin · MVVM · Room'
      },
      {
        name: 'AI & LLMs', pct: 88, color: '#bf5af2',
        detail: 'Gemini · Ollama · Benchmarking'
      },
      {
        name: 'IoT & Embedded', pct: 85, color: '#ff9f0a',
        detail: 'ESP32 · MQTT · MediaPipe'
      }
    ],

    groups: [
      {
        title: 'Languages',
        items: ['JavaScript', 'TypeScript', 'Python', 'Kotlin', 'C / C++', 'SQL']
      },
      {
        title: 'Web & Frameworks',
        items: ['React', 'Next.js 14', 'Flask', 'Tailwind CSS', 'HTML5 / CSS3', 'REST APIs']
      },
      {
        title: 'Backend & Databases',
        items: ['SQLAlchemy', 'PostgreSQL', 'SQLite', 'Firebase Firestore', 'Room DB', 'Firebase Auth']
      },
      {
        title: 'AI & Machine Learning',
        items: ['Google Gemini API', 'Prompt Engineering', 'Ollama', 'DeepSeek-R1', 'Llama 3.2', 'Pandas']
      },
      {
        title: 'Mobile & Embedded',
        items: ['Android SDK', 'MVVM', 'LiveData', 'ESP32', 'Raspberry Pi', 'MQTT']
      }
    ]
  },

  experience: [
    {
      role: 'Software Engineering Intern',
      company: 'Jain Launchpad, Jain University',
      period: 'May – Jun 2026',
      location: 'Bengaluru',
      bullets: [
        'Contributed to startup incubation projects with agile sprint workflows.',
        'Engineered backend endpoints and modular frontend components.',
        'Collaborated cross-functionally with Git-based code reviews.'
      ]
    },
    {
      role: 'Software Testing Intern',
      company: 'TribeMe',
      period: '2 months · 2026',
      location: 'Bengaluru',
      bullets: [
        'Designed and executed end-to-end test cases for a campus social app.',
        'Conducted regression testing and edge-case analysis pre-deployment.',
        'Authored detailed bug reports and partnered with developers on fixes.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'RTsense',
      period: '4 months · 2024',
      location: 'Remote',
      bullets: [
        'Enhanced customer dashboard UI/UX with modern responsive design.',
        'Resolved production-level bugs and performance bottlenecks.',
        'Improved usability metrics and maintained high system uptime.'
      ]
    }
  ],

  education: [
    {
      degree: 'B.Tech — Computer Science Engineering',
      school: 'Jain University, Bengaluru',
      meta: 'CGPA 8.0 / 10 · Expected 2028'
    },
    {
      degree: 'Diploma — ICT',
      school: 'Marwadi University',
      meta: 'CGPA 8.42 / 10 · Completed 2024'
    }
  ],

  awards: [
    {
      title: 'INCEPTRIX 2026',
      desc: 'National Finals — Shipped Vastu AI marketplace with 60+ REST endpoints.',
      year: '2026'
    },
    {
      title: 'NavaNIEti 2026',
      desc: '24-hour IoT champion — Gesture-activated nurse call system.',
      year: '2026'
    },
    {
      title: 'CRCE 2025',
      desc: 'Competitive hackathon — Real-world software challenge.',
      year: '2025'
    }
  ]
};

/* ---------- Utilities ---------- */

const $ = id => document.getElementById(id);

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[char]));

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function renderChips(items) {
  return items.map(item => `<span>${escapeHTML(item)}</span>`).join('');
}

function projectURL(project) {
  // Accept only HTTPS repository links, otherwise use the known profile.
  if (project.repo) {
    try {
      const url = new URL(project.repo);
      if (url.protocol === 'https:') return url.href;
    } catch {
      // Invalid URL: use profile instead.
    }
  }
  return PROFILE.github;
}

function hasRepo(project) {
  return projectURL(project) !== PROFILE.github;
}

/* ---------- Theme ---------- */

function initTheme() {
  const button = $('themeToggle');
  let saved;

  try {
    saved = localStorage.getItem('theme');
  } catch {
    saved = null;
  }

  function apply(theme) {
    document.documentElement.dataset.theme = theme;

    if (button) {
      const next = theme === 'dark' ? 'light' : 'dark';
      button.innerHTML = theme === 'dark'
        ? '<span aria-hidden="true" style="font-size:20px">☀</span>'
        : '<span aria-hidden="true" style="font-size:20px">☾</span>';
      button.title = `Switch to ${next} appearance`;
      button.setAttribute('aria-label', button.title);
    }
  }

  apply(saved === 'dark' ? 'dark' : 'light');

  button?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark'
      ? 'light' : 'dark';

    apply(next);

    try {
      localStorage.setItem('theme', next);
    } catch {
      // Theme switching still works without storage.
    }
  });
}

/* ---------- Dialogs: focus, close, scroll lock ---------- */

let activeOverlay = null;
let focusBeforeDialog = null;
let previousBodyOverflow = '';
let inertElements = [];

function focusableElements(overlay) {
  return [...overlay.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), ' +
    'textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter(element => element.getClientRects().length > 0);
}

function restoreBackground() {
  inertElements.forEach(element => {
    element.inert = false;
  });
  inertElements = [];
}

function openDialog(overlay, target) {
  if (!overlay || activeOverlay === overlay) return;

  if (activeOverlay) {
    activeOverlay.classList.remove('open');
    activeOverlay.hidden = true;
    activeOverlay.setAttribute('aria-hidden', 'true');
    restoreBackground();
  } else {
    focusBeforeDialog = document.activeElement;
    previousBodyOverflow = document.body.style.overflow;
  }

  activeOverlay = overlay;
  overlay.hidden = false;
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const dialog = overlay.querySelector('[role="dialog"]');
  if (dialog) dialog.tabIndex = -1;

  const focusTarget = target || focusableElements(overlay)[0] || dialog;
  focusTarget?.focus({ preventScroll: true });

  [...document.body.children].forEach(element => {
    if (
      element === overlay ||
      element.contains(overlay) ||
      element.tagName === 'SCRIPT' ||
      element.inert
    ) return;

    element.inert = true;
    inertElements.push(element);
  });
}

function closeDialog() {
  if (!activeOverlay) return;

  const closing = activeOverlay;
  activeOverlay = null;
  restoreBackground();

  document.body.style.overflow = previousBodyOverflow;

  if (focusBeforeDialog?.isConnected) {
    focusBeforeDialog.focus({ preventScroll: true });
  }

  closing.classList.remove('open');
  closing.hidden = true;
  closing.setAttribute('aria-hidden', 'true');
  focusBeforeDialog = null;
}

function initDialogs() {
  [
    ['sheetOverlay', '.sheet', 'Project details'],
    ['termOverlay', '.terminal', 'Interactive portfolio terminal']
  ].forEach(([id, selector, title]) => {
    const overlay = $(id);
    if (!overlay) return;

    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');

    const dialog = overlay.querySelector(selector);
    dialog?.setAttribute('role', 'dialog');
    dialog?.setAttribute('aria-modal', 'true');
    dialog?.setAttribute('aria-label', title);

    overlay.addEventListener('click', event => {
      if (event.target === overlay) closeDialog();
    });
  });

  // Works with either the old span or the newer button markup.
  const oldClose = $('termClose');
  if (oldClose && oldClose.tagName !== 'BUTTON') {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = 'termClose';
    button.className = 'term-dot td-r';
    oldClose.replaceWith(button);
  }

  [
    ['sheetClose', 'Close project details'],
    ['termClose', 'Close terminal']
  ].forEach(([id, label]) => {
    const button = $(id);
    if (!button) return;
    button.setAttribute('aria-label', label);
    button.addEventListener('click', closeDialog);
  });

  document.addEventListener('keydown', event => {
    if (!activeOverlay) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeDialog();
      return;
    }

    if (event.key !== 'Tab') return;

    const items = focusableElements(activeOverlay);
    const first = items[0];
    const last = items[items.length - 1];

    if (!first) {
      event.preventDefault();
      return;
    }

    if (!activeOverlay.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

/* ---------- Projects ---------- */

let activeFilter = 'all';

function renderProjects() {
  const grid = $('projectsGrid');
  if (!grid) return;

  const projects = DATA.projects.filter(project =>
    activeFilter === 'all' || project.tags.includes(activeFilter)
  );

  grid.innerHTML = projects.map(project => `
    <article class="p-card">
      <div class="p-card-top">
        <span class="p-category">${escapeHTML(project.categoryLabel)}</span>
        ${project.award
          ? `<span class="p-award">✦ ${escapeHTML(project.award)}</span>`
          : ''}
      </div>

      <h3 class="p-title">
        ${escapeHTML(project.title)}
        <span class="p-subtitle">${escapeHTML(project.subtitle)}</span>
      </h3>

      <p class="p-desc">${escapeHTML(project.desc)}</p>
      <div class="p-tech">${renderChips(project.tech)}</div>

      <div class="p-footer">
        <button type="button" class="p-link"
          data-project="${escapeHTML(project.id)}"
          aria-label="Read about ${escapeHTML(project.title)}">
          View details <span aria-hidden="true">↗</span>
        </button>

        <a class="p-link"
          href="${escapeHTML(projectURL(project))}"
          target="_blank" rel="noopener noreferrer">
          ${hasRepo(project) ? 'Repository ↗' : 'GitHub profile ↗'}
        </a>
      </div>
    </article>
  `).join('');

  if ($('projectCount')) {
    $('projectCount').textContent =
      `${projects.length} project${projects.length === 1 ? '' : 's'} in this folder`;
  }
}

function initProjects() {
  const bar = $('filterBar');
  const grid = $('projectsGrid');
  if (!bar || !grid) return;

  const filters = [
    ['all', 'All files'],
    ['fullstack', 'Full-Stack'],
    ['ai', 'AI & LLMs'],
    ['mobile', 'Android'],
    ['iot', 'IoT']
  ];

  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', 'Filter projects');

  bar.innerHTML = filters.map(([key, label]) => `
    <button type="button"
      class="filter-btn${key === activeFilter ? ' active' : ''}"
      data-filter="${key}"
      aria-pressed="${key === activeFilter}"
      aria-controls="projectsGrid">
      ${label}
    </button>
  `).join('');

  if (!$('projectCount')) {
    const count = document.createElement('p');
    count.id = 'projectCount';
    count.className = 'project-count';
    count.setAttribute('role', 'status');
    grid.before(count);
  }

  bar.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;

    activeFilter = button.dataset.filter;

    bar.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item.dataset.filter === activeFilter;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });

    renderProjects();
  });

  grid.addEventListener('click', event => {
    const button = event.target.closest('[data-project]');
    if (button) openSheet(button.dataset.project);
  });

  renderProjects();
}

function openSheet(id) {
  const project = DATA.projects.find(item => item.id === id);
  const body = $('sheetBody');
  if (!project || !body) return;

  body.innerHTML = `
    <span class="p-category">${escapeHTML(project.categoryLabel)}</span>
    <h2 id="projectDialogTitle">${escapeHTML(project.title)}</h2>
    <p class="sheet-tagline">${escapeHTML(project.desc)}</p>

    <p class="sheet-section-title">Architecture</p>
    <div class="sheet-arch">${escapeHTML(project.arch)}</div>

    <p class="sheet-section-title">Key deliverables</p>
    <ul class="sheet-metrics">
      ${project.metrics.map(metric =>
        `<li>${escapeHTML(metric)}</li>`
      ).join('')}
    </ul>

    <p class="sheet-section-title">Built with</p>
    <div class="p-tech">${renderChips(project.tech)}</div>

    <a class="btn-primary"
      href="${escapeHTML(projectURL(project))}"
      target="_blank" rel="noopener noreferrer">
      ${hasRepo(project) ? 'Open repository ↗' : 'Visit my GitHub profile ↗'}
    </a>
  `;

  const sheet = $('sheetOverlay')?.querySelector('.sheet');
  sheet?.setAttribute('aria-labelledby', 'projectDialogTitle');

  openDialog($('sheetOverlay'), $('sheetClose'));
  if (sheet) sheet.scrollTop = 0;
}

/* ---------- Skills ---------- */

function renderSkills() {
  const row = $('ringsRow');
  const groups = $('skillGroups');
  const circumference = 2 * Math.PI * 36;

  if (row) {
    row.innerHTML = DATA.skills.rings.map(ring => `
      <div class="ring-cell">
        <svg class="ring-svg" width="80" height="80"
          viewBox="0 0 80 80" aria-hidden="true">
          <circle cx="40" cy="40" r="36" fill="none"
            stroke="${ring.color}" stroke-width="8" opacity=".18"/>
          <circle class="skill-ring" cx="40" cy="40" r="36"
            fill="none" stroke="${ring.color}" stroke-width="8"
            stroke-linecap="round" transform="rotate(-90 40 40)"
            stroke-dasharray="${circumference}"
            stroke-dashoffset="${circumference}"
            data-offset="${circumference * (1 - ring.pct / 100)}"/>
        </svg>
        <p class="ring-name">${escapeHTML(ring.name)}</p>
        <p class="ring-detail">
          ${ring.pct}% self-assessed<br>${escapeHTML(ring.detail)}
        </p>
      </div>
    `).join('');

    const reveal = () => {
      row.querySelectorAll('.skill-ring').forEach((ring, index) => {
        ring.style.transition = reducedMotion.matches
          ? 'none'
          : `stroke-dashoffset 1.1s ease ${index * 100}ms`;
        ring.style.strokeDashoffset = ring.dataset.offset;
      });
    };

    if ('IntersectionObserver' in window && !reducedMotion.matches) {
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      }, { threshold: .15 });

      observer.observe(row);
    } else {
      reveal();
    }
  }

  if (groups) {
    groups.innerHTML = DATA.skills.groups.map(group => `
      <div class="skill-group">
        <h3 class="skill-group-title">${escapeHTML(group.title)}</h3>
        <div class="skill-chips">
          ${group.items.map(item =>
            `<span class="skill-chip">${escapeHTML(item)}</span>`
          ).join('')}
        </div>
      </div>
    `).join('');
  }
}

/* ---------- Internships / education / awards ---------- */

function renderExperience() {
  if ($('expList')) {
    $('expList').innerHTML = DATA.experience.map(item => `
      <article class="exp-card">
        <div class="exp-card-header">
          <div>
            <h3 class="exp-role">${escapeHTML(item.role)}</h3>
            <p class="exp-company">${escapeHTML(item.company)}</p>
          </div>
          <span class="exp-period">
            ${escapeHTML(item.period)}<br>${escapeHTML(item.location)}
          </span>
        </div>
        <ul class="exp-bullets">
          ${item.bullets.map(bullet =>
            `<li>${escapeHTML(bullet)}</li>`
          ).join('')}
        </ul>
      </article>
    `).join('');
  }

  if ($('eduGrid')) {
    $('eduGrid').innerHTML = DATA.education.map(item => `
      <article class="edu-card">
        <h3 class="edu-degree">${escapeHTML(item.degree)}</h3>
        <p class="edu-school">${escapeHTML(item.school)}</p>
        <p class="edu-meta">${escapeHTML(item.meta)}</p>
      </article>
    `).join('');
  }

  if ($('awardsGrid')) {
    $('awardsGrid').innerHTML = DATA.awards.map(item => `
      <article class="award-card">
        <p class="award-year">${escapeHTML(item.year)}</p>
        <h3 class="award-title">${escapeHTML(item.title)}</h3>
        <p class="award-desc">${escapeHTML(item.desc)}</p>
      </article>
    `).join('');
  }
}

/* ---------- Terminal ---------- */

function initTerminal() {
  const overlay = $('termOverlay');
  const body = $('termBody');
  const input = $('termInput');
  if (!overlay || !body || !input) return;

  const history = [];
  let historyIndex = 0;
  let draft = '';

  body.setAttribute('role', 'log');
  body.setAttribute('aria-live', 'polite');
  input.setAttribute('aria-label', 'Terminal command');

  function print(text, type = '') {
    const line = document.createElement('div');
    line.className = `term-line${type ? ` term-line--${type}` : ''}`;
    // Never interpret visitor commands as HTML.
    line.textContent = text;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
  }

  function welcome() {
    body.replaceChildren();
    print('Monil OS — Personal Edition', 'success');
    print('Hello, visitor. Nice to meet you!');
    print('Click a command below, or type help and press Enter.');
  }

  function openTerminal() {
    openDialog(overlay, input);
  }

  document.querySelectorAll('.trigger-terminal').forEach(button => {
    button.addEventListener('click', openTerminal);
  });

  const shortcutBar = document.createElement('div');
  shortcutBar.className = 'term-shortcuts';
  shortcutBar.setAttribute('role', 'group');
  shortcutBar.setAttribute('aria-label', 'Run a terminal command');

  ['help', 'whoami', 'projects', 'experience', 'skills', 'contact'].forEach(command => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'term-shortcut';
    button.textContent = command;
    button.addEventListener('click', () => run(command));
    shortcutBar.appendChild(button);
  });

  body.after(shortcutBar);

  function visitSection(id) {
    closeDialog();
    const section = $(id);
    if (!section) return;

    window.location.hash = id;
    section.tabIndex = -1;
    section.focus({ preventScroll: true });
  }

  const commands = new Map([
    ['help', () => {
      print('whoami       About me');
      print('projects     List my seven projects');
      print('experience   Internships and work');
      print('skills       My toolkit');
      print('education    Academic background');
      print('awards       Hackathons and recognition');
      print('contact      Email, GitHub, and LinkedIn');
      print('theme        Switch light / dark');
      print('go projects  Jump to the project section');
      print('go contact   Jump to the contact section');
      print('sudo hire    Open an email draft');
      print('clear        Clear this window');
      print('exit         Close terminal');
      print('Tip: use ↑ / ↓ for command history.');
    }],
    ['whoami', () => {
      print(`${PROFILE.name} — CS Engineering @ Jain University, Bengaluru.`);
      print('I build full-stack web apps, Android apps, AI tools, and IoT systems.');
    }],
    ['projects', () => {
      DATA.projects.forEach(project => {
        print(`↗ ${project.title} — ${project.subtitle}`, 'success');
        print(`  ${project.tech.join(' · ')}`);
      });
      print('Type "go projects" to open the project library.');
    }],
    ['experience', () => {
      DATA.experience.forEach(item => {
        print(`${item.role} @ ${item.company}`, 'success');
        print(`${item.period} · ${item.location}`);
        item.bullets.forEach(bullet => print(`  • ${bullet}`));
      });
    }],
    ['skills', () => {
      DATA.skills.groups.forEach(group =>
        print(`${group.title}: ${group.items.join(', ')}`)
      );
    }],
    ['education', () => {
      DATA.education.forEach(item =>
        print(`${item.degree}\n${item.school}\n${item.meta}\n`)
      );
    }],
    ['awards', () => {
      DATA.awards.forEach(item => print(`${item.title} — ${item.desc}`));
    }],
    ['contact', () => {
      print(`Email: ${PROFILE.email}`);
      print(`Phone: ${PROFILE.phone}`);
      print(`GitHub: ${PROFILE.github}`);
      print(`LinkedIn: ${PROFILE.linkedin}`);
      print('Type "go contact" for clickable contact links.');
    }],
    ['theme', () => {
      $('themeToggle')?.click();
      print(`Appearance: ${document.documentElement.dataset.theme}`);
    }],
    ['go projects', () => visitSection('projects')],
    ['go contact', () => visitSection('contact')],
    ['sudo hire', () => {
      print('Requesting an email draft in your email app…', 'success');
      window.location.href =
        `mailto:${PROFILE.email}?subject=Job%20Opportunity`;
    }],
    ['clear', () => body.replaceChildren()],
    ['exit', closeDialog]
  ]);

  function run(raw) {
    const text = raw.trim();
    if (!text) return;

    history.push(text);
    historyIndex = history.length;
    draft = '';
    print(`~$ ${text}`, 'command');

    const command = text.toLowerCase().replace(/\s+/g, ' ');
    const action = commands.get(command);

    if (action) action();
    else print(`Command not found: ${text}. Type help.`, 'error');

    body.scrollTop = body.scrollHeight;
  }

  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const value = input.value;
      input.value = '';
      run(value);
      return;
    }

    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
    event.preventDefault();

    if (historyIndex === history.length) draft = input.value;

    historyIndex = Math.max(0, Math.min(
      history.length,
      historyIndex + (event.key === 'ArrowUp' ? -1 : 1)
    ));

    input.value = historyIndex === history.length
      ? draft
      : history[historyIndex];

    input.setSelectionRange(input.value.length, input.value.length);
  });

  document.addEventListener('keydown', event => {
    if (
      (event.metaKey || event.ctrlKey) &&
      event.key.toLowerCase() === 'k'
    ) {
      event.preventDefault();
      if (activeOverlay === overlay) closeDialog();
      else openTerminal();
    }
  });

  welcome();
}

/* ---------- Navigation ---------- */

function initNavigation() {
  const links = [
    ...document.querySelectorAll('.nav-links a, .desktop-dock a[href^="#"]')
  ];
  const sections = ['hero', 'projects', 'skills', 'experience', 'contact']
    .map($)
    .filter(Boolean);

  let scheduled = false;

  function update() {
    scheduled = false;
    let current = 'hero';

    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= 180) {
        current = section.id;
      }
    });

    links.forEach(link => {
      const active = link.hash === `#${current}`;
      link.classList.toggle('active', active);

      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  }, { passive: true });

  window.addEventListener('resize', update);
  update();
}

/* ---------- Subtle cursor-following glass highlight ---------- */

function initGlass() {
  const panel = document.querySelector('.about-window-body');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!panel) return;

  let frame = null;
  let x = 0;
  let y = 0;

  panel.addEventListener('pointermove', event => {
    if (reducedMotion.matches || !finePointer.matches) return;

    x = event.clientX;
    y = event.clientY;
    if (frame !== null) return;

    frame = requestAnimationFrame(() => {
      const rect = panel.getBoundingClientRect();
      panel.style.setProperty('--glow-x', `${(x - rect.left) / rect.width * 100}%`);
      panel.style.setProperty('--glow-y', `${(y - rect.top) / rect.height * 100}%`);
      frame = null;
    });
  });

  panel.addEventListener('pointerleave', () => {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    panel.style.removeProperty('--glow-x');
    panel.style.removeProperty('--glow-y');
  });
}

/* ---------- Contact ---------- */

function initContact() {
  const form = $('contactForm');
  if (!form) return;

  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector('textarea');
  const submit = form.querySelector('[type="submit"]');
  if (!name || !email || !message || !submit) return;

  [
    [name, 'contactName', 'name', 'Your name'],
    [email, 'contactEmail', 'email', 'Your email'],
    [message, 'contactMessage', 'message', 'Your message']
  ].forEach(([field, id, fieldName, labelText]) => {
    field.id = id;
    field.name = fieldName;
    field.required = true;

    if (!form.querySelector(`label[for="${id}"]`)) {
      const label = document.createElement('label');
      label.htmlFor = id;
      label.textContent = labelText;
      field.before(label);
    }
  });

  name.autocomplete = 'name';
  email.autocomplete = 'email';
  submit.textContent = 'Create email draft ↗';

  const note = document.createElement('p');
  note.className = 'form-note';
  note.id = 'contactFormNote';
  note.textContent =
    'Opens your email app with your message. You review and send it there.';
  form.appendChild(note);

  form.setAttribute('aria-describedby', note.id);

  const status = document.createElement('p');
  status.className = 'form-note';
  status.setAttribute('role', 'status');
  form.appendChild(status);

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const subject = `Portfolio inquiry from ${name.value.trim()}`;
    const body =
      `Name: ${name.value.trim()}\n` +
      `Email: ${email.value.trim()}\n\n` +
      message.value.trim();

    window.location.href =
      `mailto:${PROFILE.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    status.textContent =
      `If no email app opens, email ${PROFILE.email} directly. ` +
      'Your message has not been sent by this website.';
  });
}

/* ---------- Start ---------- */

function boot() {
  // Initialize interactions before rendering optional sections.
  initTheme();
  initDialogs();
  initTerminal();
  initContact();

  initProjects();
  renderSkills();
  renderExperience();

  initNavigation();
  initGlass();

  if ($('year')) $('year').textContent = new Date().getFullYear();
}

// Works whether the script loads before or after DOMContentLoaded.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}