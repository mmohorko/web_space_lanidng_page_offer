import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      package: formData.get("package"),
      website: formData.get("website"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      newsletter: formData.get("newsletter"),
      timestamp: new Date().toISOString(),
    }

    // Log the submission (you can see this in Vercel function logs)
    console.log("Contact form submission:", data)

    // For now, just return success
    // You can later add email functionality here
    return NextResponse.json({
      success: true,
      message: "Sporočilo je bilo uspešno poslano. Hvala za vaše zanimanje!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Prišlo je do napake pri pošiljanju sporočila. Prosimo, poskusite znova.",
      },
      { status: 500 },
    )
  }
}
