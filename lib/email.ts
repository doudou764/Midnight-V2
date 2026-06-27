export async function sendOrderEmail(email: string, order: any) {
  console.log("EMAIL SEND →", {
    to: email,
    subject: "Confirmation de commande",
    order
  });

  // 👉 Ici tu pourras connecter Resend / SendGrid / Nodemailer
}
