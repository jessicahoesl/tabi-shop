import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/data/products";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing Session ID" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 403 });
    }

    const productId = session.metadata?.productId;
    const product = products.find((p) => p.id === productId);

    if (!product || !product.filename) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const filePath = path.join(process.cwd(), "files", product.filename);

    if (!fs.existsSync(filePath)) {
      console.error(`File missing at: ${filePath}`);
      return NextResponse.json({ error: "File system error" }, { status: 500 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    
    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Disposition", `attachment; filename="${product.filename}"`);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });

  } catch (error) {
    console.error("Download Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}