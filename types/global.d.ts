// Global type definitions
interface Window {
  gtag?: (
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
  dataLayer?: any[]
}

declare function gtag(
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
): void
