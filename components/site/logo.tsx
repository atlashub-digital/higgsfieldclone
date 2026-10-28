import Link from "next/link"

import { BRAND } from "@/lib/brand"
import { cn } from "@/lib/utils"

/** Atlas Studio mark: a lime tile with an A (for Atlas). Placeholder wordmark until brand assets arrive. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn("size-8", className)}>
      <rect width="32" height="32" rx="8" fill="#D1FE17" />
      <path
        fillRule="evenodd"
        d="M14.3 7.5h3.4l7.3 17h-3.6l-1.6-3.9h-7.6l-1.6 3.9H7zm1.7 4.3-2.6 6.1h5.2z"
        fill="#131517"
      />
    </svg>
  )
}

export function Logo({
  compact = false,
  className,
}: {
  compact?: boolean
  className?: string
}) {
  return (
    <Link
      href="/"
      aria-label={`${BRAND.name} home`}
      className={cn("flex shrink-0 items-center gap-2", className)}
    >
      <LogoMark className={compact ? "size-6" : "size-8"} />
      <span
        className={cn(
          "font-display text-foreground",
          compact ? "text-base" : "text-lg"
        )}
      >
        {BRAND.name}
      </span>
    </Link>
  )
}
