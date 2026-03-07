# Opción A: Demo en su propia URL (Vercel)

El demo queda en un proyecto Vercel separado. El sitio principal **no se modifica** en su deploy; solo tendrás un enlace que apunta al demo.

---

## Paso 1: Subir el repo (si aún no está en GitHub)

Si tu sitio ya está en GitHub, puedes usar **el mismo repositorio** para el demo. Si no:

```bash
cd c:\Users\maryp\Carnovo-Foods-Site
git add .
git commit -m "Añadir demo-carnovo"
git push origin main
```

---

## Paso 2: Crear el proyecto del demo en Vercel

1. Entra en **https://vercel.com** e inicia sesión.
2. **Add New…** → **Project**.
3. **Import** el repositorio de Carnovo (el mismo del sitio).
4. **Importante:** antes de desplegar, cambia la configuración:
   - **Root Directory:** haz clic en *Edit* y escribe: **`demo-carnovo`**
   - **Framework Preset:** Vite (Vercel suele detectarlo).
   - **Build Command:** `npm run build` (por defecto).
   - **Output Directory:** `dist` (por defecto en Vite).
5. **Deploy**.

Al terminar, Vercel te dará una URL tipo:

- **https://carnovo-foods-xxx.vercel.app**  
  o, si le pusiste nombre al proyecto:  
- **https://demo-carnovo.vercel.app**

Copia esa URL; la usarás en el sitio.

---

## Paso 3: (Opcional) Nombre fijo para el demo

Para que la URL sea algo como `https://demo-carnovo.vercel.app`:

1. En Vercel, abre el **proyecto del demo** (no el del sitio).
2. **Settings** → **General** → **Project Name**.
3. Cámbialo a **demo-carnovo** y guarda.  
   La URL quedará: **https://demo-carnovo.vercel.app**

---

## Paso 4: Enlace en el sitio principal

En el **sitio principal** (el que se despliega desde la carpeta `public/`) ya está añadido un enlace al demo en el menú. Solo tienes que asegurarte de que la URL del enlace sea la correcta:

- Si tu URL del demo es **https://demo-carnovo.vercel.app**, no cambies nada.
- Si es otra (por ejemplo **https://carnovo-foods-abc123.vercel.app**), abre **public/index.html**, busca el enlace que dice "Demo Agente" y en `href="..."` pega tu URL.

El sitio principal sigue desplegándose igual (desde `public/`); el demo vive en su propio proyecto y su propia URL.

---

## Resumen

| Qué | Dónde |
|-----|--------|
| Deploy del **sitio** | Mismo repo, Root Directory = **`public`** |
| Deploy del **demo** | Mismo repo, Root Directory = **`demo-carnovo`** |
| Enlace al demo | En el menú del sitio → "Demo Agente" (ya añadido) |

Ninguno de los dos deploys modifica el otro; solo son dos proyectos en Vercel apuntando al mismo repo con distinta raíz.
