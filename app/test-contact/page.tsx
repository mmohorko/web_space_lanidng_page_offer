import DebugContactForm from "../components/debug-contact-form"

export default function TestContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Form Debug Page</h1>

        <div className="mb-8 text-center">
          <p className="text-gray-600 mb-4">This is a simplified contact form for debugging purposes.</p>
          <div className="space-y-2 text-sm text-gray-500">
            <p>1. Fill out the form below</p>
            <p>2. Open browser console (F12) to see detailed logs</p>
            <p>3. Check the status message after submission</p>
          </div>
        </div>

        <DebugContactForm />

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            You can also test the API directly by visiting:{" "}
            <a href="/api/debug-contact" className="text-blue-500 underline">
              /api/debug-contact
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
