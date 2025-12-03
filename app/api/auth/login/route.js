import { NextResponse } from "next/server";
import { db } from "@/../db";

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  const user = db.users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return NextResponse.json(
      { message: "Email atau password salah" },
      { status: 401 }
    );
  }

  // Di dunia nyata pakai JWT Token. Disini kita kirim balik email sebagai 'kunci'
  return NextResponse.json({
    message: "Login berhasil",
    token: "dummy-token-secret-123", // Ceritanya ini token
    user: {
      email: user.email,
      nama: user.nama,
    },
  });
}
