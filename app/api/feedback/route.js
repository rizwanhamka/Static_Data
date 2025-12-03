import { NextResponse } from "next/server";
import { db } from "@/../db";

// GET: Lihat semua feedback
export async function GET() {
  return NextResponse.json({
    status: 200,
    data: db.feedback,
  });
}

// POST: Kirim feedback baru
export async function POST(request) {
  const body = await request.json();
  const { nama, email, telp, isi } = body;

  if (!nama || !email || !telp || !isi) {
    return NextResponse.json(
      { message: "Data tidak lengkap" },
      { status: 400 }
    );
  }

  const newFeedback = {
    nama,
    email,
    telp,
    isi,
    date: new Date().toISOString(),
  };
  db.feedback.push(newFeedback); // Simpan ke memory

  return NextResponse.json(
    {
      message: "Feedback berhasil dikirim",
      data: newFeedback,
    },
    { status: 201 }
  );
}
