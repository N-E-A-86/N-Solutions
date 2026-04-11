<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/e4d9f7e0-8818-4839-a07c-170e4a6a4e02

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## caracteristicas de diseño y desarrollo

1. Estética y Sistema Visual (The Look & Feel)
Fondo Dark Mode Profundo: Uso de negros orgánicos y grises muy oscuros (#0D0D0D) para resaltar los elementos de color.

Paleta de Acentos Neón: Contraste dinámico entre Cian Glaciar (#00E5FF) y Dorado/Amarillo Eléctrico, aplicado a bordes, iconos y botones de acción.

Efecto Glassmorphism: Tarjetas y contenedores con fondo traslúcido, desenfoque de fondo (backdrop-filter: blur) y bordes finos de 1px con sutil resplandor.

Tipografía Moderna: Uso de fuentes Sans-Serif geométricas (como Inter, Montserrat o JetBrains Mono para bloques de código) con jerarquías claras y amplios espacios en blanco.

2. Elementos de UI Interactiva
Micro-interacciones en Botones: Efectos de "glow" (resplandor) y sutiles cambios de escala al pasar el cursor (hover states).

Visualización de Redes: Background con patrones de líneas de circuito, puntos de conexión o mallas 3D sutiles que se mueven o reaccionan al scroll.

Barras de Carga de Prototipos: Indicadores visuales que simulan el procesamiento de datos o estados de IA (estilo "terminal" o "escaneo").

3. Módulos de Contenido Críticos
Hero de Alto Impacto: Un encabezado que combine el logo de N-SOLUTIONS con una frase de valor potente y un botón de "Consulta Gratuita" que destaque sobre el resto.

Showcase de Automatización (n8n/Make): Bloques que muestren diagramas de flujo estilizados para que el cliente visualice cómo se conectan sus apps (ej. WhatsApp -> CRM -> Facturación).

Sección de Inteligencia Artificial: Tarjetas específicas para Agentes de IA, Chatbots avanzados y Análisis Predictivo, cada una con iconos minimalistas en línea fina.

Prueba Social y Logística: Un módulo que destaque el rastreo GPS y la eficiencia logística, ideal para clientes como supermercados o empresas de transporte.

4. Funcionalidades de Conversión
Formulario de Contacto "Tech": Campos limpios con etiquetas flotantes y un botón de envío que cambie de estado a una animación de "procesando" cuando se envía.

Sticky Navbar: Navegación superior que se vuelve traslúcida al hacer scroll, manteniendo el acceso al contacto siempre visible.

Sección de "Casos de Uso": Un carrusel o grid donde se explique cómo la tecnología resuelve problemas reales (ej. "Reducción de tiempos de entrega en un 30%").

5. Características Técnicas de Vanguardia
Mobile-First & PWA Ready: El diseño debe estar optimizado para pantallas táctiles, con botones grandes y una navegación fluida.

Optimización de Carga: Estructura preparada para carga perezosa (lazy loading) de imágenes de alta calidad (como las que generamos para Capitán Frío).

Accesibilidad: Contraste de colores certificado para que el neón sea legible sobre el fondo oscuro sin cansar la vista.

6.el diseño debe ser "Limpiamente Futurista", evitando el desorden visual y priorizando que cada elemento tenga un propósito funcional hacia la venta del servicio. 