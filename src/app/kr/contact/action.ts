"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

export async function submitContact(formData: FormData) {
  const company = String(formData.get("company") || "").trim();
  if (company) return;

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !subject) throw new Error("Missing required fields");
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY is missing");

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Korea Youth Pickleball <apply@koreaypa.org>",
    to: ["info.kypa@gmail.com"],
    replyTo: email,
    subject: `Contact: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
  });

  if (error) {
    console.error("RESEND ERROR:", error);
    throw new Error(error.message ?? "Resend failed");
  }

  redirect("/kr/contact/thanks");
}
