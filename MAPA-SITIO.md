# Mapa del sitio – Carnovo Foods

Propuesta de estructura del sitio web para presentación y desarrollo futuro (WordPress).

---

## 1. Nivel principal (páginas en el menú)

| Sección | URL sugerida | Descripción breve |
|--------|---------------|-------------------|
| **Inicio** | `/` | Home con hero de video, propuesta de valor y enlaces a servicios. |
| **Nosotros** | `/nosotros/` | Quiénes somos, historia, valores, equipo o certificaciones. |
| **Catálogo Mayoreo** | `/catalogo-mayoreo/` | Oferta **Mayoreo**: productos, cortes, condiciones, CTA a cotizar. |
| **Medio Mayoreo** | `/#medio-mayoreo` | Volumen intermedio para negocios; cotización y logística a medida. |
| **Ruta** | `/#ruta` | Entrega directa a negocio; abastecimiento programado (tercera línea de negocio). |
| **Blog / Revista** | `/blog/` | Artículos, noticias, recetas, tendencias del sector (ver detalle abajo). |
| **Contacto** | `/contacto/` | Formulario, datos de contacto, mapa o sedes, CTA principal. |

---

## 2. Blog / Revista

- **Listado:** `/blog/` — Grid o lista de entradas con imagen, título, fecha, extracto y categorías.
- **Entrada:** `/blog/nombre-del-articulo/` — Artículo completo con imagen destacada, autor, fecha, categorías/etiquetas, contenido y CTA (cotizar, más artículos).
- **Categorías (ejemplos):** Noticias, Recetas, Tendencias, Sector cárnico, Calidad e inocuidad.
- **Contenido tipo:** Noticias de la empresa, recetas con carne, buenas prácticas, tips para restaurantes y carnicerías, contenido para SEO.

*Nota: En WordPress se implementa con entradas (Posts) y categorías; la revista puede ser la misma sección con diseño tipo “magazine” en la página de listado.*

---

## 3. Páginas de apoyo (sin menú principal o con enlaces secundarios)

| Página | URL sugerida | Uso |
|--------|---------------|-----|
| **Cotizar / Solicitar información** | `/cotizar/` o `/contacto/#cotizar` | Formulario B2B (volumen, tipo de producto, contacto). |
| **Aviso de privacidad** | `/aviso-de-privacidad/` | Legal, requerido en México. |
| **Términos y condiciones** | `/terminos/` | Si aplica para cotizaciones o futura tienda. |

---

## 4. Líneas de negocio Carnovo (actual)

| Línea | Descripción |
|--------|--------|
| **Mayoreo** | Gran volumen; ventas por volumen, catálogo industrial. |
| **Medio Mayoreo** | Volumen intermedio; negocios que no son gran mayoreo ni ruta. |
| **Ruta** | Entrega directa a negocio; abastecimiento programado. |

## 5. Desarrollo futuro (si aplica)

| Sección | Notas |
|--------|--------|
| **Área de clientes / login** | Para mayoristas, medio mayoreo o ruta, cuando se defina. |

---

## 6. Resumen visual del mapa

```
Carnovo Foods
├── Inicio (/)
├── Nosotros (/nosotros/)
├── Catálogo Mayoreo (/#catalogo-mayoreo)  → línea Mayoreo
├── Medio Mayoreo (/#medio-mayoreo)
├── Ruta (/#ruta)
├── Blog / Revista (/blog/)
│   ├── Listado
│   └── Entrada (/blog/slug/)
├── Contacto (/contacto/)
├── Cotizar (página o ancla)
└── Aviso de privacidad
```

---

## 7. Menú principal sugerido (navbar)

1. Inicio  
2. Nosotros  
3. Catálogo Mayoreo  
4. Medio Mayoreo  
5. Blog  
6. Contacto  
7. **Cotizar Volumen** (botón destacado, enlaza a contacto/cotizar)
