"use server"

import nodemailer from "nodemailer"

// Define the type for form data
type FormData = {
  name: string
  email: string
  company: string
  package?: string
  website?: string
  phone?: string
  message: string
  newsletter?: boolean
}

// Helper function to format website URL
function formatWebsiteUrl(url: string): string {
  if (!url) return ""

  // If URL doesn't start with http:// or https://, add https://
  if (!url.match(/^https?:\/\//i)) {
    return `https://${url}`
  }

  return url
}

// Helper function to check if we're in a development environment
function isDevelopmentEnvironment() {
  // Check for development environment indicators
  return (
    process.env.NODE_ENV === "development" ||
    typeof window !== "undefined" ||
    process.env.VERCEL_ENV === "preview" ||
    process.env.VERCEL_ENV === "development"
  )
}

export async function submitContactForm(formData: FormData) {
  console.log("Form submission started with data:", JSON.stringify(formData, null, 2))
  console.log("Environment variables available:", {
    EMAIL_USER: process.env.EMAIL_USER ? "Set" : "Not set",
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? "Set" : "Not set",
  })

  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      console.log("Missing required fields")
      return {
        success: false,
        message: "Prosimo, izpolnite vsa obvezna polja.",
      }
    }

    // Format website URL if provided
    if (formData.website) {
      formData.website = formatWebsiteUrl(formData.website)
    }

    // Check if we're in a development environment
    if (isDevelopmentEnvironment()) {
      console.log("Development environment detected. Simulating email send.")

      // Log what would be sent
      console.log("Email would be sent to: info@webspace.marketing")
      console.log("From:", formData.email)
      console.log("Subject: Novo sporočilo s spletne strani - " + formData.company)
      console.log("Message:", formData.message)

      // Simulate success in development environment
      return {
        success: true,
        message: "Sporočilo je bilo uspešno poslano (testni način). Hvala za vaše zanimanje!",
      }
    }

    console.log("Production environment detected. Attempting to send real email.")

    // The code below will only run in production environment
    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.eu",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Log the email configuration (without password)
    console.log("Email configuration:", {
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: "********", // Masked for security
      },
    })

    // Prepare email content for the notification to the company
    const mailOptions = {
      from: {
        name: "Web Space",
        address: process.env.EMAIL_USER, // This will be miha@webspace.marketing
      },
      to: "miha@webspace.marketing", // Update this to your preferred receiving email
      subject: `Novo povprasevanje s spletne strani Web Space - ${formData.company}`,
      html: `
        <h1>Novo sporočilo s spletne strani</h1>
        <p><strong>Ime in priimek:</strong> ${formData.name}</p>
        <p><strong>E-pošta:</strong> ${formData.email}</p>
        <p><strong>Podjetje:</strong> ${formData.company}</p>
        ${formData.package ? `<p><strong>Izbrani paket:</strong> ${formData.package}</p>` : ""}
        ${formData.website ? `<p><strong>Spletna stran:</strong> ${formData.website}</p>` : ""}
        ${formData.phone ? `<p><strong>Telefon:</strong> ${formData.phone}</p>` : ""}
        <p><strong>Sporočilo:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
        ${formData.newsletter ? "<p><strong>Prijava na novice:</strong> Da</p>" : ""}
        <p><em>Poslano s spletne strani Web Space</em></p>
      `,
      replyTo: formData.email, // Set reply-to to the sender's email
    }

    // Send email
    try {
      console.log("Attempting to send email to:", mailOptions.to)
      console.log("Email configuration being used:", {
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER ? process.env.EMAIL_USER.substring(0, 3) + "..." : "undefined",
          pass: process.env.EMAIL_PASSWORD ? "********" : "undefined",
        },
      })

      // Test if environment variables are set
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.error("EMAIL_USER or EMAIL_PASSWORD environment variables are not set")
        return {
          success: false,
          message: "Napaka pri konfiguraciji e-pošte. Prosimo, kontaktirajte administratorja.",
        }
      }

      const info = await transporter.sendMail(mailOptions).catch((err) => {
        console.error("Detailed SMTP error:", err)
        throw new Error(`SMTP error: ${err.message}`)
      })

      console.log("Message sent successfully! Message ID:", info.messageId)
      console.log("Preview URL:", nodemailer.getTestMessageUrl(info))

      // Send confirmation email to the user who submitted the form
      const confirmationMailOptions = {
        from: {
          name: "Web Space",
          address: "info@webspace.marketing",
        },
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
        console.log("Confirmation email sent to:", formData.email)
      } catch (confirmationError) {
        console.error("Error sending confirmation email:", confirmationError)
        // Continue execution even if confirmation email fails
      }

      return {
        success: true,
        message: "Sporočilo je bilo uspešno poslano. Hvala za vaše zanimanje!",
      }
    } catch (emailError) {
      console.error("Error sending email:", emailError)
      console.error("Error details:", JSON.stringify(emailError, null, 2))

      // Return detailed error for debugging
      return {
        success: false,
        message: `Napaka pri pošiljanju e-pošte: ${emailError.message}. Prosimo, poskusite znova ali nas kontaktirajte na telefon.`,
      }
    }
  } catch (error) {
    console.error("General error in form submission:", error)
    return {
      success: false,
      message: "Prišlo je do napake pri pošiljanju sporočila. Prosimo, poskusite znova.",
    }
  }
}
