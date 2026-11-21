# Lab 14 – Portafolio con SEO (Next.js)

## Estructura

```
lab14-dawa/
├── public/
│   ├── projects/
│   ├── og-image.jpg
│   └── og-projects.jpg
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── contact/
│   │   │   ├── actions.ts
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── [slug]/page.tsx
│   │   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Avatar.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ProjectCard.tsx
│   ├── lib/data.ts
│   └── types/index.ts
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
