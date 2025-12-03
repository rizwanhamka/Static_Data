import { NextResponse } from "next/server";
import { db } from "@/../db"; // Import database kita

export async function GET() {
  return NextResponse.json({
    status: 200,
    data: db.gallery,
  });
}
