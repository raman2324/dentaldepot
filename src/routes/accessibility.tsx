import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/dental/shared";
import { store } from "@/data/dental";
export const Route = createFileRoute("/accessibility")({ head: () => ({ meta: [{ title: "Accessibility Statement | Dental Depot" }, { name: "description", content: "Dental Depot accessibility statement and support contact." }, { property: "og:title", content: "Accessibility Statement" }, { property: "og:description", content: "Dental Depot accessibility support." }] }), component: Page });
function Page() { return <PageShell><section className="container-care max-w-3xl py-14"><p className="eyebrow">Accessibility</p><h1 className="mt-3 text-5xl font-black">Accessibility statement.</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">We aim to meet WCAG 2.1 AA. If you hit a barrier while shopping, call {store.phone} or email {store.email} and we’ll help promptly.</p></section></PageShell>; }
