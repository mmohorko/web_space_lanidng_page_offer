import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  try {
    console.log("Testing email configuration")
    console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Set" : "Not set")
    console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "Set" : "Not set")

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          message: "Email environment variables are not set",
        },
        { status: 500 },
      )
    }

    // Create a test transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Verify the connection
    const verificationResult = await transporter.verify().catch((err) => {
      console.error("Transporter verification error:", err)
      return false
    })

    if (!verificationResult) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to verify email transporter",
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Email configuration is valid",
      emailUser: process.env.EMAIL_USER?.substring(0, 3) + "...", // Show only first 3 chars for security
    })
  } catch (error) {
    console.error("Test email error:", error)
    return NextResponse.json(
      {
        success: false,
        message: `Error testing email: ${error instanceof Error ? error.message : String(error)}`,
      },
      { status: 500 },
    )
  }
}
