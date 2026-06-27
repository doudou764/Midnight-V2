import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20"
});

export async function POST(req: Request) {
  const body = await req.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      req.headers.get("stripe-signature")!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return new NextResponse("Webhook error", { status: 400 });
  }

  // 💡 Paiement réussi
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    console.log("Paiement validé :", session.id);

    // 👉 ICI tu ajouteras :
    // - création commande Supabase
    // - génération clé produit
    // - email client
  }

  return NextResponse.json({ received: true });
}
