"use client"

import { cn } from "@/lib/utils"

type DatePickerProps = {
  value?: string
  onChange?: (v: string) => void
  className?: string
}

export function DatePicker({ value, onChange, className }: DatePickerProps) {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={cn("rounded-md border px-3 py-2 text-sm", className)}
    />
  )
}

export default DatePicker
