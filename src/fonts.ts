import localFont from "next/font/local"

// Font chính cho toàn bộ văn bản
export const fontBody = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    {
      path: "../public/fonts/geist/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/geist/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
})

// Font code hoặc đơn cách
export const geistMono = localFont({
  variable: "--font-geist-mono",
  display: "swap",
  src: [
    {
      path: "../public/fonts/geist-mono/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
})

// Font tiêu đề: Basic Rounded
export const fontHeading = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    {
      path: "../public/fonts/basic-rounded/BasicCommercialSoftRounded.woff2",
      weight: "400",
      style: "normal",
    },
  ],
})
