"use client";

import { motion } from "framer-motion";
import { Activity, Users, Database, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function MetricCardsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client to avoid hydration mismatch, delay setting slightly
    const timer = setTimeout(() => {
        setMounted(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                +12.5%
              </span>
            </div>
            <p className="text-on-surface-variant text-sm font-medium mb-1 headline-font">Queries Processed</p>
            <h4 className="text-3xl font-bold text-white headline-font tracking-tight">
              {mounted ? "245M" : "---"}
            </h4>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                +8.2%
              </span>
            </div>
            <p className="text-on-surface-variant text-sm font-medium mb-1 headline-font">Active Agents</p>
            <h4 className="text-3xl font-bold text-white headline-font tracking-tight">
              {mounted ? "12,450" : "---"}
            </h4>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-2xl border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-tertiary/10 rounded-lg border border-tertiary/20">
                <Database className="w-6 h-6 text-tertiary" />
              </div>
              <span className="text-xs font-semibold text-rose-400 bg-rose-400/10 px-2 py-1 rounded-full border border-rose-400/20">
                -2.4%
              </span>
            </div>
            <p className="text-on-surface-variant text-sm font-medium mb-1 headline-font">Data Ingestion (TB)</p>
            <h4 className="text-3xl font-bold text-white headline-font tracking-tight">
              {mounted ? "84.2" : "---"}
            </h4>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 rounded-2xl border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <Clock className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                Optimal
              </span>
            </div>
            <p className="text-on-surface-variant text-sm font-medium mb-1 headline-font">Avg Latency</p>
            <h4 className="text-3xl font-bold text-white headline-font tracking-tight">
              {mounted ? "12ms" : "---"}
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
