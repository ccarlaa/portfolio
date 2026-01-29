"use client"

import { useState } from "react"
import { Palette, Check } from "lucide-react"
import { useAccentColor, accentColors } from "@/lib/accent-color-context"
import { Button } from "@/components/ui/button"

export function AccentColorPicker() {
  const { accentColor, setAccentColor } = useAccentColor()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2 cursor-pointer"
        title="Choose accent color"
      >
        <Palette className="h-4 w-4" />
        <span className="hidden sm:inline">Color</span>
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 bg-card border border-border rounded-lg shadow-lg p-3 animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-muted-foreground px-1 font-medium">
                Pick your vibe ✨
              </p>
              <div className="flex gap-2">
                {accentColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => {
                      setAccentColor(color)
                      setIsOpen(false)
                    }}
                    className="relative w-8 h-8 rounded-full transition-transform hover:scale-110 active:scale-95"
                    style={{
                      backgroundColor: color.primary,
                      boxShadow: `0 0 12px ${color.primary}`,
                    }}
                    title={color.name}
                  >
                    {accentColor.name === color.name && (
                      <Check className="h-4 w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-md" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
