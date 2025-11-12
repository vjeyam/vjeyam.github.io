import { twMerge } from "tailwind-merge"
import type { HTMLAttributes } from "react"

export default function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={twMerge(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-neutral-700 bg-neutral-900/60",
        className
      )}
      {...props}
    />
  )
}
