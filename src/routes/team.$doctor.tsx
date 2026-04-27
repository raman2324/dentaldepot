import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/dental/shared";
import { doctors } from "@/data/dental";

export const Route = createFileRoute("/team/$doctor")({
  head: ({ params }) => { const doctor = doctors.find((item) => item.slug === params.doctor); return { meta: [{ title: `${doctor?.name ?? "Dentist"} | Hearthside Family Dental` }, { name: "description", content: doctor?.bio ?? "Meet your dentist." }, { property: "og:title", content: doctor?.name ?? "Dentist" }, { property: "og:description", content: doctor?.bio ?? "Meet your dentist." }] }; },
  component: Page,
});
function Page() { const { doctor: slug } = Route.useParams(); const doctor = doctors.find((item) => item.slug === slug) ?? doctors[0]; return <PageShell><section className="container-care grid gap-10 py-16 lg:grid-cols-[0.55fr_1fr]"><div className="grid aspect-square place-items-center rounded-3xl bg-surface text-7xl font-extrabold text-primary" role="img" aria-label={`Portrait placeholder for ${doctor.name}`}>{doctor.initials}</div><div><p className="eyebrow">{doctor.specialty}</p><h1 className="mt-3 text-5xl font-extrabold md:text-6xl">{doctor.name}, {doctor.credentials}</h1><p className="mt-6 text-xl leading-9 text-muted-foreground">{doctor.bio} Languages: {doctor.languages}. License information and state board lookup can be added for production.</p><Button asChild size="lg" className="mt-8"><Link to="/book">Book with {doctor.name.split(" ")[1]}</Link></Button></div></section></PageShell>; }
