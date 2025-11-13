"use client"

import { useId, useState, useEffect, useRef } from "react"
import { cn } from "@/lib/cn";

type ComboboxProps = {
  options: string[]
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export function Combobox({ options, placeholder, value: controlledValue, onChange, className }: ComboboxProps) {
  const id = useId()
  const [value, setValue] = useState(controlledValue ?? "")
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (controlledValue !== undefined) setValue(controlledValue)
  }, [controlledValue])

  const filtered = options.filter((o) => o.toLowerCase().includes(value.toLowerCase()))

  function select(v: string) {
    setValue(v)
    onChange?.(v)
    setOpen(false)
    ref.current?.blur()
  }

  return (
    <div className={cn("relative w-full", className)}>
      <input
        id={id}
        ref={ref}
        value={value}
        onChange={(e) => { setValue(e.target.value); setOpen(true); onChange?.(e.target.value) }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        placeholder={placeholder}
        className="w-full rounded-md border px-3 py-2 text-sm"
        aria-autocomplete="list"
        aria-controls={`${id}-listbox`}
        aria-expanded={open}
      />

      {open && filtered.length > 0 && (
        <ul id={`${id}-listbox`} role="listbox" className="absolute z-50 mt-1 max-h-48 w-full overflow-auto rounded-md border bg-popover py-1 shadow">
          {filtered.map((opt) => (
            <li
              key={opt}
              role="option"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => select(opt)}
              className="cursor-pointer px-3 py-1 text-sm hover:bg-accent"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Combobox
