import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function POST(request: NextRequest): Promise<NextResponse> {
  const resp = NextResponse.json({ success: true });
  const newUserId = (await request.json()).newUserId;

  resp.cookies.set("user", newUserId);
  return resp;
}
