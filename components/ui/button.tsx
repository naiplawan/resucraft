import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-vintage hover:bg-primary/90 hover:shadow-vintage-deep active:shadow-vintage",
        destructive:
          "bg-destructive text-destructive-foreground shadow-vintage hover:bg-destructive/90 hover:shadow-vintage-deep active:shadow-vintage",
        outline:
          "border-2 border-border bg-background hover:bg-muted hover:border-primary active:bg-muted/80 shadow-vintage",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 shadow-vintage",
        ghost:
          "hover:bg-muted hover:text-foreground active:bg-muted/80",
        link:
          "text-primary underline-offset-4 hover:underline active:underline",
        // Vintage themed variants
        vintage:
          "bg-gradient-primary text-white shadow-vintage hover:shadow-vintage-deco active:shadow-vintage",
        "vintage-gold":
          "bg-gradient-gold text-vintage-ink shadow-vintage hover:shadow-vintage-deep active:shadow-vintage",
        "vintage-outline":
          "border-2 border-vintage-brown bg-paper-texture text-vintage-brown hover:bg-vintage-cream active:bg-muted shadow-vintage",
        "vintage-paper":
          "paper-texture text-vintage-brown border-2 border-vintage-brown/30 shadow-vintage hover:border-vintage-brown active:bg-muted",
        deco:
          "border-deco bg-paper-texture text-vintage-brown shadow-vintage hover:shadow-vintage-deep",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-sm touch-target",
        sm: "h-9 rounded-sm gap-1.5 px-3 text-xs touch-target",
        lg: "h-12 rounded-sm px-8 text-base touch-target",
        xl: "h-14 rounded-sm px-10 text-lg touch-target",
        icon: "size-11 rounded-sm touch-target",
        "icon-sm": "size-9 rounded-sm touch-target",
        "icon-lg": "size-12 rounded-sm touch-target",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
