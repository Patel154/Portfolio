'use strict';

/* =========================================================
   COMPLETE PORTFOLIO DATA
   Projects and skills verified against public GitHub sources.
   See PROJECT_SOURCES.md for evidence and selection decisions.
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
    "id": "ladli",
    "title": "LADLI Laboratory Platform",
    "subtitle": "Website & Admin Portal",
    "category": "fullstack",
    "tags": [
      "fullstack"
    ],
    "categoryLabel": "Full-Stack · Flask",
    "desc": "A laboratory web platform with customer enquiries, quote requests, document downloads, visitor tracking, and an authenticated admin portal.",
    "tech": [
      "Python",
      "Flask",
      "JavaScript",
      "Three.js",
      "PostgreSQL",
      "SQLite"
    ],
    "arch": "HTML / CSS / JavaScript frontend → Flask APIs → PostgreSQL or SQLite → SMTP notifications",
    "metrics": [
      "Multi-page service website with self-hosted Three.js visualizations",
      "Admin workflows for enquiries, quotes, documents, and visitor counts",
      "SQLite-to-PostgreSQL migration utility and connection pooling",
      "Session authentication, CSRF protection, and email password resets"
    ],
    "repo": "https://github.com/Patel154/Full-stack-web-app"
  },
  {
    "id": "ai-model-workspace",
    "title": "AI Model Workspace",
    "subtitle": "Multi-model Chat Dashboard",
    "category": "ai",
    "tags": [
      "fullstack",
      "ai"
    ],
    "categoryLabel": "AI · Next.js",
    "desc": "A model-switching chat workspace with streamed responses, file attachments, Markdown rendering, and conversations saved locally in the browser.",
    "tech": [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Server-Sent Events",
      "pdf-parse"
    ],
    "arch": "React / Next.js UI → server API routes → Experiential Labs API; browser localStorage for conversations",
    "metrics": [
      "Live model discovery and switching within a conversation",
      "Server-side API proxy with streamed chat responses",
      "PDF text extraction and browser-side PowerPoint parsing",
      "Syntax-highlighted Markdown and file comparison views"
    ],
    "repo": "https://github.com/Patel154/ai-model-workspace"
  },
  {
    "id": "customer-feedback-insight-engine",
    "title": "Customer Feedback Insight Engine",
    "subtitle": "Sentiment Analysis & NLP",
    "category": "ai",
    "tags": [
      "ai",
      "fullstack"
    ],
    "categoryLabel": "Machine Learning · NLP",
    "desc": "A customer-feedback analysis platform combining sentiment classification, aspect-based insights, topic discovery, and a Flask dashboard for individual reviews and CSV batches.",
    "tech": [
      "Python",
      "scikit-learn",
      "NLTK",
      "Pandas",
      "Flask",
      "Chart.js"
    ],
    "arch": "Feedback → negation-aware preprocessing → TF-IDF classifiers + LDA topic discovery → Flask dashboard",
    "metrics": [
      "Comparison of Naive Bayes, logistic regression, SVM, and random forest models",
      "Negation-aware text cleaning and WordNet lemmatization",
      "Clause-level sentiment across five customer-feedback aspects",
      "Bulk CSV analysis, interactive charts, and enriched exports"
    ],
    "repo": "https://github.com/Patel154/customer-feedback-insight-engine"
  },
  {
    "id": "skillswap",
    "title": "SkillSwap",
    "subtitle": "Student Skill Exchange",
    "category": "fullstack",
    "tags": [
      "fullstack"
    ],
    "categoryLabel": "Full-Stack · PHP",
    "desc": "A student platform for offering skills, finding matches, requesting swaps, messaging peers, and leaving reviews. The final project within the Web Technologies repository.",
    "tech": [
      "PHP",
      "MySQL",
      "PDO",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "arch": "PHP pages + JavaScript / CSS → session authentication → PDO → MySQL",
    "metrics": [
      "Skill listings, category search, and matching suggestions",
      "Swap requests, messaging, notifications, and reviews",
      "Wanted-skills board and user profiles",
      "Admin dashboards for users, skills, categories, and reports"
    ],
    "repo": "https://github.com/Patel154/Small-Projects-of-WT/tree/main/WT%20Final%20Project"
  },
  {
    "id": "retinabridge",
    "title": "RetinaBridge",
    "subtitle": "Diabetic Retinopathy Research Prototype",
    "category": "ai",
    "tags": [
      "ai",
      "mobile"
    ],
    "categoryLabel": "Research · Android Client",
    "desc": "A local retinal-image research prototype connecting a browser dashboard and Android WebView client to a Python server, SQLite records, and optional MATLAB inference. Not clinically validated.",
    "tech": [
      "Python",
      "MATLAB",
      "SQLite",
      "Pillow",
      "JavaScript",
      "Android WebView"
    ],
    "arch": "Browser or Android WebView → Python HTTP server → SQLite + optional MATLAB batch inference",
    "metrics": [
      "Patient intake, image upload, and image-quality checks",
      "Optional grading with a separately supplied MATLAB model",
      "Quality-only results when the model is unavailable",
      "Reviewer notes and print-to-PDF reports; Android client requires the local server"
    ],
    "repo": "https://github.com/Patel154/Diabetic-Retinopathy-Screening--SIH-2026-"
  }
],

  skills: {
  "rings": [
    {
      "name": "Full-Stack Web",
      "color": "#2997ff",
      "detail": "React · Next.js · Flask · PHP"
    },
    {
      "name": "Data & NLP",
      "color": "#30d158",
      "detail": "scikit-learn · NLTK · Pandas"
    },
    {
      "name": "AI Integration",
      "color": "#bf5af2",
      "detail": "Streaming APIs · MATLAB"
    },
    {
      "name": "Data & Clients",
      "color": "#ff9f0a",
      "detail": "SQL · Android WebView"
    }
  ],
  "groups": [
    {
      "title": "Languages",
      "items": [
        "Python",
        "TypeScript",
        "JavaScript",
        "PHP",
        "SQL",
        "MATLAB",
        "HTML / CSS"
      ]
    },
    {
      "title": "Web & Interfaces",
      "items": [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Three.js",
        "Chart.js",
        "Android WebView"
      ]
    },
    {
      "title": "Backend & Databases",
      "items": [
        "Flask",
        "PostgreSQL",
        "SQLite",
        "MySQL",
        "PDO",
        "Session Authentication",
        "REST APIs"
      ]
    },
    {
      "title": "Machine Learning & NLP",
      "items": [
        "scikit-learn",
        "NLTK",
        "Pandas",
        "NumPy",
        "TF-IDF",
        "Sentiment Analysis",
        "LDA Topic Modeling"
      ]
    },
    {
      "title": "Integration & Data Tools",
      "items": [
        "Server-Sent Events",
        "PDF Text Extraction",
        "Pillow",
        "Matplotlib",
        "Seaborn",
        "CSV Processing"
      ]
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
      desc: 'National Finals — Software development hackathon.',
      year: '2026'
    },
    {
      title: 'NavaNIEti 2026',
      desc: '24-hour IoT hackathon champion.',
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
    const logoPath = 'assets/mp-rainbow.svg';
    const logo = document.querySelector('.brand-mark');
    if (logo) logo.src = logoPath;
    if ($('siteFavicon')) $('siteFavicon').href = 'assets/mp-rainbow-favicon.svg';

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
    ['ai', 'AI & Data'],
    ['mobile', 'Android']
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
  const categorySymbols = ['&lt;/&gt;', '{…}', 'API', 'SQL'];

  if (row) {
    row.innerHTML = DATA.skills.rings.map((ring, index) => `
      <div class="ring-cell">
        <span class="toolkit-symbol" aria-hidden="true">${categorySymbols[index]}</span>
        <p class="ring-name">${escapeHTML(ring.name)}</p>
        <p class="ring-detail">
          ${escapeHTML(ring.detail)}
        </p>
      </div>
    `).join('');

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

  const shortcutBar = $('termShortcuts') || document.createElement('div');
  shortcutBar.replaceChildren();
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
      print(`projects     List my ${DATA.projects.length} projects`);
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
      print('I build web platforms, AI workspaces, and data-driven tools.');
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

  $('termForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const value = input.value;
    input.value = '';
    run(value);
  });

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
  const sections = ['hero', 'projects', 'skills', 'learning', 'experience', 'connect', 'contact']
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

  const note = $('contactFormNote') || document.createElement('p');
  note.className = 'form-note';
  note.id = 'contactFormNote';
  note.textContent =
    'Opens your email app with your message. You review and send it there.';
  form.appendChild(note);

  form.setAttribute('aria-describedby', note.id);

  const status = $('contactStatus') || document.createElement('p');
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
  renderLearning();

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

/* ---------- Learning queue (from the GitHub profile README) ---------- */

