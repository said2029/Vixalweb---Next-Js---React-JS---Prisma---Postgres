import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req:NextRequest) {
  const body = await req.formData();

  body.append("upload_preset", "vixalweb");
  body.append("api_key", "377851145381949");

  const { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/dq7hzxumk/image/upload",
    body,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      maxContentLength: 50 * 1024 * 1024, // 50MB
      maxBodyLength: 50 * 1024 * 1024, // 50MB
    },
  );

  return NextResponse.json(data);
}
