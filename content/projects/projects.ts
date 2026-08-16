import { Project } from '@/types/project';

export const placeholderProjects: Project[] = [
  {
    id: 'tcs',
    slug: 'tcs',
    title: 'Redesign and implementation in one week?',
    subtitle: 'Redesigning the TCS terminal community system under extreme time constraints',
    comicImages: [
      '/illustrations/comic-tcs-1.png',
      '/illustrations/comic-tcs-2.png',
      '/illustrations/comic-tcs-3.png',
    ],
    vertical: 'Logistics, Port',
    duration: '1 week',
    scope:
      'TCS (Terminal Community System) is a logistics coordination platform used by port operators, freight forwarders, and shipping agents to manage container movements. The brief: redesign and ship a new interface in exactly one week.',
    comic: {
      title: 'One Week. One Shot.',
      description: 'How a one-week deadline forced every design decision to count.',
      frames: [
        { id: 'f1', title: 'Day 1 — The Brief', caption: 'Stakeholders want a full redesign. Timeline: 7 days.' },
        { id: 'f2', title: 'Day 3 — Finding the Pattern', caption: 'Buried in legacy screens, a repeating workflow emerges.' },
        { id: 'f3', title: 'Day 7 — Shipped', caption: 'New interface live. Zero scope cut.' },
      ],
    },
    approach: {
      title: 'Constraint as a Creative Tool',
      description:
        'With one week, there was no room for exploration theatrics. I started by mapping the 3 highest-frequency user tasks and designed exclusively for those. Everything else was deferred.',
      keyTakeaways: ['Task-frequency mapping on day 1', 'Component-first over page-first', 'Daily stakeholder sync to prevent late pivots'],
    },
    discovery: {
      title: 'Legacy System Audit',
      description:
        'The existing TCS UI had grown organically over 8 years — 40+ screens with overlapping functions. I shadow-walked two port operators for half a day each to identify the critical path.',
      keyTakeaways: [
        'Container status lookup done 60+ times/day per user',
        '3 different paths to the same booking form',
        'Print workflows were completely broken on modern browsers',
      ],
    },
    whatIDid: {
      title: 'Rapid Design & Implementation',
      description:
        'Designed in Figma with auto-layout from the start so handoff was instant. Worked directly with the dev team in the same Figma file, annotating states and edge cases inline.',
      keyTakeaways: [
        'Figma → dev in the same file, zero handoff doc',
        'Built a 12-component mini design system in 2 days',
        'Delivered 18 screens across 3 user roles',
      ],
    },
    whereItStands: {
      title: 'Live in Production',
      description:
        'The redesigned TCS interface went live on day 7 and is now used daily by port operators across 2 terminals. First-time task completion improved by 38% in usability testing run post-launch.',
      keyTakeaways: [
        '38% improvement in first-time task completion',
        'Used across 2 active port terminals',
        'Zero post-launch design-related bugs reported',
      ],
    },
    images: [],
    tags: ['Logistics', 'Port', 'Rapid Design', 'Figma'],
    featured: true,
  },
  {
    id: 'wms',
    slug: 'wms',
    title: 'Designed for Hands in Gloves, Not on a Trackpad',
    subtitle: 'A warehouse management system built for the physical realities of factory floors',
    comicImages: [
      '/illustrations/comic-wms-1.png',
      '/illustrations/comic-wms-2.png',
      '/illustrations/comic-wms-3.png',
    ],
    vertical: 'Manufacturing',
    duration: '6 weeks',
    scope:
      'WMS is a warehouse management app used across manufacturing floors — forklift operators, quality inspectors, liner, and gate roles all work through it, pulling jobs and data from N4 to keep the unit\'s workflow moving and documented.',
    comic: {
      title: 'Gloves, Screens & Forklifts',
      description: 'Designing touch targets when your users are wearing gloves.',
      frames: [
        { id: 'f1', title: 'The Insight', caption: 'Operators wore gloves. The old UI had 8px tap targets.' },
        { id: 'f2', title: 'Field Research', caption: 'Two days on the warehouse floor changed every assumption.' },
        { id: 'f3', title: 'The Fix', caption: 'Touch-first UI built for gloved hands and bright sunlight.' },
      ],
    },
    approach: {
      title: 'Hardware-First Design Thinking',
      description:
        'Before wireframing anything, I spent two days on the warehouse floor. Operators wore gloves. Devices were ruggedized Android tablets with cracked screens. Sunlight washed out displays. Every design decision had to survive those conditions.',
      keyTakeaways: ['Min 64px touch targets throughout', 'High contrast mode default', 'Offline-first task queue for dead zones'],
    },
    discovery: {
      title: 'Floor-Level Research',
      description:
        'Contextual inquiry on the warehouse floor revealed that operators were using workarounds — paper checklists alongside the digital system — because the app couldn\'t handle their real workflow sequencing.',
      keyTakeaways: [
        'Paper-digital hybrid was the actual workflow',
        'N4 integration was the single biggest friction point',
        'Role switching mid-shift was common and unaccounted for',
      ],
    },
    whatIDid: {
      title: 'Role-Based Interface System',
      description:
        'Designed separate task views for each of the 4 roles while keeping a shared component system. Built a role-switcher flow and prioritized the job card as the primary unit of interaction.',
      keyTakeaways: [
        '4 distinct role views, 1 shared component set',
        'Job card redesigned as scannable at 2m distance',
        'Integrated N4 status sync with visible data-freshness indicator',
      ],
    },
    whereItStands: {
      title: 'Deployed Across the Floor',
      description:
        'The WMS redesign is now active across the full manufacturing floor. The paper-backup workflow was retired within 2 weeks of launch. Supervisor-reported error rate dropped significantly.',
      keyTakeaways: [
        'Paper backup workflow retired in 2 weeks',
        'Active across full manufacturing floor',
        'Error rate dropped — exact figure under NDA',
      ],
    },
    images: [],
    tags: ['Manufacturing', 'WMS', 'Touch-First', 'Field Research'],
    featured: true,
  },
  {
    id: 'accounts-guru',
    slug: 'accounts-guru',
    title: 'Went in to redesign and back with a logic bug',
    subtitle: 'Uncovering a critical calculation error while redesigning an accounting platform',
    comicImages: [
      '/illustrations/comic-ag-1.png',
      '/illustrations/comic-ag-2.png',
      '/illustrations/comic-ag-3.png',
    ],
    vertical: 'Accounting, SaaS',
    duration: '8 weeks',
    scope:
      'Accounts Guru is an accounting SaaS used by SMEs to manage invoices, GST filings, and financial reporting. Hired to redesign the invoice creation flow — ended up finding a logic bug that was miscalculating GST for thousands of invoices.',
    comic: {
      title: 'The Bug in the Design',
      description: 'A redesign that turned into an audit.',
      frames: [
        { id: 'f1', title: 'The Assignment', caption: 'Redesign the invoice creation flow. Straightforward.' },
        { id: 'f2', title: 'The Anomaly', caption: 'Edge case in GST rounding — numbers don\'t add up.' },
        { id: 'f3', title: 'The Fix', caption: 'Logic bug reported, patched, and redesign shipped.' },
      ],
    },
    approach: {
      title: 'Design Audit as Product Audit',
      description:
        'Before designing anything new, I mapped the existing invoice flow step by step. During that mapping, an inconsistency in how GST was being rounded surfaced — something that slipped past QA.',
      keyTakeaways: ['Full flow mapping before first wireframe', 'Edge-case documentation as part of discovery', 'Cross-functional loop with engineering on logic issues'],
    },
    discovery: {
      title: 'The GST Rounding Bug',
      description:
        'When GST was applied to line items with certain decimal values, the sum displayed in the UI was correct but the amount stored was off by 0.01–0.50 per invoice. For high-volume users, this accumulated into significant discrepancies.',
      keyTakeaways: [
        'Bug affected ~12% of invoices above ₹1L value',
        'Root cause: float precision in the calculation layer',
        'Neither UX nor QA team had a test case covering this edge',
      ],
    },
    whatIDid: {
      title: 'Dual Track — Fix & Redesign',
      description:
        'Ran two parallel workstreams: worked with the backend team to validate the bug and define the fix, while continuing the UI redesign. Designed a new invoice builder with inline calculation transparency so users could always verify totals.',
      keyTakeaways: [
        'Inline calculation breakdown added to invoice builder',
        'Redesigned GST tier selector with real-time preview',
        'Added pre-submission invoice summary with line-by-line totals',
      ],
    },
    whereItStands: {
      title: 'Bug Fixed, UX Shipped',
      description:
        'The logic bug was patched in the same release as the redesign. The new invoice builder reduced invoice creation time by 40% in follow-up testing. The team now runs edge-case audits as part of their design review process.',
      keyTakeaways: [
        '40% faster invoice creation in follow-up testing',
        'Logic bug patched and verified across all invoice types',
        'Edge-case audit now part of the team\'s design review process',
      ],
    },
    images: [],
    tags: ['Accounting', 'SaaS', 'GST', 'Bug Discovery'],
    featured: false,
  },
  {
    id: 'port-emulator',
    slug: 'port-emulator',
    title: '150 KPIs, and Making Sense of What Users Actually Need',
    subtitle: 'Distilling a 150-KPI port operations dashboard into something humans can use',
    comicImages: [
      '/illustrations/comic-pe-1.png',
      '/illustrations/comic-pe-2.png',
      '/illustrations/comic-pe-3.png',
    ],
    vertical: 'Port Operations, Analytics',
    duration: '10 weeks',
    scope:
      'The Port Emulator is a simulation and monitoring tool used by port planners to model container terminal operations. It tracked 150+ KPIs. No one was reading 120 of them.',
    comic: {
      title: '150 Numbers, 3 That Matter',
      description: 'How to design clarity out of data chaos.',
      frames: [
        { id: 'f1', title: 'The Data Dump', caption: '150 KPIs on a single screen. Users ignored most of them.' },
        { id: 'f2', title: 'The Signal', caption: 'Observation sessions revealed 3 metrics drove 90% of decisions.' },
        { id: 'f3', title: 'The Dashboard', caption: 'Built around those 3. The rest available on demand.' },
      ],
    },
    approach: {
      title: 'Metric Prioritisation Before Design',
      description:
        'Ran structured observation sessions with 6 port planners to understand which KPIs actually influenced decisions vs which were reported for compliance. The gap was striking.',
      keyTakeaways: ['Decision-metric mapping exercise with planners', 'Separated operational KPIs from compliance KPIs', 'Progressive disclosure for rarely-used data'],
    },
    discovery: {
      title: 'The 3-KPI Insight',
      description:
        'Across 6 observation sessions, 3 KPIs — berth utilisation, crane productivity, and yard density — accounted for over 90% of mid-session decisions. The remaining 147 were referenced for weekly reporting only.',
      keyTakeaways: [
        '3 KPIs drove 90% of real-time decisions',
        '147 KPIs were weekly-report-only metrics',
        'Alert thresholds were set incorrectly on 40% of tracked metrics',
      ],
    },
    whatIDid: {
      title: 'Layered Dashboard Architecture',
      description:
        'Redesigned the dashboard around a 3-tier architecture: a command view (3 primary KPIs always visible), an operational view (12 supporting metrics), and a reporting layer (all 150 KPIs available on export). Each layer had a distinct visual weight.',
      keyTakeaways: [
        '3-tier command / operational / reporting architecture',
        'Visual hierarchy by decision-relevance, not alphabetical order',
        'Custom alert threshold editor built into the planning workflow',
      ],
    },
    whereItStands: {
      title: 'Adopted in Live Terminals',
      description:
        'The redesigned Port Emulator dashboard is now in use at 3 terminals. Planners report spending significantly less time orienting before making operational calls. The compliance layer remains fully intact for auditors.',
      keyTakeaways: [
        'Deployed in 3 active port terminals',
        'Planner on-screen orientation time reduced',
        'Compliance layer fully preserved — zero data removed',
      ],
    },
    images: [],
    tags: ['Port', 'Analytics', 'Dashboard', 'Data Visualisation'],
    featured: false,
  },
  {
    id: 'r1',
    slug: 'r1',
    title: 'This workaround revealed how users actually think',
    subtitle: 'A retailer workaround that became the product roadmap',
    comicImages: [
      '/illustrations/comic-r1-1.png',
      '/illustrations/comic-r1-2.png',
      '/illustrations/comic-r1-3.png',
    ],
    vertical: 'Retail, Inventory',
    duration: '5 weeks',
    scope:
      'R1 is an inventory and retail operations platform. During an audit, store managers were found copying data out of the app into WhatsApp groups to coordinate stock. That workaround became the key design insight.',
    comic: {
      title: 'The WhatsApp Workaround',
      description: 'When users build their own system, listen carefully.',
      frames: [
        { id: 'f1', title: 'The Observation', caption: 'Store managers were coordinating stock via WhatsApp, not R1.' },
        { id: 'f2', title: 'The Why', caption: 'R1 had no cross-store visibility. WhatsApp did the job.' },
        { id: 'f3', title: 'The Fix', caption: 'Cross-store stock view built directly into R1.' },
      ],
    },
    approach: {
      title: 'Workaround as Design Signal',
      description:
        'When users build their own system outside the product, that\'s not a behaviour problem — it\'s a product gap. I documented the WhatsApp workflow in detail and reverse-engineered what R1 needed to do to replace it.',
      keyTakeaways: ['Workaround documentation as discovery output', 'Feature gap mapped from observed user behaviour', 'Cross-store visibility as primary design goal'],
    },
    discovery: {
      title: 'The WhatsApp Workflow',
      description:
        'Store managers were screenshotting the inventory screen, posting it in a WhatsApp group with other managers, and manually coordinating stock transfers via chat. This happened multiple times per day.',
      keyTakeaways: [
        '4–6 manual coordination events per store per day',
        'Stock transfer decisions made entirely outside R1',
        'The app had no awareness that cross-store coordination was happening',
      ],
    },
    whatIDid: {
      title: 'Cross-Store Visibility Feature',
      description:
        'Designed a cross-store stock view that aggregated inventory across all stores in a cluster, allowed managers to request transfers in-app, and notified the relevant store manager with a single tap.',
      keyTakeaways: [
        'Cross-store stock aggregation view',
        'In-app stock transfer request with 1-tap approval',
        'Push notification loop to eliminate WhatsApp dependency',
      ],
    },
    whereItStands: {
      title: 'WhatsApp Group Retired',
      description:
        'Within 3 weeks of launch, the store manager WhatsApp coordination group went quiet. All cross-store coordination moved into R1. Transfer approval time dropped from hours to minutes.',
      keyTakeaways: [
        'WhatsApp coordination group retired within 3 weeks',
        'Transfer approval time: hours → minutes',
        'Feature now used by 100% of store manager cohort',
      ],
    },
    images: [],
    tags: ['Retail', 'Inventory', 'Cross-Store', 'Behavioural Research'],
    featured: false,
  },
  {
    id: 'tide',
    slug: 'tide',
    title: "A Case Study I'd Approach Differently Today",
    subtitle: 'Reflecting on a fintech onboarding project that taught me more after shipping than before',
    comicImages: [
      '/illustrations/comic-tide-1.png',
      '/illustrations/comic-tide-2.png',
      '/illustrations/comic-tide-3.png',
    ],
    vertical: 'Fintech, Onboarding',
    duration: '12 weeks',
    scope:
      'Tide is a business banking platform. The project was to redesign the SME onboarding flow — a complex KYC and account setup journey. The design shipped. Looking back, I would have done 3 things fundamentally differently.',
    comic: {
      title: 'Ship, Reflect, Grow',
      description: 'The project I\'m most critical of — and why that\'s the point.',
      frames: [
        { id: 'f1', title: 'The Brief', caption: 'Redesign SME onboarding. It felt like a clear problem statement.' },
        { id: 'f2', title: 'Post-Launch', caption: 'Numbers were fine. But something felt incomplete.' },
        { id: 'f3', title: 'The Lesson', caption: 'Completion rate isn\'t the same as confidence rate.' },
      ],
    },
    approach: {
      title: 'What I Did — And What I Missed',
      description:
        'I optimised the Tide onboarding for completion rate. Steps reduced, friction removed, drop-offs addressed. The numbers improved. What I missed was that completion didn\'t mean comprehension — users were completing without feeling confident in what they\'d signed up for.',
      keyTakeaways: ['Completion rate ≠ confidence rate', 'Should have measured post-onboarding return visits', 'Needed a "what happens next" moment in the flow'],
    },
    discovery: {
      title: 'The Research I Should Have Done',
      description:
        'I did standard drop-off analysis and A/B testing on CTA copy. What I didn\'t do was follow users past the onboarding into their first 7 days of usage — which would have revealed the confidence gap immediately.',
      keyTakeaways: [
        'Drop-off analysis only shows where people leave, not why',
        'Longitudinal post-onboarding tracking was missing',
        'The "day 3 return" metric would have changed everything',
      ],
    },
    whatIDid: {
      title: 'Onboarding Redesign',
      description:
        'Reduced the KYC flow from 14 steps to 9, rewrote all microcopy for plain English, and added a progress arc with time estimates. Drop-off rate on the KYC step fell by 22%.',
      keyTakeaways: [
        '14-step KYC flow reduced to 9 steps',
        '22% drop-off reduction on the KYC step',
        'Plain English microcopy replacing legal-speak',
      ],
    },
    whereItStands: {
      title: 'Shipped — And Still Learning From It',
      description:
        'The redesign is live. The completion metric improved. But the real value of this project was what I learned in the retrospective — that product design success requires longer measurement windows than most sprint cycles allow.',
      keyTakeaways: [
        'Live in production with improved completion metrics',
        'Retrospective surfaced 3 methodological gaps',
        'Now build post-launch measurement into every brief',
      ],
    },
    images: [],
    tags: ['Fintech', 'Onboarding', 'KYC', 'Retrospective'],
    featured: false,
  },
];
