import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-base transition-all duration-200",
        "placeholder:text-muted-foreground",
        "hover:border-primary/30",
        "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "resize-y",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
