"use client"

import { useLocale } from "@/lib/locale-context"

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="py-12 border-t border-border">
      <div className="space-y-4 text-sm text-muted-foreground">
        <p className="leading-relaxed max-w-lg">
          {t.footer.builtWith}{" "}
          <a 
            href="https://nextjs.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Next.js
          </a>{" "}
          {t.footer.and}{" "}
          <a 
            href="https://tailwindcss.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Tailwind CSS
          </a>
          . {t.footer.deployedOn}{" "}
          <a 
            href="https://vercel.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Vercel
          </a>
          .
        </p>
        
        <p>
          © {new Date().getFullYear()} Carla Clementino. {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
