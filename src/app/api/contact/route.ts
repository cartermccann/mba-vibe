import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    name?: string;
    email?: string;
    role?: string;
    programs?: string[];
    company?: string;
  } | null;

  if (!body || body.company) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body.name || !body.email || !body.role || !body.programs?.length) {
    return NextResponse.json(
      { error: "Please complete the required fields." },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
