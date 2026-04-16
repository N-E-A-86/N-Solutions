import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;


    // Validación básica en el servidor
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    console.log('Validating body:', body);

    const { data, error } = await resend.emails.send({
      from: 'N-Solutions Contact <onboarding@resend.dev>',
      to: ['nsoulutiontech@gmail.com'],
      subject: `Nueva Consulta: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0d0d0d; color: #ffffff; border-radius: 12px; border: 1px solid #1a1a1a;">
          <h2 style="color: #00E5FF; border-bottom: 1px solid #333; padding-bottom: 10px;">Nueva Consulta Gratuita</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Empresa/Proyecto:</strong> ${company}</p>` : ''}
          <div style="margin-top: 20px; padding: 15px; background-color: #1a1a1a; border-radius: 8px;">
            <p style="margin-top: 0;"><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <footer style="margin-top: 20px; font-size: 12px; color: #666;">
            Enviado desde el formulario de contacto de N-Solutions.
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });



  } catch (err) {
    console.error('Error en API Contact:', err);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
