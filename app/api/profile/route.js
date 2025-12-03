import { NextResponse } from "next/server";
import { db } from "@/../db";

// Kita pakai query parameter untuk simulasi login check
// Contoh call: /api/profile?email=user@test.com
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { message: "Harap login (kirim param email)" },
      { status: 401 }
    );
  }

  const user = db.users.find((u) => u.email === email);

  if (!user) {
    return NextResponse.json(
      { message: "User tidak ditemukan" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    status: 200,
    data: {
      nama: user.nama,
      email: user.email,
      telp: user.telp,
      foto: user.foto,
    },
  });
}
