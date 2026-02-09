'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Users, Calendar, Compass, Star } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function CounterStats() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const stats: StatItem[] = [
    { icon: Users, value: 962, suffix: '+', label: t.stats.travelers },
    { icon: Calendar, value: 3, suffix: '', label: t.stats.editions },
    { icon: Compass, value: 15, suffix: '+', label: t.stats.circuits },
    { icon: Star, value: 4.9, suffix: '/5', label: t.stats.satisfaction },
  ];

  return (
    <section ref={ref} className="relative py-12 lg:py-16 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary-400/10 rounded-full blur-2xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <stat.icon className="h-7 w-7 text-primary-200" />
              </div>
              <div className="text-3xl lg:text-4xl font-heading font-bold text-white mb-1">
                {stat.suffix === '/5' ? (
                  <AnimatedCounter value={49} suffix="" inView={isInView} />
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                )}
                {stat.suffix === '/5' && <span className="text-primary-300 text-xl">/5</span>}
              </div>
              <div className="text-sm text-primary-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
