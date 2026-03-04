// src/app/api/contact/route.ts
import { NextResponse } from "next/server"

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSctJfQmn8t5-vIh3NZDxe6lLvpwJxLLdyXjNP_RxmIpeDJCAg/formResponse"

// From your DevTools payload on the real Google Form submit:
const ENTRY_NAME = "entry.1742773442"
const ENTRY_EMAIL = "entry.51276177"
const ENTRY_MESSAGE = "entry.43820793"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 })
    }

    // Build x-www-form-urlencoded payload
    const body = new URLSearchParams()
    body.set(ENTRY_NAME, String(name))
    body.set(ENTRY_EMAIL, String(email))
    body.set(ENTRY_MESSAGE, String(message))

    // Required hidden fields that worked for you
    body.set("fvv", "1")
    body.set("pageHistory", "0")

    // IMPORTANT:
    // Your earlier (working) web submit included extra fields like:
    // fbzx, partialResponse, dlut, hud, submissionTimestamp.
    // Server-to-Google-Form submissions often require fbzx.
    // If your server submit doesn't show in responses, you MUST include fbzx.
    //
    // For now we try without fbzx; if it doesn't appear, you need to add fbzx fetch logic.
    const googleRes = await fetch(FORM_ACTION, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body,
      redirect: "follow",
    })

    // Google often returns 200 even if it doesn't record; but non-2xx is definitely bad.
    if (!googleRes.ok) {
      const text = await googleRes.text().catch(() => "")
      return NextResponse.json(
        { ok: false, status: googleRes.status, error: "Google Form rejected", detail: text.slice(0, 300) },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 })
  }
}