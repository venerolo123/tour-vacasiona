# Tour Virtual Baños de Agua Santa

Proyecto Club CIA (Grupo MOSSAD) • 2025

## Descripción
Sitio web de tour virtual para Baños de Agua Santa con 2 días y 1 noche de aventura pura.

## Características
- Descripción detallada del tour
- Itinerario completo día por día
- Galería de imágenes interactiva
- Mapa interactivo con ubicaciones turísticas
- Diseño responsive
- Formulario de contacto

## Instalación

1. Clona o descarga este proyecto
2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## Cambiar Imágenes

Las imágenes están referenciadas desde Pexels en los siguientes archivos:

### Hero Section (src/components/Hero.tsx)
- Línea 8: Imagen de fondo principal
```javascript
backgroundImage: 'url(https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
```

### Description Section (src/components/Description.tsx)
- Línea 89: Imagen de cascada
```javascript
src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800"
```

### Gallery Section (src/components/Gallery.tsx)
- Líneas 8-47: Array de imágenes de la galería

Para cambiar las imágenes:
1. Reemplaza las URLs de Pexels con tus propias imágenes
2. Puedes usar imágenes locales colocándolas en la carpeta `public/` y referenciarlas como `/nombre-imagen.jpg`
3. O usar URLs de otras fuentes de imágenes

## Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx          # Navegación principal
│   ├── Hero.tsx            # Sección hero con imagen de fondo
│   ├── Description.tsx     # Descripción del tour
│   ├── Itinerary.tsx       # Itinerario detallado
│   ├── Gallery.tsx         # Galería de imágenes
│   ├── InteractiveMap.tsx  # Mapa interactivo
│   ├── Contact.tsx         # Formulario de contacto
│   └── Footer.tsx          # Pie de página
├── App.tsx                 # Componente principal
├── main.tsx               # Punto de entrada
└── index.css              # Estilos globales
```

## Tecnologías Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Leaflet (mapas interactivos)
- Lucide React (iconos)
- Vite (build tool)

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build
- `npm run lint` - Linter de código

## Personalización

### Colores
Los colores principales están definidos en Tailwind CSS:
- Verde principal: `green-600` (#059669)
- Verde claro: `green-400` (#4ADE80)
- Grises: `gray-50` a `gray-900`

### Fuentes
Se usa la fuente del sistema por defecto de Tailwind CSS.

### Contenido
Puedes modificar el contenido editando directamente los componentes en la carpeta `src/components/`.

## Despliegue

El proyecto está configurado para desplegarse en Netlify. Para otros proveedores:

1. Ejecuta `npm run build`
2. Sube la carpeta `dist/` a tu hosting

## Soporte

Para soporte técnico, contacta al equipo de desarrollo del Club CIA.