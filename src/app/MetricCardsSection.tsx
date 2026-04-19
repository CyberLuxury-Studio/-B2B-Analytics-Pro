"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Activity, BarChart3 } from "lucide-react";

const metrics = [
  { id: 1, label: "Real-time Node Status", value: "99.999%", target: "99.999", icon: <Activity className="text-primary" /> },
  { id: 2, label: "Active Connections", value: "0", target: "24853", icon: <Users className="text-secondary" /> },
  { id: 3, label: "Data Ingestion (TB/s)", value: "0", target: "1.42", icon: <TrendingUp className="text-tertiary" /> },
  { id: 4, label: "Threats Neutralized", value: "0", target: "10492", icon: <BarChart3 className="text-blue-400" /> }
];

export function MetricCardsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="glass-card p-6 rounded-2xl border-white/5 hover:border-primary/30 transition-colors group relative overflow-hidden bg-surface-container/40 backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              {metric.icon}
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <span className="text-sm text-on-surface-variant font-light mb-4">{metric.label}</span>
              
              <div className="text-4xl font-bold headline-font text-white drop-shadow-sm flex items-baseline gap-1">
                {mounted ? (
                  <CountUpTarget target={metric.target} />
                ) : (
                  <span>{metric.value}</span>
                )}
                {idx === 0 && <span className="text-xl text-primary">%</span>}
                {idx === 2 && <span className="text-sm text-tertiary font-light tracking-widest uppercase ml-2">TB/s</span>}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <div className="h-1 flex-grow bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: idx * 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
                <span className="text-xs text-primary font-mono">+14%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CountUpTarget({ target }: { target: string }) {
  const isFloat = target.includes('.');
  const numTarget = parseFloat(target);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * numTarget);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(numTarget);
      }
    };

    window.requestAnimationFrame(step);
  }, [numTarget]);

  if (target === "99.999") return <span>99.999</span>;

  return (
    <span>
      {isFloat ? count.toFixed(2) : Math.floor(count).toLocaleString()}
    </span>
  );
}
