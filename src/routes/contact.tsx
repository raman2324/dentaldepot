import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/dental/shared";
import { store } from "@/data/dental";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Dental Depot" }, { name: "description", content: "Call, email, or write Dental Depot customer care in North Andover, MA." }, { property: "og:title", content: "Contact Dental Depot" }, { property: "og:description", content: "Dental Depot customer-care contact information." }] }),
  component: Page,
});
function Page() { return <PageShell><section className="container-care max-w-3xl py-14"><p className="eyebrow">Contact</p><h1 className="mt-3 text-5xl font-black md:text-6xl">Real humans answer the phone.</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">Need help finding the exact product your dentist recommended? Call {store.phone}, email {store.email}, or send the product name and we’ll look.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild><a href={`tel:${store.phone.replace(/[^0-9]/g, "")}`}>{store.phone}</a></Button><Button asChild variant="outline"><a href={`mailto:${store.email}`}>{store.email}</a></Button></div><p className="mt-8 font-bold text-foreground">{store.address}</p></section></PageShell>; }
