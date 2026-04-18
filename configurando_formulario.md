# 📬 Configurando Formulario de Contacto — N-Solutions

> Guía completa para conectar el formulario de contacto con **Resend** usando **Firebase Cloud Functions**.

---

## 📋 Resumen de la Arquitectura

```
┌──────────────────────┐         ┌───────────────────────────┐         ┌─────────────┐
│   Contact.tsx        │  POST   │   Firebase Hosting        │ rewrite │  Cloud       │
│   (Frontend)         │───────▶ │   /api/send-message       │────────▶│  Function    │
│   Validación Zod     │         │   (sitio estático)        │         │  (Resend)    │
└──────────────────────┘         └───────────────────────────┘         └──────┬──────┘
                                                                              │
                                                                              ▼
                                                                       ┌─────────────┐
                                                                       │  Resend API  │
                                                                       │  → Email a   │
                                                                       │  nsoulution  │
                                                                       │  tech@gmail  │
                                                                       └─────────────┘
```

**Flujo:**
1. El usuario llena el formulario y se valida con Zod en el frontend
2. Se envía un `POST` a `/api/send-message`
3. Firebase Hosting reescribe esa ruta a la Cloud Function `sendContactEmail`
4. La Cloud Function valida los datos, sanitiza los inputs, y envía el email vía Resend
5. El email llega a `nsoulutiontech@gmail.com`

---

## ✅ Prerrequisitos

- [x] Cuenta de Resend creada → [resend.com](https://resend.com)
- [x] API Key de Resend generada → ya está en `.env.local`
- [x] Firebase CLI instalado → `npx firebase-tools@latest`
- [x] Proyecto Firebase activo y funcionando
- [x] SDK de Resend en dependencies → `resend@^6.12.0`

---

## 🚀 Pasos de Implementación

### Paso 1: Crear la Cloud Function

**Archivo:** `functions/src/index.ts`

Esta función:
- Recibe POST con `{ name, email, company?, message }`
- Valida los campos obligatorios con Zod
- Sanitiza inputs para prevenir XSS en el template HTML
- Envía el email vía Resend
- Responde con éxito o error

### Paso 2: Configurar TypeScript para Functions

**Archivo:** `functions/tsconfig.json`

Necesario para compilar TypeScript → JavaScript en `functions/lib/`.

### Paso 3: Actualizar el Frontend

**Archivo:** `components/Contact.tsx`

Cambios:
- URL del `fetch`: `https://formspree.io/f/YOUR_FORM_ID` → `/api/send-message`
- Parsear respuesta JSON para manejar errores del servidor

### Paso 4: Configurar Firebase Hosting Rewrite

**Archivo:** `firebase.json`

Agregar un rewrite para que `/api/send-message` apunte a la Cloud Function.
Esto evita problemas de CORS ya que todo queda en el mismo dominio.

### Paso 5: Eliminar el API Route de Next.js

**Eliminar:** `app/api/send-message/route.ts`

Este archivo nunca funciona con `output: 'export'`. La lógica ahora vive en la Cloud Function.

### Paso 6: Instalar Dependencias

```bash
cd functions
npm install
```

### Paso 7: Compilar la Cloud Function

```bash
cd functions
npm run build
```

### Paso 8: Configurar el Secret de Resend en Firebase

```bash
# Establecer el secret de la API Key de Resend
firebase functions:secrets:set RESEND_API_KEY
# Cuando te lo pida, pega tu API Key: re_KbmaqwCx_...
```

> ⚠️ **IMPORTANTE**: Los secrets de Firebase Functions NO leen de `.env.local`.
> Debes configurarlos con el comando anterior para que estén disponibles en producción.

### Paso 9: Deploy

```bash
# Compilar el sitio estático
npm run build

# Deploy de todo (hosting + functions)
firebase deploy
```

O por separado:
```bash
firebase deploy --only functions    # Solo la función
firebase deploy --only hosting      # Solo el sitio
```

### Paso 10: Verificar

1. Abre tu sitio en producción
2. Llena el formulario de contacto con datos de prueba
3. Verifica en [resend.com/emails](https://resend.com/emails) que el email se envió
4. Verifica que llegó a `nsoulutiontech@gmail.com`

---

## 🔧 Troubleshooting

### "Error al enviar el mensaje"
- Verifica que el secret `RESEND_API_KEY` esté configurado: `firebase functions:secrets:access RESEND_API_KEY`
- Revisa los logs: `firebase functions:log`

### Email no llega
- `onboarding@resend.dev` solo puede enviar a la dirección asociada a tu cuenta Resend
- Verifica que `nsoulutiontech@gmail.com` sea el email de tu cuenta Resend
- Revisa la bandeja de spam

### CORS Error
- Si ves error de CORS, asegúrate de que el rewrite en `firebase.json` esté correctamente configurado
- El rewrite elimina problemas de CORS al mantener todo en el mismo dominio

---

## 📌 Notas Futuras

### Cuando tengas dominio propio:
1. Ve a [resend.com/domains](https://resend.com/domains)
2. Agrega tu dominio
3. Configura los registros DNS (MX, SPF, DKIM) que Resend te indica
4. Cambia el `from` en `functions/src/index.ts`:
   ```typescript
   // De:
   from: 'N-Solutions Contact <onboarding@resend.dev>'
   // A:
   from: 'N-Solutions Contact <contacto@tudominio.com>'
   ```
5. Recompila y re-deploya: `cd functions && npm run build && firebase deploy --only functions`
