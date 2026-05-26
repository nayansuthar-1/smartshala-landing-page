"use client";

import { useEffect } from "react";

const roles = [
  {
    name: "Principal",
    label: "Leadership",
    body: "School-wide dashboard, reports, analytics and exceptions in one calm view.",
    access: ["Dashboard", "Reports", "Analytics"],
  },
  {
    name: "Teachers",
    label: "Academics",
    body: "Classes, attendance and homework screens built for fast daily classroom work.",
    access: ["Classes", "Attendance", "Homework"],
  },
  {
    name: "Accountants",
    label: "Accounts",
    body: "Fee activity and account-ready records without searching across registers.",
    access: ["Fees", "Reports"],
  },
  {
    name: "Parents",
    label: "Updates",
    body: "Receive the right communication without needing access to internal screens.",
    access: ["WhatsApp updates"],
  },
  {
    name: "Students",
    label: "Records",
    body: "Student context stays organized across class, attendance, fees and homework.",
    access: ["Student profile", "Academic context"],
  },
];

const modules = [
  {
    title: "Dashboard",
    body: "A clean opening view for school operations, daily movement, exceptions and quick actions.",
    tag: "Home",
  },
  {
    title: "Student",
    body: "Keep student records, class details and academic context organized for everyday access.",
    tag: "Records",
  },
  {
    title: "Teacher",
    body: "Everything teachers need for daily academic work, grouped into focused screens.",
    tag: "Academics",
    items: ["Teacher", "Classes", "Attendance", "Homework"],
  },
  {
    title: "Communication",
    body: "Send school updates and keep parent communication flowing without manual follow-up.",
    tag: "Updates",
  },
  {
    title: "Reports",
    body: "Turn everyday activity into clear reports for leadership, teachers and accounts.",
    tag: "Insights",
  },
  {
    title: "Fees",
    body: "Manage fee activity, collection visibility and account-ready payment records.",
    tag: "Accounts",
  },
  {
    title: "Analytics",
    body: "See patterns across attendance, fees, classes and communication from one place.",
    tag: "Trends",
  },
  {
    title: "Logs",
    body: "Track important communication and system activity with a clear audit trail.",
    tag: "Audit",
    items: ["Message logs", "Activity Logs"],
  },
];

const day = [
  {
    time: "07:45",
    module: "Dashboard",
    title: "Leadership starts with a live picture",
    body: "The dashboard opens with student activity, fee movement, attendance readiness and the items that need attention today.",
    owner: "Principal view",
    system: "Live overview",
  },
  {
    time: "08:35",
    module: "Teacher",
    title: "Attendance is captured inside class",
    body: "Teachers mark attendance once from the teacher workspace. Class status updates immediately for school leadership.",
    owner: "Teacher app",
    system: "Attendance",
  },
  {
    time: "10:50",
    module: "Classes",
    title: "Classwork and homework stay connected",
    body: "Class updates and homework move from teacher work to student context, keeping academic activity organized by class.",
    owner: "Teacher workspace",
    system: "Homework",
  },
  {
    time: "12:20",
    module: "Fees",
    title: "Fee activity becomes account-ready",
    body: "Fee entries are recorded with clean visibility, so collections and pending amounts are easier to review.",
    owner: "Accounts desk",
    system: "Fees",
  },
  {
    time: "13:40",
    module: "Communication",
    title: "Parents get the right updates",
    body: "Important school messages and parent-facing updates are sent from one controlled communication flow.",
    owner: "School office",
    system: "Message logs",
  },
  {
    time: "15:10",
    module: "Reports",
    title: "The day closes into reports",
    body: "Reports, analytics and activity logs turn the school day into a clear record for review and follow-up.",
    owner: "Admin review",
    system: "Analytics + Logs",
  },
];

const dayMetrics = [
  ["8", "modules in flow"],
  ["1", "daily operating record"],
  ["0", "duplicate registers"],
];

const heroStats = [
  ["8", "Core modules"],
  ["5", "Role workspaces"],
  ["100%", "Cloud hosted"],
];

