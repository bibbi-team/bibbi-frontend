import React from "react";
import "../webview.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
