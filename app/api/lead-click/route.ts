import { NextResponse } from "next/server";

type LeadClickBody = {
  channel?: "whatsapp" | "call" | "sms" | "email";
  breed?: string;
  slug?: string;
  source?: "home_card" | "breed_detail" | "lucknow_breed_detail";
  pagePath?: string;
  occurredAt?: string;
};

export async function POST(req: Request) {
  let body: LeadClickBody;
  try {
    body = (await req.json()) as LeadClickBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!body.channel || !body.breed || !body.source) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const event = {
    type: "lead_click",
    ...body,
    receivedAt: new Date().toISOString(),
    userAgent: req.headers.get("user-agent") ?? "",
    referer: req.headers.get("referer") ?? "",
  };

  // Always log server-side so leads are visible in deployment logs.
  console.info("[lead-click]", JSON.stringify(event));

  const webhook = process.env.LEAD_TRACKING_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error("[lead-click] webhook_forward_failed", error);
    }
  }

  return NextResponse.json({ ok: true });
}
