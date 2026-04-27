import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EmergencyBand, PageShell } from "@/components/dental/shared";
import { services } from "@/data/dental";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => { const service = services.find((item) => item.slug === params.slug); return { meta: [{ title: `${service?.name ?? "Dental Service"} | Hearthside Family Dental` }, { name: "description", content: service?.description ?? "Dental service details." }, { property: "og:title", content: service?.name ?? "Dental Service" }, { property: "og:description", content: service?.description ?? "Dental service details." }] }; },
  component: Page,
});
function Page() { const { slug } = Route.useParams(); const service = services.find((item) => item.slug === slug) ?? services[0]; const Icon = service.icon; return <PageShell><section className="container-care py-16"><div className="max-w-3xl"><p className="eyebrow">{service.category}</p><Icon className="mt-8 size-12 text-primary" strokeWidth={1.5}/><h1 className="mt-5 text-5xl font-extrabold md:text-6xl">{service.name}</h1><p className="mt-6 text-xl leading-9 text-muted-foreground">{service.description} We’ll explain options clearly, show costs before treatment, and keep your visit as comfortable as possible.</p><Button asChild size="lg" className="mt-8"><Link to="/book">Book this service</Link></Button></div></section><EmergencyBand /></PageShell>; }
