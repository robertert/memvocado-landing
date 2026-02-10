import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  const listId = process.env.BREVO_LIST_ID;

  const body: Record<string, unknown> = {
    email,
    updateEnabled: true,
    attributes: {
      FIRSTNAME: name || "",
    },
  };

  if (listId) {
    body.listIds = [Number(listId)];
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    const message = data?.message || "Subscription failed";

    if (res.status === 400 && message.includes("already")) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: message }, { status: res.status });
  }

  return NextResponse.json({ ok: true });
}
