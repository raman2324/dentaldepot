import { createFileRoute } from "@tanstack/react-router";
import { BookCTA, ClickToCall, PageShell } from "@/components/dental/shared";
import { practice } from "@/data/dental";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Hearthside Family Dental | Hearthside Family Dental" }, { name: "description", content: "Call, email, or book online with Hearthside Family Dental." }, { property: "og:title", content: "Contact Hearthside Family Dental" }, { property: "og:description", content: "Call, email, or book online with Hearthside Family Dental." }] }),
  component: Page,
});

function Page() { return <PageShell><section className="container-care py-16"><p className="eyebrow">Contact</p><h1 className="mt-3 text-5xl font-extrabold md:text-6xl">How can we help?</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">Call {practice.phone}, email {practice.email}, or book online anytime.</p><div className="mt-8 flex flex-wrap gap-3"><ClickToCall /><BookCTA /></div></section></PageShell>; }
