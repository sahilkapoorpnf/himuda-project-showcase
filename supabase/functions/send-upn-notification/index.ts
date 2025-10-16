import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface UpnNotificationRequest {
  name: string;
  email: string;
  mobile: string;
  upnNumber: string;
  applicationNumber: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, mobile, upnNumber, applicationNumber }: UpnNotificationRequest = await req.json();

    console.log("Sending UPN notification to:", { name, email, mobile, upnNumber });

    // In a real implementation, you would:
    // 1. Send email using Resend
    // 2. Send SMS using a service like Twilio
    // For now, we'll simulate the notification

    // Simulate email/SMS sending
    console.log(`
      Email sent to: ${email}
      SMS sent to: ${mobile}
      
      Dear ${name},
      
      Your UPN (Unique Property Number) has been generated successfully.
      
      UPN Number: ${upnNumber}
      Application Number: ${applicationNumber}
      
      Please use this UPN number to download your allotment letter.
      
      Regards,
      HIMUDA Team
    `);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "UPN notification sent successfully",
        upnNumber 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-upn-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
