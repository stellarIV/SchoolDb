import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "yinline-flex yitems-center yjustify-center ywhitespace-nowrap yrounded-md ytext-sm yfont-medium yring-offset-white ytransition-colors focus-visible:youtline-none focus-visible:yring-2 focus-visible:yring-slate-950 focus-visible:yring-offset-2 disabled:ypointer-events-none disabled:yopacity-50 dark:yring-offset-slate-950 dark:focus-visible:yring-slate-300",
  {
    variants: {
      variant: {
        default: "ybg-slate-900 ytext-slate-50 hover:ybg-slate-900/90 dark:ybg-slate-50 dark:ytext-slate-900 dark:hover:ybg-slate-50/90",
        destructive:
          "ybg-red-500 ytext-slate-50 hover:ybg-red-500/90 dark:ybg-red-900 dark:ytext-slate-50 dark:hover:ybg-red-900/90",
        outline:
          "yborder yborder-slate-200 ybg-white hover:ybg-slate-100 hover:ytext-slate-900 dark:yborder-slate-800 dark:ybg-slate-950 dark:hover:ybg-slate-800 dark:hover:ytext-slate-50",
        secondary:
          "ybg-slate-100 ytext-slate-900 hover:ybg-slate-100/80 dark:ybg-slate-800 dark:ytext-slate-50 dark:hover:ybg-slate-800/80",
        ghost: "hover:ybg-slate-100 hover:ytext-slate-900 dark:hover:ybg-slate-800 dark:hover:ytext-slate-50",
        link: "ytext-slate-900 yunderline-offset-4 hover:yunderline dark:ytext-slate-50",
      },
      size: {
        default: "yh-10 ypx-4 ypy-2",
        sm: "yh-9 yrounded-md ypx-3",
        lg: "yh-11 yrounded-md ypx-8",
        icon: "yh-10 yw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
