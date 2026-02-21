# Serena's Design — Landing Page

## Información del Proyecto

**Marca:** Serena's Design  
**Tagline:** Moda a medida diseñada con dedicación  
**Sector:** Moda / Diseño de Indumentaria  
**Color Principal:** Rojo Minimalista `#DC2626`  
**Año:** 2026

---

## Archivos

```
Landig page - Serena/
├── index.html      ← Estructura principal
├── styles.css      ← Todos los estilos
├── script.js       ← Animaciones e interacciones
├── README.md       ← Este archivo
└── images/         ← Imágenes (ver sección abajo)
```

---

## Paleta de Colores

| Variable         | Valor     | Uso                       |
|------------------|-----------|---------------------------|
| `--primary-500`  | `#DC2626` | Color principal (rojo)    |
| `--primary-600`  | `#b91c1c` | Botones hover             |
| `--primary-700`  | `#991b1b` | Gradientes                |
| `--bg-primary`   | `#000000` | Fondo negro puro          |
| `--bg-secondary` | `#09090B` | Fondo de secciones        |
| `--bg-tertiary`  | `#18181B` | Cards                     |
| `--text-primary` | `#FFFFFF` | Texto principal           |

---

## Secciones

1. **Navbar** — Logo + links + CTA + menú hamburguesa (mobile)
2. **Hero** — Título, subtítulo, CTAs, estadísticas animadas
3. **Social Proof** — Redes sociales donde está presente la marca
4. **Catálogo** — 6 flip cards interactivas con colecciones
5. **Proceso** — 4 pasos del proceso creativo
6. **Testimonios** — 3 reseñas de clientas
7. **Sobre mí** — Bio de Serena + links a redes
8. **CTA Final** — Llamado a la acción con WhatsApp + Instagram
9. **Footer** — Links + redes + copyright
10. **WhatsApp Float** — Botón flotante siempre visible

---

## Imágenes — Pendientes de agregar

El servicio de generación de imágenes estuvo temporalmente sin capacidad.
Agregar estas imágenes en la carpeta `/images/` para completar el diseño:

| Archivo              | Contenido sugerido                          |
|----------------------|---------------------------------------------|
| `logo.png`           | Logo de Serena's Design (fondo transparent) |
| `hero_visual.png`    | Modelo con prenda a medida / atelier        |
| `service_1.png`      | Vestidos a medida                           |
| `service_2.png`      | Ropa casual                                 |
| `service_3.png`      | Ropa formal                                 |
| `service_4.png`      | Diseño personalizado / taller               |
| `service_5.png`      | Accesorios                                  |
| `service_6.png`      | Regalos especiales                          |
| `about_image.png`    | Foto de Serena en su taller                 |

### Cómo agregar imágenes a las flip cards:
Reemplazar el div `.card-img-placeholder` por:
```html
<img src="images/service_1.png" alt="Vestidos a Medida" class="service-image">
```

Y en CSS las `.service-image` deben tener:
```css
.service-image { width: 100%; height: 100%; object-fit: cover; }
```

---

## Personalización rápida

### Cambiar número de WhatsApp
Buscar en `index.html`: `5491100000000` y reemplazar con tu número (sin + ni espacios, con código de país).

### Cambiar usuario de Instagram
Buscar: `serenasdesign` → reemplazar con tu usuario real.

### Cambiar color principal
En `styles.css`, buscar `--primary-500: #DC2626` y cambiar el HEX.  
También actualizar `--primary-rgb: 220, 38, 38` con los valores RGB del nuevo color.

---

## Tecnologías usadas

- HTML5 semántico
- CSS3 (variables, grid, flexbox, animaciones, glassmorphism)
- JavaScript vanilla (sin dependencias)
- Google Fonts: Plus Jakarta Sans + Inter + Cormorant Garamond

---

*Hecho con ♥ — Serena's Design © 2026*
