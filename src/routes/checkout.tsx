import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/dental/shared";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout | Dental Depot" }, { name: "description", content: "Secure Dental Depot checkout." }, { property: "og:title", content: "Checkout | Dental Depot" }, { property: "og:description", content: "Secure Dental Depot checkout." }] }),
  component: Page,
});
function Page() { return <PageShell><section className="container-care grid gap-8 py-14 lg:grid-cols-[1fr_0.45fr]"><form className="rounded-lg border bg-card p-6"><p className="eyebrow">Secure checkout</p><h1 className="mt-3 text-5xl font-black">Shipping and payment.</h1><div className="mt-8 grid gap-4 md:grid-cols-2">{["Email", "Phone", "First name", "Last name", "Address", "City", "State", "ZIP"].map((label) => <label key={label} className="grid gap-2 font-bold text-foreground">{label}<input className="min-h-12 rounded-md border bg-background px-4" /></label>)}</div><Button size="lg" className="mt-6 w-full">Place order</Button></form><aside className="h-fit rounded-lg border bg-card p-6"><h2 className="text-2xl font-black">Order summary</h2><p className="mt-4 text-muted-foreground">Free-shipping progress, taxes, and final shipping options display here.</p></aside></section></PageShell>; }
