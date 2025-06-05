import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  console.log("🚀 DEBUG CONTACT API CALLED")
  console.log("Time:", new Date().toISOString())

  try {
    // Log the request details
    console.log("Request method:", request.method)
    console.log("Request URL:", request.url)
    console.log("Request headers:", Object.fromEntries(request.headers.entries()))

    // Try to parse the body
    let body
    try {
      body = await request.json()
      console.log("Request body:", body)
    } catch (parseError) {
      console.error("❌ Failed to parse request body:", parseError)
      return NextResponse.json({ success: false, message: "Invalid JSON in request body" }, { status: 400 })
    }

    // Validate basic fields
    if (!body.name || !body.email || !body.message) {
      console.log("❌ Missing required fields")
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Log environment info
    console.log("Environment info:")
    console.log("- NODE_ENV:", process.env.NODE_ENV)
    console.log("- VERCEL_ENV:", process.env.VERCEL_ENV)
    console.log("- EMAIL_USER exists:", !!process.env.EMAIL_USER)
    console.log("- EMAIL_PASSWORD exists:", !!process.env.EMAIL_PASSWORD)

    // For now, just return success without actually sending email
    console.log("✅ Debug form submission successful")

    return NextResponse.json({
      success: true,
      message: "Debug form received successfully!",
      data: {
        name: body.name,
        email: body.email,
        messageLength: body.message.length,
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("❌ Unexpected error in debug contact API:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Server error occurred",
        error: error.message,
      },
      { status: 500 },
    )
  }
}

// Also handle GET requests for testing
export async function GET() {
  console.log("🔍 DEBUG CONTACT API - GET request")
  return NextResponse.json({
    message: "Debug contact API is working",
    timestamp: new Date().toISOString(),
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV,
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPassword: !!process.env.EMAIL_PASSWORD,
    },
  })
}
