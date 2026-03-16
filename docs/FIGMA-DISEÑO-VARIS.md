# Alineación con el diseño Figma (VARIS)

## Estado del acceso MCP

- **URL del diseño:** [VARIS - Copy](https://www.figma.com/design/vihisPwXU01OvxuokR48xN/VARIS--Copy-?node-id=2757-8054)
- **Problema actual:** El archivo no es accesible vía MCP porque pertenece a otro equipo/plan. La cuenta conectada está en plan **Starter** con asiento **View** y solo puede leer archivos de su propio equipo.
- **Para que el MCP funcione:** Necesitas que te den acceso al equipo de Figma donde está el archivo (o un asiento Full/Dev en ese plan). Luego podremos usar `get_design_context` y `get_screenshot` para bajar especificaciones y assets automáticamente.

## Cómo seguir sin MCP (exportación manual)

1. **Exportar desde Figma**
   - Abre el frame/nodo que representa la web (ej. el que tiene `node-id=2757-8054`).
   - Exporta imágenes en 2x (PNG o JPG) y GIFs tal como estén en el diseño.
   - Guarda en:
     - `public/assets/images/` — fotos, ilustraciones, fondos.
     - `public/assets/gifs/` — animaciones/GIFs.

2. **Nombres sugeridos** (ajusta según tu diseño)
   - `hero-bg.jpg` o `hero-bg.gif` — fondo o imagen principal del hero.
   - `sobre-nosotros.jpg` — imagen de la sección "Sobre nosotros".
   - Cualquier otro que coincida con las secciones (servicios, contacto, etc.).

3. **Cuando tengas los archivos**
   - Sustituye los placeholders en el código por estas rutas (ej. `/assets/images/hero-bg.jpg`).
   - Si más adelante tienes acceso MCP al archivo, podemos volver a ejecutar el flujo de "implement design" para refinar y usar los assets que devuelva el servidor.

## Estructura del proyecto actual

- **Hero:** texto + CTAs; sin imagen/GIF de fondo todavía.
- **Sobre nosotros:** texto + placeholder "Imagen del Taller"; listo para sustituir por `/assets/images/sobre-nosotros.jpg` (o el nombre que uses).
- **Servicios / Contacto / Footer:** sin imágenes en el diseño actual; si en Figma hay iconos o fotos, exportarlos y referenciarlos desde `public/assets/images/`.

## Próximos pasos recomendados

1. Conseguir acceso al archivo en Figma (mismo equipo o asiento Full/Dev) **o** exportar manualmente imágenes y GIFs.
2. Colocar los assets en `public/assets/images/` y `public/assets/gifs/`.
3. Decir qué secciones del Figma quieres que coincidan primero (hero, sobre nosotros, etc.) para actualizar el código con las rutas correctas.
