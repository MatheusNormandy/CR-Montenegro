# CRMONTENEGRO — Odontologia de Excelência

Site institucional da **CR Montenegro Odontologia**, clínica do Dr. Carlos Renato Montenegro — especialista em Ortodontia, DTM, Dor Orofacial e Odontologia do Sono.

## Estrutura do Projeto

```
crmontenegro/
├── index.html              # Página principal (single-page)
├── assets/
│   ├── img/                # Imagens otimizadas
│   │   ├── favicon.png
│   │   ├── logo.png
│   │   ├── hero-trabalhando.png
│   │   ├── timeline-formacao.png
│   │   ├── timeline-invisalign.png
│   │   ├── timeline-premiacao.png
│   │   └── timeline-hoje.jpg
│   ├── css/
│   │   └── style.css             # Estilos customizados e animações CSS
│   └── js/
│       └── main.js               # Lógica GSAP, Canvas e ScrollTrigger
├── robots.txt
├── .gitignore
└── README.md
```

## Tecnologias

- **Tailwind CSS** (CDN) — framework utilitário
- **GSAP + ScrollTrigger** — animações e scroll-based effects
- **Iconify** — ícones SVG sob demanda
- **Google Fonts** — Inter, DM Sans, Bricolage Grotesque

## Deploy

Site estático — compatível com qualquer hosting:

- Netlify / Vercel / GitHub Pages / Hostinger

### Headers de Segurança

Antes do deploy, configure os seguintes headers no servidor:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://code.iconify.design https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://api.iconify.design;
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Licença

© 2026 CR Montenegro Odontologia. Todos os direitos reservados.
Desenvolvido por **Matheus Normandy**.
