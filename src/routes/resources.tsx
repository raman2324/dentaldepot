import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/dental/shared";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [{ title: "Patient Resources | Hearthside Family Dental" }, { name: "description", content: "Forms, FAQs, and dental education for patients." }, { property: "og:title", content: "Patient Resources" }, { property: "og:description", content: "Forms, FAQs, and dental education for patients." }] }),
  component: Page,
});

function Page() { return <PageShell><section className="container-care py-16"><p className="eyebrow">Resources</p><h1 className="mt-3 text-5xl font-extrabold md:text-6xl">Helpful before you arrive.</h1><div className="mt-10 grid gap-5 md:grid-cols-3">{["New Patient Forms","FAQs","Education articles"].map((item)=><article key={item} className="soft-card rounded-2xl p-7"><h2 className="text-2xl font-extrabold">{item}</h2><p className="mt-3 text-muted-foreground">Plain-spoken answers for easier visits.</p></article>)}</div></section></PageShell>; }
