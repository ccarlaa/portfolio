"use client"

import React from "react"

import { LocaleProvider } from "@/lib/locale-context"

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LocaleProvider>{children}</LocaleProvider>
}