const faqs = [
  {
    q: "Is SmartShala only for large schools?",
    a: "No. It is designed for growing Indian schools that want one connected operating system instead of separate tools and registers.",
  },
  {
    q: "Can each role see only their own work?",
    a: "Yes. Principals, teachers, accountants, parents and students get role-specific screens and permissions.",
  },
  {
    q: "Does it work on mobile?",
    a: "Yes. The experience is built mobile-first for daily school work, while leadership and accounts get richer desktop dashboards.",
  },
  {
    q: "Can WhatsApp be connected?",
    a: "SmartShala is planned around school communication flows, including fee receipts, attendance alerts and operational reminders.",
  },
];

function Logo() {
  return (
    <span className="logo" aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <rect width="64" height="64" rx="16" />
        <path d="M18 38c4 7 16 9 27 2V24c-11-7-23-5-27 2" />
        <path d="M24 32h22" />
        <circle cx="48" cy="46" r="4" />
      </svg>
    </span>
  );
}

function MetricCard({
  label,
  value,
  detail,
  tone = "blue",
}: {
  label: string;
  value: string;
  detail: string;
  tone?: "blue" | "green" | "amber";
}) {
  return (
    <div className={`metric metric--${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="device-stack" aria-label="SmartShala product preview">
      <div className="laptop">
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <div>smartshala.app/school</div>
        </div>
        <div className="dashboard">
          <aside>
            <div className="dash-brand">
              <Logo />
              <b>SmartShala</b>
            </div>
            {["Today", "Admissions", "Fees", "Attendance", "Staff"].map((item, index) => (
              <span className={index === 0 ? "active" : ""} key={item}>
                {item}
              </span>
            ))}
          </aside>
          <main>
            <div className="dash-top">
              <div>
                <small>SESSION 2026-27</small>
                <h3>Principal dashboard</h3>
              </div>
              <button type="button">Live</button>
            </div>
            <div className="metric-grid">
              <MetricCard label="Collected" value="INR 1.82L" detail="14 receipts today" />
              <MetricCard label="Attendance" value="94%" detail="1,156 of 1,240" tone="green" />
              <MetricCard label="Staff in" value="28/30" detail="3 items flagged" tone="amber" />
            </div>
            <div className="activity-card">
              <div className="activity-head">
                <b>Live school stream</b>
                <span>Auto synced</span>
              </div>
              {[
                ["AS", "Aarav Sharma", "Fee paid - Class 5A", "Sent"],
                ["RP", "Riya Pandey", "Attendance marked - Class 8B", "Done"],
                ["VK", "Voucher V-0301", "Electricity bill approval", "Review"],
              ].map(([initials, name, meta, status]) => (
                <div className="activity-row" key={name}>
                  <div className="avatar">{initials}</div>
                  <div>
                    <b>{name}</b>
                    <small>{meta}</small>
                  </div>
                  <span>{status}</span>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-status">
            <span>8:42</span>
            <span>5A</span>
          </div>
          <h4>Attendance</h4>
          <div className="attendance-summary">
            <b>28 P</b>
            <b>2 A</b>
            <b>1 L</b>
          </div>
          {["Aarav", "Riya", "Vihaan", "Saanvi"].map((name, index) => (
            <div className="student-row" key={name}>
              <span>{name}</span>
              <div>
                <button className={index < 2 ? "selected" : ""}>P</button>
                <button className={index === 2 ? "danger selected" : ""}>A</button>
                <button className={index === 3 ? "late selected" : ""}>L</button>
              </div>
            </div>
          ))}
          <small className="saved">Auto-saved - parent alerts queued</small>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const fill = document.querySelector<HTMLElement>(".scroll-progress__fill");
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
      if (fill) fill.style.width = `${pct}%`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress__fill" />
      </div>

      <header className="site-nav">
        <a className="brand" href="#top" aria-label="SmartShala home">
          <Logo />
          <span>SmartShala<span className="dot">.</span></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#vision">Vision</a>
          <a href="#roles">Roles</a>
          <a href="#day">A day</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-cta" href="#demo">Book demo</a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <span className="eyebrow reveal is-visible">
              <i /> Live school operating system
            </span>
            <h1 className="hero-title reveal is-visible">
              A calmer way to run your entire school.
            </h1>
            <p className="hero-sub reveal is-visible">
              SmartShala connects dashboard insights, students, teachers, fees,
              communication, analytics and reports in one role-aware system.
            </p>
            <div className="hero-actions reveal is-visible">
              <a className="button button--primary" href="#demo">Book a 20-min demo</a>
              <a className="button button--secondary" href="#roles">See every role</a>
            </div>
            <div className="hero-login-card reveal is-visible">
              <div>
                <strong>School operations, ready before assembly.</strong>
                <span>Login for principal and teacher teams. Parents receive WhatsApp updates only.</span>
              </div>
              <a href="#modules">View modules</a>
            </div>
            <div className="hero-points reveal is-visible">
              <span>Works on any phone</span>
              <span>Role-based access</span>
              <span>Built for Indian schools</span>
            </div>
          </div>
          <div className="hero-visual reveal is-visible">
            <div className="hero-product-shell">
              <div className="hero-product-shell__top">
                <span>SmartShala workspace</span>
                <div>
                  <i />
                  <b>Live preview</b>
                </div>
              </div>
              <DashboardMock />
              <div className="hero-stat-row">
                {heroStats.map(([value, label]) => (
                  <div className="hero-stat" key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="proof-band">
          <div className="proof-item reveal">
            <strong>8</strong>
            <span>Core modules</span>
          </div>
          <div className="proof-item reveal">
            <strong>5</strong>
            <span>School roles</span>
          </div>
          <div className="proof-item reveal">
            <strong>100%</strong>
            <span>Cloud hosted</span>
          </div>
          <div className="proof-item reveal">
            <strong>1</strong>
            <span>Connected system</span>
          </div>
        </section>

        <section className="section vision" id="vision">
          <div className="section-copy reveal">
            <span className="section-kicker">The vision</span>
            <h2>Not another school tool. A school ecosystem.</h2>
            <p>
              Every department works in its own rhythm, but school leadership needs
              one live picture. SmartShala captures work where it happens and moves
              the right updates to the right people automatically.
            </p>
          </div>
          <div className="principles">
            {[
              ["01", "Capture at the source", "Teachers, accountants and school leaders record work in the screen built for their job."],
              ["02", "Connect across roles", "One attendance mark can inform a parent, update a dashboard and feed a monthly report."],
              ["03", "Compound quietly", "Daily operations become clean reports without late-night spreadsheet work."],
            ].map(([number, title, body]) => (
              <article className="principle reveal" key={title}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="roles section" id="roles">
          <div className="section-copy reveal">
            <span className="section-kicker">Every role</span>
            <h2>One system, many daily workspaces.</h2>
            <p>
              SmartShala keeps the product simple for each user while keeping
              the data connected for the school.
            </p>
          </div>
          <div className="role-workspace reveal" aria-label="SmartShala roles">
            <div className="role-workspace__header">
              <div>
                <span>Role access</span>
                <strong>Connected, not cluttered.</strong>
              </div>
              <Logo />
            </div>
            <div className="role-card-grid">
              {roles.map((role) => (
                <article className="role-card" key={role.name}>
                  <div className="role-card__top">
                    <span>{role.label}</span>
                    <b>{role.name.slice(0, 2)}</b>
                  </div>
                  <h3>{role.name}</h3>
                  <p>{role.body}</p>
                  <div className="role-card__access">
                    {role.access.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="role-access-panel">
              <div>
                <strong>Permission-aware by design</strong>
                <span>Each role sees the work they own. Leadership still gets the full operating picture.</span>
              </div>
              <a href="#demo">Discuss access</a>
            </div>
          </div>
        </section>

        <section className="modules section" id="modules">
          <div className="section-copy reveal">
            <span className="section-kicker">Modules</span>
            <h2>Built around the screens your team uses daily.</h2>
            <p>
              The landing page now reflects the SmartShala menu: simple top-level
              modules with deeper teacher and log workflows where the work needs it.
            </p>
          </div>
          <div className="module-grid">
            {modules.map((module, index) => (
              <article
                className={`module-card reveal ${module.items ? "module-card--nested" : ""}`}
                key={module.title}
              >
                <div className="module-card__head">
                  <span>{module.tag}</span>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </div>
                <h3>{module.title}</h3>
                <p>{module.body}</p>
                {module.items ? (
                  <ul className="module-sublist" aria-label={`${module.title} screens`}>
                    {module.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="day section" id="day">
          <div className="section-copy reveal">
            <span className="section-kicker">A day at school</span>
            <h2>School operations, ready before assembly.</h2>
            <p>
              SmartShala follows the real school day: dashboard first, class
              work next, fee activity through the office, communication to
              parents, and a clean record by closing time.
            </p>
            <div className="day-metrics">
              {dayMetrics.map(([value, label]) => (
                <div className="day-metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="timeline">
            {day.map((event) => (
              <article className="timeline-row reveal" key={event.time}>
                <time>{event.time}</time>
                <div className="timeline-row__body">
                  <div className="timeline-row__top">
                    <h3>{event.title}</h3>
                    <span>{event.module}</span>
                  </div>
                  <p>{event.body}</p>
                  <div className="timeline-row__meta">
                    <span>{event.owner}</span>
                    <span>{event.system}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="india section">
          <div className="india-panel reveal">
            <span className="section-kicker">Built for Indian schools</span>
            <h2>Fast enough for the office desk. Simple enough for the phone.</h2>
            <p>
              SmartShala respects how schools actually run: mixed devices,
              WhatsApp-first communication, fee counters, parent urgency and
              leadership that needs clarity by the end of day.
            </p>
          </div>
          <div className="signal-grid">
            <div className="signal reveal">
              <b>Hindi-ready workflows</b>
              <span>Local naming, class sections and practical school language.</span>
            </div>
            <div className="signal reveal">
              <b>Permission control</b>
              <span>Role-wise access keeps sensitive data in the right hands.</span>
            </div>
            <div className="signal reveal">
              <b>Cloud backups</b>
              <span>Your school data stays available beyond office machines.</span>
            </div>
          </div>
        </section>

        <section className="demo section" id="demo">
          <div className="demo-copy reveal">
            <span className="section-kicker">Book a demo</span>
            <h2>See SmartShala through your school day.</h2>
            <p>
              Share a few details and we will walk through admissions, fees,
              attendance and reporting with a school operations lens.
            </p>
          </div>
          <form className="demo-form reveal">
            <label>
              School name
              <input type="text" name="school" placeholder="Central Public School" />
            </label>
            <label>
              Your phone
              <input type="tel" name="phone" placeholder="98765 43210" maxLength={10} />
            </label>
            <label>
              What should we focus on?
              <select name="focus" defaultValue="operations">
                <option value="operations">Daily operations</option>
                <option value="fees">Fees and accounts</option>
                <option value="attendance">Attendance and parents</option>
                <option value="all">Full school OS</option>
              </select>
            </label>
            <button className="button button--primary" type="button">Request demo</button>
          </form>
        </section>

        <section className="faq section" id="faq">
          <div className="faq-aside reveal">
            <span className="section-kicker">FAQ</span>
            <h2>Questions principals usually ask first.</h2>
            <p>
              Clear answers before a walkthrough. SmartShala is built for
              daily school operations, role-wise access and parent-ready
              communication.
            </p>
            <div className="faq-support">
              <span>Need a deeper answer?</span>
              <a href="#demo">Book a walkthrough</a>
            </div>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <details className="faq-item reveal" key={faq.q} open={index === 0}>
                <summary>{faq.q}</summary>
                <div className="faq-item__body">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="brand" href="#top">
            <Logo />
            <span>SmartShala<span className="dot">.</span></span>
          </a>
          <p>A school operating system for every everyday operation.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#vision">Vision</a>
          <a href="#roles">Roles</a>
          <a href="#modules">Modules</a>
          <a href="#demo">Demo</a>
        </nav>
      </footer>
    </>
  );
}
