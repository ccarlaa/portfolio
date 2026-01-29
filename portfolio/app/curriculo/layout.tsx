import React from "react"
import { LocaleProvider } from "@/lib/locale-context"

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LocaleProvider>{children}</LocaleProvider>
}
