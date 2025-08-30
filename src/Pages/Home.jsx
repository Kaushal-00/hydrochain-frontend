// src/Pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar"; // make sure this path matches your project

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
      <header className="relative pt-6 pb-24 md:pb-32" aria-label="Hero">
        {/* Gradient overlay + public image (put file in public/assets/hero.jpg) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(6,95,70,0.92), rgba(7,114,88,0.88)), url('/assets/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="pt-20 md:pt-28 pb-12">
            <h1 className="text-3xl md:text-6xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
              Empowering a <span className="text-emerald-300">Sustainable Future</span>
              <br className="hidden md:block" />
              with Blockchain-Powered <span className="text-white">Green Hydrogen Credits</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
              The first blockchain platform for issuing, verifying, and tracking green hydrogen credits — transparent, verifiable, decentralized.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#register"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                Register Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 5l6 7-6 7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a href="#platform" className="text-white/90 underline self-center">
                Login to Platform
              </a>
            </div>

            <div className="mt-8 text-white/70 max-w-3xl mx-auto">
              <p>
                Ensuring transparency, trust, and sustainability in the clean energy economy — every ton of green hydrogen is tracked and verified from production to retirement.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="bg-slate-50 text-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">About Our System</h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">
            Our blockchain-based platform revolutionizes green hydrogen verification by creating an immutable ledger of hydrogen credits — verifiable, tamper-proof, and auditable.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard title="What We Do">
              Issue blockchain-based credits for verified green hydrogen production, creating a transparent and tamper-proof system.
            </InfoCard>

            <InfoCard title="Why It Matters">
              Ensures transparency and trust in the green hydrogen market while preventing fraud and double-spending.
            </InfoCard>

            <InfoCard title="Our Impact">
              Accelerating the transition to clean energy by building trust and accountability across producers, industries, and auditors.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="workflow" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold">How It Works</h3>
            <p className="mt-2 text-slate-500 max-w-2xl mx-auto">
              Our streamlined process ensures every green hydrogen credit is properly verified, issued, and tracked through secure blockchain technology.
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <Step num="1" title="Plants Request Credits" text="Hydrogen producers submit production data verified through IoT sensors." icon={<IconFactory />} />
            <Step num="2" title="Verification & Issuance" text="Smart contracts validate sensor data and issue blockchain-based credits." icon={<IconCheck />} />
            <Step num="3" title="Industry Purchases" text="Industries buy verified credits through secure transactions on the market." icon={<IconShop />} />
            <Step num="4" title="Audit & Compliance" text="Independent auditors ensure transactions meet regulatory standards." icon={<IconSearch />} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Platform Features</h3>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Built with cutting-edge technology to ensure security, transparency, and reliability in green hydrogen credit management.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Feature title="Blockchain Security">Immutable and transparent records ensure complete trust in every transaction.</Feature>
            <Feature title="IoT-Based Verification">Real-time sensor data validates production authenticity.</Feature>
            <Feature title="Transparent Tracking">Full visibility of credit lifecycle from creation to retirement.</Feature>
            <Feature title="Tamper-Proof Credits">Prevent double-spending and fraud with cryptographic security.</Feature>
            <Feature title="Role-Based Access">Secure platform for producers, industries, and auditors.</Feature>
            <Feature title="Sustainability Focus">Driving the transition to a clean hydrogen economy.</Feature>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to Join the Green Revolution?</h3>
          <p className="mt-2 text-white/90">Start tracking, verifying, and trading green hydrogen credits on the blockchain today.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button className="bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold">Get Started Now</button>
            <a href="#features" className="underline">Learn More</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 12h16" stroke="white" strokeWidth="1.4" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">HydroChain</div>
                <div className="text-xs text-slate-400">Green Hydrogen Credits</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">Leading the future of green hydrogen verification through blockchain technology.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">Platform</h4>
            <ul className="text-sm space-y-1 text-slate-400">
              <li>Features</li>
              <li>Workflow</li>
              <li>Security</li>
              <li>API Docs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">Company</h4>
            <ul className="text-sm space-y-1 text-slate-400">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">Contact Info</h4>
            <p className="text-sm text-slate-400">support@hydrochain.com</p>
            <p className="text-sm text-slate-400 mt-2">+1 (555) 123-4567</p>
            <p className="text-sm text-slate-400 mt-3">LinkedIn: /company/hydrochain</p>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-500">© 2024 HydroChain. All rights reserved.</div>
      </footer>
    </div>
  );
}

/* ---------------- Subcomponents ---------------- */

function InfoCard({ title, children }) {
  return (
    <div className="p-6 rounded-xl shadow card text-left">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  );
}

function Step({ num, title, text, icon }) {
  return (
    <div className="flex-1">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">{num}</div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            {icon}
            <h5 className="font-semibold">{title}</h5>
          </div>
          <p className="text-sm text-slate-500 mt-1">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, children }) {
  return (
    <div className="p-6 rounded-xl shadow card text-left">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-emerald-500/10 flex items-center justify-center text-emerald-500">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </div>
        <h5 className="font-medium">{title}</h5>
      </div>
      <p className="mt-3 text-sm text-slate-500">{children}</p>
    </div>
  );
}

/* ---------- Simple inline icons used in timeline ---------- */
function IconFactory() {
  return (
    <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <path d="M3 13h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 13V7h4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconShop() {
  return (
    <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h18v11H3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3l-1 4H9L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconSearch() {
  return (
    <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}
