# Guía para Cambiar Imágenes

## Ubicaciones de las Imágenes Actuales

### 1. Hero Section (Imagen Principal)
**Archivo:** `src/components/Hero.tsx`
**Línea:** 8
**Imagen actual:** Paisaje montañoso de Baños
```javascript
backgroundImage: 'url(https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
```

### 2. Sección Descripción
**Archivo:** `src/components/Description.tsx`
**Línea:** 89
**Imagen actual:** Cascada del Pailón del Diablo
```javascript
src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800"
```

### 3. Galería de Imágenes
**Archivo:** `src/components/Gallery.tsx`
**Líneas:** 8-47
**Imágenes actuales:** 8 imágenes de actividades y paisajes

```javascript
const images = [
  {
    src: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Cascada del Pailón del Diablo",
    description: "Una de las cascadas más impresionantes del Ecuador"
  },
  // ... más imágenes
];
```

## Cómo Cambiar las Imágenes

### Opción 1: Usar Imágenes Locales
1. Crea una carpeta `public/images/` en la raíz del proyecto
2. Coloca tus imágenes en esa carpeta
3. Cambia las URLs por rutas locales:
```javascript
// En lugar de:
src="https://images.pexels.com/photos/..."

// Usa:
src="/images/tu-imagen.jpg"
```

### Opción 2: Usar URLs Externas
1. Sube tus imágenes a un servicio como:
   - Cloudinary
   - AWS S3
   - Google Drive (con enlace público)
   - Imgur
2. Reemplaza las URLs actuales con las nuevas

### Opción 3: Importar Imágenes como Módulos
1. Coloca las imágenes en `src/assets/images/`
2. Importa las imágenes en el componente:
```javascript
import heroImage from '../assets/images/hero.jpg';
import cascada from '../assets/images/cascada.jpg';

// Luego úsalas:
backgroundImage: `url(${heroImage})`
src={cascada}
```

## Recomendaciones de Tamaños

### Hero Section
- **Tamaño recomendado:** 1920x1080px (Full HD)
- **Formato:** JPG o WebP
- **Peso máximo:** 500KB

### Galería
- **Tamaño recomendado:** 800x600px
- **Formato:** JPG o WebP
- **Peso máximo:** 200KB por imagen

### Descripción
- **Tamaño recomendado:** 800x600px
- **Formato:** JPG o WebP
- **Peso máximo:** 200KB

## Optimización de Imágenes

Para mejor rendimiento, optimiza tus imágenes:

1. **Compresión:** Usa herramientas como TinyPNG o Squoosh
2. **Formato moderno:** Considera WebP para mejor compresión
3. **Responsive:** Proporciona diferentes tamaños para diferentes dispositivos

## Ejemplo Completo de Cambio

```javascript
// Antes (en Gallery.tsx)
{
  src: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
  title: "Cascada del Pailón del Diablo",
  description: "Una de las cascadas más impresionantes del Ecuador"
}

// Después (usando imagen local)
{
  src: "/images/mi-cascada.jpg",
  title: "Mi Cascada Favorita",
  description: "Descripción personalizada de mi imagen"
}
```

## Archivos a Modificar

1. **Hero:** `src/components/Hero.tsx` (línea 8)
2. **Descripción:** `src/components/Description.tsx` (línea 89)
3. **Galería:** `src/components/Gallery.tsx` (líneas 8-47)

¡Recuerda hacer backup de tus cambios y probar localmente antes de desplegar!