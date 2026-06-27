import Stripe from "stripe";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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

  if (event.type === "checkout.session.completed") {
    const session: any = event.data.object;

    const metadata = session.metadata;

    // 💾 sauvegarde commande
    await supabase.from("orders").insert({
      user_email: session.customer_details.email,
      total: session.amount_total / 100,
      items: metadata?.items ? JSON.parse(metadata.items) : []
    });
  }

  return NextResponse.json({ received: true });
}

import { sendOrderEmail } from "@/lib/email";

if (event.type === "checkout.session.completed") {
  const session: any = event.data.object;

  const order = {
    email: session.customer_details.email,
    total: session.amount_total / 100
  };

  await supabase.from("orders").insert({
    user_email: order.email,
    total: order.total,
    items: []
  });

  await sendOrderEmail(order.email, order);
}
