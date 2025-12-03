import { NextResponse } from "next/server";
import { db } from "@/../db";

export async function POST(request) {
  const body = await request.json();
  const { nama, email, password } = body;

  // Cek jika email sudah ada
  const existingUser = db.users.find((u) => u.email === email);
  if (existingUser) {
    return NextResponse.json(
      { message: "Email sudah terdaftar" },
      { status: 400 }
    );
  }

  const newUser = {
    nama,
    email,
    password, // Di dunia nyata password harus di-hash, tapi ini tutorial simpel
    telp: "-", // Default
    foto: "https://via.placeholder.com/150", // Default
    role: "user",
  };

  db.users.push(newUser);

  return NextResponse.json(
    {
      message: "Register berhasil",
      data: { email: newUser.email, nama: newUser.nama },
    },
    { status: 201 }
  );
}
