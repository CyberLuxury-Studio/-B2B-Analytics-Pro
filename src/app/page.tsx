"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import { Zap, Sparkles, Terminal, Activity, Database, Shield, Globe, Gamepad2, ChevronRight, Trophy } from "lucide-react";

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
  const [demoLevel, setDemoLevel] = useState(1);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

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
            ? "bg-[#030305]/70 backdrop-blur-xl border-white/5 py-4 shadow-lg shadow-primary/10"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-8 w-full max-w-7xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-white/20">
              <Gamepad2 className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white headline-font drop-shadow-md">
              DATA<span className="text-primary">NEXUS</span>
            </span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
            {["Quests", "Arsenal", "Guilds", "Leaderboard"].map((item, i) => (
              <a
                key={i}
                className="text-on-surface-variant font-bold headline-font hover:text-white transition-all duration-200 uppercase text-sm tracking-wider"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }} 
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-secondary text-white border-2 border-white/20 px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm transition-all"
          >
            Play Now
          </motion.button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-32 pb-32">
          <div className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-30 z-[-1]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] z-[-1] opacity-50"></div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-tr from-primary to-cyan-400 rounded-2xl opacity-60 blur-md z-0"
          />
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-bl from-secondary to-fuchsia-500 rounded-full opacity-40 blur-lg z-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="max-w-5xl w-full text-center z-10 mt-10"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card border-2 border-primary/50 text-primary text-sm font-black mb-8 headline-font tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span>Season 2 Now Live</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black headline-font text-white tracking-tighter leading-[1.0] mb-8 uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Master Your <br />
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-secondary text-transparent bg-clip-text pb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                Data Realm
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              Level up your analytics game. Crush the competition with predictive AI and real-time insights straight from the edge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.8)" }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-cyan-500 text-white font-black rounded-2xl text-lg uppercase tracking-widest border-2 border-white/20"
              >
                Start Playing Free
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 glass-card text-white font-bold rounded-2xl border-2 border-white/20 text-lg uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 text-yellow-400" /> Watch Trailer
              </motion.button>
            </div>
          </motion.div>

          {/* 3D Spline Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.3 }}
            className="mt-20 w-full max-w-6xl h-[400px] md:h-[600px] rounded-3xl glass-card overflow-hidden neon-border-blue relative group p-2 z-10 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 pointer-events-none rounded-3xl"></div>
             <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </motion.div>
        </section>

        {/* Integration Marquee (New Gamified Section) */}
        <section className="py-10 border-y border-white/10 bg-black/50 overflow-hidden relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-surface to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-surface to-transparent z-10"></div>
          <div className="flex w-[200%]">
             <motion.div 
               animate={{ x: ["0%", "-50%"] }}
               transition={{ ease: "linear", duration: 15, repeat: Infinity }}
               className="flex gap-16 items-center whitespace-nowrap min-w-full justify-around"
             >
                  <span className="text-2xl font-black text-white/20 uppercase tracking-widest flex items-center gap-2"><Zap/> DISCORD</span>
                  <span className="text-2xl font-black text-white/20 uppercase tracking-widest flex items-center gap-2"><Globe/> GITHUB</span>
                  <span className="text-2xl font-black text-white/20 uppercase tracking-widest flex items-center gap-2"><Terminal/> VERCEL</span>
                  <span className="text-2xl font-black text-white/20 uppercase tracking-widest flex items-center gap-2"><Database/> SUPABASE</span>
                  <span className="text-2xl font-black text-white/20 uppercase tracking-widest flex items-center gap-2"><Gamepad2/> UNREAL ENGINE</span>
                  
                  <span className="text-2xl font-black text-white/20 uppercase tracking-widest flex items-center gap-2"><Zap/> DISCORD</span>
                  <span className="text-2xl font-black text-white/20 uppercase tracking-widest flex items-center gap-2"><Globe/> GITHUB</span>
                  <span className="text-2xl font-black text-white/20 uppercase tracking-widest flex items-center gap-2"><Terminal/> VERCEL</span>
                  <span className="text-2xl font-black text-white/20 uppercase tracking-widest flex items-center gap-2"><Database/> SUPABASE</span>
                  <span className="text-2xl font-black text-white/20 uppercase tracking-widest flex items-center gap-2"><Gamepad2/> UNREAL ENGINE</span>
             </motion.div>
          </div>
        </section>

        {/* Interactive Sandbox (New Section) */}
        <section className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black headline-font mb-6 text-white uppercase tracking-tight">
                Level Up Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-pink-500">Stats</span>
              </h2>
              <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium">Click to upgrade your data processing power and watch the metrics explode.</p>
            </div>
            
            <motion.div 
              className="max-w-4xl mx-auto glass-card border-2 border-secondary/40 p-8 rounded-3xl relative overflow-hidden"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-secondary/5 z-0"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex gap-4 mb-10 w-full items-end h-64 border-b-2 border-white/10 pb-4">
                  {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: `${Math.min(100, h + (demoLevel * 10))}%` }}
                      transition={{ type: "spring", stiffness: 50 }}
                      className="flex-1 bg-gradient-to-t from-secondary to-pink-500 rounded-t-lg relative group"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold text-sm bg-black px-2 py-1 rounded">
                        {Math.min(100, h + (demoLevel * 10)) * 1000} XP
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between w-full bg-black/40 p-6 rounded-2xl border border-white/10">
                  <div>
                    <div className="text-sm font-bold text-secondary uppercase tracking-widest mb-1">Current Power Level</div>
                    <div className="text-4xl font-black text-white headline-font drop-shadow-md">LVL {demoLevel}</div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(139,92,246,0.5)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setDemoLevel(l => l < 5 ? l + 1 : 1)}
                    className="bg-secondary text-white px-8 py-4 rounded-xl font-black uppercase text-lg border-2 border-pink-400"
                  >
                    {demoLevel < 5 ? "UPGRADE NOW" : "MAX POWER (RESET)"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
            >
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black headline-font mb-6 tracking-tight text-white leading-tight uppercase drop-shadow-lg">
                  Arsenal of <br />{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-primary drop-shadow-none">
                    Power-ups
                  </span>
                </h2>
                <p className="text-on-surface-variant text-xl font-medium leading-relaxed">
                  Equip these tools to bypass standard limits and achieve maximum score in your market.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
                className="glass-card p-10 rounded-3xl flex flex-col group bg-gradient-to-b from-white/5 to-transparent border-2 border-white/10 hover:border-primary/50 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[50px] group-hover:bg-primary/40 transition-all duration-500 -mr-10 -mt-10"></div>
                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mb-8 border-2 border-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <Zap className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black headline-font mb-4 text-white uppercase tracking-tight">Hyper-Speed</h3>
                <p className="text-on-surface-variant mb-10 leading-relaxed font-medium text-lg">
                  Execute complex queries instantly. Zero lag, maximum velocity.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                   <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-[0.1em] uppercase">
                     Ready <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                   </div>
                   <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-primary group-hover:translate-x-2 transition-all"/>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                 initial={{ opacity: 0, scale: 0.8, y: 50 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 whileHover={{ y: -10 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                 className="glass-card p-10 rounded-3xl flex flex-col group bg-gradient-to-b from-white/5 to-transparent border-2 border-white/10 hover:border-tertiary/50 hover:shadow-[0_20px_40px_rgba(6,182,212,0.2)] transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-tertiary/20 rounded-full blur-[50px] group-hover:bg-tertiary/40 transition-all duration-500 -mr-10 -mt-10"></div>
                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mb-8 border-2 border-tertiary/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Sparkles className="text-tertiary w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black headline-font mb-4 text-white uppercase tracking-tight">AI Oracle</h3>
                <p className="text-on-surface-variant mb-10 leading-relaxed font-medium text-lg">
                  See the future before it happens. Predictive models that feel like cheating.
                </p>
                 <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                   <div className="flex items-center gap-2 text-tertiary font-bold text-sm tracking-[0.1em] uppercase">
                     Active <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                   </div>
                   <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-tertiary group-hover:translate-x-2 transition-all"/>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
                className="glass-card p-10 rounded-3xl flex flex-col group bg-gradient-to-b from-white/5 to-transparent border-2 border-white/10 hover:border-secondary/50 hover:shadow-[0_20px_40px_rgba(139,92,246,0.2)] transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-[50px] group-hover:bg-secondary/40 transition-all duration-500 -mr-10 -mt-10"></div>
                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mb-8 border-2 border-secondary/50 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <Terminal className="text-secondary w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black headline-font mb-4 text-white uppercase tracking-tight">Auto-Loot</h3>
                <p className="text-on-surface-variant mb-10 leading-relaxed font-medium text-lg">
                  Automated reports gather intel and deposit it directly into your dashboard.
                </p>
                 <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                   <div className="flex items-center gap-2 text-secondary font-bold text-sm tracking-[0.1em] uppercase">
                     Farming <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                   </div>
                   <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-secondary group-hover:translate-x-2 transition-all"/>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section (Gamified) */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-surface-container-high/50 border-y-2 border-white/5"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-7xl font-black headline-font mb-6 text-white tracking-tight uppercase">Choose Your <span className="text-primary">Class</span></h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-xl font-medium">Unlock the right tier for your current skill level.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              {/* Level 1 */}
              <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 whileHover={{ scale: 1.05 }}
                 viewport={{ once: true }}
                 className="glass-card p-10 rounded-3xl flex flex-col h-fit border-2 border-white/10 hover:border-white/30 transition-all bg-black/40"
              >
                <div className="bg-white/10 w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">LVL 1</div>
                <h3 className="text-3xl font-black text-white mb-2 uppercase">Novice</h3>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-black headline-font text-white">$20</span>
                  <span className="text-on-surface-variant font-medium">/mo</span>
                </div>
                <ul className="space-y-5 mb-10 text-on-surface-variant text-lg font-medium">
                  <li className="flex items-center gap-4"><Activity className="text-white/50 w-6 h-6" /> Basic Dashboard</li>
                  <li className="flex items-center gap-4"><Database className="text-white/50 w-6 h-6" /> 10GB Storage</li>
                </ul>
                <motion.button whileTap={{ scale: 0.95 }} className="w-full py-5 glass-card text-white rounded-2xl font-black uppercase hover:bg-white/10 transition-all border-2 border-white/20 tracking-widest">Start Game</motion.button>
              </motion.div>

              {/* Level 10 */}
              <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1.1 }}
                 whileHover={{ scale: 1.15 }}
                 viewport={{ once: true }}
                 className="glass-card p-12 rounded-3xl neon-border-blue relative z-20 bg-surface-container/90 backdrop-blur-3xl overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.3)] border-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-80"></div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-8 py-2 bg-gradient-to-r from-primary to-cyan-400 text-white rounded-b-xl text-sm font-black headline-font tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(59,130,246,0.6)] z-20">Most Picked</div>
                <div className="relative z-10 mt-4">
                  <div className="bg-primary/20 text-primary w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/50">LVL 10</div>
                  <h3 className="text-4xl font-black text-white mb-2 uppercase drop-shadow-md">Pro Hacker</h3>
                  <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-7xl font-black headline-font text-white drop-shadow-lg">$50</span>
                    <span className="text-white/70 font-medium">/mo</span>
                  </div>
                  <ul className="space-y-5 mb-10 text-white text-lg font-bold">
                    <li className="flex items-center gap-4"><Activity className="text-cyan-400 w-6 h-6" /> Advanced Metrics</li>
                    <li className="flex items-center gap-4"><Database className="text-cyan-400 w-6 h-6" /> 500GB Storage</li>
                    <li className="flex items-center gap-4"><Sparkles className="text-cyan-400 w-6 h-6" /> AI Predictions</li>
                  </ul>
                  <motion.button whileTap={{ scale: 0.95 }} className="w-full py-5 bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl font-black text-lg uppercase shadow-[0_0_20px_rgba(59,130,246,0.5)] border-2 border-white/30 tracking-widest">Equip Loadout</motion.button>
                </div>
              </motion.div>

              {/* Level 99 */}
              <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 whileHover={{ scale: 1.05 }}
                 viewport={{ once: true }}
                 className="glass-card p-10 rounded-3xl flex flex-col h-fit border-2 border-secondary/30 hover:border-secondary/60 transition-all bg-black/40 shadow-[0_0_30px_rgba(139,92,246,0.1)] z-10"
              >
                <div className="bg-secondary/20 text-secondary w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-secondary/50">LVL 99</div>
                <h3 className="text-3xl font-black text-white mb-2 uppercase">God Mode</h3>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-black headline-font text-white">$199</span>
                  <span className="text-on-surface-variant font-medium">/mo</span>
                </div>
                <ul className="space-y-5 mb-10 text-on-surface-variant text-lg font-medium">
                  <li className="flex items-center gap-4"><Globe className="text-secondary w-6 h-6" /> Infinite Scaling</li>
                  <li className="flex items-center gap-4"><Shield className="text-secondary w-6 h-6" /> Invincible Servers</li>
                </ul>
                <motion.button whileTap={{ scale: 0.95 }} className="w-full py-5 glass-card text-white border-2 border-secondary/50 rounded-2xl font-black uppercase hover:bg-secondary/20 transition-all tracking-widest">Unlock God Mode</motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern [background-size:60px_60px] opacity-20 z-0"></div>
          <motion.div
             initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
             whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
             transition={{ type: "spring", stiffness: 80, damping: 20 }}
             viewport={{ once: true }}
             className="max-w-6xl mx-auto rounded-[3rem] glass-card p-12 md:p-24 relative overflow-hidden neon-border-blue z-10 bg-surface/50 border-4 border-primary/20 shadow-[0_0_100px_rgba(59,130,246,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent z-0"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/40 rounded-full blur-[100px] z-0"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/40 rounded-full blur-[100px] z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-black headline-font mb-8 text-white tracking-tight uppercase drop-shadow-xl">Join the Boss Fight</h2>
              <p className="text-2xl text-white/80 mb-12 font-medium tracking-wide">Stop playing on easy mode. Equip the ultimate analytics toolkit and dominate the market.</p>
              <motion.button 
                whileHover={{ scale: 1.1, boxShadow: "0 0 50px rgba(6,182,212,0.8)" }}
                whileTap={{ scale: 0.9 }}
                className="px-16 py-6 bg-gradient-to-r from-primary via-cyan-400 to-secondary text-white rounded-3xl font-black text-2xl tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(59,130,246,0.5)] border-4 border-white/20"
              >
                ENTER LOBBY
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#010103] w-full pt-20 pb-10 border-t-2 border-white/10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto mb-20">
          <div className="col-span-1 md:col-span-1 pr-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center border border-white/20">
                <Gamepad2 className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white headline-font">DATA<span className="text-primary">NEXUS</span></span>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-8 font-medium text-lg">
              The ultimate weapon for data-driven dominance. GLHF.
            </p>
          </div>

          <div>
            <h4 className="headline-font font-black text-white mb-8 uppercase tracking-[0.2em] text-sm">Game Modes</h4>
            <ul className="space-y-4 text-on-surface-variant text-lg font-bold">
              <li><a className="hover:text-primary transition-colors duration-300" href="#">Campaign</a></li>
              <li><a className="hover:text-primary transition-colors duration-300" href="#">Multiplayer</a></li>
              <li><a className="hover:text-primary transition-colors duration-300" href="#">Ranked</a></li>
            </ul>
          </div>

          <div>
            <h4 className="headline-font font-black text-white mb-8 uppercase tracking-[0.2em] text-sm">Wiki & Docs</h4>
            <ul className="space-y-4 text-on-surface-variant text-lg font-bold">
              <li><a className="hover:text-tertiary transition-colors duration-300" href="#">Strategy Guide</a></li>
              <li><a className="hover:text-tertiary transition-colors duration-300" href="#">API Cheatsheet</a></li>
              <li><a className="hover:text-tertiary transition-colors duration-300" href="#">Patch Notes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="headline-font font-black text-white mb-8 uppercase tracking-[0.2em] text-sm">Guild Info</h4>
            <ul className="space-y-4 text-on-surface-variant text-lg font-bold">
              <li><a className="hover:text-secondary transition-colors duration-300" href="#">About the Devs</a></li>
              <li><a className="hover:text-secondary transition-colors duration-300" href="#">Careers</a></li>
              <li><a className="hover:text-secondary transition-colors duration-300" href="#">Support Ticket</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant/70 text-sm font-bold tracking-widest uppercase">© 2024 DataNexus. All Rights Reserved.</p>
          <div className="flex gap-8 text-sm text-on-surface-variant/70 font-bold tracking-widest uppercase">
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">TOS</a>
            <a className="hover:text-white transition-colors" href="#">Rules</a>
          </div>
        </div>
      </footer>
    </>
  );
}
