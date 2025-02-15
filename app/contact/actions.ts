"use server";

import { z } from "zod";
import { formSchema } from "./schema";
import emailjs from "@emailjs/browser";

export async function sendEmail(values: z.infer<typeof formSchema>) {
  try {
    const result = await emailjs.send(
      "service_1p23wom",
      "template_mcuph3u",
      {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
        to_name: "M Julius Saputra",
      },
      "sp3V86KfTTg00UItn"
    );

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
