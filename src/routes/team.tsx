import { createFileRoute } from "@tanstack/react-router";
import { doctors } from "@/data/dental";
import { DoctorCard, PageShell } from "@/components/dental/shared";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [{ title: "Meet the Dentists | Hearthside Family Dental" }, { name: "description", content: "Meet the caring dentists at Hearthside Family Dental." }, { property: "og:title", content: "Meet the Dentists" }, { property: "og:description", content: "Meet the caring dentists at Hearthside Family Dental." }] }),
  component: Page,
});

function Page() { return <PageShell><section className="container-care py-16"><p className="eyebrow">Our team</p><h1 className="mt-3 text-5xl font-extrabold md:text-6xl">Meet your dentists.</h1><div className="mt-10 grid gap-6 md:grid-cols-3">{doctors.map((doctor)=><DoctorCard key={doctor.slug} doctor={doctor}/>)}</div></section></PageShell>; }
