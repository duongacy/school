import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <main id="content" className="container mx-auto my-8 px-4">
      <section className="border p-6 bg-white rounded">
        <h1 className="text-2xl font-semibold">shadcn UI demo</h1>
        <p className="text-sm text-muted-foreground mt-2">A quick playground for UI components.</p>

        <div className="mt-4 flex gap-2">
          <Input placeholder="Nhập thử" />
          <Button>Submit</Button>
        </div>
      </section>
    </main>
  );
}
