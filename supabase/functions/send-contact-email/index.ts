
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  to: string;
  subject: string;
  name: string;
  contact: string;
  service: string;
  scope: string;
  comments?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request:", req.method);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData = await req.json();
    console.log("Received data:", requestData);

    const { to, subject, name, contact, service, scope, comments }: ContactRequest = requestData;

    console.log("Processing contact form with data:", { to, subject, name, contact, service, scope, comments });
    console.log("Using RESEND_API_KEY:", !!Deno.env.get("RESEND_API_KEY"));

    const emailResponse = await resend.emails.send({
      from: "Bestclean <onboarding@resend.dev>",
      to: [to],
      subject: subject,
      html: `
        <h2>Uus kontaktivorm:</h2>
        <p><strong>Nimi:</strong> ${name}</p>
        <p><strong>Kontakt:</strong> ${contact}</p>
        <p><strong>Teenus:</strong> ${service}</p>
        <p><strong>Töö maht ja asukoht:</strong> ${scope}</p>
        ${comments ? `<p><strong>Lisakommentaarid:</strong> ${comments}</p>` : ''}
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Detailed error in send-contact-email function:", {
      error,
      message: error.message,
      stack: error.stack,
    });

    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.stack 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
