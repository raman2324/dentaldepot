import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/dental/shared";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Notice | Hearthside Family Dental" }, { name: "description", content: "How Hearthside Family Dental protects patient information." }, { property: "og:title", content: "Privacy Notice" }, { property: "og:description", content: "How Hearthside Family Dental protects patient information." }] }),
  component: Page,
});

function Page() { return <PageShell><section className="container-care max-w-3xl py-16"><p className="eyebrow">Privacy</p><h1 className="mt-3 text-5xl font-extrabold">Privacy notice.</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">We protect your information with healthcare-grade privacy practices and only collect what we need to coordinate your care.</p></section></PageShell>; }
