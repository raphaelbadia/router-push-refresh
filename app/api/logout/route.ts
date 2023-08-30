import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(): Promise<NextResponse> {
  const resp = NextResponse.json({ success: true });

  resp.cookies.delete("user");
  return resp;
}
