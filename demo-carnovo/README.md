# Demo Carnovo — Agente de Captación

Demo interactiva del flujo: **Facebook → IA (Carnovo) → Kommo CRM**.

Proyecto aparte; no modifica el sitio web principal de Carnovo Foods.

## Cómo correr el demo

```bash
cd demo-carnovo
npm install
npm run dev
```

Abre en el navegador la URL que muestre Vite (por ejemplo `http://localhost:5173`).

## Build para producción

```bash
npm run build
npm run preview
```

## Nota

Si tu Node.js es anterior a 20.19, este proyecto usa Vite 5 y Tailwind 3 para compatibilidad. Si al ejecutar `npm run dev` falla, prueba: `npx vite`.
