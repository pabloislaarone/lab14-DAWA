'use client';

import { useEffect, useState } from 'react';

const timeFmt = new Intl.DateTimeFormat('es-PE', {
  timeZone: 'America/Lima',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const hourFmt = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Lima',
  hour: 'numeric',
  hour12: false,
});

// Hora local de Lima en tiempo real
export default function LimaClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const first = setTimeout(() => setNow(new Date()), 0);
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  const hour = now ? Number(hourFmt.format(now)) : 12;
  const working = hour >= 8 && hour < 22;

  return (
    <>
      <p className="font-display text-[2.4rem] font-bold tracking-[-0.03em] tabular-nums">
        {now ? timeFmt.format(now) : '--:--'}
      </p>
      <p className="mono !text-[#97a8f5]">
        {working ? '● en horario, respondo hoy' : '○ fuera de horario, respondo mañana'}
      </p>
    </>
  );
}