function renderLearning() {
    const learning = [
      {
        title: 'Containerization & Deployment',
        focus: 'Docker + basic CI/CD',
        desc: 'Dockerfile optimization, multi-stage builds, and automated GitHub Actions pipelines.',
        icon: '▣',
        color: 'blue',
        status: 'In progress',
        statusClass: 'building'
      },
      {
        title: 'Distributed Architectures',
        focus: 'System design fundamentals',
        desc: 'High-level architecture, load balancing, Redis caching, and microservice patterns.',
        icon: '⌘',
        color: 'purple',
        status: 'Planned',
        statusClass: 'planned'
      },
      {
        title: 'Algorithmic Mastery',
        focus: 'DSA & competitive programming',
        desc: 'Advanced trees and graphs, dynamic programming, and space-time complexity optimization.',
        icon: '{ }',
        color: 'orange',
        status: 'Daily sprint',
        statusClass: 'daily'
      },
      {
        title: 'Cloud & Edge AI',
        focus: 'On-device inference & APIs',
        desc: 'Edge deployment with MediaPipe, MQTT streaming, and Gemini API pipelines.',
        icon: '✧',
        color: 'teal',
        status: 'Exploring',
        statusClass: 'exploring'
      }
    ];

    const learningList = document.getElementById('learningList');

    if (learningList) {
      learningList.innerHTML = learning.map(item => `
        <li class="learning-item">
          <span class="learning-icon learning-icon-${item.color}"
            aria-hidden="true">${escapeHTML(item.icon)}</span>
          <div class="learning-content">
            <h3>${escapeHTML(item.title)}</h3>
            <p class="learning-focus">${escapeHTML(item.focus)}</p>
            <p>${escapeHTML(item.desc)}</p>
          </div>
          <span class="learning-status status-${item.statusClass}">
            ${escapeHTML(item.status)}
          </span>
        </li>
      `).join('');
    }

}
