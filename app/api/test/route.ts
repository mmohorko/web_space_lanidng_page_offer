import { NextResponse } from "next/server"

export async function GET() {
  console.log("=== TEST ENDPOINT CALLED ===")

  const envCheck = {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
    EMAIL_USER: process.env.EMAIL_USER ? "Set" : "Not set",
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? "Set" : "Not set",
  }

  console.log("Environment variables:", envCheck)

  return NextResponse.json({
    message: "Test endpoint working",
    environment: envCheck,
    timestamp: new Date().toISOString(),
  })
}
