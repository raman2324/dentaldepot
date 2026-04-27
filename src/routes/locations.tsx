import { createFileRoute } from "@tanstack/react-router";
import { locations } from "@/data/dental";
import { LocationCard, PageShell, EmergencyBand } from "@/components/dental/shared";

export const Route = createFileRoute("/locations")({
  head: () => ({ meta: [{ title: "Dental Office Locations | Hearthside Family Dental" }, { name: "description", content: "Find a Hearthside Family Dental office near you." }, { property: "og:title", content: "Dental Office Locations" }, { property: "og:description", content: "Find a Hearthside Family Dental office near you." }] }),
  component: Page,
});

function Page() { return <PageShell><section className="container-care py-16"><p className="eyebrow">Locations</p><h1 className="mt-3 text-5xl font-extrabold md:text-6xl">Conveniently close.</h1><div className="mt-10 grid gap-6 lg:grid-cols-3">{locations.map((location)=><LocationCard key={location.slug} location={location}/>)}</div></section><EmergencyBand /></PageShell>; }
