import type { ReactNode } from "react"

interface PageContainerProps {
  children: ReactNode
  className?: string
  removeHeader?: boolean
}

export default function PageContainer({ children, className = "", removeHeader = false }: PageContainerProps) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-wedding-background to-white ${className}`}
    >
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
        {!removeHeader && (
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-wedding-accent to-wedding-muted opacity-50" />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}

