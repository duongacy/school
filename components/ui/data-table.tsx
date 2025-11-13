import * as React from "react"
import { cn } from "@/lib/cn";

type Column<T> = {
  key: keyof T
  header: string
  className?: string
  render?: (row: T) => React.ReactNode
}

type DataTableProps<T> = {
  columns: Column<T>[]
  data: T[]
  className?: string
}

export function DataTable<T extends Record<string, any>>({ columns, data, className }: DataTableProps<T>) {
  return (
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full caption-bottom text-sm">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className={cn("h-10 px-2 text-left font-medium text-muted-foreground", col.className)}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b hover:bg-muted/50">
              {columns.map((col) => (
                <td key={String(col.key)} className={cn("p-2 align-middle", col.className)}>
                  {col.render ? col.render(row) : String(row[col.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
