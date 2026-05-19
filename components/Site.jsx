"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Factory,
  Gauge,
  PlugZap,
  ShieldCheck,
  Workflow,
  Database,
  Cannabis,
  Cable,
  Wrench
} from "lucide-react";

const phone = "(779) 210-8350";
const email = "info@medicinalautomationdesign.com";

function Button({ children, href, variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-300";
  const styles =
    variant === "outline"
      ? "border border-white/20 bg-white/5 text-white hover:bg-white/10"
      : "bg-emerald-400 text-zinc-950 hover:bg-emerald-300";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.04] text-white ${className}`}>
      {children}
    </div>
  );
}

const services = [
  {
    icon: Factory,
    title: "Equipment & Line Installation",
    text:
      "Installation support for packaging, filling, labeling, coding, inspection, material handling, and downstream production equipment."
  },
  {
    icon: Workflow,
    title: "Line Layout & Production Flow",
    text:
      "Practical line layouts built around throughput, operator access, utilities, changeovers, sanitation, and future expansion."
  },
  {
    icon: PlugZap,
    title: "Electrical & Controls",
    text:
      "Power distribution coordination, machine controls, sensors, safety circuits, panels, PLC/HMI support, and startup troubleshooting."
  },
  {
    icon: Gauge,
    title: "Pneumatics & Utilities",
    text:
      "Compressed air, vacuum, gas, conveyance, guarding, controls plumbing, and utility coordination for production equipment."
  },
  {
    icon: Database,
    title: "Data, Logging & Traceability",
    text:
      "Production data capture, batch records, logging systems, label verification, quality checkpoints, and ERP/MES integration support."
  },
  {
    icon: Cpu,
    title: "Software Development & Integration",
    text:
      "Custom software, dashboards, database connections, barcode workflows, reporting, label systems, and automation logic."
  }
];

const markets = [
  "THC, CBD, cannabis, and hemp product manufacturers",
  "Edibles, beverages, tinctures, topicals, and packaged goods",
  "Pre-roll, cartridge, pouch, jar, bottle, carton, and label lines",
  "Production facilities needing buildout, machinery moves, or additions",
  "Growing processors that need equipment brought online fast"
];

const projectTypes = [
  "New equipment installation",
  "Production facility buildouts",
  "Machinery moves and additions",
  "Line moves and reconfiguration",
  "Labeling and packaging automation",
  "Controls troubleshooting",
  "ERP and production data integration",
  "Compliance-support logging workflows",
  "Operator workflow improvements",
  "Throughput and bottleneck reduction"
];

const faqs = [
  {
    q: "Do you install cannabis, THC, CBD, and hemp manufacturing equipment?",
    a:
      "Yes. We support equipment installation, line startup, facility buildout, machinery moves, controls, utilities, data systems, labeling, and packaging automation for regulated product manufacturers."
  },
  {
    q: "Do you offer next-day service?",
    a:
      "Next-day and emergency rapid-response equipment support is available when scheduling, travel, facility access, and project requirements allow."
  },
  {
    q: "Do you work outside Illinois?",
    a:
      "Yes. Medicinal Automation & Design is based in Illinois and serves manufacturers worldwide."
  },
  {
    q: "Can you help with ERP integration and production data logging?",
    a:
      "Yes. We help connect production equipment, label workflows, batch records, traceability touchpoints, dashboards, reports, and ERP or MES systems."
  }
];

export default function Site() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="group flex items-center gap-3" aria-label="Medicinal Automation & Design home">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-400/40">
              <Cannabis className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white">Medicinal</div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-400">Automation & Design</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex" aria-label="Main navigation">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#markets" className="hover:text-white">Markets</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <Button href={`tel:${phone.replace(/[^0-9]/g, "")}`} className="hidden sm:inline-flex">
            Call {phone}
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.24),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
                Industrial automation for cannabis, THC, CBD, and hemp manufacturing • Based in Illinois • Serving clients worldwide • Next-day service available • Emergency and rapid-response equipment support available
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Bring your production equipment online with confidence.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
                Medicinal Automation & Design helps cannabis, THC, CBD, and hemp product manufacturers install, connect, troubleshoot, and optimize production equipment—from line layout and utilities to controls, data, labeling, packaging, and ERP integration. Based in Illinois, we support manufacturers worldwide with rapid deployment and next-day service availability.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="#contact">
                  Request installation support <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href={`mailto:${email}`} variant="outline">Email project details</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-emerald-950/40 backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-zinc-900 p-6">
                  <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <div className="text-sm text-zinc-400">Project dashboard</div>
                      <div className="text-xl font-semibold">
                        Line Startup Scope / Production Facility Buildout / Machinery Moves & Additions
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-200">Online plan</div>
                  </div>
                  <div className="space-y-4">
                    {[
                      ["Line layout", "Equipment, operators, utilities, flow"],
                      ["Controls", "PLC, HMI, sensors, safety, panels"],
                      ["Data", "Logging, batch records, traceability"],
                      ["ERP", "Orders, labels, production reporting"]
                    ].map(([title, sub]) => (
                      <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                        <div>
                          <div className="font-medium text-white">{title}</div>
                          <div className="text-sm text-zinc-400">{sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Install", "Mechanical, electrical, pneumatic, controls, and utility work performed by our own authorized, background-checked electricians, plumbers, and pipefitters for regulated environments."],
              ["Integrate", "Labels, data, ERP, software, reporting, and production systems."],
              ["Optimize", "Throughput, reliability, operator workflow, and startup support."]
            ].map(([title, text]) => (
              <Card key={title}>
                <div className="p-6">
                  <div className="text-2xl font-semibold">{title}</div>
                  <p className="mt-3 text-zinc-400">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="services" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">What we do</div>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Field-ready automation support for regulated product manufacturers — Illinois-based, serving clients worldwide with next-day service options.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                From the first layout discussion to the first production run, we help bridge the gap between equipment suppliers, internal teams, electricians, IT, quality, and operations.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="bg-zinc-950/70">
                    <div className="p-6">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-300/25">
                        <Icon className="h-6 w-6 text-emerald-300" />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="mt-3 leading-7 text-zinc-400">{service.text}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="markets" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Who we serve</div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Built for cannabis, THC, CBD, hemp, and packaged medicinal product operations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Whether you are adding a new filler, moving a labeler, scaling packaging capacity, or trying to connect production data into your business systems, we can help make the equipment work as a line—not just as individual machines.
            </p>
          </div>
          <div className="grid gap-3">
            {markets.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <span className="text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-zinc-900/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Typical projects</div>
                <h2 className="text-4xl font-semibold tracking-tight">
                  Call when the machine is arriving, moving, not talking, or not producing.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {projectTypes.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-zinc-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Process</div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              A practical path from equipment problem to production-ready line.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["01", "Assess", "Review equipment, scope, drawings, utilities, controls, facility constraints, and production goals."],
              ["02", "Plan", "Create a startup plan covering layout, trades, data needs, safety, labeling, and handoff requirements."],
              ["03", "Install", "Coordinate and execute physical installation, utilities, controls work, software connections, and commissioning."],
              ["04", "Support", "Help stabilize the line with documentation, troubleshooting, training support, and improvement work."]
            ].map(([num, title, text]) => (
              <Card key={num}>
                <div className="p-6">
                  <div className="text-sm text-emerald-300">{num}</div>
                  <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 leading-7 text-zinc-400">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-[2rem] border border-emerald-300/20 bg-emerald-400/10 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-300/15 ring-1 ring-emerald-300/30">
                <ShieldCheck className="h-8 w-8 text-emerald-200" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Compliance-support systems without overpromising.
                </h2>
                <p className="mt-5 text-lg leading-8 text-zinc-200">
                  We help manufacturers build reliable production records, traceability touchpoints, label workflows, batch data capture, and reporting connections that support internal quality and regulatory documentation. Final compliance requirements should always be reviewed with your internal quality, legal, and regulatory teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">FAQ</div>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Common questions from production teams.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <Card key={faq.q}>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{faq.q}</h3>
                    <p className="mt-3 leading-7 text-zinc-400">{faq.a}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Request support</div>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Need equipment installed, connected, or brought online? Worldwide service, Illinois-based, next-day availability.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Send the equipment type, project location, production goal, timeline, and any drawings, manuals, photos, or line issues you already have. We support projects worldwide, with rapid response and next-day service where feasible.
              </p>
              <p className="mt-6 text-sm leading-6 text-zinc-400">
                Medicinal Automation & Design is a subsidiary of Print Automation & Design.
              </p>
              <div className="mt-8 space-y-3 text-lg">
                <p><span className="text-zinc-400">Phone:</span> <a className="text-emerald-300 hover:text-emerald-200" href={`tel:${phone.replace(/[^0-9]/g, "")}`}>{phone}</a></p>
                <p><span className="text-zinc-400">Email:</span> <a className="text-emerald-300 hover:text-emerald-200" href={`mailto:${email}`}>{email}</a></p>
              </div>
            </div>

            <Card className="bg-zinc-950">
              <div className="p-6 md:p-8">
<div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white">
  <iframe
    src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4mpTjUdE60CPur4hfvlABXxCKywil7pJv2l6-0jjJaBUQ0xZNUk2RUxKSEREMlFRWVA1WlpYUVZQMC4u&embed=true"
    width="100%"
    height="720"
    frameBorder="0"
    marginWidth="0"
    marginHeight="0"
    style={{ border: "none" }}
  >
    Loading…
  </iframe>
</div>
                <p className="mt-4 text-xs leading-6 text-zinc-500">
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Medicinal Automation & Design. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#markets" className="hover:text-white">Markets</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
