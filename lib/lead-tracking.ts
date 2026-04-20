"use client";

export type LeadChannel = "whatsapp" | "call" | "sms" | "email";

type LeadClickPayload = {
  channel: LeadChannel;
  breed: string;
  slug?: string;
  source: "home_card" | "breed_detail" | "lucknow_breed_detail";
};

export function trackLeadClick(payload: LeadClickPayload): void {
  const body = JSON.stringify({
    ...payload,
    pagePath: window.location.pathname,
    occurredAt: new Date().toISOString(),
  });

  try {
    const blob = new Blob([body], { type: "application/json" });
    const sent = navigator.sendBeacon?.("/api/lead-click", blob);
    if (sent) return;
  } catch {
    // Fall through to fetch.
  }

  void fetch("/api/lead-click", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // Ignore analytics failures.
  });
}
