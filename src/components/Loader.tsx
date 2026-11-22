// Pantalla de bienvenida: solo CSS, desaparece sola y no bloquea la carga
export default function Loader() {
  const icons = [
    <path key="code" d="m8 7-5 5 5 5M16 7l5 5-5 5" />,
    <g key="user">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
    </g>,
    <g key="web">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </g>,
  ];

  return (
    <div className="loader" aria-hidden="true">
      <div>
        <div className="mb-5 flex justify-center gap-3.5">
          {icons.map((icon, i) => (
            <span
              key={i}
              className="ld-icon grid size-10 place-items-center rounded-xl border border-line2 text-muted"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {icon}
              </svg>
            </span>
          ))}
        </div>
        <p className="ld-title text-center font-display text-[clamp(1.3rem,4vw,2rem)] font-bold">
          Bienvenido a mi portafolio
        </p>
        <p className="mono mt-2.5 text-center">pablo.isla · desarrollador</p>
        <div className="ld-bar mx-auto mt-5 h-0.5 w-44 overflow-hidden rounded bg-line">
          <i />
        </div>
      </div>
    </div>
  );
}
