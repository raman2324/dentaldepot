import { createFileRoute } from "@tanstack/react-router";
import { BookCTA, PageShell } from "@/components/dental/shared";

export const Route = createFileRoute("/new-patients")({
  head: () => ({ meta: [{ title: "New Dental Patients | Hearthside Family Dental" }, { name: "description", content: "What to expect at your first dental visit." }, { property: "og:title", content: "New Dental Patients" }, { property: "og:description", content: "What to expect at your first dental visit." }] }),
  component: Page,
});

function Page() { return <PageShell><section className="container-care grid gap-10 py-16 lg:grid-cols-[1fr_0.65fr]"><div><p className="eyebrow">New patients</p><h1 className="mt-3 text-5xl font-extrabold md:text-6xl">New here? Welcome.</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">Plan on about 60 minutes. We’ll review your goals, take X-rays, clean when clinically appropriate, and explain every cost before treatment.</p></div><div className="soft-card rounded-3xl p-8"><h2 className="text-3xl font-extrabold">$99 first visit</h2><p className="mt-4 leading-7 text-muted-foreground">Exam, X-rays, and cleaning for qualifying new patients.</p><BookCTA label="Book first visit" className="mt-7" /></div></section></PageShell>; }
