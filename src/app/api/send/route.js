import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "local");

export async function POST(req) {
  try {
    const body = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["artshllaku48@gmail.com"],
      subject: `Message from ${body?.name}`,
      react: EmailTemplate({
        firstName: body?.name,
        message: body?.message,
        email: body?.email,
      }),
    });

    return Response.json(data);
  } catch (error) {
    console.error("ERROR", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
