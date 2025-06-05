// Google Analytics and Google Ads tracking utility

// Define the gtag function type
export type GTagFunction = (
  command: string,
  action: string,
  params?: {
    send_to?: string
    event_category?: string
    event_label?: string
    value?: number
    currency?: string
    [key: string]: any
  },
) => void

// Export gtag as any since it's added via script tag and not directly imported
export const gtag = (() => {
  if (typeof window !== "undefined") {
    return (
      window.gtag ||
      ((...args: any[]) => {
        // If gtag is not available (e.g. during SSR or if analytics is blocked),
        // provide a no-op implementation that logs to console in development
        if (process.env.NODE_ENV !== "production") {
          console.log("gtag called but not available:", args)
        }
      })
    )
  }
  return (...args: any[]) => {
    // Server-side no-op implementation
  }
})() as GTagFunction

// Helper function to track conversions
export const trackConversion = (conversionId: string, value = 1.0) => {
  if (typeof window !== "undefined" && typeof gtag === "function") {
    gtag("event", "conversion", {
      send_to: conversionId,
      value: value,
      currency: "EUR",
    })
    console.log("Conversion tracked:", conversionId)
  }
}
