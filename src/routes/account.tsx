import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/dental/shared";
export const Route = createFileRoute("/account")({ head: () => ({ meta: [{ title: "My Account | Dental Depot" }, { name: "description", content: "Sign in to reorder Dental Depot products." }, { property: "og:title", content: "My Account" }, { property: "og:description", content: "Sign in to reorder oral-care products." }] }), component: Page });
function Page() { return <PageShell><section className="container-care max-w-xl py-14"><p className="eyebrow">My account</p><h1 className="mt-3 text-5xl font-black">Reorder faster.</h1><div className="mt-8 rounded-lg border bg-card p-6"><label className="grid gap-2 font-bold text-foreground">Email<input type="email" className="min-h-12 rounded-md border bg-background px-4" /></label><Button className="mt-5 w-full">Send sign-in link</Button></div></section></PageShell>; }
