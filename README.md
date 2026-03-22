# Barahona Servicios Contables

Sitio web profesional de servicios contables multilingüe para **Barahona Servicios Contables**, construido con React, TypeScript, Vite y Tailwind CSS.

## 🎨 Colores de Marca

| Color | Hex | Uso |
|-------|-----|-----|
| Navy (Primario) | `#081633` | Fondos principales, header, textos |
| Teal (Secundario) | `#7cd7c9` | Acentos, botones, badges, CTA |

## 🗂️ Estructura de Rutas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Inicio | Página principal con todas las secciones |
| `/contact` | Contacto | Formulario de contacto con captcha y datos de la empresa |
| `/personal-accounting` | Contabilidad Personal | Detalle de servicios para personas naturales |
| `/business-accounting` | Contabilidad Empresarial | Detalle de servicios para empresas |
| `*` | 404 | Página no encontrada |

## 🌐 Idiomas Soportados

El sitio soporta múltiples idiomas mediante un selector en el header:
- 🇬🇧 Inglés (por defecto)
- 🇪🇸 Español
- (Extensible a más idiomas vía `src/lib/translations.ts`)

---

# 📘 Manual de Usuario

## Página de Inicio (`/`)

La página principal está compuesta por las siguientes secciones:

### 1. Header (Encabezado)
- **Logo**: Se muestra el icono en móvil y el logo completo en escritorio.
- **Navegación**: Enlaces a Inicio, Acerca de, Servicios, Metodología, Testimonios y Contacto.
- **Selector de idioma**: Permite cambiar el idioma del sitio.
- **Botón de teléfono**: Enlace directo para llamar al `1 (343) 843-3295`.
- **Menú hamburguesa**: Navegación colapsable en dispositivos móviles.

### 2. Hero (Banner Principal)
- Imagen de fondo profesional con overlay de color primario.
- Título principal y descripción de los servicios.
- Botones de acción: **Consulta gratuita** y **Ver servicios**.
- Etiquetas destacadas: Contabilidad Personal, Servicios Empresariales, Cumplimiento Fiscal.
- Indicador de scroll animado en la parte inferior.

### 3. About (Acerca de)
- Descripción de la empresa y su misión.
- Enfoque especial en servicios para inmigrantes.
- Estadísticas clave:
  - **20+ años** de experiencia
  - **5 idiomas** hablados
  - **500+ clientes** satisfechos

### 4. Services (Servicios)
- **Tres categorías principales**:
  - 👤 **Contabilidad Personal**: Declaración de impuestos, planificación financiera, etc.
  - 💼 **Contabilidad Empresarial**: Nóminas, estados financieros, asesoría fiscal.
  - 🏢 **Servicios Corporativos**: Auditoría, cumplimiento regulatorio, consultoría.
- **¿Por qué elegirnos?**: Sección con propuesta de valor y estadísticas.
- **Nuestro Flujo de Trabajo**: 4 pasos del proceso de trabajo con iconos descriptivos.

### 5. Methodology (Metodología)
- Proceso de trabajo en 4 pasos numerados:
  1. Consulta inicial
  2. Análisis y planificación
  3. Implementación
  4. Seguimiento y reportes
- Líneas conectoras visuales entre pasos (en escritorio).

### 6. CTA (Llamado a la Acción)
- Sección destacada con fondo primario.
- Botón para agendar consulta gratuita.
- Botón para llamar directamente.

### 7. Testimonials (Testimonios)
- Tarjetas con reseñas de clientes.
- Cada tarjeta incluye: cita, nombre del cliente y su rol/empresa.
- Icono de comillas decorativo.

### 8. Footer (Pie de Página)
- Logo e información de la empresa.
- Enlaces rápidos de navegación.
- Datos de contacto (dirección, teléfono, email, horarios).
- Derechos de autor.

---

## Página de Contacto (`/contact`)

- **Banner superior** con título y descripción.
- **Formulario de contacto** con campos:
  - Nombre (obligatorio)
  - Email (obligatorio)
  - Teléfono (opcional)
  - Asunto (obligatorio)
  - Mensaje (obligatorio)
  - **Captcha personalizado** para prevenir spam
- **Información de contacto**:
  - 📍 Dirección física
  - 📞 Teléfono: `1 (343) 843-3295`
  - ✉️ Email: `info@barahonapro.com`
  - 🕐 Horarios de atención
- **Mapa**: Placeholder para ubicación.

---

## Contabilidad Personal (`/personal-accounting`)

- **Banner** con color de acento y enlace para volver al inicio.
- **Grid de servicios** con 6 tarjetas:
  - Declaración de impuestos personales
  - Gestión de finanzas personales
  - Planificación de ahorro
  - Análisis financiero personal
  - Protección patrimonial
  - Seguros y cobertura
- **Sección CTA** con botones para contactar o llamar.

---

## Contabilidad Empresarial (`/business-accounting`)

- **Banner** con color primario y enlace para volver al inicio.
- **Grid de servicios** con 6 tarjetas:
  - Reportes financieros
  - Gestión de nómina
  - Cálculos contables
  - Gestión de pagos
  - Crecimiento empresarial
  - Planificación estratégica
- **Sección CTA** con botones para contactar o llamar.

---

## Elementos Globales

### Botón de WhatsApp
- Flotante en la esquina inferior derecha de todas las páginas.
- Enlace directo a WhatsApp para contacto rápido.

### Selector de Idioma
- Disponible en el header de todas las páginas.
- Cambia todo el contenido del sitio al idioma seleccionado.

---

## 🛠️ Tecnologías

- **React 18** + **TypeScript**
- **Vite** (bundler)
- **Tailwind CSS** (estilos)
- **shadcn/ui** (componentes UI)
- **React Router** (enrutamiento SPA)
- **Lucide React** (iconos)
- **TanStack React Query** (gestión de estado del servidor)

## 🚀 Desarrollo Local

```bash
npm install
npm run dev
```

## 📦 Despliegue

El archivo `public/_redirects` maneja el enrutamiento SPA para que todas las rutas funcionen correctamente en producción:
```
/*    /index.html   200
```
