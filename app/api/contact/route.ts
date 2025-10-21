import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  console.log("[v0] Contact submission:", body)
  // In production, send an email or persist to a database here.
  return NextResponse.json({ ok: true })
}
