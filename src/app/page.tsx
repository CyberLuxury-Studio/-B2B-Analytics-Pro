"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, BarChart3, Database, Globe, Layers, Lock, PieChart, Server, Shield, Sparkles, Terminal, Zap } from "lucide-react";
import Spline from '@splinetool/react-spline';
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <>
      <main className="w-full bg-surface text-on-surface overflow-x-hidden selection:bg-primary/30 selection:text-white">
        {/* Navigation */}
        <nav className="fixed w-full z-50 px-6 py-4 glass-panel border-b border-white/5 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <Zap className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white headline-font drop-shadow-sm">B2B Analytics Pro</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-on-surface-variant">
              <a className="hover:text-white transition-colors duration-300" href="#">Platform</a>
              <a className="hover:text-white transition-colors duration-300" href="#">Solutions</a>
              <a className="hover:text-white transition-colors duration-300" href="#">Developers</a>
              <a className="hover:text-white transition-colors duration-300" href="#">Pricing</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden md:block text-sm font-medium text-white hover:text-primary transition-colors">Sign In</button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-primary to-tertiary text-white rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10 uppercase tracking-wider">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-grid-pattern [background-size:60px_60px] opacity-10 pointer-events-none z-0"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none z-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/15 rounded-full blur-[150px] animate-pulse pointer-events-none z-0" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Copy */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-8 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">v2.0 Beta Live</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black headline-font leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 drop-shadow-sm">
                  Supercharge Your<br/>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-tertiary drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] animate-gradient-x">Data Arsenal.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed mb-10 max-w-xl">
                  Level up your analytics game with military-grade intelligence. Crush your KPIs, outmaneuver the competition, and dominate your market.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-blue-400/30 flex items-center justify-center gap-2 group">
                    Start Free Trial 
                    <Activity className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>
                  <button className="px-8 py-4 glass-card text-white rounded-xl font-bold text-lg hover:bg-white/10 active:scale-[0.98] transition-all duration-300 border border-white/20 flex items-center justify-center gap-2 group">
                    <Terminal className="w-5 h-5 group-hover:text-primary transition-colors" />
                    View API Docs
                  </button>
                </div>
                
                <div className="mt-12 flex items-center gap-4 text-sm font-mono text-on-surface-variant/60">
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" /> End-to-End Encryption
                  </span>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20"></span>
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" /> Millisecond Latency
                  </span>
                </div>
              </motion.div>

              {/* Right Column: Interactive 3D/Visuals */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden glass-card border border-white/10 group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-50 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Fallback visual if Spline fails to load or for performance */}
                <div className="absolute inset-0 flex items-center justify-center bg-surface-container/50">
                    <div className="relative w-64 h-64">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 rounded-full border border-primary/30 border-t-primary/80 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                        ></motion.div>
                         <motion.div 
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-4 rounded-full border border-secondary/30 border-b-secondary/80 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                        ></motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Database className="w-16 h-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        </div>
                    </div>
                </div>

                {/* Spline 3D Scene - Add your Spline URL here */}
                {/* <Spline scene="https://prod.spline.design/your-scene-url/scene.splinecode" className="relative z-20 w-full h-full" /> */}
                
                <div className="absolute bottom-6 left-6 right-6 z-30 glass-panel p-4 rounded-xl border border-white/10 flex items-center justify-between backdrop-blur-md">
                    <div className="flex flex-col">
                        <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">System Status</span>
                        <span className="text-sm font-mono text-emerald-400 font-bold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            All Systems Nominal
                        </span>
                    </div>
                    <div className="text-right flex flex-col">
                         <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Live Traffic</span>
                         <span className="text-sm font-mono text-white">42,069 req/s</span>
                    </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Infinite Marquee - Integrations */}
        <section className="py-10 border-y border-white/5 bg-surface-container/30 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10"></div>
            
            <div className="flex w-fit animate-marquee">
                {/* Double the content for seamless looping */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-16 px-8">
                        {['GitHub', 'Discord', 'Slack', 'Vercel', 'AWS', 'Google Cloud', 'Figma', 'Stripe', 'Twilio'].map((tech, j) => (
                            <div key={j} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer">
                                <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center font-bold text-xs">Logo</div>
                                <span className="font-bold text-lg text-white font-mono">{tech}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-32 px-6 relative" ref={targetRef}>
             <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Core Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-black headline-font text-white">Dominate the Data Landscape</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Feature 1 - Large */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 glass-card rounded-3xl p-8 border border-white/10 hover:border-primary/50 group relative overflow-hidden transition-all duration-500"
                    >
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/40 transition-colors duration-500"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6">
                                <BarChart3 className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-3">Real-time Telemetry</h4>
                                <p className="text-on-surface-variant font-light">Monitor every heartbeat of your application in absolute real-time. No delays, no excuses. Just raw, unfiltered data pipelined straight to your dashboard.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2 - Small */}
                    <motion.div 
                         whileHover={{ y: -5 }}
                        className="glass-card rounded-3xl p-8 border border-white/10 hover:border-secondary/50 group relative overflow-hidden transition-all duration-500"
                    >
                         <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent z-0"></div>
                         <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Bulletproof Auth</h4>
                                <p className="text-sm text-on-surface-variant font-light">Enterprise-grade security protocols baked into the core.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 3 - Small */}
                     <motion.div 
                         whileHover={{ y: -5 }}
                        className="glass-card rounded-3xl p-8 border border-white/10 hover:border-tertiary/50 group relative overflow-hidden transition-all duration-500"
                    >
                         <div className="absolute inset-0 bg-gradient-to-tr from-tertiary/5 to-transparent z-0"></div>
                         <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-tertiary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Edge Computing</h4>
                                <p className="text-sm text-on-surface-variant font-light">Deploy logic directly to the edge for zero-latency execution.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 4 - Large */}
                    <motion.div 
                         whileHover={{ y: -5 }}
                        className="md:col-span-2 glass-card rounded-3xl p-8 border border-white/10 hover:border-white/30 group relative overflow-hidden transition-all duration-500"
                    >
                        {/* Abstract pattern background */}
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                <Layers className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-3">AI-Powered Insights</h4>
                                <p className="text-on-surface-variant font-light">Let our neural networks crunch the numbers. Predict trends, identify anomalies, and automate responses before human intervention is even required.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>


        {/* Interactive Sandbox/Demo Section */}
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="glass-panel border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Try the Sandbox</h3>
                            <p className="text-on-surface-variant font-light mb-8">Run a simulated query on our synthetic dataset and experience the speed firsthand.</p>
                            
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-emerald-400">
                                    <span className="text-white/50">{"> "}</span>
                                    SELECT * FROM user_events WHERE latency {"<"} 50ms LIMIT 1000;
                                </div>
                                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold text-sm transition-colors border border-white/10 flex items-center gap-2">
                                    <Terminal className="w-4 h-4" /> Run Query
                                </button>
                            </div>
                        </div>

                        {/* Faux Terminal Output */}
                        <div className="h-[300px] bg-[#0a0a0a] rounded-xl border border-white/10 p-6 font-mono text-xs overflow-hidden relative shadow-2xl">
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-white/30">terminal ~ /b2b-analytics</span>
                            </div>
                            <div className="text-white/70 space-y-2 opacity-50">
                                <p>[SYSTEM] Connecting to sovereign cluster...</p>
                                <p>[SYSTEM] Connection established in 12ms.</p>
                                <p>[QUERY] Awaiting input...</p>
                            </div>
                        </div>
                    </div>
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
             className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-24 relative overflow-hidden border border-white/10 z-10 bg-gradient-to-b from-surface-container/80 to-surface/90 backdrop-blur-3xl shadow-[0_0_50px_rgba(59,130,246,0.15)] group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent z-0 group-hover:opacity-100 opacity-50 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold headline-font mb-8 text-white tracking-tight drop-shadow-lg">Ready to Level Up?</h2>
              <p className="text-xl text-white/70 mb-12 font-light tracking-wide">Join thousands of players already dominating their leaderboards with B2B Analytics Pro.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button className="px-12 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] active:scale-95 hover:scale-105 transition-all duration-300">
                    Get Instant Access
                  </button>
                  <button className="px-12 py-5 bg-transparent border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/5 active:scale-95 hover:scale-105 transition-all duration-300">
                    Join Discord
                  </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] w-full pt-20 pb-10 border-t border-white/5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto mb-20">
          <div className="col-span-1 md:col-span-1 pr-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                 <Zap className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white headline-font">B2B Analytics Pro</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-8 font-light text-sm">
              Engineered for speed. Built for domination. Welcome to the future of analytics.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-[0.2em] text-xs">Platform</h4>
            <ul className="space-y-3 text-on-surface-variant text-sm font-light">
              <li><a className="hover:text-primary transition-colors duration-300" href="#">Dashboard</a></li>
              <li><a className="hover:text-primary transition-colors duration-300" href="#">API Access</a></li>
              <li><a className="hover:text-primary transition-colors duration-300" href="#">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-[0.2em] text-xs">Community</h4>
            <ul className="space-y-3 text-on-surface-variant text-sm font-light">
              <li><a className="hover:text-secondary transition-colors duration-300" href="#">Discord Server</a></li>
              <li><a className="hover:text-secondary transition-colors duration-300" href="#">Twitter/X</a></li>
              <li><a className="hover:text-secondary transition-colors duration-300" href="#">GitHub</a></li>
            </ul>
          </div>
          
           <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-[0.2em] text-xs">Legal</h4>
            <ul className="space-y-3 text-on-surface-variant text-sm font-light">
              <li><a className="hover:text-white transition-colors duration-300" href="#">Terms of Service</a></li>
              <li><a className="hover:text-white transition-colors duration-300" href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-white/5 flex justify-between items-center">
          <p className="text-on-surface-variant/50 text-xs font-mono">© 2024 B2B Analytics Pro. // END OF LINE.</p>
        </div>
      </footer>
      
      {/* Global Marquee CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
      `}} />
    </>
  );
}
