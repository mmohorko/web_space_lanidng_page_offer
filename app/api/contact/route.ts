import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Define the type for form data
type FormData = {
  name: string
  email: string
  company: string
  website?: string
  phone?: string
  message: string
  newsletter?: boolean
}

// Helper function to format website URL
function formatWebsiteUrl(url: string): string {
  if (!url) return ""
  if (!url.match(/^https?:\/\//i)) {
    return `https://${url}`
  }
  return url
}

export async function POST(request: NextRequest) {
  console.log("=== CONTACT FORM API CALLED ===")

  try {
    const formData: FormData = await request.json()
    console.log("Received form data:", JSON.stringify(formData, null, 2))

    // Validate required fields
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      console.log("❌ Missing required fields")
      return NextResponse.json(
        {
          success: false,
          message: "Prosimo, izpolnite vsa obvezna polja.",
        },
        { status: 400 },
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      console.log("❌ Invalid email format")
      return NextResponse.json(
        {
          success: false,
          message: "Prosimo, vnesite veljaven e-poštni naslov.",
        },
        { status: 400 },
      )
    }

    // Format website URL if provided
    if (formData.website) {
      formData.website = formatWebsiteUrl(formData.website)
    }

    // Check environment variables
    console.log("Environment check:")
    console.log("- EMAIL_USER:", process.env.EMAIL_USER ? "✅ Set" : "❌ Not set")
    console.log("- EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "✅ Set" : "❌ Not set")
    console.log("- NODE_ENV:", process.env.NODE_ENV)
    console.log("- VERCEL_ENV:", process.env.VERCEL_ENV)

    // For development/preview, just return success
    if (process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") {
      console.log("🔧 Development/Preview mode - simulating email send")
      return NextResponse.json({
        success: true,
        message: "Sporočilo je bilo uspešno poslano (testni način). Hvala za vaše zanimanje!",
      })
    }

    // Production email sending
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("❌ Email environment variables not configured")
      return NextResponse.json(
        {
          success: false,
          message: "Napaka pri konfiguraciji e-pošte. Prosimo, kontaktirajte administratorja.",
        },
        { status: 500 },
      )
    }

    console.log("📧 Creating email transporter for Zoho...")
    const transporter = nodemailer.createTransporter({
      host: "smtppro.zoho.eu",
      port: 587,
      secure: false, // true for 465, false for other ports like 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Verify transporter
    console.log("🔍 Verifying email transporter...")
    try {
      await transporter.verify()
      console.log("✅ Email transporter verified successfully")
    } catch (verifyError) {
      console.error("❌ Email transporter verification failed:", verifyError)
      return NextResponse.json(
        {
          success: false,
          message: "Napaka pri povezavi z e-poštnim strežnikom.",
        },
        { status: 500 },
      )
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // This should be miha@webspace.marketing
      to: "miha@webspace.marketing", // Your receiving email
      subject: `Novo povprasevanje s spletne strani Web Space - ${formData.company}`,
      html: `
        <h1>Novo sporočilo s spletne strani</h1>
        <p><strong>Ime in priimek:</strong> ${formData.name}</p>
        <p><strong>E-pošta:</strong> ${formData.email}</p>
        <p><strong>Podjetje:</strong> ${formData.company}</p>
        ${formData.website ? `<p><strong>Spletna stran:</strong> ${formData.website}</p>` : ""}
        ${formData.phone ? `<p><strong>Telefon:</strong> ${formData.phone}</p>` : ""}
        <p><strong>Sporočilo:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
        ${formData.newsletter ? "<p><strong>Prijava na novice:</strong> Da</p>" : ""}
        <p><em>Poslano s spletne strani Web Space</em></p>
      `,
      replyTo: formData.email,
    }

    console.log("📤 Sending email...")
    console.log("- To:", mailOptions.to)
    console.log("- Subject:", mailOptions.subject)

    try {
      const info = await transporter.sendMail(mailOptions)
      console.log("✅ Email sent successfully!")
      console.log("- Message ID:", info.messageId)

      // Send confirmation email to user
      const confirmationMailOptions = {
        from: process.env.EMAIL_USER,
        to: formData.email,
        subject: "Potrditev prejema sporocila - Web Space",
        html: `
          <h1>Hvala za vaše sporočilo</h1>
          <p>Pozdravljeni ${formData.name},</p>
          <p>Zahvaljujemo se vam za vaše sporočilo. Prejeli smo ga in se bomo odzvali v najkrajšem možnem času.</p>
          <p>Lep pozdrav,</p>
          <p><strong>Ekipa Web Space</strong></p>
        `,
      }

      try {
        await transporter.sendMail(confirmationMailOptions)
        console.log("✅ Confirmation email sent to user")
      } catch (confirmationError) {
        console.error("⚠️ Failed to send confirmation email:", confirmationError)
        // Don't fail the whole process if confirmation email fails
      }

      return NextResponse.json({
        success: true,
        message: "Sporočilo je bilo uspešno poslano. Hvala za vaše zanimanje!",
      })
    } catch (emailError) {
      console.error("❌ Failed to send email:", emailError)
      return NextResponse.json(
        {
          success: false,
          message: `Napaka pri pošiljanju e-pošte: ${emailError.message}`,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("❌ General error in contact API:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Prišlo je do napake pri pošiljanju sporočila. Prosimo, poskusite znova.",
      },
      { status: 500 },
    )
  }
}
