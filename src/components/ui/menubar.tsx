import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "yflex yh-10 yitems-center yspace-x-1 yrounded-md yborder yborder-slate-200 ybg-white yp-1 dark:yborder-slate-800 dark:ybg-slate-950",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "yflex ycursor-default yselect-none yitems-center yrounded-sm ypx-3 ypy-1.5 ytext-sm yfont-medium youtline-none focus:ybg-slate-100 focus:ytext-slate-900 data-[state=open]:ybg-slate-100 data-[state=open]:ytext-slate-900 dark:focus:ybg-slate-800 dark:focus:ytext-slate-50 dark:data-[state=open]:ybg-slate-800 dark:data-[state=open]:ytext-slate-50",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "yflex ycursor-default yselect-none yitems-center yrounded-sm ypx-2 ypy-1.5 ytext-sm youtline-none focus:ybg-slate-100 focus:ytext-slate-900 data-[state=open]:ybg-slate-100 data-[state=open]:ytext-slate-900 dark:focus:ybg-slate-800 dark:focus:ytext-slate-50 dark:data-[state=open]:ybg-slate-800 dark:data-[state=open]:ytext-slate-50",
      inset && "ypl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="yml-auto yh-4 yw-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "yz-50 ymin-w-[8rem] yoverflow-hidden yrounded-md yborder yborder-slate-200 ybg-white yp-1 ytext-slate-950 data-[state=open]:yanimate-in data-[state=closed]:yanimate-out data-[state=closed]:yfade-out-0 data-[state=open]:yfade-in-0 data-[state=closed]:yzoom-out-95 data-[state=open]:yzoom-in-95 data-[side=bottom]:yslide-in-from-top-2 data-[side=left]:yslide-in-from-right-2 data-[side=right]:yslide-in-from-left-2 data-[side=top]:yslide-in-from-bottom-2 dark:yborder-slate-800 dark:ybg-slate-950 dark:ytext-slate-50",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "yz-50 ymin-w-[12rem] yoverflow-hidden yrounded-md yborder yborder-slate-200 ybg-white yp-1 ytext-slate-950 yshadow-md data-[state=open]:yanimate-in data-[state=closed]:yfade-out-0 data-[state=open]:yfade-in-0 data-[state=closed]:yzoom-out-95 data-[state=open]:yzoom-in-95 data-[side=bottom]:yslide-in-from-top-2 data-[side=left]:yslide-in-from-right-2 data-[side=right]:yslide-in-from-left-2 data-[side=top]:yslide-in-from-bottom-2 dark:yborder-slate-800 dark:ybg-slate-950 dark:ytext-slate-50",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "yrelative yflex ycursor-default yselect-none yitems-center yrounded-sm ypx-2 ypy-1.5 ytext-sm youtline-none focus:ybg-slate-100 focus:ytext-slate-900 data-[disabled]:ypointer-events-none data-[disabled]:yopacity-50 dark:focus:ybg-slate-800 dark:focus:ytext-slate-50",
      inset && "ypl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "yrelative yflex ycursor-default yselect-none yitems-center yrounded-sm ypy-1.5 ypl-8 ypr-2 ytext-sm youtline-none focus:ybg-slate-100 focus:ytext-slate-900 data-[disabled]:ypointer-events-none data-[disabled]:yopacity-50 dark:focus:ybg-slate-800 dark:focus:ytext-slate-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="yabsolute yleft-2 yflex yh-3.5 yw-3.5 yitems-center yjustify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="yh-4 yw-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "yrelative yflex ycursor-default yselect-none yitems-center yrounded-sm ypy-1.5 ypl-8 ypr-2 ytext-sm youtline-none focus:ybg-slate-100 focus:ytext-slate-900 data-[disabled]:ypointer-events-none data-[disabled]:yopacity-50 dark:focus:ybg-slate-800 dark:focus:ytext-slate-50",
      className
    )}
    {...props}
  >
    <span className="yabsolute yleft-2 yflex yh-3.5 yw-3.5 yitems-center yjustify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="yh-2 yw-2 yfill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "ypx-2 ypy-1.5 ytext-sm yfont-semibold",
      inset && "ypl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("y-mx-1 ymy-1 yh-px ybg-slate-100 dark:ybg-slate-800", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "yml-auto ytext-xs ytracking-widest ytext-slate-500 dark:ytext-slate-400",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
