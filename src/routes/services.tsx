import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/dental";
import { PageShell, ServiceCard, EmergencyBand } from "@/components/dental/shared";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Dental Services | Hearthside Family Dental" }, { name: "description", content: "Explore family, pediatric, cosmetic, emergency, and specialty dental services." }, { property: "og:title", content: "Dental Services" }, { property: "og:description", content: "Explore family, pediatric, cosmetic, emergency, and specialty dental services." }] }),
  component: Page,
});

function Page() { return <PageShell><section className="container-care py-16"><p className="eyebrow">Services</p><h1 className="mt-3 text-5xl font-extrabold md:text-6xl">Care for every stage of life.</h1><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((service)=><ServiceCard key={service.slug} service={service}/>)}</div></section><EmergencyBand /></PageShell>; }
