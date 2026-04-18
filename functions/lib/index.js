"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmail = void 0;
const https_1 = require("firebase-functions/v2/https");
const resend_1 = require("resend");
const z = __importStar(require("zod"));
// ─── Input Validation Schema ────────────────────────────────────────
const contactSchema = z.object({
    name: z.string().min(3, 'Nombre muy corto'),
    email: z.string().email('Email inválido'),
    company: z.string().optional(),
    message: z.string().min(10, 'Mensaje muy corto'),
});
// ─── HTML Sanitization ──────────────────────────────────────────────
function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
// ─── Email Template ─────────────────────────────────────────────────
function buildEmailHtml(name, email, company, message) {
    return `
    <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0d0d0d; color: #ffffff; border-radius: 12px; border: 1px solid #1a1a1a;">
      <div style="text-align: center; margin-bottom: 24px;">
        <h1 style="color: #00E5FF; font-size: 24px; margin: 0;">N-Solutions</h1>
        <p style="color: #666; font-size: 12px; margin: 4px 0 0;">Nueva Consulta Recibida</p>
      </div>
      
      <div style="background-color: #111; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #888; width: 120px; vertical-align: top;">Nombre</td>
            <td style="padding: 8px 0; color: #fff; font-weight: 600;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888; vertical-align: top;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #00E5FF; text-decoration: none;">${escapeHtml(email)}</a></td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 8px 0; color: #888; vertical-align: top;">Empresa</td>
            <td style="padding: 8px 0; color: #fff;">${escapeHtml(company)}</td>
          </tr>
          ` : ''}
        </table>
      </div>

      <div style="background-color: #111; border-radius: 8px; padding: 20px; border-left: 3px solid #00E5FF;">
        <p style="margin: 0 0 8px; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Mensaje</p>
        <p style="margin: 0; color: #fff; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
      </div>

      <footer style="margin-top: 24px; text-align: center; font-size: 11px; color: #444;">
        Enviado desde el formulario de contacto de N-Solutions
      </footer>
    </div>
  `;
}
// ─── Cloud Function ─────────────────────────────────────────────────
exports.sendContactEmail = (0, https_1.onRequest)({
    cors: true,
    region: 'us-central1',
    maxInstances: 10,
}, async (req, res) => {
    // Only allow POST
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Método no permitido' });
        return;
    }
    try {
        // Validate input
        const parsed = contactSchema.safeParse(req.body);
        if (!parsed.success) {
            res.status(400).json({
                error: 'Datos inválidos',
                details: parsed.error.flatten().fieldErrors,
            });
            return;
        }
        const { name, email, company, message } = parsed.data;
        // Send email via Resend
        const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
        const { data, error } = await resend.emails.send({
            from: 'N-Solutions Contact <onboarding@resend.dev>',
            to: ['nsoulutiontech@gmail.com'],
            replyTo: email,
            subject: `Nueva Consulta: ${name}`,
            html: buildEmailHtml(name, email, company, message),
        });
        if (error) {
            console.error('Resend error:', error);
            res.status(500).json({ error: 'Error al enviar el email' });
            return;
        }
        console.log('Email sent successfully:', data?.id);
        res.status(200).json({ success: true, id: data?.id });
    }
    catch (err) {
        console.error('Unexpected error:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
//# sourceMappingURL=index.js.map