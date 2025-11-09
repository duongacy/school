"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Toggle } from "@/components/ui/toggle"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"
import Combobox from "@/components/ui/combobox"
import DataTable from "@/components/ui/data-table"
import DatePicker from "@/components/ui/date-picker"
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"

export default function Page() {
  // Form state (demo)
  const [name, setName] = useState("")
  const [grade, setGrade] = useState("5A")
  const [note, setNote] = useState("")

  // Table data + sorting + pagination
  const initial = [
    { name: "Nguyễn Văn A", class: "5A", age: 11 },
    { name: "Trần Thị B", class: "6B", age: 12 },
    { name: "Lê Văn C", class: "5A", age: 11 },
    { name: "Phạm Thị D", class: "7C", age: 13 },
    { name: "Hoàng E", class: "6B", age: 12 },
    { name: "Vũ F", class: "5A", age: 11 },
  ]

  const [data, setData] = useState(initial)
  const [sortKey, setSortKey] = useState<keyof typeof initial[number] | null>(null)
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")
  const [page, setPage] = useState(1)
  const pageSize = 3

  const sorted = useMemo(() => {
    if (!sortKey) return data
    const arr = [...data].sort((a, b) => {
      const va = a[sortKey]
      const vb = b[sortKey]
      if (va == null) return 1
      if (vb == null) return -1
      if (typeof va === "number" && typeof vb === "number") return sortDir === "asc" ? va - vb : vb - va
      return sortDir === "asc"
        ? String(va).localeCompare(String(vb))
        : String(vb).localeCompare(String(va))
    })
    return arr
  }, [data, sortKey, sortDir])

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const pageSlice = useMemo(() => {
    const start = (page - 1) * pageSize
    return sorted.slice(start, start + pageSize)
  }, [sorted, page])

  function toggleSort(key: keyof typeof initial[number]) {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc")
    else {
      setSortKey(key)
      setSortDir("asc")
    }
    setPage(1)
  }

  function addStudent() {
    if (!name.trim()) return
    setData((d) => [{ name: name.trim(), class: grade, age: Math.max(6, Math.floor(Math.random() * 10) + 6) }, ...d])
    setName("")
    setNote("")
  }

  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-2xl font-bold">shadcn components playground</h1>
        <p className="text-muted-foreground">A quick demo page that renders many generated UI components.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Buttons & Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </CardContent>
          <CardFooter />
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Form controls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Input placeholder="Họ và tên" value={name} onChange={(e) => setName(e.target.value)} />
              <Select value={grade} onValueChange={(v) => setGrade(v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn trái cây" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5A">5A</SelectItem>
                  <SelectItem value="6B">6B</SelectItem>
                  <SelectItem value="7C">7C</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-4">
                <Checkbox id="agree" />
                <label htmlFor="agree" className="text-sm">Tôi đồng ý</label>
                <Toggle />
              </div>
              <Textarea placeholder="Ghi chú" value={note} onChange={(e) => setNote(e.target.value)} />
              <div className="flex gap-2">
                <Button onClick={addStudent}>Thêm học sinh (demo)</Button>
                <Button variant="outline" onClick={() => { setName(""); setNote("") }}>Xóa</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avatar & Badge</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/avatar.png" alt="Avatar" />
                <AvatarFallback>HS</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Nguyễn Văn A</div>
                <Badge>Học sinh</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accordion & Tabs</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>Thông tin lớp</AccordionTrigger>
                <AccordionContent>Danh sách môn học và giáo viên.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Hoạt động</AccordionTrigger>
                <AccordionContent>Hoạt động ngoại khóa và sự kiện.</AccordionContent>
              </AccordionItem>
            </Accordion>

            <Tabs defaultValue="tab1" className="mt-4">
              <TabsList>
                <TabsTrigger value="tab1">Tổng quan</TabsTrigger>
                <TabsTrigger value="tab2">Lịch</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Nội dung tổng quan.</TabsContent>
              <TabsContent value="tab2">Lịch học và sự kiện.</TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Overlays</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Tiêu đề hộp thoại</DialogTitle>
                    <DialogDescription>Mô tả ngắn cho hộp thoại.</DialogDescription>
                  </DialogHeader>
                  <div className="mt-2">Nội dung chính của hộp thoại.</div>
                  <DialogFooter className="mt-4">
                    <Button variant="secondary">Hủy</Button>
                    <Button>Đồng ý</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="text-sm">Nội dung popover ví dụ.</div>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Extras: Combobox, DataTable, DatePicker</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="mb-2 font-medium">Combobox</div>
                <Combobox options={["Hà Nội","Hồ Chí Minh","Đà Nẵng","Hải Phòng","Cần Thơ"]} placeholder="Chọn thành phố" />
              </div>

              <div>
                <div className="mb-2 font-medium">DatePicker</div>
                <DatePicker />
              </div>

              <div>
                <div className="mb-2 font-medium">DataTable</div>
                <DataTable
                  columns={[
                    { key: "name", header: "Họ tên" },
                    { key: "class", header: "Lớp" },
                    { key: "age", header: "Tuổi" },
                  ]}
                  data={[
                    { name: "Nguyễn Văn A", class: "5A", age: 11 },
                    { name: "Trần Thị B", class: "6B", age: 12 },
                  ]}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Table</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">Hiển thị {sorted.length} kết quả</div>
                <div className="flex items-center gap-2">
                  <Badge>Trang {page} / {totalPages}</Badge>
                  <Pagination className="flex items-center">
                    <PaginationPrevious onClick={() => setPage((p) => Math.max(1, p - 1))} aria-label="Previous page">
                      Prev
                    </PaginationPrevious>
                    <PaginationContent>
                      {Array.from({ length: totalPages }).map((_, idx) => (
                        <li key={idx}>
                          <PaginationLink
                            isActive={page === idx + 1}
                            size="default"
                            onClick={() => setPage(idx + 1)}
                          >
                            {idx + 1}
                          </PaginationLink>
                        </li>
                      ))}
                    </PaginationContent>
                    <PaginationNext onClick={() => setPage((p) => Math.min(totalPages, p + 1))} aria-label="Next page">
                      Next
                    </PaginationNext>
                  </Pagination>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <button
                        type="button"
                        onClick={() => toggleSort("name")}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleSort("name") } }}
                        className="w-full text-left"
                        aria-sort={sortKey === "name" ? (sortDir === "asc" ? "ascending" : "descending") : "none"}
                      >
                        Họ tên {sortKey === "name" ? (sortDir === "asc" ? "↑" : "↓") : ""}
                      </button>
                    </TableHead>
                    <TableHead>
                      <button
                        type="button"
                        onClick={() => toggleSort("class")}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleSort("class") } }}
                        className="w-full text-left"
                        aria-sort={sortKey === "class" ? (sortDir === "asc" ? "ascending" : "descending") : "none"}
                      >
                        Lớp {sortKey === "class" ? (sortDir === "asc" ? "↑" : "↓") : ""}
                      </button>
                    </TableHead>
                    <TableHead>
                      <button
                        type="button"
                        onClick={() => toggleSort("age")}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleSort("age") } }}
                        className="w-full text-left"
                        aria-sort={sortKey === "age" ? (sortDir === "asc" ? "ascending" : "descending") : "none"}
                      >
                        Tuổi {sortKey === "age" ? (sortDir === "asc" ? "↑" : "↓") : ""}
                      </button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pageSlice.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.class}</TableCell>
                      <TableCell>{row.age}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
