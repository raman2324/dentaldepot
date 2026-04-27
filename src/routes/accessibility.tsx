import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/dental/shared";

export const Route = createFileRoute("/accessibility")({
  head: () => ({ meta: [{ title: "Accessibility Statement | Hearthside Family Dental" }, { name: "description", content: "Our commitment to accessible dental care and website support." }, { property: "og:title", content: "Accessibility Statement" }, { property: "og:description", content: "Our commitment to accessible dental care and website support." }] }),
  component: Page,
});

function Page() { return <PageShell><section className="container-care max-w-3xl py-16"><p className="eyebrow">Accessibility</p><h1 className="mt-3 text-5xl font-extrabold">Accessibility statement.</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">We aim to meet WCAG 2.1 AA and remove barriers quickly. If you experience a barrier, contact us by phone or email and we’ll respond promptly.</p></section></PageShell>; }
