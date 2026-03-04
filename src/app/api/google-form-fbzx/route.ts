// src/app/api/google-form-fbzx/route.ts
import { NextResponse } from "next/server"

// Public "viewform" URL (must be public-accessible)
const VIEWFORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSctJfQmn8t5-vIh3NZDxe6lLvpwJxLLdyXjNP_RxmIpeDJCAg/viewform"

export async function GET() {
  try {
    const res = await fetch(VIEWFORM_URL, {
      // avoid caching old tokens
      cache: "no-store",
      headers: {
        // helps Google return the normal HTML
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
      },
    })

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: `Failed to fetch viewform: ${res.status}` },
        { status: 502 }
      )
    }

    const html = await res.text()

    // fbzx appears as: name="fbzx" value="...."
    const m = html.match(/name="fbzx"\s+value="([^"]+)"/)
    const fbzx = m?.[1]

    if (!fbzx) {
      return NextResponse.json(
        { ok: false, error: "fbzx not found in viewform HTML (form may not be public)." },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true, fbzx })
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown error" },
      { status: 500 }
    )
  }
}