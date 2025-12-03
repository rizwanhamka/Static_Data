import { NextResponse } from "next/server";
import { db } from "@/../db";

export async function GET() {
  // Ambil 3 gambar pertama saja sesuai request
  const limitedData = db.pemberitahuan.slice(0, 3);

  return NextResponse.json({
    status: 200,
    data: limitedData,
  });
}
