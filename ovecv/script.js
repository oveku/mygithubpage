/* ============================================================
   CV WEBSITE — INTERACTIVE TIMELINE & LOGIC
   ============================================================ */

(function () {
  'use strict';

  // ----------------------------------------------------------
  // CONFIGURATION
  // ----------------------------------------------------------
  const TIMELINE_START_YEAR = 1997;
  const TIMELINE_END_YEAR = new Date().getFullYear();
  const ANIMATION_DURATION = 3000; // ms for the progress bar

  // ----------------------------------------------------------
  // DATA — Employers
  // ----------------------------------------------------------
  const employers = [
    {
      id: 'ntnu',
      company: 'NTNU',
      start: '1997-08',
      end: '1999-06',
      cssClass: 'job-bar--education',
      iconLetter: 'N',
      isEducation: true,
      roles: [
        {
          title: 'Mellomfag Informatikk (Informatikk, Mediavitenskap)',
          period: '1997 – 1999',
          location: 'Trondheim, Norway',
          description:
            'Norwegian University of Science and Technology (NTNU) — Intermediate Level Computer Science with studies in Informatics and Media Science.',
          highlights: [
            'Nestleder (Vice Chair) in the student association OnLine',
            'Studentrepresentant (Student Representative) in InstituttStyret for IfI (Department Board for the Institute of Informatics)',
          ],
          technologies: [],
        },
      ],
    },
    {
      id: 'visma',
      company: 'Visma Unique',
      start: '1999-09',
      end: '2009-02',
      cssClass: 'job-bar--visma',
      iconLetter: 'V',
      roles: [
        {
          title: 'Senior Developer / System Architect / Group Leader',
          period: 'Sep 1999 – Feb 2009',
          location: 'Norway',
          description:
            'Visma is the Nordic region\'s leading provider of business efficiency solutions. Over nearly a decade, I progressed from developer to system architect and group leader.',
          highlights: [
            'Lead Developer and System Architect for Visma Unique Fakturabehandling — a system for scanning, interpretation, and processing of incoming invoices',
            'The system became a major success, acquiring over 200 customers including Ullevål University Hospital and Tønsberg municipality',
            'Active participant in the development of Unique eHandel, used in municipalities and hospitals',
            'Served as Group Leader with responsibility for 6 people in the development department',
            'Project Leader and Scrum Master on large semi-annual projects',
            'Participated in development and implementation of eCommerce and electronic invoicing solutions',
            'Served as system architect managing the entire lifecycle from initial prototype to full-scale development',
            'Implemented SCRUM methodologies to improve team collaboration and streamline project workflows',
          ],
          technologies: ['Unique 4GL', 'Java', 'JavaScript (Apache Wicket)', 'Oracle', 'MSSQL'],
        },
      ],
    },
    {
      id: 'papirfly',
      company: 'Papirfly AS',
      start: '2009-03',
      end: '2019-04',
      cssClass: 'job-bar--papirfly',
      iconLetter: 'P',
      roles: [
        {
          title: 'Developer',
          period: 'Mar 2009 – Dec 2014',
          location: 'Sandnes, Norway',
          description:
            'Developed brand management and media generation systems for print and digital use, ensuring consistent brand expression worldwide.',
          highlights: [
            'Implemented and tested software solutions based on detailed specifications',
            'Worked with both local Norwegian clients (Rema, Thon, Scandic) and large international clients (Mars, Rolls Royce, VMware)',
            'Proactively identified and developed solutions to meet evolving client requirements',
            'Managed error correction, software maintenance, and provided 3rd line support',
          ],
          technologies: ['Actionscript 2/3', 'JavaScript'],
        },
        {
          title: 'Lead Developer — Nordic Choice Hotels',
          period: 'Jan 2015 – Apr 2019',
          location: 'Sandnes, Norway',
          description:
            'Leading Nordic hotel chain operating 5 market-adapted brands for leisure, business, and conference travelers.',
          highlights: [
            'Developed templates for production of all marketing materials — from buffet cards and menus to posters, rollups, invitations, and other collateral',
            'Built over 150 different product templates across 5 distinct brands',
            'Delivered an efficient self-service system enabling hotel staff to produce professional-quality materials without design expertise',
          ],
          technologies: ['Actionscript 3', 'TypeScript'],
        },
      ],
    },
    {
      id: 'capgemini',
      company: 'Capgemini Norge AS',
      start: '2019-05',
      end: '2025-08',
      cssClass: 'job-bar--capgemini',
      iconLetter: 'C',
      compactDetail: true,
      roles: [
        {
          title: 'Application Consultant — Vår Energi AS',
          period: 'May 2019 – Feb 2020',
          location: 'Stavanger, Norway',
          description:
            'One of the largest exploration and production companies on the Norwegian continental shelf, with average production exceeding 300,000 barrels of oil equivalents per day.',
          highlights: [
            'Responsible for TRACE, a monitoring system for the GOLIAT platform',
            'Led development and implementation of multiple system upgrades, ensuring smooth integration and minimal disruption',
            'Maintained and improved a critical Java-based system addressing both application management (AM) and application development (AD) needs',
            'Developed a VBA solution for importing and converting production data from multiple systems following the Vår Energi merger',
          ],
          technologies: ['Java 8', 'VBA', 'SQL', 'Azure DevOps'],
        },
        {
          title: 'Tech Lead — Equinor AS (Shipment & Allocation)',
          period: 'Feb 2020 – May 2024',
          location: 'Stavanger, Norway',
          description:
            'Gas Lifting and Accounting System (GLAS) — an internal accounting system for calculating and allocating gas between producers in the North Sea, part of the Transport Allocation and Logistics (TAL) portfolio.',
          highlights: [
            'Tech Lead responsible for solution architecture, code quality, and security for a DevSecOps team owning the full value chain',
            'Led the migration of all team applications from on-premise data center in Stavanger to Azure — 50 servers, 3 Oracle databases, and multiple MSSQL databases migrated without production disruption',
            'Designed and implemented the solution architecture for "GLAS Next" — a strategic transition from monolithic to microservices-based architecture',
            'Developed a Python-based disaster recovery and backup solution for application data, user data, and connected systems',
            'Led the team\'s transition from Jira to Azure DevOps, including custom code to extract and migrate data',
          ],
          technologies: [
            'Azure', 'Azure AD', 'Oracle 12', 'MS SQL', 'Docker', 'Dynatrace',
            'GitHub', 'GitLab', 'REST', 'React', 'Spring Boot', 'ServiceNow',
            'Azure DevOps', 'Azure SQL Database', 'Linux (Red Hat)',
            'Microservices', 'Java', 'Python', 'ARM Templates',
          ],
        },
        {
          title: 'Head of Cloud & Custom Applications — Stavanger',
          period: 'Nov 2023 – Aug 2025',
          location: 'Stavanger, Norway',
          description:
            'Business Line Manager with P&L responsibility for Cloud & Custom Applications in the Stavanger region.',
          highlights: [
            'Developed and executed go-to-market strategy for Norway and the Stavanger region in partnership with Microsoft, AWS, and Google',
            'Led, inspired, and developed a team of ~70 skilled technologists and developers',
            'Responsible for resource planning, budgeting, competency development, and career planning',
            'Nationally responsible for Capgemini\'s Frontend Community of Practice across ~400 developers and 7 locations',
            'Played a key role in attracting and securing the right talent through consistent, targeted recruitment',
          ],
          technologies: [],
        },
        {
          title: 'Team Lead — Vår Energi AS (.NET Application Management)',
          period: 'Feb 2025 – May 2025',
          location: 'Stavanger, Norway',
          description:
            'Maintenance of Vår Energi\'s .NET application portfolio — 1st–3rd level support, bug fixing, development, extension, adaptation, migration, and decommissioning.',
          highlights: [
            'Led and managed the project team with responsibility for planning, cost control, progress tracking, and project reporting',
            'Handled risk management through analysis and mitigation',
            'Ensured all applications met agreed standards for quality and security',
            'Portfolio included systems for CAPEX/OPEX/ABEX budgeting and forecasting, gas volume transaction tracking, GassCo reporting, and onshore power ordering',
          ],
          technologies: ['.NET', '.NET Framework', '.NET WCF', 'Azure DevOps', 'MS SQL'],
        },
      ],
    },
    {
      id: 'bouvet',
      company: 'Bouvet Norge AS',
      start: '2025-09',
      end: null, // Present
      cssClass: 'job-bar--bouvet',
      iconLetter: 'B',
      compactDetail: true,
      roles: [
        {
          title: 'Tech Lead — Equinor AS (3D Ecosystem | Digital Twin)',
          period: 'Sep 2025 – Present',
          location: 'Stavanger, Norway',
          description:
            '3D Ecosystem — synchronizing 3D models of platforms, vessels, and facilities between subcontractors and Equinor\'s internal systems.',
          highlights: [
            'Serve as Tech Lead for the 3D Ecosystem team',
            'System retrieves data from CRM and embeds metadata into 3D models',
            '3D models are exported to other systems for Digital Twin visualizations used by service technicians on various devices',
          ],
          technologies: [],
        },
      ],
    },
  ];

  // ----------------------------------------------------------
  // DATA — Certifications
  // ----------------------------------------------------------
  const certifications = [
    {
      date: '2006-01',
      name: 'Vismas prosjektlederskole (Project Management School)',
      issuer: 'Visma',
    },
    {
      date: '2006-06',
      name: 'Java for non-C++ developers',
      issuer: 'Visma',
    },
    {
      date: '2019-11',
      name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
    },
    {
      date: '2021-01',
      name: 'Connected Manager',
      issuer: 'Harvard Business School / Capgemini University',
    },
    {
      date: '2022-06',
      name: 'Security, Compliance, and Identity Fundamentals',
      issuer: 'Microsoft',
    },
    {
      date: '2024-05',
      name: 'AI-900 — Microsoft Azure AI Fundamentals',
      issuer: 'Microsoft',
    },
    {
      date: '2024-06',
      name: 'Energy Transition & Utilities Level 1',
      issuer: 'Capgemini University',
    },
    {
      date: '2024-12',
      name: 'Energy Transition & Utilities Level 2',
      issuer: 'Capgemini University',
    },
  ];

  // ----------------------------------------------------------
  // HELPER — date string to percentage position on timeline
  // ----------------------------------------------------------
  function dateToPercent(dateStr) {
    if (!dateStr) {
      // "Present" — use today
      const now = new Date();
      dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    }
    const parts = dateStr.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // 0-indexed
    const totalMonths = (TIMELINE_END_YEAR - TIMELINE_START_YEAR + 1) * 12;
    const elapsedMonths = (year - TIMELINE_START_YEAR) * 12 + month;
    return Math.max(0, Math.min(100, (elapsedMonths / totalMonths) * 100));
  }

  // ----------------------------------------------------------
  // HELPER — Format month-year label
  // ----------------------------------------------------------
  function formatDate(dateStr) {
    if (!dateStr) return 'Present';
    const [y, m] = dateStr.split('-');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[parseInt(m, 10) - 1]} ${y}`;
  }

  // ----------------------------------------------------------
  // RENDER — Year markers
  // ----------------------------------------------------------
  function renderYearMarkers() {
    const container = document.getElementById('timeline-years');
    if (!container) return;

    const markers = [];
    const range = TIMELINE_END_YEAR - TIMELINE_START_YEAR;
    let interval = 5;
    if (range <= 15) interval = 2;
    if (range <= 8) interval = 1;

    for (let y = TIMELINE_START_YEAR; y <= TIMELINE_END_YEAR; y++) {
      if (y === TIMELINE_START_YEAR || y === TIMELINE_END_YEAR || y % interval === 0) {
        markers.push(y);
      }
    }

    markers.forEach((year) => {
      const pct = dateToPercent(`${year}-01`);
      const el = document.createElement('div');
      el.className = 'year-marker';
      el.style.left = `${pct}%`;
      el.textContent = year;

      // Animation delay based on position
      const delay = (pct / 100) * (ANIMATION_DURATION / 1000);
      el.style.transitionDelay = `${delay}s`;
      el.dataset.delay = delay;

      container.appendChild(el);
    });
  }

  // ----------------------------------------------------------
  // RENDER — Job bars
  // ----------------------------------------------------------
  function renderJobBars() {
    const container = document.getElementById('timeline-jobs');
    if (!container) return;

    employers.forEach((emp, index) => {
      const startPct = dateToPercent(emp.start);
      const endPct = dateToPercent(emp.end);
      const widthPct = endPct - startPct;

      const bar = document.createElement('button');
      bar.className = `job-bar ${emp.cssClass}`;
      bar.setAttribute('role', 'button');
      bar.setAttribute('tabindex', '0');
      bar.setAttribute('aria-label', `${emp.company}: ${formatDate(emp.start)} to ${emp.end ? formatDate(emp.end) : 'Present'}`);
      bar.dataset.employerId = emp.id;
      bar.dataset.row = '0';

      bar.style.left = `${startPct}%`;
      bar.style.width = `${widthPct}%`;

      // Bar content
      const label = document.createElement('span');
      label.className = 'bar-label';
      label.textContent = emp.company;
      bar.appendChild(label);

      // If bar is wide enough, show years
      if (widthPct > 12) {
        const years = document.createElement('span');
        years.className = 'bar-years';
        const startY = emp.start.split('-')[0];
        const endY = emp.end ? emp.end.split('-')[0] : 'Now';
        years.textContent = `${startY}–${endY}`;
        bar.appendChild(years);
      }

      // Animation delay
      const delay = (startPct / 100) * (ANIMATION_DURATION / 1000);
      bar.style.transitionDelay = `${delay}s`;
      bar.dataset.delay = delay;

      // Click handler
      bar.addEventListener('click', () => showJobDetail(emp));

      container.appendChild(bar);
    });
  }

  // ----------------------------------------------------------
  // RENDER — Certification dots
  // ----------------------------------------------------------
  function renderCertDots() {
    const container = document.getElementById('timeline-certs');
    if (!container) return;

    // Sort chronologically
    const sorted = [...certifications].sort((a, b) => a.date.localeCompare(b.date));

    sorted.forEach((cert, i) => {
      const pct = dateToPercent(cert.date);

      const dot = document.createElement('button');
      dot.className = 'cert-dot';
      dot.setAttribute('role', 'button');
      dot.setAttribute('tabindex', '0');
      dot.setAttribute('aria-label', `Certification: ${cert.name} (${formatDate(cert.date)})`);
      dot.dataset.certIndex = i;
      dot.style.left = `${pct}%`;

      // icon (circle)
      const icon = document.createElement('div');
      icon.className = 'cert-dot__icon';
      dot.appendChild(icon);

      // hover tooltip
      const tooltip = document.createElement('div');
      tooltip.className = 'cert-dot__tooltip';
      tooltip.textContent = `${cert.name} (${formatDate(cert.date)})`;
      dot.appendChild(tooltip);

      // Animation delay
      const delay = (pct / 100) * (ANIMATION_DURATION / 1000);
      dot.style.transitionDelay = `${delay}s`;
      dot.dataset.delay = delay;

      // Click
      dot.addEventListener('click', () => showCertDetail(cert, sorted.indexOf(cert)));

      container.appendChild(dot);
    });
  }

  // ----------------------------------------------------------
  // ANIMATE — Trigger timeline animation
  // ----------------------------------------------------------
  function animateTimeline() {
    const progress = document.getElementById('timeline-progress');
    if (!progress) return;

    // Small delay to allow layout
    requestAnimationFrame(() => {
      progress.classList.add('animate');
    });

    // Animate job bars
    const bars = document.querySelectorAll('.job-bar');
    bars.forEach((bar) => {
      const delay = parseFloat(bar.dataset.delay || 0) * 1000;
      setTimeout(() => bar.classList.add('animated'), delay + 200);
    });

    // Animate year markers
    const markers = document.querySelectorAll('.year-marker');
    markers.forEach((marker) => {
      const delay = parseFloat(marker.dataset.delay || 0) * 1000;
      setTimeout(() => marker.classList.add('animated'), delay + 100);
    });

    // Animate cert dots
    const dots = document.querySelectorAll('.cert-dot');
    dots.forEach((dot) => {
      const delay = parseFloat(dot.dataset.delay || 0) * 1000;
      setTimeout(() => dot.classList.add('animated'), delay + 300);
    });
  }

  // ----------------------------------------------------------
  // DETAIL PANEL — Show job details
  // ----------------------------------------------------------
  function showJobDetail(emp) {
    clearActiveStates();

    // Highlight active bar
    const bar = document.querySelector(`.job-bar[data-employer-id="${emp.id}"]`);
    if (bar) bar.classList.add('active');

    const card = document.getElementById('detail-card');
    const content = document.getElementById('detail-content');

    let html = `
      <div class="detail-header">
        <div class="detail-icon detail-icon--${emp.id}">${emp.iconLetter}</div>
        <div>
          <div class="detail-company">${emp.company}</div>
          <div class="detail-period">${formatDate(emp.start)} – ${emp.end ? formatDate(emp.end) : 'Present'}</div>
        </div>
      </div>
      <div class="detail-roles">
    `;

    emp.roles.forEach((role) => {
      html += `
        <div class="detail-role">
          <div class="detail-role-title">${escapeHtml(role.title)}</div>
          <div class="detail-role-period">${escapeHtml(role.period)}${role.location ? ' · ' + escapeHtml(role.location) : ''}</div>
      `;

      if (!emp.compactDetail) {
        html += `<div class="detail-role-description">${escapeHtml(role.description)}</div>`;

        if (role.highlights && role.highlights.length) {
          html += '<ul class="detail-role-highlights">';
          role.highlights.forEach((h) => {
            html += `<li>${escapeHtml(h)}</li>`;
          });
          html += '</ul>';
        }

        if (role.technologies && role.technologies.length) {
          html += '<div class="detail-tech-tags">';
          role.technologies.forEach((t) => {
            html += `<span class="tech-tag">${escapeHtml(t)}</span>`;
          });
          html += '</div>';
        }
      }

      html += '</div>';
    });

    html += '</div>';
    content.innerHTML = html;
    card.classList.add('open');

    // Smooth scroll to detail
    scrollToDetail();
  }

  // ----------------------------------------------------------
  // DETAIL PANEL — Show certification detail
  // ----------------------------------------------------------
  function showCertDetail(cert, index) {
    clearActiveStates();

    // Highlight active dot
    const dots = document.querySelectorAll('.cert-dot');
    dots.forEach((d) => {
      if (parseInt(d.dataset.certIndex, 10) === index) {
        d.classList.add('active');
      }
    });

    const card = document.getElementById('detail-card');
    const content = document.getElementById('detail-content');

    content.innerHTML = `
      <div class="detail-header">
        <div class="detail-icon detail-icon--cert">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <div>
          <div class="cert-detail-name">${escapeHtml(cert.name)}</div>
          <div class="cert-detail-issuer">${escapeHtml(cert.issuer)}</div>
          <div class="cert-detail-date">${formatDate(cert.date)}</div>
        </div>
      </div>
    `;

    card.classList.add('open');
    scrollToDetail();
  }

  // ----------------------------------------------------------
  // DETAIL PANEL — Close
  // ----------------------------------------------------------
  function closeDetail() {
    const card = document.getElementById('detail-card');
    card.classList.remove('open');
    clearActiveStates();
  }

  function clearActiveStates() {
    document.querySelectorAll('.job-bar.active').forEach((el) => el.classList.remove('active'));
    document.querySelectorAll('.cert-dot.active').forEach((el) => el.classList.remove('active'));
  }

  function scrollToDetail() {
    const panel = document.getElementById('detail-panel');
    if (panel) {
      setTimeout(() => {
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }

  // ----------------------------------------------------------
  // UTILITY — Escape HTML
  // ----------------------------------------------------------
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ----------------------------------------------------------
  // SCROLL REVEAL — fade-in-up sections
  // ----------------------------------------------------------
  function initScrollReveal() {
    const targets = document.querySelectorAll('.skills-section, .education-section');
    targets.forEach((el) => el.classList.add('fade-in-up'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
  }

  // ----------------------------------------------------------
  // TIMELINE SCROLL TRIGGER — animate when in viewport
  // ----------------------------------------------------------
  function initTimelineObserver() {
    const timelineSection = document.getElementById('timeline-container');
    if (!timelineSection) return;

    let animated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            animateTimeline();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(timelineSection);
  }

  // ----------------------------------------------------------
  // FOOTER YEAR
  // ----------------------------------------------------------
  function setFooterYear() {
    const el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  // ----------------------------------------------------------
  // KEYBOARD NAVIGATION — Escape to close detail
  // ----------------------------------------------------------
  function initKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDetail();
      }
    });
  }

  // ----------------------------------------------------------
  // INIT
  // ----------------------------------------------------------
  function init() {
    renderYearMarkers();
    renderJobBars();
    renderCertDots();
    initTimelineObserver();
    initScrollReveal();
    initKeyboard();
    setFooterYear();

    // Close button
    const closeBtn = document.getElementById('detail-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeDetail);
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
