import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EmergencyBand, PageShell } from "@/components/dental/shared";
import { locations } from "@/data/dental";

export const Route = createFileRoute("/locations/$slug")({
  head: ({ params }) => { const location = locations.find((item) => item.slug === params.slug); return { meta: [{ title: `${location?.name ?? "Dental Office"} Location | Hearthside Family Dental` }, { name: "description", content: location?.address ?? "Dental office location details." }, { property: "og:title", content: `${location?.name ?? "Dental Office"} Location` }, { property: "og:description", content: location?.address ?? "Dental office location details." }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Dentist", name: `Hearthside Family Dental - ${location?.name ?? "Office"}`, address: location?.address, telephone: location?.phone }) }] }; },
  component: Page,
});
function Page() { const { slug } = Route.useParams(); const location = locations.find((item) => item.slug === slug) ?? locations[0]; return <PageShell><section className="container-care grid gap-10 py-16 lg:grid-cols-[1fr_0.8fr]"><div><p className="eyebrow">Location</p><h1 className="mt-3 text-5xl font-extrabold md:text-6xl">{location.name}</h1><p className="mt-6 text-xl leading-9 text-muted-foreground">{location.address}<br />{location.hours}<br />{location.today}</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/book">Book at this location</Link></Button><Button asChild variant="outline"><a href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}>Get directions</a></Button></div></div><div className="min-h-80 rounded-3xl bg-surface" role="img" aria-label={`${location.name} map placeholder`} /></section><EmergencyBand /></PageShell>; }
