"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Zap, Sparkles, Terminal, Activity, Database, Shield, Globe } from "lucide-react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-surface/50 animate-pulse rounded-2xl">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TopAppBar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#030305]/70 backdrop-blur-xl border-white/5 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-8 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <span
                className="material-symbols-outlined text-white text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                insights
              </span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white headline-font">
              B2B Analytics Pro
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Platform", "Solutions", "Resources", "Company"].map((item, i) => (
              <a
                key={i}
                className="text-on-surface-variant font-medium headline-font hover:text-white transition-colors duration-200 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-white/10 hover:bg-white/15 text-white border border-white/10 px-6 py-2.5 rounded-lg font-medium hover:scale-[1.02] active:scale-[0.98] transition-all backdrop-blur-md">
            Get Started
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden pt-32 pb-32">
          <div className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-30 z-[-1]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] z-[-1] opacity-50"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl w-full text-center z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-primary/30 text-primary text-xs font-semibold mb-10 headline-font tracking-widest uppercase shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              Now with Predictive Engine v2.0
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold headline-font text-white tracking-tighter leading-[1.05] mb-8">
              Next-Gen Data <br />
              <span className="bg-gradient-to-r from-primary via-tertiary to-secondary text-gradient pb-2">
                Intelligence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Empower your enterprise with autonomous analytical workflows and sovereign data processing at the edge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white font-semibold rounded-xl transition-all active:scale-[0.98] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-blue-400/20">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto px-8 py-4 glass-card text-white font-semibold rounded-xl border border-white/10 hover:bg-white/5 transition-all active:scale-[0.98]">
                View Demo
              </button>
            </div>
          </motion.div>

          {/* 3D Spline Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-24 w-full max-w-6xl h-[400px] md:h-[500px] rounded-2xl glass-card overflow-hidden neon-border-blue relative group p-1 z-10"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 pointer-events-none"></div>
             <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
            >
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold headline-font mb-6 tracking-tight text-white leading-tight">
                  Unlock Hidden <br />{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-primary">
                    Insights
                  </span>
                </h2>
                <p className="text-on-surface-variant text-lg font-light leading-relaxed">
                  Our platform bypasses traditional limitations to provide a direct conduit between your raw data and strategic sovereignty.
                </p>
              </div>
              <div className="text-tertiary headline-font font-bold text-sm tracking-[0.2em] flex items-center gap-4 uppercase">
                System Capabilities <span className="w-16 h-[1px] bg-gradient-to-r from-tertiary to-transparent"></span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="glass-card p-10 rounded-2xl flex flex-col group hover:bg-white/[0.03] hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-all duration-500 -mr-10 -mt-10"></div>
                <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center mb-8 border border-primary/30 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold headline-font mb-4 text-white">Real-time Processing</h3>
                <p className="text-on-surface-variant mb-10 leading-relaxed font-light text-sm">
                  Execute complex queries across massive datasets with sub-millisecond latency. Engineered for velocity.
                </p>
                <div className="mt-auto flex items-center gap-3 text-primary font-bold text-xs headline-font tracking-[0.15em] uppercase border-t border-white/5 pt-6">
                  Active System <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#3B82F6] animate-pulse"></span>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ delay: 0.2 }}
                 className="glass-card p-10 rounded-2xl flex flex-col group hover:bg-white/[0.03] hover:border-tertiary/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full blur-[40px] group-hover:bg-tertiary/20 transition-all duration-500 -mr-10 -mt-10"></div>
                <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center mb-8 border border-tertiary/30 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Sparkles className="text-tertiary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold headline-font mb-4 text-white">Predictive Analytics</h3>
                <p className="text-on-surface-variant mb-10 leading-relaxed font-light text-sm">
                  Neural networks identify patterns before they manifest, giving you the sovereign advantage in market shifts.
                </p>
                <div className="mt-auto flex items-center gap-3 text-tertiary font-bold text-xs headline-font tracking-[0.15em] uppercase border-t border-white/5 pt-6">
                  AI Core Engaged <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#06B6D4] animate-pulse"></span>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3 }}
                className="glass-card p-10 rounded-2xl flex flex-col group hover:bg-white/[0.03] hover:border-secondary/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] group-hover:bg-secondary/20 transition-all duration-500 -mr-10 -mt-10"></div>
                <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center mb-8 border border-secondary/30 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <Terminal className="text-secondary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold headline-font mb-4 text-white">Automated Reporting</h3>
                <p className="text-on-surface-variant mb-10 leading-relaxed font-light text-sm">
                  Executive briefings generated autonomously and delivered via encrypted channels across your network.
                </p>
                <div className="mt-auto flex items-center gap-3 text-secondary font-bold text-xs headline-font tracking-[0.15em] uppercase border-t border-white/5 pt-6">
                  Auto-Gen Ready <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#8B5CF6] animate-pulse"></span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-surface-container-high/50 border-y border-white/5"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold headline-font mb-6 text-white tracking-tight">Transparent Pricing for Scaling Teams</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-lg font-light">Precision-engineered tiers for every stage of your corporate evolution.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              {/* Starter */}
              <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="glass-card p-10 rounded-2xl flex flex-col h-fit border-white/10 hover:border-white/20 transition-all"
              >
                <span className="text-xs headline-font tracking-[0.2em] text-on-surface-variant uppercase font-semibold mb-6 block">Starter</span>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-bold headline-font text-white">$499</span>
                  <span className="text-on-surface-variant font-light">/mo</span>
                </div>
                <ul className="space-y-5 mb-10 text-on-surface-variant text-sm font-light">
                  <li className="flex items-center gap-4"><Activity className="text-primary/70 w-5 h-5" /> 5 Active Nodes</li>
                  <li className="flex items-center gap-4"><Database className="text-primary/70 w-5 h-5" /> 100GB Ingestion</li>
                  <li className="flex items-center gap-4"><Terminal className="text-primary/70 w-5 h-5" /> Core Dashboard</li>
                </ul>
                <button className="w-full py-4 glass-card text-white rounded-xl font-semibold hover:bg-white/5 transition-all text-sm tracking-wide">Select Tier</button>
              </motion.div>

              {/* Pro */}
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1.05 }}
                 viewport={{ once: true }}
                 className="glass-card p-12 rounded-2xl neon-border-blue relative z-10 scale-105 bg-surface-container/80 backdrop-blur-3xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-primary to-tertiary text-white rounded-full text-xs font-bold headline-font tracking-widest uppercase shadow-[0_0_20px_rgba(59,130,246,0.4)] z-20">Recommended</div>
                <div className="relative z-10">
                  <span className="text-xs headline-font tracking-[0.2em] text-primary uppercase font-bold mb-6 block drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Pro Professional</span>
                  <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-6xl font-bold headline-font text-white drop-shadow-md">$1,299</span>
                    <span className="text-on-surface-variant font-light">/mo</span>
                  </div>
                  <ul className="space-y-5 mb-10 text-white/90 text-sm font-light">
                    <li className="flex items-center gap-4"><Activity className="text-primary w-5 h-5 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" /> 25 Active Nodes</li>
                    <li className="flex items-center gap-4"><Database className="text-primary w-5 h-5 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" /> 2TB Ingestion</li>
                    <li className="flex items-center gap-4"><Sparkles className="text-primary w-5 h-5 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" /> Advanced AI Predictor</li>
                    <li className="flex items-center gap-4"><Shield className="text-primary w-5 h-5 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" /> 24/7 Sovereign Support</li>
                  </ul>
                  <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold neon-glow-primary hover:scale-[1.02] active:scale-[0.98] transition-all border border-blue-400/30 text-sm tracking-wide">Initiate Pro Plan</button>
                </div>
              </motion.div>

              {/* Enterprise */}
              <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="glass-card p-10 rounded-2xl flex flex-col h-fit border-white/10 hover:border-secondary/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.05)] transition-all"
              >
                <span className="text-xs headline-font tracking-[0.2em] text-on-surface-variant uppercase font-semibold mb-6 block">Enterprise</span>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-bold headline-font text-white">Custom</span>
                </div>
                <ul className="space-y-5 mb-10 text-on-surface-variant text-sm font-light">
                  <li className="flex items-center gap-4"><Activity className="text-secondary/70 w-5 h-5" /> Unlimited Nodes</li>
                  <li className="flex items-center gap-4"><Database className="text-secondary/70 w-5 h-5" /> Petabyte Scaling</li>
                  <li className="flex items-center gap-4"><Sparkles className="text-secondary/70 w-5 h-5" /> Custom ML Models</li>
                  <li className="flex items-center gap-4"><Globe className="text-secondary/70 w-5 h-5" /> On-Prem Deployment</li>
                </ul>
                <button className="w-full py-4 glass-card text-white border-secondary/30 rounded-xl font-semibold hover:bg-secondary/10 hover:border-secondary/50 transition-all text-sm tracking-wide shadow-[0_0_15px_rgba(139,92,246,0.1)]">Contact Direct</button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern [background-size:60px_60px] opacity-20 z-0"></div>
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-6xl mx-auto rounded-[2rem] glass-card p-12 md:p-24 relative overflow-hidden neon-border-blue z-10 bg-surface/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent z-0"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] z-0"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold headline-font mb-8 text-white tracking-tight">Ready to transform your data?</h2>
              <p className="text-xl text-white/70 mb-12 headline-font font-light tracking-wide">Join the ranks of sovereign enterprises operating at the speed of thought.</p>
              <button className="px-12 py-5 bg-gradient-to-r from-primary to-tertiary text-white rounded-xl font-bold headline-font text-lg tracking-[0.2em] uppercase neon-glow-primary active:scale-95 hover:scale-105 transition-all border border-white/20">
                Launch System
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface w-full pt-20 pb-10 border-t border-white/5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto mb-20">
          <div className="col-span-1 md:col-span-1 pr-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white headline-font">B2B Analytics Pro</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-8 font-light text-sm">
              Forging the next generation of industrial-grade analytical frameworks for the digital sovereign.
            </p>
          </div>

          <div>
            <h4 className="headline-font font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Platform</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm font-light">
              <li><a className="hover:text-white transition-colors duration-300" href="#">Core Engine</a></li>
              <li><a className="hover:text-white transition-colors duration-300" href="#">Node Architecture</a></li>
              <li><a className="hover:text-white transition-colors duration-300" href="#">Security Layer</a></li>
              <li><a className="hover:text-white transition-colors duration-300" href="#">Global Mesh</a></li>
            </ul>
          </div>

          <div>
            <h4 className="headline-font font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Resources</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm font-light">
              <li><a className="hover:text-white transition-colors duration-300" href="#">System Documentation</a></li>
              <li><a className="hover:text-white transition-colors duration-300" href="#">API Gateway</a></li>
              <li><a className="hover:text-white transition-colors duration-300" href="#">Whitepapers</a></li>
              <li><a className="hover:text-white transition-colors duration-300" href="#">Network Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="headline-font font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Company</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm font-light">
              <li><a className="hover:text-white transition-colors duration-300" href="#">About Intelligence</a></li>
              <li><a className="hover:text-white transition-colors duration-300" href="#">Command Team</a></li>
              <li><a className="hover:text-white transition-colors duration-300" href="#">Operations</a></li>
              <li><a className="hover:text-white transition-colors duration-300" href="#">Contact Protocol</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant/70 text-xs font-light">© 2024 B2B Analytics Pro. Engineered for Sovereignty.</p>
          <div className="flex gap-8 text-xs text-on-surface-variant/70 font-light">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Service Terms</a>
            <a className="hover:text-white transition-colors" href="#">Compliance</a>
          </div>
        </div>
      </footer>
    </>
  );
}
