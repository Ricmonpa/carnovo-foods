# Deploy Carnovo Foods: Git + Vercel + dominio propio

Sigue estos pasos para dejar el sitio en vivo con un dominio profesional.

---

## 1. Subir el código a GitHub

1. Entra en **https://github.com/new** (iniciado sesión).
2. Crea un repositorio nuevo:
   - **Nombre:** por ejemplo `carnovo-foods` o `carnovo-web`.
   - **Visibilidad:** Private o Public, como prefieras.
   - **No** marques “Add a README” (ya tienes código local).
3. En la carpeta del proyecto, ejecuta (sustituye `TU_USUARIO` y `carnovo-foods` por los tuyos):

```bash
cd c:\Users\maryp\Carnovo-Foods-Site

git remote add origin https://github.com/TU_USUARIO/carnovo-foods.git
git branch -M main
git push -u origin main
```

Si GitHub te pide autenticación, usa un **Personal Access Token** (Settings → Developer settings → Personal access tokens) como contraseña, o inicia sesión con GitHub CLI (`gh auth login`).

---

## 2. Conectar y desplegar en Vercel

1. Entra en **https://vercel.com** e inicia sesión (con GitHub si quieres).
2. **Add New…** → **Project**.
3. **Import Git Repository**: elige el repo `carnovo-foods` (o el nombre que hayas usado).
4. Vercel detectará que es un sitio estático:
   - **Framework Preset:** Other (o “No framework”).
   - **Root Directory:** `public` (el sitio está en esa carpeta).
   - **Build Command:** vacío.
   - **Output Directory:** vacío.
5. **Deploy**. En unos segundos tendrás una URL tipo `carnovo-foods.vercel.app`.

### Si ya desplegaste y ves **404: NOT_FOUND**

1. Vercel → tu proyecto → **Settings** → **General**.
2. En **Root Directory** escribe: `public` → **Save**.
3. **Build & Development Settings**: **Build Command** y **Output Directory** vacíos.
4. **Deployments** → menú (⋯) del último deploy → **Redeploy**.
5. Cuando termine, la URL debería mostrar el sitio.

---

## 3. Dominio propio en Vercel

1. En el **Dashboard de Vercel**, abre tu proyecto.
2. Ve a **Settings** → **Domains**.
3. Añade tu dominio (ej: `www.carnovofoods.com` o `carnovofoods.com`).
4. Vercel te mostrará los **registros DNS** que debes crear en tu proveedor (donde compraste el dominio):
   - Normalmente: un registro **A** o **CNAME** apuntando a Vercel.
5. Crea esos registros en tu proveedor de dominio y espera unos minutos (hasta 48 h, a veces solo 5–10 min).
6. En Vercel, **Verify** el dominio. Cuando pase la verificación, el sitio se servirá con tu dominio.

---

## Resumen

| Paso | Acción |
|------|--------|
| 1 | Repo en GitHub → `git remote add origin ...` y `git push` |
| 2 | Vercel → Import proyecto desde GitHub → Deploy |
| 3 | Settings → Domains → Añadir dominio → Configurar DNS en tu proveedor |

Si algo falla (build, 404, video no carga), revisa en Vercel la pestaña **Deployments** y los logs del último deployment.
