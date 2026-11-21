# Lab 14 – Portafolio con SEO (Next.js)

## Estructura

```
lab14-dawa/
├── public/
│   ├── projects/            # Láminas (ilustraciones) de los proyectos
│   ├── og-image.jpg
│   └── og-projects.jpg
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── contact/
│   │   │   ├── actions.ts   # Server Action que envía el mensaje con Resend
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Avatar.tsx
│   │   ├── ContactBand.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── NavLinks.tsx
│   │   └── ProjectCard.tsx
│   ├── fonts/               # Libre Franklin (OFL)
│   ├── lib/data.ts          # Datos personales y proyectos
│   └── types/index.ts
├── .env.example
└── next.config.ts
```

## Cómo iniciar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrir http://localhost:3000

Variables de entorno (en local en `.env.local`, en producción en Vercel):

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dominio del sitio, usado en metadata, sitemap y robots |
| `RESEND_API_KEY` | Clave de Resend para el formulario de contacto |
| `CONTACT_TO_EMAIL` | Correo que recibe los mensajes (opcional) |
| `CONTACT_FROM_EMAIL` | Remitente de los mensajes (opcional) |
